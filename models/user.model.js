module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      fullName: String,
      displayName: String,
      email: String,
      password: String,
      phoneNum: String,
      address1: String,
      address2: String,
      city: String,
      county: String,
      state: String,
      zipCode: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  
  return mongoose.model("user", schema);;
};
