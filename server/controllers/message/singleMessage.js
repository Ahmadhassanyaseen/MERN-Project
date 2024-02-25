const Message = require("../../models/message");

const singleMessage = async (req, res) => {
    const id = req.params.id;
    await Message.find({
        conversationId: id
    })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = singleMessage