const { StatusCodes } = require('http-status-codes');
const service = require('../services/userService');
const { internalError } = require('../dictionary/messages');
const findAll = async (request, response) => {
  try {    
    const users = await service.findAll();        
    response.status(StatusCodes.OK).json(users);
  } catch (error) {        
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: internalError });
  }
}
const createUser = async (request, response) => {
  try {
    const {cpf, name, phone, birth } = request.body;
    const { status, message } = await service.createUser(cpf, name, phone, birth);

    if (!status) return response.status(StatusCodes.BAD_REQUEST).json({ message });

    response.status(StatusCodes.CREATED).json({ message });
  } catch (error) {    
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: internalError });
  }
}

const deleteUser = async (request, response) => {
  try {
    const { cpf } = request.body;
    const { status, message } = await service.deleteUser(cpf);

    if (!status) return response.status(StatusCodes.NOT_FOUND).json({ message });

    response.status(StatusCodes.OK).json({ message })
  } catch (error) {
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: internalError });
  }
}

const updateUser = async (request, response) => {  
  try {
    const {cpf, name, phone, birth} = request.body;
    const { status, message } = await service.updateUser(cpf, name, phone, birth);
    
    if (!status) return response.status(StatusCodes.BAD_REQUEST).json({ message });

    response.status(StatusCodes.ACCEPTED).json({ message })
  } catch (error) {    
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: internalError });
  }
}

module.exports = {
  findAll,
  createUser,
  deleteUser,
  updateUser,
}
