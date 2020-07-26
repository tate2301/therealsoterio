const express = require('express');

const ApplicationInstance = require('../database/application.model.database');

const checkAPIAuth = require('./middleware.auth').verifyAPIAuth;

const router = express.Router();

router.post('/check', checkAPIAuth);

module.exports = router;
