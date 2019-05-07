function sendMessage(message, inbox) {
    var myInbox = document.getElementById(inbox);
    var myTextbox = document.getElementById(message);

    var newMessage = document.createElement("li");
    newMessage.innerHTML = myTextbox.value;
    myInbox.appendChild(newMessage)
    myTextbox.value = "";
}

function openConversation(evt, conversationName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(conversationName).style.display = "block";
    evt.currentTarget.className += " active";
}

jQuery(function(){
    $("#button1").click(function(){
        $("#messages1").append(
            $("<li>").append(
                $("#textbox1").val()
            )
        );
        $("#textbox1").val("");
    });
});

jQuery(function(){
    $("#button2").click(function(){
        $("#messages2").append(
            $("<li>").append(
                $("#textbox2").val()
            )
        );
        $("#textbox2").val("");
    });
});

jQuery(function(){
    $("#button3").click(function(){
        $("#messages3").append(
            $("<li>").append(
                $("#textbox3").val()
            )
        );
        $("#textbox3").val("");
    });
});

jQuery(function(){
    $("#button4").click(function(){
        $("#messages1").empty();
        $("#textbox3").val("");
    });
});