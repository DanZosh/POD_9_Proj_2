// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const Project = sequelize.define("Project", {
    projectNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 140]
      }
    },
    projectName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    }
  });

  Project.associate = function(models) {
    Project.hasMany(models.Instance, {
      onDelete: "cascade"
    });
  };

  return Project;
};
