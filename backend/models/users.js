'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.recipies, {
        foreignKey: 'belongsTo',
        as: 'recipes'
      });
    }
  }
  Users.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 3,
        max: 12,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        min: 5,
        max: 64,
      },
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        // is: /^[a-z]+$/i,
      }
    }
   
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};

