// a JavaScript version of the send_button jQuery function
// function sendMessage(message, inbox) {
//     var myInbox = document.getElementById(inbox);
//     var myTextbox = document.getElementById(message);

//     var newMessage = document.createElement("li");
//     newMessage.innerHTML = myTextbox.value;
//     myInbox.appendChild(newMessage)
//     myTextbox.value = "";
// }

// a JavaScript version of the name_button jQuery function
// function openConversation(evt, conversationName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace("active", "");
//     }
//     document.getElementById(conversationName).style.display = "block";
//     evt.currentTarget.className += "active";
// }

// a jQuery function to handle all three name tab-link buttons...
var active_tab;
var most_recent_message;

jQuery(function(){
    $(".name_button").click(function(){
        $(".conversation").hide();
        var thisID = $(this).attr("data-id");
        if(thisID == 1){
            $('.conversation[data-id="1"]').show();
            active_tab = 1;
        }
        else if(thisID == 2){
            $('.conversation[data-id="2"]').show();
            active_tab = 2;
        }
        else if(thisID == 3){
            $('.conversation[data-id="3"]').show();
            active_tab = 3;
        }
    });
});

// a jQuery function to handle all three SEND buttons...
jQuery(function(){
    $(".send_button").click(function(){
        //var thisID = $(this).attr("data-id");
        if (active_tab == 1) {
            most_recent_message = $("#input1").val();
            $("#inbox1").append(
                $("<li id='me'>").append( most_recent_message)
            );
            $("#input1").val("");
            chat_bot();
        }
        else if (active_tab == 2) {
            most_recent_message = $("#input2").val();
            $("#inbox2").append(
                $("<li id='me'>").append(most_recent_message)
            );
            $("#input2").val("");
            chat_bot();
        }
        else if (active_tab == 3) {
            most_recent_message = $("#input3").val();
            $("#inbox3").append(
                $("<li id='me'>").append(most_recent_message)
            );
            $("#input3").val("");
            chat_bot();
        }
    });
});

// append message to inbox on Enter key press
$(document).keypress(function (e) {
    var keycode = (e.keycode || e.which);
    if (keycode == "13") {
        if (active_tab == 1) {
            most_recent_message = $("#input1").val();
            $("#inbox1").append(
                $("<li id='me'>").append(most_recent_message)
            );
            $("#input1").val("");
            chat_bot();
        }
        else if (active_tab == 2) {
            most_recent_message = $("#input2").val();
            $("#inbox2").append(
                $("<li id='me'>").append(most_recent_message)
            );
            $("#input2").val("");
            chat_bot();
        }
        else if (active_tab == 3) {
            most_recent_message = $("#input3").val();
            $("#inbox3").append(
                $("<li id='me'>").append(most_recent_message)
            );
            $("#input3").val("");
            chat_bot();
        }
    }
});

// a jQuery function to handle all three CLEAR buttons...
jQuery(function(){
    $(".clear_button").click(function () {
        if (active_tab == 1) {
            $("#inbox1").empty();
        }
        else if (active_tab == 2){
            $("#inbox2").empty();
        }
        else if (active_tab == 3){
            $("#inbox3").empty();
        }
    });
});

// create some automatic responses
function chat_bot() {
    if (most_recent_message == "Hi" || most_recent_message == "hi") {
        if (active_tab == 1) {
            $("#inbox1").append(
                $("<li id='bot'>").append("Hello!")
            );
        }
        else if (active_tab == 2) {
            $("#inbox2").append(
                $("<li id='bot'>").append("Hello!")
            );
        }
        else if (active_tab == 3) {
            $("#inbox3").append(
                $("<li id='bot'>").append("Hello!")
            );
        }
    }
    else {
        if (active_tab == 1) {
            $("#inbox1").append(
                $("<li id='bot'>").append("Sorry, I do not understand!")
            );
        }
        else if (active_tab == 2) {
            $("#inbox2").append(
                $("<li id='bot'>").append("Sorry, I do not understand!")
            );
        }
        else if (active_tab == 3) {
            $("#inbox3").append(
                $("<li id='bot'>").append("Sorry, I do not understand!")
            );
        }
    }
}