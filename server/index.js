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
  const values = [req.body.fridgeId, req.body.userName];
  const text = `
  INSERT INTO  "users" ("userId", "fridgeId", "userName")
  VALUES       (default, $1, $2)
  RETURNING     *;
  `;
  const parsedId = parseInt(req.body.fridgeId);
  if (parsedId < 0 || isNaN(parsedId)) {
    return res.status(400).json({ error: 'Invalid Fridge ID' });
  }
  db.query(text, values)
    .then(result => {
      return res.status(201).json(result.rows[0]);
    })
    .catch(err => next(err));
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
