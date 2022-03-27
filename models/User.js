const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },

  thoughts: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
  ],

  friends: [
    {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
  ],
});
// get total count of friends
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;
