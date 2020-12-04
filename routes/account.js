const express = require('express');



const router = express.Router();





/**
 * Create new account.
 * 
 * @name POST /api/account
 */
router.post(
    '/',
     (req, res) => {
       
        res.status(201).json(req.body).end();
    
  });
  



/**
 * Create an authentication session for the user after authentication.
 * 
 * @name POST /api/account/login
 */
router.post(
  '/SignIn',(req, res) => {
    
    res.status(201).json(req.body).end();
  
});

/**
 * Change password for user 
 * @name PUT /api/account/
 */
router.put(
  '/',(req, res) => {
    res.status(201).json(req.body).end();
  
});

/**
 * Sign the user out by wiping their authentication session.
 * 
 * @name DELETE /api/account
 */
router.delete(
  '/', 
   (req, res) => {
    res.status(200).json(req.body).end();
  
});

  module.exports = router;