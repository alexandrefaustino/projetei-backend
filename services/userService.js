const { Users } = require('../models');
const { cpfIsValid, nameIsValid, existValue } = require('../helpers/validations');
const { 
  invalidCpf, 
  invalidName, 
  userNotFound,
  userExist,
  invalidData,
  userDelete,
} = require('../dictionary/messages');

const findAll = async () => Users.findAll();

const findUserByCpf = async (cpf) => Users.findOne({ where: { cpf } });

const createUser = async (cpf, name, phone, birth) => {
 
  if (!cpfIsValid(cpf)) return { status: false, message: invalidCpf };

  if (!nameIsValid(name)) return { status: false, message: invalidName };
  
  if (await findUserByCpf(cpf)) return { status: false, message: userExist };

  const bodyIsValid = existValue(phone) && existValue(birth);
  if (!bodyIsValid) return { status: false, message: invalidData };
  
  const creationDate = new Date();
  const updateDate = new Date();  
  const user = await Users.create({ 
    cpf, name, phone, birth, creationDate, updateDate 
  });
  
  return { status: true, message: user };
}

const deleteUser = async (cpf) => {
  if (!cpfIsValid(cpf)) return { status: false, message: invalidCpf };
  
  if (!await findUserByCpf(cpf)) return { status: false, message: userNotFound };

  await Users.destroy({ where: { cpf } });

  return { status: true, message: userDelete };
}

const updateUser = async (cpf, name, phone, birth) => {
  if (!cpfIsValid(cpf)) return { status: false, message: invalidCpf };

  if (!nameIsValid(name)) return { status: false, message: invalidName };

  if (!await findUserByCpf(cpf)) return { status: false, message: userNotFound };

  const bodyIsValid = existValue(phone) && existValue(birth);
  if (!bodyIsValid) return { status: false, message: invalidData };

  await Users.update(
    { name, phone, birth },
    { where: { cpf } },
  );

  const userUpdate = await findUserByCpf(cpf)
  return { status: true, message: userUpdate };
}
  
module.exports = {
  findAll,
  createUser,
  deleteUser,
  updateUser,
}