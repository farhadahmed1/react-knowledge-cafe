import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const User = ({user}) => {
    //console.log(user);
     const {name , email ,id } = user;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Email :{email}</p>
  </div>
  <Link to={`/user/${id}`}><button >About Me</button></Link>
</div>
        </div>
    );
};

User.propTypes={
  user:PropTypes.object.isRequired
}

export default User;