import {
    database,
    ref,
    push,
    onValue,
    update
} from "./firebase.js";


// ---------------- USER DATA ----------------
const currentUser = JSON.parse(
    localStorage.getItem("chatnexUser")
);

const selectedUser = JSON.parse(
    localStorage.getItem("selectedUser")
);

// safety check
if (!currentUser || !selectedUser) {
    window.location.href = "contacts.html";
}


// ---------------- UI ELEMENTS ----------------
const chatBox = document.getElementById("chatBox");
const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");


// ---------------- HEADER SET ----------------
document.getElementById("chatUserName").innerText =
    selectedUser.name || "User";

document.getElementById("chatUserImg").src =
    selectedUser.photo || "";

document.getElementById("chatUserStatus").innerText =
    selectedUser.status === "online"
        ? "🟢 Online"
        : "⚪ Offline";


// ---------------- CHAT ID ----------------
const chatId =
    currentUser.uid > selectedUser.uid
        ? currentUser.uid + "_" + selectedUser.uid
        : selectedUser.uid + "_" + currentUser.uid;


// ---------------- SEND MESSAGE ----------------
function sendMessage(text) {

    if (!text || text.trim() === "") return;

    push(
        ref(database, "chats/" + chatId),
        {
            sender: currentUser.uid,
            receiver: selectedUser.uid,
            text: text.trim(),
            time: Date.now(),
            seen: false
        }
    );
}


// ---------------- LOAD MESSAGES ----------------
onValue(
    ref(database, "chats/" + chatId),
    (snapshot) => {

        chatBox.innerHTML = "";

        snapshot.forEach((msgSnap) => {

            const msg = msgSnap.val();

            const div = document.createElement("div");

            div.classList.add("msg");

            // sender/receiver
            if (msg.sender === currentUser.uid) {
                div.classList.add("sent");
            } else {
                div.classList.add("received");
            }

            // message text
            const textDiv = document.createElement("div");
            textDiv.innerText = msg.text;

            // time
            const timeDiv = document.createElement("div");
            timeDiv.style.fontSize = "10px";
            timeDiv.style.marginTop = "5px";
            timeDiv.style.opacity = "0.7";

            const time = new Date(msg.time).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
            });

            let tick = "";

            if (msg.sender === currentUser.uid) {
                tick = msg.seen ? " ✔✔" : " ✔";
            }

            timeDiv.innerText = time + tick;

            div.appendChild(textDiv);
            div.appendChild(timeDiv);

            chatBox.appendChild(div);

        });

        chatBox.scrollTop = chatBox.scrollHeight;

    }
);


// ---------------- MARK AS SEEN ----------------
function markSeen(snapshot) {

    snapshot.forEach((msgSnap) => {

        const msg = msgSnap.val();

        if (
            msg.receiver === currentUser.uid &&
            msg.seen !== true
        ) {

            update(
                ref(database, "chats/" + chatId + "/" + msgSnap.key),
                {
                    seen: true
                }
            );

        }

    });

}


// ---------------- REALTIME + SEEN ----------------
onValue(
    ref(database, "chats/" + chatId),
    (snapshot) => {

        markSeen(snapshot);

    }
);


// ---------------- SEND BUTTON ----------------
sendBtn.addEventListener("click", () => {

    const text = input.value;

    sendMessage(text);

    input.value = "";

});


// ---------------- ENTER KEY ----------------
input.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {
        sendBtn.click();
    }
});


// ---------------- BACK BUTTON ----------------
document.getElementById("backBtn")
.addEventListener("click", () => {
    window.location.href = "contacts.html";
});
