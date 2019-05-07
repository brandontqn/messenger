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
jQuery(function(){
    $(".name_button").click(function(){
        $(".conversation").hide();
        var thisID = $(this).attr("data-id");
        if(thisID == 1){
            $('.conversation[data-id="1"]').show();
        }
        else if(thisID == 2){
            $('.conversation[data-id="2"]').show();
        }
        else if(thisID == 3){
            $('.conversation[data-id="3"]').show();
        }
    });
});

// a jQuery function to handle all three SEND buttons...
jQuery(function(){
    $(".send_button").click(function(){
        var thisID = $(this).attr("data-id");
        if(thisID == 1){
            $("#messages1").append(
                $("<li>").append(
                    $("#textbox1").val()
                )
            );
            $("#textbox1").val("");
        }
        else if(thisID == 2){
            $("#messages2").append(
                $("<li>").append(
                    $("#textbox2").val()
                )
            );
            $("#textbox2").val("");
        }
        else if(thisID == 3){
            $("#messages3").append(
                $("<li>").append(
                    $("#textbox3").val()
                )
            );
            $("#textbox3").val("");
        }
    });
});

// a jQuery function to handle all three CLEAR buttons...
jQuery(function(){
    $(".clear_button").click(function(){
        var thisID = $(this).attr("data-id");
        if(thisID == 1){
            $("#messages1").empty();
        }
        else if(thisID == 2){
            $("#messages2").empty();
        }
        else if(thisID == 3){
            $("#messages3").empty();
        }
    });
});