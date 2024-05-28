"use server";
import { User } from "@/lib/models";
import { revalidatePath } from "next/cache";
import {redirect} from "next/navigation";




export async function getAllUsers() {
  try {
    
    const users = await User.find({});

    return users;
  } catch (e) {
    console.log("Error in getAllUsers", e);
  }
}

export async function getUser(id) {
  try {
    

    const user = await User.findById(id).exec();

    return user;
  } catch (e) {
    console.log("Error in getUser", e);
  }
}

export async function updateUser(id, data) {
  try {
    
    const user = await User.findById(id);
    user.updateOne({ id }, { ...data });
  } catch (e) {}
}

export async function deleteUser(prevState,formData) {
  // id = id.toString();
  const id = formData.get("id");
  console.log(id)
  
  try {
  
    const user = await User.findById(id);
    if(user.memberType === "admin"){
      return {error:"Cannot delete an admin,please contact IT support"}
    }
    const UserName = user.firstName + " " + user.lastName;
    // console.log(user);
    console.log("found user")
    await user.deleteOne();
    revalidatePath("/dashboard/user");
    return {success:`User ${UserName} deleted successfully`}
  }catch(err){
    console.log("Error in deleteUser", err);
    return {error:"An error occurred"}
  }
}
