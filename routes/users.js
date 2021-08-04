const router = require('express').Router();
const User = require('../models/Users');
const bcrypt = require("bcrypt");

// get a user
router.get("/:id", async (req,res) => {
    try {
        // request.params is whatever is after the /
        // for example the parameters in this get function is
        // id because the route is /:id
        const user = await User.findById(req.params.id);
        const {password, updatedAt, ...other} = user._doc
        res.status(200).json(other);

    } catch (err) {

        res.status(500).json(err);
    
    }
})


// update user
router.put("/:id", async(req, res)=> {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if(req.body.password) {
            try{
                ;
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt)

            } catch(err) {

                return res.status(500).json(err)
            
            }
        }
        try {

            const user = await User.findByIdAndUpdate(req.params.id, {$set: req.body})
            res.status(200).json("Account has been updated")
        
        } catch(err) {

            res.status(500).json(err);

        }
    } else {

        return res.status(403).json("You can only update your account")
    
    }
})

// delete user
router.delete("/:id", async(req, res)=> {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {

            const user = await User.findByIdAndDelete( req.params.id );
            res.status(200).json("Account has been deleted")
        
        } catch(err) {

            res.status(500).json(err);

        }
    } else {

        return res.status(403).json("You can only delete your account")
    
    } 
})


module.exports = router;