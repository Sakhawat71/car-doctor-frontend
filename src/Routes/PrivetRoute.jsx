import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className='flex justify-center'>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        )
    }

    if (user?.email) {
        return children;
    }
    return <Navigate to={'/login'} replace></Navigate>
};

PrivetRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivetRoute;