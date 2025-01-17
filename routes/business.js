const { v4: uuidv4 } = require('uuid');
const express = require('express');
const router = express.Router();
const Business = require('../models/Business');
const Metrics = require('../models/Metrics');
const User = require('../models/User');
/**
 * List all businesses
 * @name GET/api/business
 * @return {Business[]} - list of businesses
 */
router.get('/all', async (req, res) => {
	try{
		let businesses = await Business.findAll();
		res.status(200).json(businesses).end();
    } catch(error){
        res.status(503).json(`Could not get businesses: ${error}`);
    }
});

/**
 * List all businesses with the given name
 * @name GET/api/business/search/:name
 * @return {Business[]} - list of businesses
 */
router.get('/results/:name', async (req, res) => {
	try{
		let businesses = await Business.findOneByName(req.params.name);
		res.status(200).json(businesses).end();
    } catch(error){
        res.status(503).json(`Could not get businesses: ${error}`);
    }
});

/**
 * List all businesses
 * @name GET/api/business/locations
 * @return {Business[]} - list of businesses
 */
router.get('/all/locations', async (req, res) => {
	try{
		let businesses = await Business.findAll();
		let locs = await Business.findLocs(businesses);
		res.status(200).json(locs).end();
    } catch(error){
        res.status(503).json(`Could not get businesses: ${error}`);
    }
});

/**
 * Get the business with the given ID
 * @name GET/api/business/:businessID
 * @return {Business} - business object
 */
router.get('/id/:businessID', async (req, res) => {
	try{
		let business = await Business.findOneByID(req.params.businessID);
        res.status(200).json(business).end();
    } catch(error){
        res.status(503).json(`Could not find that business: ${error}`);
    }
});

/**
 * Get list of available statuses
 */
router.get('/statuses',(req, res) => {
	res.status(201).json(Business.getStatuses()).end();
}
);
/**
 * Get list of available business types
 */
router.get('/types',(req, res) => {
	res.status(201).json(Business.getTypes()).end();
}
);

/**
 * Create a business
 * @name POST/api/business
 * @param {string} name - the name of the business
 * @return {Business} - the created business
 */
router.post('/', async (req, res) => {
	const business = await Business.addOne(req.body.name,
									req.body.password,
									req.body.status,
									req.body.email,
									req.body.phone,
									req.body.type,
									req.body.description,
									req.body.address,
									req.body.mondayHours,
       								req.body.tuesdayHours,
        							req.body.wednesdayHours,
        							req.body.thursdayHours,
        							req.body.fridayHours,
        							req.body.saturdayHours,
        							req.body.sundayHours);
	Metrics.addAll(business.id);
	const user= User.addOne(req.body.name,req.body.password,req.body.email,"business",business.id);
	res.status(201).json(business).end();
	}
);

/**
 * Edit a business
 * @name PUT/api/business/:id
 * :id the id of the business
 * @param {string} name - the new name of the business
 * @param {string} status - the new status of the business
 * @param {string} email - the new email of the business
 * @param {string} phone - the new phone of the business
 * @param {string} address - the new address of the business
 * @param {string} type - the new type of the business
 * @param {string} description - the new description of the business
 * @param {string} password - the new password of the business
 * @return {Business} - the updated business
 * @throws {404} - if business does not exist
 */
router.put('/id/:id', async (req, res) => {
	try{
		const oldBusiness = await Business.findOneByID(req.params.id);
		if ( oldBusiness === undefined ) {
			res.status(404).json({
				error: `Business ${req.params.id} does not exist.`,
			}).end();
		}  else {
			if (req.body.name) {
				await Business.updateColumn( req.params.id, "name", req.body.name);
			} if (req.body.password) {
				await Business.updateColumn( req.params.id, "password", req.body.password);
			} if (req.body.status) {
				await Business.updateColumn(req.params.id, "status", req.body.status);
			} if (req.body.email) {
				await Business.updateColumn(req.params.id, "email", req.body.email);
			} if (req.body.phone) {
				await Business.updateColumn(req.params.id, "phone", req.body.phone);
			} if (req.body.type) {
				await Business.updateColumn(req.params.id, "type", req.body.type);
			} if (req.body.description) {
				await Business.updateColumn(req.params.id, "description", req.body.description);
			} if (req.body.address) {
				await Business.updateColumn(req.params.id, "address", req.body.address);
			} if (req.body.monday_hours) {
				await Business.updateColumn( req.params.id, "monday_hours", req.body.monday_hours);
			} if (req.body.tuesday_hours) {
				await Business.updateColumn( req.params.id, "tuesday_hours", req.body.tuesday_hours);
			} if (req.body.wednesday_hours) {
				await Business.updateColumn( req.params.id, "wednesday_hours", req.body.wednesday_hours);
			} if (req.body.thursday_hours) {
				await Business.updateColumn( req.params.id, "thursday_hours", req.body.thursday_hours);
			} if (req.body.friday_hours) {
				await Business.updateColumn( req.params.id, "friday_hours", req.body.friday_hours);
			} if (req.body.saturday_hours) {
				await Business.updateColumn( req.params.id, "saturday_hours", req.body.saturday_hours);
			} if (req.body.sunday_hours) {
				await Business.updateColumn( req.params.id, "sunday_hours", req.body.sunday_hours);
			}
			const newBusiness = await Business.findOneByID(req.params.id);
			res.status(200).json(newBusiness).end();
		}
	} catch(error){
		res.status(503).json(`Could not update business info: ${error}`).end();
	}
});

/**
 * Delete a business
 * @name DELETE/api/business/:id
 * :id the id of the business
 * @return {Business} - the deleted business
 * @throws {404} - if business does not exist
 */
router.delete('/:id', (req, res) => {
	const oldBusiness = Business.get(req.params.id);
	if ( oldBusiness === undefined ) {
		res.status(404).json({
			error: `Business ${req.params.id} does not exist.`,
		}).end();
	} else {
		const business = Business.deleteOne(req.params.id);
		res.status(200).json(business).end();
	}
});

module.exports = router;
