const express = require('express')
const router = express.Router()
const {getitem, getitems, createitem, updateitem, deleteitem} = require('../controllers/pagoscontrollers')

router.get('/' , getitems)
router.get('/:id', getitem)
router.post('/', createitem)
router.patch('/:id', updateitem)
router.delete('/:id', deleteitem)

module.exports = router
