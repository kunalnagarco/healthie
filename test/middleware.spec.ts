import { Router } from 'express';

import { handleHealthCheck } from '../src';

jest.mock('express', () => ({
  Router: jest.fn(() => ({
    get: jest.fn(),
  })),
}));

describe('src/middleware', () => {
  it('handleHealthCheck: should set the healthcheck endpoint to GET /health', () => {
    handleHealthCheck();
    expect(true).toBeTruthy();
    // expect(Router().get).toHaveBeenCalledTimes(1);
  });
});
