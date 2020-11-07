import { Router } from 'express';

import { healthCheckRoute } from './route';

export const handleHealthCheck = (): Router => {
  const router = Router();
  return router.get('/health', healthCheckRoute);
};
