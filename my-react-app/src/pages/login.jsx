import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "https://movie-reviews-fullstack-app.onrender.com/api/v1/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );

            const data = await response.json();

            if (response.ok) {
                alert("Login successful!");

                if (data.token) {
                    localStorage.setItem("token", data.token);
                }

                navigate("/");
            } else {
                alert(data.message || "Login failed");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred during login.");
        }
    };

    return (
        <>
            <div className="topnav">
                <Link to="/">Movies Site</Link>
            </div>

            <div className="login-container">
                <div className="login-form">
                    
                        <h2>Login</h2>
                    <form onSubmit={handleSubmit} id="login-form">
                        <div>
                            <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
    
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />        
                        </div>
                        <div>
                             <input type="submit" value="Login" />
                        <p>
                            Don't have an account?{" "}
                            <Link to="/register">
                                Register here
                            </Link>
                        </p>
                        </div>              
                       
                    </form>
                    </div>
                </div>
        </>
    );
}

export default Login;