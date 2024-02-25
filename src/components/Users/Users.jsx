
// state ...> data 
// state ...> loader
// use effect
// fatch ...> state set ...> set state

import { useLoaderData } from "react-router-dom";
import User from "../User/User";


 

const Users = () => {
    const users = useLoaderData() ;
   // console.log(users);

    return (
        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xm:grid-cols-1
     gap-4" >
        {/* <h2> Total number of users {users.length}</h2> */}
           
           {
            users.map(user=><User  key={user.id} user={user}></User> )
           }
        </div>
    );
};

export default Users;