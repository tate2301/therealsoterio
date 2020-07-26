const ApplicationInstance = require('../database/application.model.database');

// eslint-disable-next-line consistent-return
exports.verifyAPIAuth = (async (req, res, next) => {
  //  Login a registered user
  try {
    const config = {
      appId: '984y7f87h4843fh',
      appKey: '943ryfhh98y9393u',
      projectId: 'jchjbdfg87ew8fewhf8w7efy8wfgu',
    };
    const error = await ApplicationInstance.checkIfAppExists(config);
    if (error) {
      return res.status(401).send({ error: 'Failed to authorize request! Check configuration credentials' });
    }
    next();
  } catch (error) {
    res.status(400).json({
      error: true,
      message: 'There was a problem processing your request. Please try again.',
    });
  }
});
