import database from '.';
import { DataTypes, Model } from 'sequelize';

class PhonePlans extends Model {
  id: number;
  plan: string;
  minutes: number;
}

PhonePlans.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    plan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    minutes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    tableName: 'phone_plans',
    timestamps: false,
  }
);

export default PhonePlans;
