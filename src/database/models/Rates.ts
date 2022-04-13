import database from '.';
import { DataTypes, Model } from 'sequelize';

class Rates extends Model {
  id: number;
  origin: string;
  destination: string;
  pricePerMinute: number;
}

Rates.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pricePerMinute: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    tableName: 'rates',
    timestamps: false,
    underscored: true,
  }
);

export default Rates;
