const User = require('../models/User');

const test = (req, res) => {
    res.json('Test is Working');
};

const registarUser = async(req, res) => {
    try {
        const {name, email, password} = req.body;
        // Check if name entered
        if(!name) {
            return res.json({
                error: "Name is required"
            })
        };
        //Check if password is good
        if(!password || password.length < 6) {
            return res.json ({
                error: "Password is required and should be at least 6 characters long"
            })
        };
        // Check email
        const exist = await User.findOne({email});
        if(exist) {
            return rws.json({
                error: "Email is taken already"
            })
        };

        const user = await User.create({
            name, email, password
        });

        return res.json(user);
    }
    catch (err) {

    }
}

module.exports = {
    test,
    registarUser,
}