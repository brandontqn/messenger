//var messages1 = document.getElementById("messages1");
//var messages2 = document.getElementById("messages2");
//var textbox1 = document.getElementById("textbox1");
//var textbox2 = document.getElementById("textbox2");
//var button1 = document.getElementById("button1");
//var button2 = document.getElementById("button2");
//var conversation_window = document.getElementById("conversation_window");
////var tyler_button = document.getElementById("tyler");

//button1.addEventListener("click", function () {
//    var newMessage = document.createElement("li");
//    newMessage.innerHTML = textbox1.value;

//    messages1.appendChild(newMessage);

//    textbox1.value = "";
//});

//button2.addEventListener("click", function () {
//    var newMessage = document.createElement("li");
//    newMessage.innerHTML = textbox2.value;

//    messages2.appendChild(newMessage);

//    textbox2.value = "";
//});

//function openConversation(evt, conversationName) {
//    var i, tabcontent, tablinks;

//    tabcontent = document.getElementByClassName("tabcontent");
//    for (i = 0; i < tabcontent.Length; i++) {
//        tabcontent[i].style.display = "none";
//    }

//    tablinks = documents.getElementByClassName("tablinks");
//    for (i = 0; i < tablinks.length; i++) {
//        tablinks[i].className = tablinks[i].className.replace("active", "");
//    }

//    document.getElementById(conversationName).style.display = "block";
//    evt.currentTarget.className += "active";
//}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}