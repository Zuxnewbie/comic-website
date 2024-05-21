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
      Story.hasMany(models.Chapter, { foreignKey: 'story_id', as: 'chapters' });
      Story.belongsToMany(models.Category, { through: 'StoryCategory' });
      Story.belongsToMany(models.Author, { through: 'StoryAuthor' });
    }
  }
  Story.init({
    story_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    love: DataTypes.STRING,
    view: DataTypes.STRING,
    status: DataTypes.STRING,
    follow: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Story',
  });
  return Story;
};