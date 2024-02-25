import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    console.log(user);
    return (
        <div>
            <h3> Name : {user.name}</h3>
            <p>Email : {user.email}</p>
            <p>Contact Number : {user.phone}</p>
            
        </div>
    );
};

export default UserDetails;