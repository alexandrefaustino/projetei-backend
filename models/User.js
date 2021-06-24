const defineUserModel = (sequelize, DataTypes) => {  
  return sequelize.define('Users', {    
    cpf: { primaryKey: true, type: DataTypes.STRING},
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    birth: DataTypes.DATEONLY,
    creationDate: DataTypes.DATE,
    updateDate: DataTypes.DATE,
  }, { timestamps: false });    
};

module.exports = defineUserModel;