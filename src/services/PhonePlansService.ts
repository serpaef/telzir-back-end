import PhonePlans from '../database/models/PhonePlan';

class PhonePlansService {
  static async getAll() {
    try {
      const plans: PhonePlans[] = await PhonePlans.findAll();
      return plans
    } catch (err) {
      console.log(err.message)
    }
  }
}

export default PhonePlansService
