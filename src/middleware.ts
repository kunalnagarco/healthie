/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Router } from 'express';

import { healthCheckRoute } from './route';

export const handleHealthCheck = (): Router => {
  console.log(Router);
  return Router().get('/health', healthCheckRoute);
};
