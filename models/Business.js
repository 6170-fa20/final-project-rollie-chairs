const db = require('../db/db_config');
const statuses = ["Closed", "Delivery", "Take Out", "Outdoor Dining", "Indoor Dining"];
const businessTypes = ["Restaurant", "Non-restuarant"];
/**
 * @typeof Business
 *
 * @prop {string} name - name of the business
 * @prop {number} id - id of the business
 * @prop {string} password - password of the business
 * @prop {string} status - status of the business
 * @prop {string} email - email of the business
 * @prop {string} phone - phone number of the business
 * @prop {string} type - type of the business
 * @prop {string} description - description of the business
 * @prop {string} address - address of the business
  * @prop {string} mondayHours - business hours for monday
   * @prop {string} tuesdayHours - business hours for tuesday
   * @prop {string} wednesdayHours- business hours for wednesday
   * @prop {string} thursdayHours- business hours for thursday
   * @prop {string} fridayHours- business hours for friday
   * @prop {string} saturdayHours- business hours for saturday
   * @prop {string} sundayHours- business hours for sunday
 */

/**
 * @class Businesses
 *
 * Stores all businesses
 * Note that all methods are static.
 * Wherever you import this class, you will be accessing the same data
 */
class Businesses {
  /**
   * Add a Business
   *
   * @param {string} name - name of the business
   * @param {string} password - password of the business
   * @param {string} status - status of the business
   * @param {string} email - email of the business
   * @param {string} phone - phone number of the business
   * @param {string} type - type of the business
   * @param {string} description - description of the business
   * @param {string} address - address of the business
   * @param {string} mondayHours - business hours for monday
   * @param {string} tuesdayHours - business hours for tuesday
   * @param {string} wednesdayHours- business hours for wednesday
   * @param {string} thursdayHours- business hours for thursday
   * @param {string} fridayHours- business hours for friday
   * @param {string} saturdayHours- business hours for saturday
   * @param {string} sundayHours- business hours for sunday
   * @return {Business} - created business
   */
  static async addOne(name, password, status, email, phone, type, description, address, mondayHours, tuesdayHours, wednesdayHours, thursdayHours, fridayHours, saturdayHours, sundayHours) {
    // first insert the business into the db then fetch the user from the DB
    return db.run(`INSERT INTO businesses (${db.columnNames.businessName},${db.columnNames.businessPassword},${db.columnNames.businessStatus},${db.columnNames.businessEmail},${db.columnNames.businessPhone},${db.columnNames.businessType},${db.columnNames.businessDescription},${db.columnNames.businessAddress},${db.columnNames.mondayHours},
      ${db.columnNames.tuesdayHours},
      ${db.columnNames.wednesdayHours},
      ${db.columnNames.thursdayHours},
      ${db.columnNames.fridayHours} ,
      ${db.columnNames.saturdayHours},
      ${db.columnNames.sundayHours})
        VALUES ('${name}','${password}','${status}','${email}','${phone}','${type}','${description}','${address}','${mondayHours}', '${tuesdayHours}','${wednesdayHours}', '${thursdayHours}', '${fridayHours}', '${saturdayHours}', '${sundayHours}')`)
      .then(() => {
        return Businesses.findOneByName(name);
      });
  }

  /**
   * Find a Business by Name.
   * @param {string} name - name of business to find
   * @return {Business | undefined} - found business
   */
  static async findOneByName(name) {
    return db.get(`SELECT * FROM businesses WHERE ${db.columnNames.businessName} == '${name}'`);
  }

  /**
  * Find a Business by ID
  * @param {string} id - ID of business to find
  * @return {Business | undefined} - found business
  */
  static async findOneByID(id) {
    return db.get(`SELECT * FROM businesses WHERE ${db.columnNames.businessId} = '${id}'`);
  }
  /**
   * Return an array of all of the Businesses.
   * @return {Business[]}
   */
  static async findAll() {
    return db.all(`SELECT * FROM businesses`);
  }

  /**
   * Update business name
   * @param {string} oldName - name of business to update
   * @param {string} newName - new name for the business
   * @return {Business | undefined} - updated business
   */
  static async updateName(oldName, newName) {
    return db.run(`UPDATE businesses
        SET ${db.columnNames.businessName} = '${newName}'
        WHERE ${db.columnNames.businessName} = '${oldName}'`)
      .then(() => {
        return Businesses.findOne(newName);
      });
    // update name in metrics too
  }

  /**
   * Update business status
   * @param {string} name - name of business to update
   * @param {string} status - new status for the business
   * @return {Business | undefined} - updated business
   */
  static async updateStatus(name, status) {
    return db.run(`UPDATE businesses
        SET ${db.columnNames.businessStatus} = '${status}'
        WHERE ${db.columnNames.businessName} = '${name}'`)
      .then(() => {
        return Businesses.findOne(name);
      });
  }

  /**
   * Update all columns
   * @param {Business} business
   * @return {Business | undefined} - updated business
   *
   */
  static async updateAll(business){
    return db.run(`UPDATE businesses
        SET ${db.columnNames.businessName} = '${business.name}',
        ${db.columnNames.businessPassword} = '${business.password}',
        ${db.columnNames.businessStatus} = '${business.status}',
        ${db.columnNames.businessEmail} = '${business.email}',
        ${db.columnNames.businessPhone} = '${business.phone}',
        ${db.columnNames.businessType} = '${business.type}',
        ${db.columnNames.businessDescription} = '${business.description}',
        ${db.columnNames.businessAddress} = '${business.address}',
        ${db.columnNames.mondayHours} = '${business.mondayHours}',
        ${db.columnNames.tuesdayHours} = '${business.tuesdayHours}',
        ${db.columnNames.thursdayHours} = '${business.thursdayHours}',
        ${db.columnNames.wednesdayHours} = '${business.wednesdayHours}',
        ${db.columnNames.fridayHours} = '${business.fridayHours}',
        ${db.columnNames.saturdayHours} = '${business.saturdayHours}',
        ${db.columnNames.sundayHours} = '${business.sundayHours}'
        WHERE ${db.columnNames.businessId} = '${business.id}'`)
      .then(() => {
        return Businesses.findOneByID(business.id);


      });

  }

  /**
   * Update business column
   * @param {string} id - id of business to update
   * @param {string} column - column to be updated
   * @param {string} value - new value for column
   * @return {Business | undefined} - updated business
   */
  static async updateColumn(id, column, value) {
    console.log(id);
    console.log(column);
    console.log(value);
    return db.run(`UPDATE businesses
        SET ${column} = '${value}'
        WHERE ${db.columnNames.businessId} = '${id}'`)
      .then(() => {
        return Businesses.findOneByID(id);


      });
  }

  /**
   * Delete a Business.
   *
   * @param {string} name - name of business to delete
   * @return {Business | undefined} - deleted business
   */
  static async deleteOne(name) {
    // first fetch the business from the DB
    // and then delete it form the DB, waiting for completion
    return Businesses.findOne(name)
      .then((business) => {
        db.run(`DELETE FROM businesses WHERE ${db.columnNames.businessName} = '${name}'`);
        return business;
      });
  }

  /**
   * Return Statuses
   * @return {String[]} -list of statuses
   */
  static getStatuses() {
    return [...statuses];
  }

  /**
   * Return all Business types
   * @return {String[]} -list of business types
   */
  static getTypes() {
    return [...businessTypes];
  }

}

module.exports = Businesses;
