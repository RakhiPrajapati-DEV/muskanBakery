const express = require('express');
const mongoose = require('mongoose');
const Contact = require('../models/ContactModel');

const router = express.Router();

router.post('/', async (req, res) => {

    const { UserName, email, Phone, message } = req.body;
    try {
        const cont = new Contact(req.body);
        const saved = await cont.save();
        res.status(200).json(saved);
    } catch (err) {
        res.status(500).json({ message: 'Failed to save message', error: err });
    }
});

router.get('/Messages', async (req, res) => {
  try {
    const messages = await Contact.find();
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch messages', error: err });
  }
});

router.delete('/:id',async(req,res)=>{
  try{
    const result = await Contact.findByIdAndDelete(req.params.id);
    if(!result) return res.status(404).json({error:'Message not found'});
    res.json({Message:"Message Deleted"});
  }
  catch(err){
    res.status(500).json({error:err.message});
  }
});


module.exports = router;

