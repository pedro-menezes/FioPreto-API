'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Scheduling extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Scheduling.init(
    {
      dateTime: DataTypes.DATE,
    },
    {
      tableName: 'schedulings',
      sequelize,
      modelName: 'Scheduling',
    },
  );
  return Scheduling;
};
