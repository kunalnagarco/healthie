/* eslint-disable @typescript-eslint/no-explicit-any */
import { healthCheckRoute } from '../src/route';

describe('src/route', () => {
  const request: any = {};
  const response: any = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
    end: jest.fn().mockReturnThis(),
  };

  it('should set the response status to 200 and return uptime with status OK', () => {
    if (response) {
      healthCheckRoute(request, response);
      expect(response.status).toHaveBeenCalledTimes(1);
      expect(response.status).toHaveBeenCalledWith(200);
      expect(response.json).toHaveBeenCalledTimes(1);
      expect(response.json).toHaveBeenCalledWith({
        uptime: expect.any(Number),
        status: 'OK',
      });
      expect(response.end).toHaveBeenCalledTimes(1);
    }
  });
});
