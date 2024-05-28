import { getUser } from "@/api/user";

import { EditUserForm } from "@/components";

// edit user

export default async function Page({ params }) {
  const id = params.id;

  let user = await getUser(id);
  user._id = user._id.toString();

  return (
    <>
      <EditUserForm user={user} />
    </>
  );
}
