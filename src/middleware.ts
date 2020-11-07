/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Router } from 'express';

import { healthCheckRoute } from './route';

export default function () {
  const router = Router();
  return router.get('/health', healthCheckRoute);
}
