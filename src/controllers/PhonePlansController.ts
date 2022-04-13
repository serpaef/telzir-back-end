import { Request, Response } from 'express';
import PhonePlansService from '../services/PhonePlansService';

class PhonePlansController {
  static async getAll(_req: Request, res: Response) {
    try {
      const plans = await PhonePlansService.getAll();
      return res.status(200).json(plans);
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({message: 'Internal server error'});
    }
  }
}

export default PhonePlansController;
