module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      discordid: String,
      discordname: String,
      walletadddress: String,
      groupid: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Discorduser = mongoose.model("discorduser", schema);
  return Discorduser;
};
