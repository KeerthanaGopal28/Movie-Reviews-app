const form = document.getElementById('login-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    try {
        const response = await fetch(
            "http://localhost:8000/api/v1/auth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    email,
                    password
                })
            }
        );

        const data = await response.json();

        if (response.ok) {
            alert("Login successful!");

            // If backend returns a JWT token
            if (data.token) {
                localStorage.setItem("token", data.token);
            }

            window.location.href = "../pages/index.html";
        } else {
            alert(data.message || "Login failed");
        }

    } catch (error) {
        console.error("Login Error:", error);
        alert("An error occurred during login.");
    }
});