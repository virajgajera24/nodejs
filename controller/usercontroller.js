

var user = require('../model/usermodel');

exports.insert = async (req, res) => {

    var data= await user.create(req.body);

    res.status(200).json({
        data
    })
}

exports.get_data = async (req, res) => {

    var data= await user.find();

    res.status(200).json({
        data
    })
}