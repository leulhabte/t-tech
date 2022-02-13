const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

/**
 * @swagger
 * /api/v1/post/add:
 *   post:
 *     description: to generate token for users
 *     parameters:
 *      - name: Authorization
 *        description: pass token
 *        in: header
 *        required: true
 *        type: string
 *      - name: title
 *        description: pass title
 *        in: formData
 *        required: true
 *        type: string
 *      - name: content
 *        description: pass content
 *        in: formData
 *        required: true
 *        type: string
 *      - name: excerpt
 *        description: pass excerpt
 *        in: formData
 *        required: true
 *        type: string
 *      - name: author
 *        description: pass author
 *        in: formData
 *        type: string
 *      - name: tags
 *        description: pass tags
 *        in: formData
 *        type: string
 *      - name: format
 *        description: pass format
 *        in: formData
 *        type: string
 *      - name: status
 *        description: pass status
 *        in: formData
 *        type: string
 *     responses:
 *       200:
 *         description: post created successfully
 */

router.post('/add', postController.add);


module.exports = router;