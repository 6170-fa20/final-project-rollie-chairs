const db = require('../db/db_config');
const businesses = require('./Business.js');
const metrics = ["Staff face coverings required and enforced", "Customer face coverings required and enforced", 
  "Occupancy limited to 50% capacity and enforced", "Visual social distancing markers to encourage 6ft distancing and enforced",
  "All aisles are directed and enforced"]

const restaurantMetrics = ["No self serve areas permitted", "No free samples/tasting", "Hand sanitizer next to beverage station",
"Straws and stirrers must be wrapped individually in cellophane or paper", "Cups and lids from single pull dispenser only",
"Sweeteners/sugars/cream in individual packets", "No personal mugs/cups allowed"]

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
       * Return an array of all of the unique types of metrics.
       * @return {String[]}
       */
      static async getMetricTypes() {
        return [...metrics];
      }

      /**
       * Return an array of all of the unique types of metrics for restaurants.
       * @return {String[]}
       */
      static async getRestaurantMetricTypes() {
        return [...metrics].concat([...restaurantMetrics]);
      }

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
                    return Metrics.findBusinessMetrics(owner);
                  });
      }

      /**
       * Add all required Metrics
       *
       * @param {number} owner - id of the business
       * @return {Metrics} - created metric
       */
      static async addAll(owner) {
        const business = await businesses.findOneByID(owner);
        if (business.type == "Restaurant") {
          for (const metric of metrics.concat(restaurantMetrics)) {
            db.run(`INSERT INTO metrics (${db.columnNames.metricName},${db.columnNames.metricOwner},${db.columnNames.metricConfirms},${db.columnNames.metricDenies})
            VALUES ('${metric}','${owner}','${0}','${0}')`)
                      .then( () => {
                        return Metrics.findBusinessMetrics(owner);
                      });
          }
        } else {
          for (const metric of metrics) {
            db.run(`INSERT INTO metrics (${db.columnNames.metricName},${db.columnNames.metricOwner},${db.columnNames.metricConfirms},${db.columnNames.metricDenies})
            VALUES ('${metric}','${owner}','${0}','${0}')`)
                      .then( () => {
                        return Metrics.findBusinessMetrics(owner);
                      });
          }
        } 
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
       * @param {string} id - id of metric to delete
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
       * Delete all Metrics of a business.
       * 
       * @param {number} owner - id of the business
       * @return {Metric | undefined} - deleted metric
       */
      static async deleteByBusiness(owner) {
        return db.run(`DELETE FROM metrics WHERE ${db.columnNames.metricOwner} = '${owner}'`)
                  .then( () => {
                    return Metrics.findBusinessMetrics(owner);
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
