import { database, ref, onValue } from "./firebase.js";


// USER CHECK
const user = JSON.parse(localStorage.getItem("chatnexUser"));

if (!user) {
    window.location.href = "login.html";
}


// UI SET
document.getElementById("userName").textContent = user.name;
document.getElementById("userPhoto").src = user.photo;


// GREETING
const greeting = document.querySelector(".user-greeting h3");
const hour = new Date().getHours();

greeting.textContent =
    hour < 12 ? "Good Morning!"
    : hour < 18 ? "Good Afternoon!"
    : "Good Evening!";


// LOGOUT
document.getElementById("logoutBtn").onclick = () => {
    localStorage.removeItem("chatnexUser");
    window.location.href = "login.html";
};


// ================= FIREBASE CHAT LIST =================

const chatList = document.getElementById("chatList");

const usersRef = ref(database, "users");

onValue(usersRef, (snapshot) => {

    chatList.innerHTML = "";

    snapshot.forEach((child) => {

        const u = child.val();

        // skip self
        if (u.uid === user.uid) return;

        const div = document.createElement("div");

        div.className = "chat-card";

        div.innerHTML = `
            <div class="avatar">
                <img src="${u.photo || 'default.png'}" 
                     style="width:100%;height:100%;border-radius:50%">
            </div>

            <div class="chat-info">
                <h4>${u.name}</h4>
                <p>Tap to start chat</p>
            </div>
        `;

        // CLICK FIX (IMPORTANT)
        div.onclick = () => {

            localStorage.setItem(
                "selectedUser",
                JSON.stringify(u)
            );

            window.location.href = "message.html";
        };

        chatList.appendChild(div);

    });

});


// TAB NAVIGATION
document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.onclick = () => {
        window.location.href = btn.dataset.page;
    };
});


// BOTTOM NAV
document.querySelectorAll(".nav-item").forEach(item => {
    item.onclick = () => {
        window.location.href = item.dataset.page;
    };
});


// FAB
document.querySelector(".fab").onclick = () => {
    alert("New chat feature coming soon 🚀");
};
