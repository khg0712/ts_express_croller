import { Request, Response } from 'express';

export const index = (req: Request, res: Response) => {
  res.status(200).render('home', {
    title: 'home',
    message: 'Hello World!',
  });
};
