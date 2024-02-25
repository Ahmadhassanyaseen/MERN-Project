const Message = require("../../models/message");

const addMessage = async (req, res) => {
    const messageData = req.body;
    console.log(messageData)
    const newMessage = new Message({
        conversationId: messageData.conversationId,
        sender: messageData.sender,
        text: messageData.text,
    });
    try {
        const savedMessage = await newMessage.save();
        res.status(200).json(savedMessage);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = addMessage