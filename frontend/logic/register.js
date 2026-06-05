const form = document.getElementById('form');
console.log("register.js loaded");

form.addEventListener('submit',async(e) => {
    e.preventDefault();

    const username = document.getElementById('username').value
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try{
        const response = await fetch("http://localhost:8000/api/v1/auth/register", {
            method:'POST',
            headers: {
                "Content-Type":"application/json"
            },
            credentials:"include",
            body: JSON.stringify({username,email,password})
        }
    );
        const data = await response.json();
        console.log("Response:", data);
        if(response.ok) {
            alert("registration successful! Please login.");
            window.location.href = "../pages/login.html";
        } else {
            alert(data.message || "Registration failed");
        }
    
    } catch(e) {
        console.error(e);
        alert("An error occurred during registration.");
    }
})