'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StoryCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Định nghĩa mối quan hệ giữa StoryCategory và Story
      this.belongsTo(models.Story, { foreignKey: 'story_id', as: 'story' });

      // Định nghĩa mối quan hệ giữa StoryCategory và Category
      this.belongsTo(models.Category, { foreignKey: 'category_id', as: 'category' });
    }
  }
  StoryCategory.init({
    story_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category_id: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'StoryCategory',
  });
  return StoryCategory;
};