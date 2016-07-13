module.exports = function(mongoose){

  // Create a new mongoose schema
  var ArchivesSchema = mongoose.Schema({
    featured: {type: String, required: false},
    top: {type: String, required: false},
    favourites: {type: String, required: false},
    images: {type: String, required: false},
    videos: {type: String, required: false},
    music: {type: String, required: false},
    web: {type: String, required: false},
    ideas: {type: String, required: false},

    // a relation
    // doneBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  });

  ArchivesSchema.pre('update', function(next) {
    // tell mongoose to run validators before every "update"
    // on this schema
    this.options.runValidators = true;
    next();
  });

  // Return the model
  return mongoose.model("Archives", ArchivesSchema);
};