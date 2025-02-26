import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Login = mongoose.model("Login", LoginSchema);

export default Login;
// export default mongoose.model("Login", LoginSchema);
