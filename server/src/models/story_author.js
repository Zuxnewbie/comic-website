'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StoryAuthor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Story, { foreignKey: 'story_id', as: 'story' });
      this.belongsTo(models.Author, { foreignKey: 'id', as: 'author' });
    }
  }
  StoryAuthor.init({
    story_id: DataTypes.STRING,
    author_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StoryAuthor',
  });
  return StoryAuthor;
};