'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Story extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Story.init({
    storyId: DataTypes.STRING,
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    love: DataTypes.STRING,
    view: DataTypes.STRING,
    status: DataTypes.STRING,
    follow: DataTypes.STRING,
    category_id: DataTypes.STRING,
    chapter_id: DataTypes.STRING,
    author_id: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Story',
  });
  return Story;
};