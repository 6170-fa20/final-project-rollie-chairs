const { v4: uuidv4 } = require('uuid');
const express = require('express');
const router = express.Router();
const Business = require('../models/Business');

/**
 * List all businesses
 * @name GET/api/business
 * @return {Business[]} - list of businesses
 */
router.get('/', async (req, res) => {
	try{
		let businesses = await Business.findAll();
        res.status(200).json(businesses).end();
    } catch(error){
        res.status(503).json(`Could not find businesses`);
    }
});

/**
 * Create a business
 * @name POST/api/business
 * @param {string} name - the name of the business
 * @return {Business} - the created business
 */
router.post('/', (req, res) => {
	const business = Business.addOne(req.body.name,
									req.body.password,
									req.body.status,
									req.body.email,
									req.body.phone,
									req.body.type,
									req.body.description,
									req.body.address);
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
router.put('/:id', (req, res) => {
	const oldBusiness = Business.findOne(req.params.id);
	if ( oldBusiness === undefined ) {
		res.status(404).json({
			error: `Business ${req.params.id} does not exist.`,
		}).end();
	}  else {
		if (req.body.name) {
			Business.updateColumn("name", req.params.id, req.body.name);
		} if (req.body.status) {
			Business.updateColumn("status", req.params.id, req.body.status);
		} if (req.body.email) {
			Business.updateColumn("email", req.params.id, req.body.email);
		} if (req.body.phone) {
			Business.updateColumn("phone", req.params.id, req.body.phone);
		} if (req.body.address) {
			Business.updateColumn("address", eq.params.id, req.body.address);
		} if (req.body.type) {
			Business.updateColumn("type", req.params.id, req.body.type);
		} if (req.body.description) {
			Business.updateColumn("description", req.params.id, req.body.description);
		} if (req.body.password) {
			Business.updateColumn("password", req.params.id, req.body.password);
		}
		const newBusiness = Business.findOne(req.params.id);
		res.status(200).json(newBusiness).end();
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
