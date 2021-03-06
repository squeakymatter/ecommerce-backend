# Sequelize ORM E-commerce Back End

## Description
This is a simple example of a backend for an e-commerce site built using Express, Sequelize, MySql2 and dotenv.  
- Link to video walkthrough: https://www.youtube.com/watch?v=oVG7Ab2kbJk
---
## Table of Contents

- [User Story](###user_story)
- [Acceptance Criteria](###acceptance_criteria)
- [Installation](#installation)
- [Questions](#questions)
---
### User Story

AS A manager at an internet retail company

- I WANT a back end for my e-commerce website that uses the latest technologies
  - SO THAT my company can compete with other e-commerce companies

### Acceptance Criteria

GIVEN a functional Express.js API

- WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
  - THEN I am able to connect to a database using Sequelize
- WHEN I enter schema and seed commands
  - THEN a development database is created and is seeded with test data
- WHEN I enter the command to invoke the application
  - THEN my server is started and the Sequelize models are synced to the MySQL database
- WHEN I open API GET routes in Insomnia Core for categories, products, or tags
  - THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
  - THEN I am able to successfully create, update, and delete data in my database

---
### Installation

Prerequisite: This app requires MySQL and Node.js.
1. Clone the repo.
2. Navigate to the app's root directory and run
```
npm install
```
3. Login to MySql
```
% mysql -u root -p
% <enter password>
```
Source the database
```
mysql> source db/schema.sql
mysql> exit
```
Seed the database
```
%npm seeds/index.js
```  
Start the server
```
% node server.js
```
---
### Questions

If you have any questions, please contact repo owner:

- [GitHub](https:/github.com/squeakymatter)


