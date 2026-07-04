import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";

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

                if (data.accessToken) {
                    localStorage.setItem("accessToken", data.accessToken);
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
    console.log(localStorage.getItem("accessToken"));

    return (
        <>
            <div className={styles.topnav}>
                <Link to="/">Movies Site</Link>
            </div>

            <div className={styles.loginContainer}>
                <div className={styles.loginForm}>
                    
                        <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        
                            <label htmlFor="email">Email</label>
                            <br/>
                        <input
                            className={styles.loginInput}
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <br/>
        
                       
                            <label htmlFor="password">Password</label>
                            <br/>
                        <input
                            className={styles.loginInput}
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />        
                        <br/>
                             <input 
                                className={styles.loginButton}
                                type="submit" 
                                value="Login" />
                        <p >
                            Don't have an account?{" "}
                            <Link to="/register" className={styles.registerLink}>
                                Register here
                            </Link>
                        </p>
                                    
                       
                    </form>
                    </div>
                </div>
        </>
    );
}

export default Login;