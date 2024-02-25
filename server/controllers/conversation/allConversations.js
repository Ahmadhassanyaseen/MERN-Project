const Conversation = require("../../models/conversation");

const allConversation = async (req, res) => {
  try{
    const result = await Conversation.find();
    res.json(result);
  }
  catch(error){
    console.log(error , "error in allConversation controller");
  }
};

module.exports = allConversation;
