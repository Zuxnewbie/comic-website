"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Story extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Story.hasMany(models.Chapter, { foreignKey: "story_id", as: "chapter" });
      Story.belongsToMany(models.Category, {
        through: "StoryCategories",
        foreignKey: "story_id",
        as: "categories",
      });
      Story.belongsTo(models.Author, { foreignKey: "author_id", as: "author" });
    }
  }
  Story.init(
    {
      story_id:DataTypes.STRING,
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      love: DataTypes.STRING,
      view: DataTypes.STRING,
      status: DataTypes.STRING,
      follow: DataTypes.STRING,
      author_id: DataTypes.STRING,
      description: DataTypes.TEXT("long"),
    },
    {
      sequelize,
      modelName: "Story",
    }
  );
  return Story;
};
