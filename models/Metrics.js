const db = require('../db/db_config');
const metrics = ["Masks required","Six feet distance"];

class Metrics {
    static async addOne(name, owner) {
        return db.run(`INSERT INTO metrics (${db.columnNames.metricName},${db.columnNames.metricOwner},${db.columnNames.metricConfirms},${db.columnNames.metricDenies})
        VALUES ('${name}','${owner}','${0}','${0}')`)
                  .then( () => {
                    return Metrics.findOne(name);
                  });
      }
    
      static async findOne(id) {
        return db.get(`SELECT * FROM  metrics WHERE ${db.columnNames.metricId} == '${id}'`);
      }

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
        // first fetch the metric from the DB
        // and then delete it form the DB, waiting for completion
        return Metrics.findOne(id)
            .then( (metric) => {
                db.run(`DELETE FROM metrics WHERE ${db.columnNames.metricId} = '${id}'`);
                return metric;
            });
      }

      /**
       * Update metric name
       * @param {string} oldName - name of metric to update
       * @param {string} newName - new name for the metric
       * @return {Metric | undefined} - updated metric
       */
      static async confirm(id){
        return db.run(`UPDATE metrics
        SET ${db.columnNames.metricConfirms} = '${db.columnNames.metricConfirms}' + 1
        WHERE ${db.columnNames.metricId} = '${id}'`)
      }

      /**
       * Update metric name
       * @param {string} oldName - name of metric to update
       * @param {string} newName - new name for the metric
       * @return {Metric | undefined} - updated metric
       */
      static async deny(id){
        return db.run(`UPDATE metrics
        SET ${db.columnNames.metricDenies} = '${db.columnNames.metricDenies}' + 1
        WHERE ${db.columnNames.metricId} = '${id}'`)
      }

}

module.exports = Metrics;
