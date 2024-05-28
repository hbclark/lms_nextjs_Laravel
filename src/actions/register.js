"use server";
import mongoose from "mongoose";
import { User } from "@/lib/models";
import { createAuthSession } from "@/lib/auth";

import { hashUserPassword } from "@/lib/hash";

import { redirect } from "next/navigation";
import { generateIdFromEntropySize } from "lucia";
import connectDB from "@/lib/db";
import { revalidatePath } from "next/cache";

export default async function signupAccount(preState, formData) {
  const email = formData.get("email");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  let password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");
  const action = formData.get("action");

  const errors = {};
  const memberId = generateIdFromEntropySize(16);

  if (password.length < 6 || confirmPassword.length < 6) {
    errors.passwordLength = "Password must be at least 6 characters";
  }

  if (password !== confirmPassword) {
    errors.password = "Passwords do not match";
  }
 
  try {
    const user = await User.findOne({ email });
    if (user) {
      errors.email = "Email already exists";
    }
  } catch (e) {
    console.log(e);
    return { errors: { email: "An error occurred" } };
  }

  if (Object.keys(errors).length > 0) {
    console.log(errors);
    return { errors: errors };
  }
  password = hashUserPassword(password);
  const user = await User.create({
    memberId,
    email,
    firstName,
    lastName,
    password,
    memberType: "member",
  });
  console.log(user);

  if (action === "addUser") {
    revalidatePath("/dashboard/user");
    return { message: `User ${firstName} ${lastName} added successfully` };
    
  } else {
    await createAuthSession(user._id);
  }
  
  redirect("/");
}
