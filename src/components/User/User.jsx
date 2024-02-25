import PropTypes from 'prop-types';
import { Link, useNavigate } from "react-router-dom";

const User = ({user}) => {
    //console.log(user);
     const {name , email ,id } = user;
     const navigate = useNavigate();

     const handleShowDetail = () =>{
         navigate(`/user/${id}`)
     }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Email :{email}</p>
  </div>
  <Link to={`/user/${id}`}><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' >
    About btn</button></Link>
  <Link to={`/user/${id}`}>About Me</Link>
   <button onClick={handleShowDetail}>onClick</button>
</div>
        </div>
    );
};

User.propTypes={
  user:PropTypes.object.isRequired
}

export default User;