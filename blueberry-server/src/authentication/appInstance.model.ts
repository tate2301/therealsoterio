import mongoose = require('mongoose');
import { config } from '../core';

export default class AppInstance {
  public static AppInstanceSchema: mongoose.Schema

  constructor() {
    AppInstance.AppInstanceSchema = new mongoose.Schema({

    });
  }

  public static createModel(mode: string, appConfig: config) {
    const mongoConnection = mongoose.connection.useDb(`blue_default_${mode}`);
    return mongoConnection.model('AppInstance', AppInstance.AppInstanceSchema, `apps_${appConfig.projectId}`);
  }
}
