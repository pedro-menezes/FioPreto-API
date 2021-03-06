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
      date: DataTypes.DATE,
      time: DataTypes.TIME,
    },
    {
      tableName: 'schedulings',
      sequelize,
      modelName: 'Scheduling',
    },
  );

  Scheduling.associate = (models) => {
    Scheduling.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    Scheduling.belongsTo(models.Salon, { foreignKey: 'salon_id', as: 'salon' });
  };

  return Scheduling;
};
