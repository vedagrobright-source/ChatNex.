import {
    auth,
    provider,
    database,
    ref,
    set
} from "./firebase.js";

import {
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

const loginBtn = document.getElementById("googleLogin");

loginBtn.addEventListener("click", async () => {

    try {

        const result = await signInWithPopup(
            auth,
            provider
        );

        const user = result.user;


        // Save user to Realtime Database

        await set(

            ref(database, "users/" + user.uid),

            {

                uid: user.uid,

                name: user.displayName,

                email: user.email,

                photo: user.photoURL,

                status: "online",

                lastSeen: Date.now()

            }

        );


        // Save locally

        localStorage.setItem(

            "chatnexUser",

            JSON.stringify({

                uid: user.uid,

                name: user.displayName,

                email: user.email,

                photo: user.photoURL

            })

        );


        // Redirect

        window.location.href =
            "chat.html";

    }

    catch (error) {

        console.error(error);

        alert(error.message);

    }

});