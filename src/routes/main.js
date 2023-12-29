const express = require('express');
const { index, contact, about, admin, login, noAccess } = require('../controllers/mainController');
const accessAdmin = require('../middlewares/accessAdmin');
const router = express.Router();



 /*          /                */ 
router
.get('/', index)
.get('/about', about)
.get ('/contact',contact)
.get('/admin',accessAdmin,admin)
.get('/login',login)
.get('/noAccess', noAccess)




module.exports = router