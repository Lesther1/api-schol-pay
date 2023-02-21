const express = require('express')
const router = express.Router()
const {getitem, getitems, createitem, updateitem, deleteitem} = require('../controllers/pagoscontrollers')

/**
 * @swagger
 * components:
 *   schemas:
 *     Pago:
 *       type: object
 *       properties:
 *         receipt:
 *           type: number
 *           description: The payment receipt number
 *         date:
 *           type: string
 *           description: The payment date (in the format YYYY-MM-DD)
 *         name:
 *           type: string
 *           description: The name of the payer
 *         concept:
 *           type: string
 *           description: The concept of the payment
 *         value:
 *           type: number
 *           description: The payment value
 */

/**
 * @swagger
 * /:
 *  get:
 *    sumary: return all pays
 *    tags: [pay]
 *    responses:
 *      200:
 *        description: all pays!
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                 $ref: '#/components/schemas/Pago'
 */
router.get('/' , getitems)
/**
 * @swagger
 * /{id}:
 *  get:
 *    sumary: return one pays
 *    tags: [pay]
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *        required: true
 *        description: the user id
 *    responses:
 *      200:
 *        description: one pays!
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                 $ref: '#/components/schemas/Pago'
 *      400:
 *       description: user not found!
 */
router.get('/:id', getitem)
/**
 * @swagger
 * /:
 *  post:
 *    sumary: create a new pay
 *    tags: [pay]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *         schema:
 *          type: object
 *          $ref: '#/components/schemas/Pago'
 *    responses:
 *      200:
 *        description: new pay is  created!
 */
router.post('/', createitem)
/**
 * @swagger
 * /{id}:
 *  patch:
 *    sumary: update one pays
 *    tags: [pay]
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *        required: true
 *        description: the user id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *         schema:
 *          type: object
 *          $ref: '#/components/schemas/Pago'
 *    responses:
 *      200:
 *        description: pay update!
 */
router.patch('/:id', updateitem)
/**
 * @swagger
 * /{id}:
 *  delete:
 *    sumary: return one pays
 *    tags: [pay]
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *        required: true
 *        description: the user id
 *    responses:
 *      200:
 *        description: pay update!
 */
router.delete('/:id', deleteitem)

module.exports = router
