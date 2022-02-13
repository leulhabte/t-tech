const express = require('express');
const router = express.Router();

const authController = require('./../controllers/authController');

/**
 * @swagger
 * /api/v1/users/login/:
 *   post:
 *     description: to generate token for users
 *     parameters:
 *      - name: username
 *        description: pass username
 *        in: formData
 *        required: true
 *        type: string
 *      - name: password
 *        description: pass password
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: token is generated successfully or token  is not generated successfully(invalid username or password)
 */

router.post('/login', authController.login);




/**
 * @swagger
 * /api/v1/users/reset-password/:
 *   post:
 *     description: to reset password and send code to email
 *     parameters:
 *      - name: email
 *        description: pass email
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: code send successfully
 */
router.post('/reset-password', authController.reset);




/**
 * @swagger
 * /api/v1/users/set-password/:
 *   post:
 *     description: to set password
 *     parameters:
 *      - name: email
 *        description: pass email
 *        in: formData
 *        required: true
 *        type: string
 *      - name: code
 *        description: pass code
 *        in: formData
 *        required: true
 *        type: string
 *      - name: password
 *        description: pass password
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: password set successfully
 */
router.post('/set-password',authController.set);




/**
 * @swagger
 * /api/v1/users/validate-code/:
 *   post:
 *     description: to validate code
 *     parameters:
 *      - name: email
 *        description: pass email
 *        in: formData
 *        required: true
 *        type: string
 *      - name: code
 *        description: pass code
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: code validate true
 */
router.post('/validate-code',authController.validate);


module.exports = router;