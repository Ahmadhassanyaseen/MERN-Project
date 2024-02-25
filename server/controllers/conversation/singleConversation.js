const Conversation = require("../../models/conversation");

const singleConversation = async (req, res) => {
    const id = req.params.id;
    console.log(id)
  try {
    const result = await Conversation.find({
        members: { $in: [id] },
    });
    res.json(result);
  } catch (error) {
    console.log(error, "error in allConversation controller");
  }
};

module.exports = singleConversation;
