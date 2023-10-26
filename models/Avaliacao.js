const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema( {
    usuarioId: { type: String, require: true },
    passeioID: { type: String, require: true },
    titulo: { type: String, require: true },
    comentario: { type: String, require: true },
    nota: { type: String, require: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
    
module.exports = mongoose.model('Avaliacao', UserSchema, 'Avaliacao');