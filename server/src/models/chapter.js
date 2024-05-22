'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chapter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association 
      Chapter.belongsTo(models.Story, { foreignKey: 'story_id', targetKey:"story_id", as: 'story' });
    }
  }
  Chapter.init({
    chapter_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    story_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: DataTypes.STRING,
    content: DataTypes.TEXT('long'),
  }, {
    sequelize,
    modelName: 'Chapter',
  });
  return Chapter;
};