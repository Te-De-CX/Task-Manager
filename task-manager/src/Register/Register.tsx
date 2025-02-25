// import React from "react";
import Form from "../components/Form";

function Register() {
    return (
        <div className="page-container">
            <Form route="/api/register/" method="register" />
        </div>
    );
}

export default Register;