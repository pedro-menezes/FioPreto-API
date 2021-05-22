'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Salon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Salon.init(
    {
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      site: DataTypes.STRING,
      payMethods: DataTypes.STRING,
      cnpj: DataTypes.STRING(14),
    },
    {
      sequelize,
      modelName: 'Salon',
      tableName: 'salons',
      paranoid: true,
      deletedAt: 'deleted_at',
    },
  );

  Salon.associate = (models) => {
    Salon.belongsToMany(models.User, { through: 'schedulings' });
    Salon.belongsToMany(models.User, { through: 'votes' });
  };

  return Salon;
};
