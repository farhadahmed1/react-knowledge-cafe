import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const navigate = useNavigate();
    //const {perams} = useParams();
   

    const handelGoBack=() => {
        navigate(-1)
    }


    
    return (
        <div>

            <h1>User detals No : {user.id}</h1>
            <h3> Name : {user.name}</h3>
            <p>Email : {user.email}</p>
            <p>Contact Number : {user.phone}</p>
            <button onClick={handelGoBack} className='bg-blue-500 hover:bg-blue-700
             text-white font-bold py-2 px-4 rounded-full' >Go Back</button> 
        
        </div>
    );
};

export default UserDetails;