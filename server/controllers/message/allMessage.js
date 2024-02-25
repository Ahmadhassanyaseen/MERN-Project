const Message = require("../../models/message");
const allMessage = async(req, res) => {
   await Message.find({})
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = allMessage