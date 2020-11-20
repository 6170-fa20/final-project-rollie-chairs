const { v4: uuidv4 } = require('uuid');
const express = require('express');
const router = express.Router();
const Metrics = require('../models/Metrics');

/**
 * List all metrics for a business
 * @name GET/api/metrics/:businessID
 * @return {Metric[]} - list of businesses
 */
router.get('/:businessID', async (req, res) => {
	try{
		let metric = await Metrics.findBusinessMetrics(req.params.businessID);
        res.status(200).json(businesses).end();
    } catch(error){
        res.status(503).json(`Could not find metrics for business`);
    }
});

/**
 * Confirm a metric
 * @name PUT/api/metrics/confirm/:id
 * :id the id of the metric
 * @return {Metric} - the newly confirmed metric
 * @throws {404} - if metric does not exist
 */
router.put('/confirm/:id', (req, res) => {
	const oldMetric = Metrics.findOne(req.params.id);
	if ( oldMetric === undefined ) {
		res.status(404).json({
			error: `Metric ${req.params.id} does not exist.`,
		}).end();
	} else {
		const metric = Metric.confirm(req.params.id);
		res.status(200).json(metric).end();
	}
});

/**
 * Deny a metric
 * @name PUT/api/metrics/deny/:id
 * :id the id of the metric
 * @return {Metric} - the newly denied metric
 * @throws {404} - if metric does not exist
 */
router.put('/:id', (req, res) => {
	const oldMetric = Metrics.findOne(req.params.id);
	if ( oldMetric === undefined ) {
		res.status(404).json({
			error: `Metric ${req.params.id} does not exist.`,
		}).end();
	} else {
		const metric = Metric.deny(req.params.id);
		res.status(200).json(metric).end();
	}
});

module.exports = router;
