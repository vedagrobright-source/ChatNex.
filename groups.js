
// Check Login

const user = JSON.parse(
    localStorage.getItem(
        "chatnexUser"
    )
);

if(!user){

    window.location.href =
        "login.html";
}


// Logout

document.getElementById(
    "logoutBtn"
).addEventListener(
    "click",

    ()=>{

        if(confirm(
            "Logout from ChatNex?"
        )){

            localStorage.removeItem(
                "chatnexUser"
            );

            window.location.href =
                "login.html";
        }
    }
);


// Bottom Navigation

document.querySelectorAll(
    ".nav-item"
).forEach(item=>{

    item.addEventListener(
        "click",

        ()=>{

            const page =
                item.dataset.page;

            if(page){

                window.location.href =
                    page;
            }

        }
    );

});


// Floating Button

document.querySelector(
    ".fab"
).addEventListener(
    "click",

    ()=>{

        alert(
            "Create Group feature coming soon 🚀"
        );

    }
);
