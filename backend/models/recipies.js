'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recipies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      recipies.belongsTo(models.Users, {
        foreignKey: 'belongsTo',
        as: 'user'
      });
      recipies.hasMany(models.Like, {
        foreignKey: 'id',
        as: 'likedRecipies'
      });
    }
  }
  recipies.init({
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['Breakfast', 'Lunch','Dinner','Salad','Chinise']]
      },
    },
    belongsTo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'recipies',
  });
  return recipies;
};