/* eslint-disable no-use-before-define */
const mongoose = require('mongoose');
const { getModelByTenant } = require('.');

const ApplicationInstanceSchema = new mongoose.Schema({
  appId: {
    type: String,
    required: true,
    minlength: 8,
  },
  appKey: {
    type: String,
    required: true,
    minlength: 8,
  },
  projectId: {
    type: String,
    required: true,
    minlength: 8,
  },
});

ApplicationInstanceSchema.statics.checkIfAppExists = async (config) => {
  // Search for a user by email and password.
  const app = await ApplicationInstance.findOne({ ...config });
  console.log("Trying");
  if (!app) {
    return { error: 'Invalid configutation credentials' };
  }

  return { error: undefined };
};

const ApplicationInstance = getModelByTenant('base_db', 'ApplicationInstance', ApplicationInstanceSchema);

module.exports = ApplicationInstance;
