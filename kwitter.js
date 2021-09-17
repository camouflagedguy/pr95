user_name = localStorage.getItem("user_name");
user_name = localStorage.getItem("user_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}

function updateLike(message_id) {
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;


    firebase.database().ref(room_name).child(message_id).update({
        like: updated_likes
    })
}

function logout() {
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location.replace("kwitter.html");
}
