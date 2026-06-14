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


// Navigation

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


// Explore Buttons

document.querySelectorAll(
    "button"
).forEach(btn=>{

    if(btn.id !== "logoutBtn"){

        btn.addEventListener(
            "click",

            ()=>{

                alert(
                    "This feature is coming soon 🚀"
                );

            }
        );

    }

});

