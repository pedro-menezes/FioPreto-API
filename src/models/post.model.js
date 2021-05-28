'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init(
    {
      text: DataTypes.TEXT,
      img: DataTypes.TEXT,
      key_img: DataTypes.TEXT,
      type_id: DataTypes.INTEGER,
    },
    {
      tableName: 'posts',
      sequelize,
      modelName: 'Post',
    },
  );

  Post.associate = (models) => {
    Post.belongsTo(models.User, { foreignKey: 'user_id', as: 'posts' });
    Post.belongsToMany(models.User, { through: 'reactions', foreignKey: 'post_id' });
  };

  return Post;
};
