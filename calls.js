
const user = JSON.parse(
    localStorage.getItem(
        "chatnexUser"
    )
);

if(!user){

    window.location.href =
        "login.html";
}


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


document.querySelector(
    ".fab"
).addEventListener(
    "click",

    ()=>{

        alert(
            "Start New Call feature coming soon 🚀"
        );

    }
);


document.querySelectorAll(
    ".call-btn"
).forEach(btn=>{

    btn.addEventListener(
        "click",

        ()=>{

            alert(
                "Calling feature will be connected with WebRTC later 📞"
            );

        }
    );

});
