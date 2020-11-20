const db = require('../db/db_config');
const metrics = ["Masks required","Six feet distance"];

/**
 * @typeof Metrics
 *
 * @prop {string} name - description of Metric
 * @prop {number} owner - id of the business
 * @prop {number} confirms
 * @prop {number} denies
 */

/**
 * @class Metrics
 *
 * Stores all metrics
 * Note that all methods are static.
 * Wherever you import this class, you will be accessing the same data
 */
class Metrics {
    /**
     * Add a Metric
     *
     * @param {string} name - description of Metric
     * @param {number} owner - id of the business
     * @return {Metrics} - created metric
     */
      static async addOne(name, owner) {
        return db.run(`INSERT INTO metrics (${db.columnNames.metricName},${db.columnNames.metricOwner},${db.columnNames.metricConfirms},${db.columnNames.metricDenies})
        VALUES ('${name}','${owner}','${0}','${0}')`)
                  .then( () => {
                    return Metrics.findOne(name);
                  });
      }
    
      /**
       * Find a metric by id.
       * @param {number} id - id of business to find
       * @return {Metrics | undefined} - found metric
       */
      static async findOne(id) {
        return db.get(`SELECT * FROM  metrics WHERE ${db.columnNames.metricId} == '${id}'`);
      }

      /**
       * Find all metrics for a given business
       * @param {number} businessId - id of business to find
       * @return {Metrics | undefined} - found metric
       */
      static async findBusinessMetrics(businessId) {
        return db.all(`SELECT * FROM  metrics WHERE ${db.columnNames.metricOwner} == '${businessId}'`);
      }
    
      /**
       * Return an array of all of the Metrics.
       * @return {Metric[]}
       */
      static async findAll() {
        return db.all(`SELECT * FROM metrics`);
      }

      /**
       * Update metric name
       * @param {string} oldName - name of metric to update
       * @param {string} newName - new name for the metric
       * @return {Metric | undefined} - updated metric
       */
      static async updateName(oldName, newName){
        return db.run(`UPDATE metrics
        SET ${db.columnNames.metricName} = '${newName}' 
        WHERE ${db.columnNames.metricName} = '${oldName}'`)
      }

      /**
       * Delete a Metric.
       * 
       * @param {string} name - name of metric to delete
       * @return {Metric | undefined} - deleted metric
       */
      static async deleteOne(id) {
        return Metrics.findOne(id)
            .then( (metric) => {
                db.run(`DELETE FROM metrics WHERE ${db.columnNames.metricId} = '${id}'`);
                return metric;
            });
      }

      /**
       * Confirm a metric
       * @param {number} id - id of metric to update
       */
      static async confirm(id){
        return db.run(`UPDATE metrics
        SET ${db.columnNames.metricConfirms} = ${db.columnNames.metricConfirms} + 1
        WHERE ${db.columnNames.metricId} = '${id}'`)
      }

      /**
       * Deny a metric
       * @param {number} id - id of metric to update
       */
      static async deny(id){
        return db.run(`UPDATE metrics
        SET ${db.columnNames.metricDenies} = ${db.columnNames.metricDenies} + 1
        WHERE ${db.columnNames.metricId} = '${id}'`)
      }

}

module.exports = Metrics;
