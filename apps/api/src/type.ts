import { type Request, type Response } from 'express';

export type APIHandler = (req: Request, res: Response) => Promise<void>;
