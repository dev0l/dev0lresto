module.exports = function (mongoose) {

  // Create a new mongoose schema
  var ProfilesSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: false },
    dob: { type: Number, required: false },
    avatar: { type: String, required: false },
    pic: { type: String, required: false },

    // a relation
    // doneBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  });

  ProfilesSchema.pre('update', function (next) {
    // tell mongoose to run validators before every "update"
    // on this schema
    this.options.runValidators = true;
    next();
  });

  // Return the model
  return mongoose.model("Profiles", ProfilesSchema);
};