module.exports = function (mongoose) {

  // Create a new mongoose schema
  var TaskSchema = mongoose.Schema({
    main: { type: String, required: true },
    sub: { type: String, required: false },
    description: { type: String, required: false },
    pic: { type: String, required: false },
    done: false
    // a relation
    // doneBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  });

  TaskSchema.pre('update', function (next) {
    // tell mongoose to run validators before every "update"
    // on this schema
    this.options.runValidators = true;
    next();
  });

  // Return the model
  return mongoose.model("Task", TaskSchema);
};