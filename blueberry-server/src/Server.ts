import express from 'express';
import mongoose = require('mongoose');
import Guard from './authentication';
import { config } from './core';

export default class BlueberryServer {
    private app: express.Application;

    private db: mongoose.Connection;

    authInstance: Guard;

    constructor(mongoUrl: string) {
      this.app = express();
      mongoose.connect(mongoUrl);
      this.db = mongoose.connection;

      this.authInstance = new Guard(<config>{
        apiKey: 'ajh7tg83yhd',
        projectId: 'alphasos',
        appId: '88939374hd938834734hf3f',
      });
    }

    initControllers() {
      this.routes();
    }

    initDatabase() {
      this.db.on('error', console.error.bind(console, 'Connection Error: '));
      this.db.once('open', () => {
        console.log('Database has been opened');
      });
    }

    initChangeStreamListener() {
      const apiKeysCollection = this.db.collection('apikeys');
      const changeStream = apiKeysCollection.watch();

      changeStream.on('change', (change: any) => {
        console.log(change);
      });
    }

    routes(): void {
      this.app.use('/auth', this.authInstance.Router);
    }

    startServer(PORT: number): void{
      this.app.listen(() => {
        console.log(`Blueberry-Server started on port ${PORT}`);
      });
    }
}
