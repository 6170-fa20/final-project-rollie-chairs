
const sqlite3 = require('sqlite3');

let sqlDb;


// name the columns of our tables for localization
const columnNames = {
    businessId: "id",
    businessName: "name",
    businessPassword: "password",
    businessStatus: "status",
    businessEmail: "email",
    businessPhone:"phone",
    businessAddress: "address",
    businessType:"type",
    businessDescription:"description",
  };
  Object.freeze(columnNames);

function createDb() {
    console.log("created our db!");
    sqlDb = new sqlite3.Database('shortdb.db', function() {
      createBusinessTable();
    });
  };

function createBusinessTable(){
    sqlDb.run(`CREATE TABLE IF NOT EXISTS businesses (
    ${columnNames.businessId} INTEGER PRIMARY KEY AUTOINCREMENT,
    ${columnNames.businessName} TEXT NOT NULL UNIQUE,
    ${columnNames.businessPassword} TEXT NOT NULL,
    ${columnNames.businessStatus} TEXT NOT NULL,
    ${columnNames.businessEmail} TEXT NOT NULL,
    ${columnNames.businessPhone} TEXT NOT NULL,
    ${columnNames.businessType} TEXT NOT NULL,
    ${columnNames.businessDescription} TEXT NOT NULL,
    ${columnNames.businessAddress} TEXT NOT NULL

  )`);
};


  // Helper wrapper functions that return promises that resolve when sql queries are complete.

function run(sqlQuery) {
    return new Promise((resolve, reject) => {
      sqlDb.run(sqlQuery, (err) => {
        if (err !== null) {
          reject(err);
        } else {
          resolve();
        }
      })
    });
  };
  
  function get(sqlQuery) {
    return new Promise((resolve, reject) => {
      sqlDb.get(sqlQuery, (err, row) => {
        if (err !== null) {
          reject(err);
        } else {
          resolve(row);
        }
      })
    });
  };
  
  function all(sqlQuery) {
    return new Promise((resolve, reject) => {
      sqlDb.all(sqlQuery, (err, rows) => {
        if (err !== null) {
          reject(err);
        } else {
          resolve(rows);
        }
      })
    });
  };
  
  createDb();
  
  module.exports = {
    columnNames,
    get,
    all,
    run,
  };