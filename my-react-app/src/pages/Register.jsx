import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Register.module.css";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "https://movie-reviews-fullstack-app.onrender.com/api/v1/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        username,
                        email,
                        password,
                    }),
                }
            );

            const data = await response.json();
            console.log("Response:", data);

            if (response.ok) {
                alert("Registration successful! Please login.");
                navigate("/login");
            } else {
                alert(data.message || "Registration failed");
            }
        } catch (e) {
            console.error(e);
            alert("An error occurred during registration.");
        }
    };

    return (
        <>
            <div className={styles.topnav}>
                <Link className={styles.active} to="/">
                    Movies Site
                </Link>
            </div>

            <div className={styles.registerContainer}>
                <div className={styles.registerForm}>
                    <h2>Register</h2>

                    <form id="form" onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <br />
                        <input
                            className={styles.registerInput}
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <br />

                        <label htmlFor="email">Email:</label>
                        <br />
                        <input
                            className={styles.registerInput}
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <br />

                        <label htmlFor="password">Password:</label>
                        <br />
                        <input
                            className={styles.registerInput}
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <br />
                        <br />

                        <input
                            className={styles.registerButton}
                            type="submit"
                            value="SignUp"
                        />

                        <p>
                            Already have an account?{" "}
                            <Link to="/login">Login here</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;