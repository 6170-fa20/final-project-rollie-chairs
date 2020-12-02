const { v4: uuidv4 } = require('uuid');
const express = require('express');
const router = express.Router();
const Metrics = require('../models/Metrics');


/**
 * List all metrics for restaurants
 * @name GET/api/metrics/list/restaurants
 * @return {Metric[]} - list of metrics
 */
router.get('/list/restaurants', async (req, res) => {
	try{
		let metrics = await Metrics.getRestaurantMetricTypes();
        res.status(200).json(metrics).end();
    } catch(error){
        res.status(503).json(`Could not find metrics for businesses`);
    }
});


/**
 * List all metrics for general businesses
 * @name GET/api/metrics/list/general
 * @return {Metric[]} - list of metrics
 */
router.get('/list/general', async (req, res) => {
	try{
		let metrics = await Metrics.getMetricTypes();
        res.status(200).json(metrics).end();
    } catch(error){
        res.status(503).json(`Could not find metrics for businesses`);
    }
});

/**
 * List all metrics for a business
 * @name GET/api/metrics/:businessID
 * @return {Metric[]} - list of metrics
 */
router.get('/:businessID', async (req, res) => {
	try{
		let metrics = await Metrics.findBusinessMetrics(req.params.businessID);
        res.status(200).json(metrics).end();
    } catch(error){
        res.status(503).json(`Could not find metrics for business`);
    }
});

/**
 * Confirm a metric
 * @name PUT/api/metrics/confirmation/:id
 * :id the id of the metric
 * @return {Metric} - the newly confirmed metric
 * @throws {404} - if metric does not exist
 */
router.put('/confirmation/:id', async (req, res) => {
	try{
		// const oldMetric = await Metrics.findOne(req.params.id);
		// console.log(metric)
		const metric = await Metrics.confirm(req.params.id);
		res.status(200).json(metric).end();
	} catch(error){
		res.status(404).json({
			error: `Metric ${req.params.id} does not exist.`,
		}).end();
	}
});

/**
 * Deny a metric
 * @name PUT/api/metrics/refutation/:id
 * :id the id of the metric
 * @return {Metric} - the newly denied metric
 * @throws {404} - if metric does not exist
 */
router.put('/refutation/:id', async (req, res) => {
	try{

	const oldMetric = await Metrics.findOne(req.params.id);
		const metric = await Metrics.deny(req.params.id);
		res.status(200).json(metric).end();
	}catch(error){
		res.status(404).json({
			error: `Metric ${req.params.id} does not exist.`,
		}).end();
	}
});

module.exports = router;
