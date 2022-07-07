// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { TeslaVehicle } from '../../types/api';
import Mocks from './mocks'

export default function handler(req: NextApiRequest, res: NextApiResponse<TeslaVehicle>) {
  res.status(200).json(Mocks.MODELS_DATA);
}
