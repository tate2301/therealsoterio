import { NativeError, Document } from "mongoose";
import express from 'express';
import AppInstance from './appInstance.model';
import { config } from "../core";

export default class Guard {
  appConfig: config;

  Router: express.Router = express.Router();

  constructor(appConfig: config) {
    this.appConfig = appConfig;
    this.router();
  }

  authenticateApiRequest(req: express.Request,
    res: express.Response /*  next: express.NextFunction */) {
    console.log(`Entered Auth with ${req}`);

    const appInstance = AppInstance.createModel('dev', this.appConfig);
    appInstance.findOne({ apiKey: req.body.config.apiKey })
      .exec((err: NativeError, doc: Document) => {
        if (err) {
          res.status(500).json(err);
        } else {
          res.status(200).json(doc);
        }
      });
  }

  router() {
    this.Router.use('x', this.authenticateApiRequest);
  }
}
