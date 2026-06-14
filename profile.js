
// Login Check

const user = JSON.parse(
    localStorage.getItem(
        "chatnexUser"
    )
);

if (!user) {

    window.location.href =
        "login.html";
}


// Load User Info

document.getElementById(
    "profilePhoto"
).src = user.photo;

document.getElementById(
    "profileName"
).textContent = user.name;

document.getElementById(
    "profileEmail"
).textContent = user.email;


// Logout

document.getElementById(
    "logoutBtn"
).addEventListener(
    "click",

    () => {

        if (confirm(
            "Logout from ChatNex?"
        )) {

            localStorage.removeItem(
                "chatnexUser"
            );

            window.location.href =
                "login.html";
        }

    }
);


// Navigation

document.querySelectorAll(
    ".nav-item"
).forEach(item => {

    item.addEventListener(
        "click",

        () => {

            const page =
                item.dataset.page;

            if (page) {

                window.location.href =
                    page;
            }

        }
    );

});


// Settings Actions

document.querySelectorAll(
    ".setting-item"
).forEach(item => {

    item.addEventListener(
        "click",

        () => {

            const text =
                item.innerText.trim();

            alert(
                text +
                " feature coming soon 🚀"
            );

        }
    );

});
