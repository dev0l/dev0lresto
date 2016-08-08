module.exports = function(mongoose){

  // Create a new mongoose schema
  var FavouritesSchema = mongoose.Schema({
    series: {type: String, required: false},
    website: {type: String, required: false},
    link: {type: String, required: false},

    // a relation
    // doneBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  });

  FavouritesSchema.pre('update', function(next) {
    // tell mongoose to run validators before every "update"
    // on this schema
    this.options.runValidators = true;
    next();
  });

  // Return the model
  return mongoose.model("Favourites", FavouritesSchema);
};