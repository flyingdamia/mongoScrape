// Dependencies //
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Note schema //
var NoteSchema = new Schema({
  body: {
    type: String
  },
  article: {
    type: Schema.Types.ObjectId,
    ref: "Article"
  }
});

var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
