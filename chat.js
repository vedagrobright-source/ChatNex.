// User Authentication Check
const user = JSON.parse(
    localStorage.getItem("chatnexUser")
);

if (!user) {

    window.location.href =
        "login.html";
}

// User Info
document.getElementById("userName")
    .textContent = user.name;

document.getElementById("userPhoto")
    .src = user.photo;

// Greeting
const greeting =
    document.querySelector(
        ".user-greeting h3"
    );

const hour = new Date().getHours();

if (hour < 12) {

    greeting.textContent =
        "Good Morning!";

} else if (hour < 18) {

    greeting.textContent =
        "Good Afternoon!";

} else {

    greeting.textContent =
        "Good Evening!";
}

// Logout
document.getElementById("logoutBtn")
    .addEventListener("click", () => {

        if (
            confirm(
                "Logout from ChatNex?"
            )
        ) {

            localStorage.removeItem(
                "chatnexUser"
            );

            window.location.href =
                "login.html";
        }

    });


// ===== Top Tabs Navigation =====

document.querySelectorAll(
    ".tab-btn"
).forEach(button => {

    button.addEventListener(
        "click",

        () => {

            window.location.href =
                button.dataset.page;

        }

    );

});


// ===== Bottom Navigation =====

document.querySelectorAll(
    ".nav-item"
).forEach(item => {

    item.addEventListener(
        "click",

        () => {

            window.location.href =
                item.dataset.page;

        }

    );

});


// ===== Floating Button =====

document.querySelector(
    ".fab"
).addEventListener(
    "click",

    () => {

        alert(
            "New Chat feature coming soon 🚀"
        );

    }

);