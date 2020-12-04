const db = require('../db/db_config');
/**
 * @typeof User
 *
 * @prop {string} id - id of the user
 * @prop {string} username - username of the user
 * @prop {string} password - password of the user
 */

/**
 * @class User
 *
 * Stores all Users
 */
class User {

      /**
       * Add a User
       *
       * @param {string} username - username of the user
       * @param {string} password - password of the user
       * @return {User} - created user
       */
      static async addOne(username, password) {
        return db.run(`INSERT INTO users (${db.columnNames.userName},${db.columnNames.userPassword})
        VALUES ('${username}','${password}')`)
                  .then( () => {
                    return User.findUserByName(username);
                  });
      }

      /**
       * Find a user by id.
       * @param {number} id - id of user to find
       * @return {User | undefined} - found user
       */
      static async findUserById(id) {
        return db.get(`SELECT * FROM  users WHERE ${db.columnNames.userID} == '${id}'`);
      }

      /**
       * Find a user by id.
       * @param {string} name - name of user to find
       * @return {User | undefined} - found user
       */
      static async findUserByName(name) {
        return db.get(`SELECT * FROM  users WHERE ${db.columnNames.userName} == '${name}'`);
      }


      /**
       * Update user password
       * @param {string} username - name of user to change
       * @param {string} oldPassword - the old password
       * @param {string} newPassword - the new password
       * @return {User | undefined} - updated user
       */
      static async changePassword(id, newPassword){
        return db.run(`UPDATE users
        SET ${db.columnNames.userPassword} = '${newPassword}'
        WHERE ${db.columnNames.userID} = '${id}'`)
      }

      /**
       * Delete a User.
       *
       * @param {string} id - id of user to delete
       * @return {User | undefined} - deleted user
       */
      static async deleteOne(id) {
        return User.findUserById(id)
            .then( (user) => {
                db.run(`DELETE FROM users WHERE ${db.columnNames.userID} = '${id}'`);
                return user;
            });
      }
}

module.exports = User;
