/* eslint-disable no-unused-vars */
import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ isLoggedIn, children }) => {
  return isLoggedIn ? children : <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

function Protected() {
  return (
    <div>
      <ProtectedRoute isLoggedIn={false}>
        <div>Protected Content</div>
      </ProtectedRoute>
    </div>
  );
}

export default Protected;
