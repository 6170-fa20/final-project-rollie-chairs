const db = require('../db/db_config');
const statuses=["Closed","Delivery","Take Out","Outdoor Dining", "Indoor Dining"];
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
 */

/**
 * @class Businesses
 * 
 * Stores all businesses
 * Note that all methods are static.
 * Wherever you import this class, you will be accessing the same data
 */
class Businesses{
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
     * @return {Business} - created business
     */
    static async addOne(name,password,status,email,phone,type,description,address) {
        // first insert the business into the db then fetch the user from the DB
        return db.run(`INSERT INTO businesses (${db.columnNames.businessName},${db.columnNames.businessPassword},${db.columnNames.businessStatus},${db.columnNames.businessEmail},${db.columnNames.businessPhone},${db.columnNames.businessType},${db.columnNames.businessDescription},${db.columnNames.businessAddress})
        VALUES ('${name}','${password}','${status}','${email}','${phone}','${type}','${description}','${address}')`)
                  .then( () => {
                    return Businesses.findOne(name);
                  });
      }
    
      /**
       * Find a Business by Name.
       * @param {string} name - name of business to find
       * @return {Business | undefined} - found business
       */
      static async findOne(name) {
        return db.get(`SELECT * FROM businesses WHERE ${db.columnNames.businessName} == '${name}'`);
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
      static async updateName(oldName, newName){
        return db.run(`UPDATE businesses
        SET ${db.columnNames.businessName} = '${newName}' 
        WHERE ${db.columnNames.businessName} = '${oldName}'`)
        .then( () => {
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
      static async updateStatus(name, status){
        return db.run(`UPDATE businesses
        SET ${db.columnNames.businessStatus} = '${status}' 
        WHERE ${db.columnNames.businessName} = '${name}'`)
        .then( () => {
            return Businesses.findOne(name);
        });
      }

      /**
       * Update business email
       * @param {string} name - name of business to update
       * @param {string} email - new email for the business
       * @return {Business | undefined} - updated business
       */
      static async updateEmail(name, email){
        return db.run(`UPDATE businesses
        SET ${db.columnNames.businessEmail} = '${email}' 
        WHERE ${db.columnNames.businessName} = '${name}'`)
        .then( () => {
            return Businesses.findOne(name);
        });
      }

      /**
       * Update business phone
       * @param {string} name - name of business to update
       * @param {string} phone - new phone for the business
       * @return {Business | undefined} - updated business
       */
      static async updatePhone(name, phone){
        return db.run(`UPDATE businesses
        SET ${db.columnNames.businessPhone} = '${phone}' 
        WHERE ${db.columnNames.businessName} = '${name}'`)
        .then( () => {
            return Businesses.findOne(name);
        });
      }

      /**
       * Update business address
       * @param {string} name - name of business to update
       * @param {string} address - new address for the business
       * @return {Business | undefined} - updated business
       */
      static async updateAddress(name, address){
        return db.run(`UPDATE businesses
        SET ${db.columnNames.businessAddress} = '${address}' 
        WHERE ${db.columnNames.businessName} = '${name}'`)
        .then( () => {
            return Businesses.findOne(name);
        });
      }

      /**
       * Update business type
       * @param {string} name - name of business to update
       * @param {string} type - new type for the business
       * @return {Business | undefined} - updated business
       */
      static async updateType(name, type){
        return db.run(`UPDATE businesses
        SET ${db.columnNames.businessType} = '${type}' 
        WHERE ${db.columnNames.businessName} = '${name}'`)
        .then( () => {
            return Businesses.findOne(name);
        });
      }

      /**
       * Update business description
       * @param {string} name - name of business to update
       * @param {string} description - new description for the business
       * @return {Business | undefined} - updated business
       */
      static async updateDescription(name, description){
        return db.run(`UPDATE businesses
        SET ${db.columnNames.businessDescription} = '${description}' 
        WHERE ${db.columnNames.businessName} = '${name}'`)
        .then( () => {
            return Businesses.findOne(name);
        });
      }

      /**
       * Update business password
       * @param {string} name - name of business to update
       * @param {string} password - new password for the business
       * @return {Business | undefined} - updated business
       */
      static async updatePassword(name, password){
        return db.run(`UPDATE businesses
        SET ${db.columnNames.businessPassword} = '${password}' 
        WHERE ${db.columnNames.businessName} = '${name}'`)
        .then( () => {
            return Businesses.findOne(name);
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
              .then( (business) => {
                  db.run(`DELETE FROM businesses WHERE ${db.columnNames.businessName} = '${name}'`);
                  return business;
              });
      }

}

module.exports = Businesses;
