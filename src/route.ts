import { Request, Response } from 'express';

export const healthCheckRoute = (req: Request, res: Response): void => {
  res
    .status(200)
    .json({
      uptime: process.uptime(),
      status: 'OK',
    })
    .end();
};
