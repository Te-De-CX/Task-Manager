// import React from "react";
import Form from "../components/Form";

function Login() {
    return (
        <div className="page-container">
            <Form route="/api/token/" method="login" />
        </div>
    );
}

export default Login;