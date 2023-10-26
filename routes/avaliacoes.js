var express = require('express');
var router = express.Router();
const Avaliacao = require("../models/Avaliacao");
const { default: mongoose } = require('mongoose');


// ============= obter todas as avaliacoes =============
router.get('/', async (request, response)  => {
  const avaliacao = await Avaliacao.find();
  return response.json(avaliacao);
} );

// ============= obter por ID ==================================
router.get('/:id', async (req, res)  => {
 const {id} = req.params;
 try{
  new mongoose.Types.ObjectId(id);
 } catch(err) {
  return res.status(400).json({error: 'Invalid ID'});
 }
  const avaliacao = await Avaliacao.findById(id);
  return avaliacao
    ? res.json(avaliacao)
    : res.status(404).json({error: 'avaliacao not found'});
} );

// ============= cadastrar uma avaliacao =====================
router.post("/", async (req, res) => {
  const avaliacao = req.body;
  const result = await Avaliacao.create(avaliacao);
  return res.json(result);
});

// ============= atualizar uma avaliacao ==========================
router.put("/:id", async (req, res) => {
  const avaliacaoJson = req.body; // dados da avaliacao
  const { id } = req.params; // o id da avaliacao
  try {
    new mongoose.Types.ObjectId(id);
  } catch (err) {
    return res.status(400).json({ error: "Invalid ID" });
  } 
  const avaliacaoConfere = await Avaliacao.findById(id);
  if (avaliacaoConfere){
    avaliacaoJson.updatedAt = new Date();
    avaliacaoJson.createdAt = avaliacaoConfere.createdAt;

    // validaçao dos atributos do objeto
    const hasErrors = new Avaliacao(avaliacaoJson).validateSync();
    if(hasErrors) return res.status(400).json(hasErrors);
    
    await Avaliacao.updateOne( {_id: id}, avaliacaoJson);
    return res.json(avaliacaoJson);
  }
});

// ============= deletar uma avaliacao ==========================
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    new mongoose.Types.ObjectId(id);
  } catch (err) {
    return res.status(400).json({ error: "Invalid ID" });
  } 
  const avaliacao = await Avaliacao.deleteOne({_id: id});
   // ou User.findByIdAndDelete(id);
   if (avaliacao.deletedCount > 0) {
    return res.json({ message: "User deleted successfully" });
  } else {
    return res.status(404).json({ error: "User not found" });
  }
});

module.exports = router;
