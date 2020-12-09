const db = require('../db/db_config');
/**
 * @typeof ConfirmDeny
 *
 * @prop {number} id - id of the confirmation/denial
 * @prop {number} metric - metric being confirmed/denied
 * @prop {number} owner - user that confirmed/denied metric
 * @prop {string} type - confirm or deny
 */

/**
 * @class ConfirmDeny
 *
 * Stores all confirms and denies
 */
class ConfirmDeny {

      /**
       * Add a confirm/deny
       *
       * @param {number} metricID - ID of metric being confirmed/denied
       * @param {number} ownerID - ID of user that confirmed/denied metric
       * @param {string} type - confirm or deny
       * @return {ConfirmDeny} - created confirm/deny
       */
      static async addOne(metricID, ownerID, type) {
        return db.run(`INSERT INTO confirmsDenies (${db.columnNames.metricId},${db.columnNames.confirmDenyOwner}, ${db.columnNames.confirmDenyType})
        VALUES ('${metricID}','${ownerID}','${type}')`)
                  .then( () => {
                    return ConfirmDeny.findConfirmDeny(metricID, ownerID);
                  });
      }

      /**
       * Find a confirmDeny by its ID
       * @param {number} id - id of confirmDeny to find
       * @return {User | undefined} - found confirmDeny
       */
      static async findOneById(id) {
        return db.get(`SELECT * FROM  confirmsDenies WHERE ${db.columnNames.confirmDenyID} == '${id}'`);
      }

      /**
       * Find a confirmDeny of a given metric by a certain user.
       * @param {number} metricID - ID of metric being confirmed/denied
       * @param {number} ownerID - ID of user that confirmed/denied the metric
       * @return {ConfirmDeny | undefined} - found ConfirmDeny
       */
      static async findConfirmDeny(metricID, ownerID) {
        return db.get(`SELECT * FROM  confirmsDenies WHERE ${db.columnNames.confirmDenyOwner} = '${ownerID}' AND ${db.columnNames.metricId} = '${metricID}'`);
      }

      /**
       * Delete a ConfirmDeny.
       *
       * @param {string} id - id of ConfirmDeny to delete
       * @return {User | undefined} - deleted ConfirmDeny
       */
      static async deleteOne(id) {
        return ConfirmDeny.findOneById(id)
            .then( (confirmDeny) => {
                db.run(`DELETE FROM confirmsDenies WHERE ${db.columnNames.confirmDenyID} = '${id}'`);
                return confirmDeny;
            });
      }
}

module.exports = ConfirmDeny;