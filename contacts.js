import {
    database,
    ref,
    onValue
} from "./firebase.js";


// Login Check

const currentUser = JSON.parse(
    localStorage.getItem(
        "chatnexUser"
    )
);

if (!currentUser) {

    window.location.href =
        "login.html";
}


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


// Contact List

const contactList =
    document.getElementById(
        "contactList"
    );


// Load Users

onValue(

    ref(database, "users"),

    (snapshot) => {

        contactList.innerHTML = "";

        snapshot.forEach((child) => {

            const user =
                child.val();


            // Hide current user

            if (
                user.uid ===
                currentUser.uid
            ) {

                return;
            }


            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "contact-card";


            card.innerHTML = `

                <div class="contact-avatar">

                    <img
                        src="${user.photo}"
                        alt="${user.name}"
                    >

                </div>

                <div class="contact-info">

                    <h4>${user.name}</h4>

                    <p>${user.status}</p>

                </div>

                <button class="chat-btn">

                    💬

                </button>

            `;


            card.addEventListener(

                "click",

                () => {

                    localStorage.setItem(

                        "selectedUser",

                        JSON.stringify(
                            user
                        )

                    );


                    window.location.href =
                        "message.html";

                }

            );


            contactList.appendChild(
                card
            );

        });

    }

);


// Search Contacts

const searchInput =
    document.getElementById(
        "searchInput"
    );

searchInput.addEventListener(

    "input",

    () => {

        const value =
            searchInput.value
            .toLowerCase();


        document
            .querySelectorAll(
                ".contact-card"
            )
            .forEach(card => {

                const name =
                    card
                    .querySelector(
                        "h4"
                    )
                    .textContent
                    .toLowerCase();


                card.style.display =
                    name.includes(
                        value
                    )

                        ? "flex"

                        : "none";

            });

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


// FAB Button

document.querySelector(
    ".fab"
).addEventListener(

    "click",

    () => {

        alert(
            "Invite Friends feature coming soon 🚀"
        );

    }

);