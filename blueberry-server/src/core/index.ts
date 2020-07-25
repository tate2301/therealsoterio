/* eslint-disable no-unused-vars */
import express from 'express';

export interface config {
  apiKey: string,
  projectId: string,
  appId: string
}

export interface response {
  timestamp: number,
  projectId: string,
  appId: string,
  endpoint: string,
  statusCode: string,
}

export interface BlueRequest {
  config: config,
  request: express.Request
}

export interface reqRes {
  req: express.Request,
}
