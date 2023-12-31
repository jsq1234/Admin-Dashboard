const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secretKey = process.env.SECRET_JWT_KEY;

const userSchema = new mongoose.Schema(
  {
    provider: {
      type: String,
      required: true,
      default: "email",
    },
    email: {
      type: String,
      required: true,
      index: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      match: [/^[a-zA-Z0-9_]+$/, "is invalid"],
      index: true,
    },
    password: {
      type: String,
      minlength: 6,
      maxlength: 20,
    },
    name: String,
    avatar: String,
    name: String,
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
    },
    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },
    githubId: {
      type: String,
      unique: true,
      sparse: true,
    },
    transactions: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Transaction",
    },
    occupation: String,
    phoneNumber: String,
    city: String,
    state: String,
    country: String,
    /* Add more social providers or more things, like messages/bio/etc. */
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password") || this.password === "") {
      return next();
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(this.password, saltRounds);
    this.password = hashedPassword;
    next();
  } catch (err) {
    next(err);
  }
});

userSchema.pre("validate", function (next) {
  console.log("Calling presave function!");
  if (!this.username || this.username.trim() === "") {
    const userIdString = this._id.toString();
    this.username = `USER${userIdString}`;
  }
  next();
});

userSchema.methods.comparePassword = async function (password) {
  try {
    const isSame = await bcrypt.compare(password, this.password);
    return isSame;
  } catch (error) {
    throw new Error(error);
  }
};

userSchema.methods.generateJWT = function () {
  const token = jwt.sign(
    {
      id: this._id,
      provider: this.provider,
      email: this.email,
    },
    secretKey,
    { expiresIn: "100d" }
  );
  return token;
};

userSchema.methods.toJSON = function () {
  const newObj = this.toObject();
  newObj.id = newObj._id;
  delete newObj._id;
  return newObj;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
