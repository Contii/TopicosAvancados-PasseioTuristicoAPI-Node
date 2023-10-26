var express = require('express');
var router = express.Router();
const User = require("../models/User");
const { default: mongoose } = require('mongoose');


// ============= obter todos os usuarios =============
router.get('/', async (request, response)  => {
  const users = await User.find();
  return response.json(users);
} );

// ============= obter por ID ==================================
router.get('/:id', async (req, res)  => {
 const {id} = req.params;
 try{
  new mongoose.Types.ObjectId(id);
 } catch(err) {
  return res.status(400).json({error: 'Invalid ID'});
 }
  const user = await User.findById(id);
  return user
    ? res.json(user)
    : res.status(404).json({error: 'User not found'});
} );

// ============= cadastrar um novo usuario =====================
router.post("/", async (req, res) => {
  const user = req.body;
  const result = await User.create(user);
  return res.json(result);
});

// ============= atualizar um usuario ==========================
router.put("/:id", async (req, res) => {
  const userJson = req.body; // dados do usuario
  const { id } = req.params; // o id do usuario
  try {
    new mongoose.Types.ObjectId(id);
  } catch (err) {
    return res.status(400).json({ error: "Invalid ID" });
  } 
  const userConfere = await User.findById(id);
  if (userConfere){
    userJson.updatedAt = new Date();
    userJson.createdAt = userConfere.createdAt;
    
    // validaçao dos atributos do objeto
    const hasErrors = new User(userJson).validateSync();
    if(hasErrors) return res.status(400).json(hasErrors);
    await User.updateOne( {_id: id}, userJson);
    return res.json(userJson);
  }
});

// ============= deletar um usuario ==========================
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    new mongoose.Types.ObjectId(id);
  } catch (err) {
    return res.status(400).json({ error: "Invalid ID" });
  } 
  const user = await User.deleteOne({_id: id});
   // ou User.findByIdAndDelete(id);
   if (user.deletedCount > 0) {
    return res.send({ message: "User deleted successfully" });
  } else {
    return res.status(404).json({ error: "User not found" });
  }
});

module.exports = router;
