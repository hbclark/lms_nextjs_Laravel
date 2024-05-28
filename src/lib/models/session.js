
import mongoose from "@/lib/db";



const sessionSchema = new mongoose.Schema(
    {
      user_id: {
        type: String,
        required: true,
      },
      expires_at: {
        type: Date,
        required: true,
      },
    },
    { _id: false }
  );
  
   const Session =
    mongoose.models?.Session ?? mongoose.model("Session", sessionSchema);
    export default Session;