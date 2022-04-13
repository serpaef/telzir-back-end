import Rates from '../database/models/Rates';

class RatesService {
  static async getAll() {
    try {
      const plans: Rates[] = await Rates.findAll();
      return plans;
    } catch (err) {
      console.log(err.message)
    }
  }
}

export default RatesService
