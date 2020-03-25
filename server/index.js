require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/messages', (req, res, next) => {
  const sql = `
    select *
      from "messages"
      join "users" using ("userId");
  `;
  db.query(sql)
    .then(result => res.json(result.rows));
});

app.post('/api/messages', (req, res) => {
  const message = req.body.newMessage;
  const params = [message];
  const sql = `
    insert into "messages"("messageId", "userId", "message", "createdAt")
    values(default, 1, $1, default)
    returning *;
  `;

  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'The query may fail'
      });
    });
});

// User Can Join a Fridge Back End - Blake
app.get('/api/fridges/:fridgeName', (req, res, next) => {
  const fridgeName = req.params.fridgeName;
  const sql = `
    SELECT "fridgeId"
    FROM "fridges"
    WHERE "fridgeName" = $1
    `;

  const params = [fridgeName];

  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        return res.status(400).json({
          error: 'this fridge name does not exist'
        });
      } else {
        req.session.fridgeId = result.rows[0].fridgeId;
        req.session.fridgeName = fridgeName;
        return res.status(200).json(result.rows[0].fridgeId);
      }
    })
    .catch(err => console.error(err));
});

// User Can View All Members of his/her Fridge - Blake
app.get('/api/users/', (req, res, next) => {
  const fridgeId = req.session.fridgeId;
  const sql = `
    SELECT *
    FROM "users"
    WHERE "fridgeId" = $1`;

  const value = [fridgeId];
  db.query(sql, value)
    .then(result => {
      return res.status(200).json(result.rows);
    })
    .catch(err => console.error(err));
});

// User Can View his or her Groceries in the Fridge - Blake
app.get('/api/claims/', (req, res, next) => {
  const { userId } = req.query;
  const sql = `
    SELECT "foodName"
    FROM "claims"
    WHERE "userId" = $1
    `;

  const value = [userId];

  db.query(sql, value)
    .then(result => {
      return res.status(200).json(result.rows);
    })
    .catch(err => console.error(err));
});

// User Can Add Create a Fridge (User enters a fridgeName) -Blake
app.post('/api/fridges', (req, res, next) => {
  const fridgeName = req.body.fridgeName;
  const sql = `
    INSERT INTO "fridges" ("fridgeName", "fridgeId")
    VALUES ($1, default)
    RETURNING *
    `;

  const value = [fridgeName];
  if (!fridgeName) {
    return res.status(400).json({
      error: 'fridge name must be valid'
    });
  } else {
    db.query(sql, value)
      .then(result => {
        return res.status(201).json(result.rows[0]);
      })
      .catch(err => next(err));
  }
});

// User Can Add Member To A Fridge (expects FridgeId and UserName, returns User row)
app.post('/api/users', (req, res, next) => {
  const values = [req.session.fridgeId, req.body.userName];
  const text = `
  INSERT INTO  "users" ("userId", "fridgeId", "userName")
  VALUES       (default, $1, $2)
  RETURNING     *;
  `;
  const parsedId = parseInt(req.session.fridgeId);
  if (parsedId < 0 || isNaN(parsedId)) {
    return res.status(400).json({ error: 'Invalid Fridge ID' });
  } else {
    db.query(text, values)
      .then(result => {
        req.session.userId = result.rows[0].userId;
        return res.status(201).json(result.rows[0]);
      })
      .catch(err => next(err));
  }
});

app.post('/api/users/:userId', (req, res, next) => {
  req.session.userId = req.params.userId;
  res.sendStatus(200);
});

app.post('/api/newMember', (req, res, next) => {
  const sql = `
  INSERT INTO  "users" ("userId", "fridgeId", "userName")
  VALUES       (default, $1, $2)
  RETURNING     *;
  `;
  const fridgeId = req.session.fridgeId;
  const newMember = req.body.newMember;

  db.query(sql, [fridgeId, newMember])
    .then(result => {
      return res.status(201).json(result.rows[0]);
    })
    .catch(err => next(err));
});

// User Can View All Groceries in Fridge
// returns array of all claims
app.get('/api/claims', (req, res, next) => {
  if (!req.session.fridgeId) {
    throw new ClientError('No Fridge Found', 400);
  }
  const value = [req.session.fridgeId];
  const text = `
  SELECT    *
  FROM      "claims"
  WHERE     "fridgeId" = $1;
  `;
  db.query(text, value)
    .then(result => res.json(result.rows))
    .catch(err => next(err));

});

// Testing - Add group, to be merged with post to claims
app.post('/api/groups', (req, res, next) => {
  const value = [req.body.groupName];
  const text = `
  INSERT INTO "groups" ("groupId", "groupName")
  VALUES      (default, $1)
  RETURNING   "groupId";
  `;
  db.query(text, value)
    .then(result => res.json(result.rows[0]));
});

// User Can Add Groceries to Fridge
app.post('/api/claims', (req, res, next) => {
  if (!req.session.fridgeId) {
    throw new ClientError('No Fridge Found', 400);
  }
  if (!req.body.userId || !req.body.groupId || !req.body.foodName || !req.body.qty) {
    throw new ClientError('Missing information from food claim', 400);
  }
  const values = [
    req.session.fridgeId,
    req.body.userId,
    req.body.groupId,
    req.body.foodName,
    req.body.qty,
    req.body.expirationDate
  ];
  const text = `
  INSERT INTO "claims" ("claimId", "fridgeId", "userId", "groupId", "foodName", "qty", "expirationDate")
  VALUES      (default, $1, $2, $3, $4, $5, $6)
  RETURNING   "claimId";
  `;
  db.query(text, values)
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

// User can Delete an entire entry in the Food Claim Table by the parameter claimId - Blake
app.delete('/api/claims/:claimId', (req, res, next) => {
  const sql = `
    DELETE FROM "claims"
    WHERE "claimId" = $1
    RETURNING *
    `;

  const value = [req.params.claimId];

  const param = parseInt(req.params.claimId);

  if (param < 0 || isNaN(param)) {
    return res.status(400).json({ error: 'This food item does not exist in the fridge' });
  } else {
    db.query(sql, value)
      .then(result => {
        if (result.rows[0]) {
          return res.sendStatus(204);
        } return res.status(404).json({ error: 'This food item does not exist' });
      })
      .catch(err => {
        console.error(err);
        return res.status(500).json({ error: 'An unexpected error occured' });
      });
  }
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
