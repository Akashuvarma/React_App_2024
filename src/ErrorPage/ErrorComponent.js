import React from "react";
import './ErrorPage.css'
const ErrorComponent = () => {
  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        Go back to <button>Home</button>
      </p>
    </div>
  );
};

export default ErrorComponent;
