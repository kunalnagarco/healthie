import { handleHealthCheck } from '../src';

const mockRouterGet = jest.fn();

jest.mock('express', () => ({
  Router: () => ({
    get: mockRouterGet,
  }),
}));

describe('src/middleware', () => {
  it('handleHealthCheck: should set the healthcheck endpoint to GET /health', () => {
    handleHealthCheck();
    expect(mockRouterGet).toHaveBeenCalledTimes(1);
    expect(mockRouterGet).toHaveBeenCalledWith('/health', expect.any(Function));
  });
});
