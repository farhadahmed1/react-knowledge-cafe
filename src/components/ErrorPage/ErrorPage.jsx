import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const handelGoBackHome=() => {
        navigate(`/`)
    }
    return (
        <div>
            <h2> Opps !!</h2>
            <p> {error.statusText || error.message}</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
             onClick={handelGoBackHome}>Home</button>
        </div>
    );
};

export default ErrorPage;