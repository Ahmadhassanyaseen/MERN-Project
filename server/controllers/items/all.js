const Item = require("../../models/item");

const allItem = async (req, res) => {
  const itemId = req.query.id;
  const displayItems = async () => {
    try {
      if (itemId) {
        const itemData = await Item.findById(itemId);
        if (!itemData) {
            return res.status(404).json({ error: "Item not found" });
            
        }
        else{
            return res.json(itemData);

        }
      } else {
        const itemData = await Item.find({});
         if (!itemData) {
           return res.status(404).json({ error: "Item not found" });
         } else {
           return res.json(itemData);
         }
      }
    } catch (error) {
      console.log(error);
    }
  };

  displayItems();
};

module.exports = allItem;
