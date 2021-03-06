const User = require('../models/user');
const mongoose = require('mongoose');

exports.get_users = (req,res,next) => {
    User.find()
        .exec()
        .then(results => {
            res.status(200).json(results);
        })
        .catch(err => {
            res.status(404).json({
                error: err
            })
        })
}

exports.get_one_user = (req, res, next) => {
    const id = req.params.id;
    User.find({_id: id})
        .exec()
        .then(result => {
            if(result.length === 0){
                throw "User not found";
            }
            return res.status(200).json(result);
        })
        .catch(err => {
            return res.status(404).json({
                error: err
            })
        })
}

exports.post_user = (req,res,next)=>{
    const user = new User({
       userName: req.body.userName,
       _id: mongoose.Types.ObjectId() 
    })

    user.save()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(404).json({
                error: err
            })
        })
}