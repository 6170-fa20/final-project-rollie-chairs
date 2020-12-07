const express = require('express');

const Users = require('../models/User');
const v = require('./validators');
const router = express.Router();





/**
 * Create new account.
 * 
 * @name POST /api/account
 */
router.post(
  '/',
  [v.ensureValidUsernameInBody,
  v.ensureValidPasswordInBody,
  v.ensureValidEmailInBody],
  async (req, res) => {

    try {
      // middleware will ensure that this statement below is nonempty!
      const username = req.body.username;
      const password = req.body.password;
      const email = req.body.email;
      const type = "user";
      // issue a call to the DB to create a new user with the given username
      let user = await Users.addOne(username, password,email,"user");
      res.status(201).json({ user, message: "Please sign in to continue." }).end();

    } catch (error) {
      res.status(400).json({ error: "Username must be unique and non-empty" }).end();
    }

  });




/**
 * Create an authentication session for the user after authentication.
 * 
 * @name POST /api/account/SignIn
 */
router.post(
  '/SignIn', [
  v.ensureUserNotLoggedIn,
  v.ensureValidUsernameInBody,
  v.ensureValidPasswordInBody
],
  async (req, res) => {
    try {
      const password = req.body.password;
      // fetch the user from the DB
      let user = await Users.findUserByName(req.body.username);

      // must find user in the DB
      if (!user) {
        res.status(404).json({ error: `Could not find user ${req.body.username}` }).end();
        return;
      }
      // must have correct password
      if (user.password !== password) {
        res.status(401).json({ error: `Invalid Password` }).end();
        return;
      }

      // authenticate and sign the user in

      req.session.uid = user.id;
      
      res.status(201).json({ data: user, message: "You are signed in." }).end();

    } catch (error) {
      res.status(503).json({ error: "Could not sign user in" }).end();
    }

  });

/**
 * Change password for user 
 * @name PUT /api/account/
 */
router.put(
  '/',
  [v.ensureUserLoggedIn,
    v.ensureValidPasswordInBody],
  async (req, res) => {
    try{
    const password = req.body.password;
    const id = req.session.uid
      // fetch the user from the DB
      let user = await Users.findUserById(id);

      //change password
      let newUser= await Users.changePassword(id,password);


     
      res.status(201).json({ data: newUser, message: "Password has been changed." }).end();

    } catch (error) {
      res.status(503).json({ error: "Could not change password" }).end();
    }

  });

/**
 * Sign the user out by wiping their authentication session.
 * 
 * @name DELETE /api/account
 */
router.delete(
  '/',
  [v.ensureUserLoggedIn],
  async (req, res) => {
    try {
      // sign out user
      req.session.uid = undefined;
      res.status(200).json({ message: "Successfuly signed out user!" }).end();

    } catch (error) {
      res.status(503).json({ error: "Could not sign user out" }).end();
    }
  });

module.exports = router;