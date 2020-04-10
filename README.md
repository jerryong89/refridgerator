# Roommates
> - Maintained by: `jerryong89`

## Description
A dynamic web application for roommates/spouse/co-inhabitants who want to organize the items in their shared
refrigerator/freezer.

## Technologies Used
- React
- Webpack 4
- Bootstrap 4
- Node.js
- Postgresql

## Live Demo

Link: https://roommates.jerry-ong.com

## Features
- User can create a fridge
- User can add members to a fridge
- User can add food items to a fridge
- User can edit food items in a fridge
- User can delete food items in a fridge
- User can view expiration dates of food items in a fridge
- User can view food by categories in a fridge
- User can chat with other fridge members
- User can view all groceries in a fridge
- User can view his/her groceries in a fridge

## Preview
![](https://github.com/jerryong89/refridgerator/blob/master/roommatesAppPreview.png)

# Development
### System Requirements
- Node.js 10 or higher
- NPM 6 or higher
- PostgreSQL 10 or higher
- Express 4 or higher
# Getting Started
1. Clone the repository.

    ```shell
    git clone https://github.com/jerryong89/refridgerator.git
    ```

2. Change directory to clone folder

    ```shell
    cd refridgerator/
    ```

2. Install all dependencies with NPM.

  ```shell
  npm install
  ```

3. Import the example database to the PostgreSQL database.

  ```shell
  npm run db:import
  ```

4. Start the project. After starting, you can view the application by opening http://localhost:3000 in your browser.
  ```shell
  npm run dev
  ```
