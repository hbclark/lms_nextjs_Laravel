import { destroySession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function LogoutAction() {
  await destroySession();
}
