// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140],
        notEmpty: true,
        notContains: " "
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140],
        notEmpty: true,
        notContains: " "
      }
    }
  });

  User.associate = function(models) {
    User.hasMany(models.Instance, {
      onDelete: "cascade"
    });
  };

  return User;
};
