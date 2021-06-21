const defineUserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    birth: DataTypes.DATE,
    creationDate: DataTypes.DATE,
    updateDate: DataTypes.DATE,
  }, { timestamp: false });
  
  return User;
};

module.exports = defineUserModel;