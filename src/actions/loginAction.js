"use server";
import { User } from "@/lib/models";
import { verifyPassword } from "@/lib/hash";
import { createAuthSession } from "@/lib/auth";

import { redirect } from "next/navigation";

export default async function loginAction(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  let user;
 
  try {
    user = await User.findOne({ email });

    if (!user)
      return {
        errors: {
          email: "Could out authenticate user, please check your credentials.",
        },
      };
  } catch (e) {
    console.log(e);
    return { errors: { email: "An error occurred" } };
  }

  const isValidPassword = verifyPassword(user.password, password);
  if (!isValidPassword) {
    return {
      errors: {
        password: "Could not authenticate user, please check your credentials.",
      },
    };
  }

  await createAuthSession(user._id);
  return redirect("/dashboard");
}
