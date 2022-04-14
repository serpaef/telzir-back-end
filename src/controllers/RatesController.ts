import { Request, Response } from 'express';
import RatesService from '../services/RatesService';

class RatesController {
  static async getAll(_req: Request, res: Response) {
    try {
      const rates = await RatesService.getAll();
      return res.status(200).json(rates);
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({message: 'Internal server error'});
    }
  }
}

export default RatesController;
