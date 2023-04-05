const bcrypt = require('bcryptjs');
const userModel = require('../pkg/user');
const jwt = require('jsonwebtoken');

const signUp = async (req,res) => {
    try {
        // proveri dali pw i pw confirmed se isti
        if (
            req.body.password.trim().length === 0 || 
            req.body.password !== req.body.password_confirmed
        ) {
            return res.status(400).send('Bad request.');
        }

        // proveri dali mailot postoi vo db
        if (req.body.email.length !== 0) {
            let user = await userModel.getUserByEmail(req.body.email);
            if (user) {
                return res.status(409).send('User already exists')
            }

            req.body.password = bcrypt.hashSync(req.body.password);
            let newUser = await userModel.create(req.body);
            return res.status(201).send(newUser);
        }   else {
            return res.status(400).send('Bad request');
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error.')
    }
};

const login = async (req, res) => {
    try {
        // proverka dali korisnikot so dadeniot mail postoi
        let user = await user.getUserByEmail(req.body.email);
        if (!user) {
            return res.status(400).send('Bad request. Bad login credentials');
        }

        // proveri dali pass se poklopuvaat
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(400).send('Bad request. Bad login credentials');
        } 

        // generiraj payload
        let payload = {
            uid: user._id,
            email: user.email,
            full_name: user.full_name
        };

        let token = jwt.sign(payload, 'toce123', {expiresIn: '60s'});
        return res.status(200).send({token});
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal server error');
    }
}

module.exports = {
    signUp,
    login
}