/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from 'express';

import handleHealthCheck from '../src/middleware';

jest.mock('express', () => ({
  Router: () => ({
    get: jest.fn(),
  }),
}));

describe('src/middleware', () => {
  it('handleHealthCheck: should set the healthcheck endpoint to GET /health', () => {
    handleHealthCheck();
    expect(Router().get).toHaveBeenCalledTimes(1);
  });
});
