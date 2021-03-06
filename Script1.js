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

//var most_recent_message;

const enter_key = "13";
var id_tracker = 3;
var this_id;

class Messages {
    constructor(id) {
        this.inbox = "<ul class='messages' id='inbox" + id + "'></ul>";
        this.input_box = "<input class='chat_box' id='input" + id + "' typeof='text'>";
        //this.send_button = "<button class='send_button' data-id=" + id + ">Send</button>";
        this.clear_button = "<button class='clear_button' data-id=" + id + ">Clear Conversation</button>";
    }
}

class Conversation extends Messages {
    constructor(id, name) {
        super(id);
        this.id = id;
        //console.log("new id = " + this.id);
        this.name = name;
        this.tab_link = "<button class='name_button' data-id=" + this.id + ">" + this.name + "</button>";
        this.content = "<div class='conversation' data-id=" + this.id + "></div>";
        this.header = "<h3>Conversation " + this.id + "</h3>";
    }
}

jQuery(function () {
    $(".name_button").click(function () {
        this_id = $(this).attr("data-id");
        $(".conversation").hide();
        $(".conversation[data-id=" + this_id + "]").show();
    });
});

document.addEventListener("click", function () {
    $(".name_button").click(function () {
        this_id = $(this).attr("data-id");
        $(".conversation").hide();
        $(".conversation[data-id=" + this_id + "]").show();
    });
});


// add new conversation
jQuery(function () {
    $("#new_conversation_button").click(function () {
        var newName = $("#new_name").val();
        var newConversation = new Conversation(++id_tracker, newName);

        $("#title").html(newConversation.example_title);
        $(".tab").append(newConversation.tab_link);
        $("body").append(newConversation.content);
        $(".conversation[data-id=" + newConversation.id + "]").append(newConversation.header);
        $(".conversation[data-id=" + newConversation.id + "]").append(newConversation.inbox);
        $(".conversation[data-id=" + newConversation.id + "]").append(newConversation.input_box);
        //$(".conversation[data-id=" + newConversation.id + "]").append(newConversation.send_button);
        $(".conversation[data-id=" + newConversation.id + "]").append(newConversation.clear_button);
        $("#new_name").val("");
    });
});

// a jQuery function to handle all three SEND buttons...
jQuery(function(){
    $(".send_button").click(function () {
        var most_recent_message = $("#input" + this_id).val();
        console.log(most_recent_message);
        $("#inbox" + this_id).append("<li id='me'>" + most_recent_message + "</li>");
        $("#input" + this_id).val("");
        chat_bot(this_id, most_recent_message);
    });
});

// append message to inbox on Enter key press
$(document).keypress(function (e) {
    var keycode = (e.keycode || e.which);
    if (keycode == enter_key) {
        var most_recent_message = $("#input" + this_id).val();
        $("#inbox" + this_id).append("<li id='me'>" + most_recent_message + "</li>");
        $("#input" + this_id).val("");
        chat_bot(this_id, most_recent_message);
    }
});

// a jQuery function to handle all three CLEAR buttons...
jQuery(function(){
    $(".clear_button").click(function () {
        $("#inbox" + this_id).empty();
    });
});

// create some automatic responses
function chat_bot(id, message) {
    if (message == "Hi" || message == "hi") {
        $("#inbox" + id).append("<li id='bot'>Hello!</li>");
    }
    else if (message == "Hello" || message == "hello") {
        $("#inbox" + id).append("<li id='bot'>Hi!</li>");
    }
    else if (message == "How are you?" || message == "how are you?" || message == "How are you" || message == "how are you") {
        $("#inbox" + id).append("<li id='bot'>I'm excellent!! How are you?</li>");
    }
    else if (message == "Fine" || message == "fine") {
        $("#inbox" + id).append("<li id='bot'>Fine and dandy!</li>");
    }
    else if (message == "Great" || message == "great") {
        $("#inbox" + id).append("<li id='bot'>That's great m8!</li>");
    }
    else if (message == "Excellent" || message == "excellent") {
        $("#inbox" + id).append("<li id='bot'>Eggcellentttttt!</li>");
    }
    else {
        $("#inbox" + id).append("<li id='bot'>Sorry, I do not understand!</li>");
    }
}