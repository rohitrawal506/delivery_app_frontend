import React from 'react';
import { useAuth } from './auth-context.js'; // Adjust the import path as necessary

const routeGuard = (Component, requiredRole) => {
    return (props) => {
        const { user, logout } = useAuth(); // Assuming AuthContext provides user info and a logout function

        if (user) {
            if (user.role === requiredRole) {
                return <Component {...props} />;
            } else {
                logout(); // Log out the user if they do not have the required role
                return <div>You have been logged out due to insufficient permissions.</div>;
            }
        }

        return <div>You do not have permission to access this page.</div>; // Or redirect to a different page
    };
};

export default routeGuard;

