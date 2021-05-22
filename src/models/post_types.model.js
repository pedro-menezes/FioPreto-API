'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post_Types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post_Types.init(
    {
      type: DataTypes.TEXT,
    },
    {
      tableName: 'post_types',
      sequelize,
      modelName: 'Post_Types',
    },
  );

  Post_Types.associate = (models) => {
    Post_Types.hasMany(models.Post);
  };

  return Post_Types;
};
