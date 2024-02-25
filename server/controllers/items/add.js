const Item = require("../../models/item");


const addItem= async(req, res)=>{

const  itemData = req.body;
const imagePath = req.folderName;
console.log(itemData);

const updatedItem = Item({
    name:itemData.name,
    tags:itemData.tags.split(','),
    status:itemData.status,
    image: itemData.image,
    imagePath: imagePath
});

const savedData =await updatedItem.save();

res.json(savedData)

}

module.exports = addItem;