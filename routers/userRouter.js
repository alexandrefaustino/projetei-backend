const { Router } = require('express');
const router = Router();

const controller = require('../controllers/userController');

router.get('/', controller.findAll);
router.post('/', controller.createUser);
router.delete('/', controller.deleteUser);
router.put('/', controller.updateUser);

module.exports = router;