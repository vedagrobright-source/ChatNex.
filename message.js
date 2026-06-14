import {
    database,
    ref,
    push,
    onValue
} from "./firebase.js";


// Current user
const currentUser = JSON.parse(
    localStorage.getItem("chatnexUser")
);

// Selected user
const selectedUser = JSON.parse(
    localStorage.getItem("selectedUser")
);

// Redirect check
if (!currentUser || !selectedUser) {
    window.location.href = "contacts.html";
}


// UI elements
const chatBox = document.getElementById("chatBox");
const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");


// Set header data
document.getElementById("chatUserName").innerText =
    selectedUser.name;

document.getElementById("chatUserImg").src =
    selectedUser.photo;

document.getElementById("chatUserStatus").innerText =
    selectedUser.status;


// Chat ID (unique for 2 users)
const chatId =
    currentUser.uid > selectedUser.uid
        ? currentUser.uid + "_" + selectedUser.uid
        : selectedUser.uid + "_" + currentUser.uid;


// Send message to Firebase
function sendMessage(text) {

    push(
        ref(database, "chats/" + chatId),
        {
            sender: currentUser.uid,
            receiver: selectedUser.uid,
            text: text,
            time: Date.now()
        }
    );
}


// Load messages in real-time
onValue(
    ref(database, "chats/" + chatId),
    (snapshot) => {

        chatBox.innerHTML = "";

        snapshot.forEach((msgSnap) => {

            const msg = msgSnap.val();

            const div = document.createElement("div");

            div.classList.add("msg");

            if (msg.sender === currentUser.uid) {
                div.classList.add("sent");
            } else {
                div.classList.add("received");
            }

            div.innerText = msg.text;

            chatBox.appendChild(div);

        });

        chatBox.scrollTop = chatBox.scrollHeight;

    }
);


// Send button click
sendBtn.addEventListener("click", () => {

    const text = input.value.trim();

    if (!text) return;

    sendMessage(text);

    input.value = "";

});


// Enter key support
input.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {

        sendBtn.click();

    }

});


// Back button
document.getElementById("backBtn").addEventListener("click", () => {
    window.location.href = "contacts.html";
});