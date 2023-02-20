const { httpError } = require('../helpers/handleError')
const userModel = require('../models/pagos')

const getitems = async (req, res) =>{
  try {
    const listAll = await userModel.find({})
    res.send({ data: listAll})
  } catch (e) {
    httpError(res,e)
  }
}

const getitem = async(req, res) =>{
  try {
    const itemId = req.params.id;
    const item = await userModel.findById(itemId);
    if (!item) {
      return res.status(404).send({ message: 'Item not found' });
    }
    res.send({ data: item });
  } catch (e) {
    httpError(res, e);
  }
}

const createitem = async (req, res) =>{
  try {
    const {receipt ,date ,name ,concept ,value} = req.body
    const resDetail = await userModel.create({
      receipt ,date ,name ,concept ,value
    })
    res.send({ data: resDetail})
  } catch (e) {
    httpError(res,e)
  }
}

const updateitem = async (req, res) =>{
  try {
    const itemId = req.params.id;
    const { receipt, date, name, concept, value } = req.body;
    const item = await userModel.findByIdAndUpdate(
      itemId,
      { receipt, date, name, concept, value },
      { new: true }
    );
    if (!item) {
      return res.status(404).send({ message: 'Item not found' });
    }
    res.send({ data: item });
  } catch (e) {
    httpError(res, e);
  }
}

const deleteitem = async (req, res) =>{
  try {
    const itemId = req.params.id;
    const item = await userModel.findByIdAndDelete(itemId);
    if (!item) {
      return res.status(404).send({ message: 'Item not found' });
    }
    res.send({ data: item });
  } catch (e) {
    httpError(res, e);
  }
}

module.exports= {getitem, getitems, createitem, updateitem, deleteitem}
