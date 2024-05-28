"use client"
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import {deleteUser} from "@/api/user";
import {useFormState} from "react-dom";
import {motion,AnimatePresence} from "framer-motion";


export default function UsersListItem({ users,onDelete }) {
const [state,formAction ]= useFormState(deleteUser,{})
const [formState, setFormState] = useState({error:"",success:""})

return (
        

        <div>
            {state.error&&<div className="text-red-500">{state.error}</div>}
            {state.success&&<div className="text-green-500">{state.success}</div>}  
          <table className=" w-8/12 mx-auto mt-[200px] border-collapse p-10">
            <thead>
              <tr>
                <th className="pl-2 border border-slate-300 p-1 text-start ">First Name</th>
                <th className="pl-2 border border-slate-300 p-1 text-start">Last Name</th>
                <th className="pl-2 border border-slate-300 p-1 text-start">Email</th>
                <th className="pl-2 border border-slate-300 p-1 text-start">Member Type</th>
              </tr>
            </thead>
            <tbody  >
              <AnimatePresence>
              {users.map((user,index) => (
                
                <motion.tr  key={user._id} className={clsx("hover:bg-slate-200",
                {"bg-slate-100": index % 2 === 0} )}  
            initial ={{opacity:0,y:-30}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:index*0.3,ease:"linear"}}
            exit={{opacity:0,x:-30,transition:{duration:0.5,ease:"easeInOut"}}}
            viewport={{once:true}}
            layout
            >
              <td className="pl-2 border border-slate-300 p-1 capitalize">{user.firstName}</td>
              <td className="pl-2 border border-slate-300 p-1 capitalize">{user.lastName}</td>
              <td className="pl-2 border border-slate-300 p-1 capitalize">{user.email}</td>
              <td className="pl-2 border border-slate-300 p-1 capitalize">{user.memberType}</td>
              <td className="border border-slate-300 p-1 cursor-pointer text-green-600 font-bold ">
                <Link href={`/dashboard/user/edit/${user._id}`}>Edit</Link>
              </td>
              <td className="pl-2 border border-slate-300 p-1 cursor-pointer text-red-400">
                <form action={formAction}>
                    <input type="hidden" name="id" value={user._id} />
            <button className="pl-2 text-red-400 font-bold">
                Delete
            </button>
                </form>
                
              </td>
            </motion.tr>

           
            
          ))}
              </AnimatePresence>
              
            </tbody>
            
          </table>
        </div>
      );
    }