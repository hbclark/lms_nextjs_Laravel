
import mongoose from "@/lib/db";

const userSchema = new mongoose.Schema({
    memberId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    memberType: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  });
  
  const User = mongoose.models?.User || mongoose.model("User", userSchema);
export default User;
