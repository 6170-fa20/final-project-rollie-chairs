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
        res.status(201).json(req.data).end();
    
  });
  



/**
 * Create an authentication session for the user after authentication.
 * 
 * @name POST /api/account/login
 */
router.post(
  '/SignIn',(req, res) => {
    res.status(201).json(req.data).end();
  
});

/**
 * Sign the user out by wiping their authentication session.
 * 
 * @name DELETE /api/account
 */
router.delete(
  '/', 
   (req, res) => {
    res.status(200).json(req.data).end();
  
});

  module.exports = router;