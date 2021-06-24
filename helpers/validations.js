const minSizeName = 3;

const cpfIsValid = (cpf) => /^\d{3}.\d{3}.\d{3}-\d{2}$/.test(cpf);

const nameIsValid = (name) => name && name.length >= minSizeName;

const existValue = (value) => value;

module.exports = {
 cpfIsValid,
 nameIsValid,
 existValue,
}