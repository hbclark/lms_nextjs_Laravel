import { getAllUsers } from "@/api/user";

import {UsersListItem} from "@/components";
import {deleteUser} from "@/api/user";


export default async function Page() {
  let users = await getAllUsers();
 users = users.map(user=>{
user._id = user._id.toString();

  const convertedUser = JSON.parse(JSON.stringify(user));
 
  return convertedUser ;

 })
 
  return (
    <UsersListItem users={users} onDelete = {deleteUser}/>
  );
}
