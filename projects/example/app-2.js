/**
 var main = function () {
    "use strict";

    $(".comment-input button").on("click", function (event) {
        console.log("Hello World!");
    });
};

$(document).ready(main);
*/

/* 
var main = function () {
    "use strict";

    $(".comment-input button").on("click", function (event) {
        var $new_comment = $("<p>"),
            comment_text = $(".comment-input input").val();

        $new_comment.text(comment_text);
     
        $(".comments").append($new_comment);
    });
   $(".comment-input input").on("keypress", function (event) {
    var $new_comment;

    if (event.keyCode === 13) {
        if ($(".comment-input input").val() !== "") {
            var $new_comment = $("<p>").text($(".comment-input input").val());
            $new_comment.fadeIn();
            $(".comments").append($new_comment);
            $(".comment-input input").val("");
        } else console.log("empty field");
    }
});

};

$(document).ready(main);
*/

/*
var main = function () {
    "use strict";

    $(".comment-input button").on("click", function (event) {
        var $new_comment;

        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");
        } else console.log("empty field"); 
    });

    $(".comment-input input").on("keypress", function (event) {
        var $new_comment;

        if (event.keyCode === 13) {
            if ($(".comment-input input").val() !== "") {
                $new_comment = $("<p>").text($(".comment-input input").val());
                $new_comment.hide();
                $(".comments").append($new_comment);
                $new_comment.fadeIn();
                $(".comment-input input").val("");
            } else console.log("empty field");
        }
    });
};

$(document).ready(main);

*/

var main = function () {
    "use strict";

    var addCommentFromInputBox = function () {
        var $new_comment;

        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");
        } else console.log("empty field");
    };

    $(".comment-input button").on("click", function (event) {
        addCommentFromInputBox();
    });

    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });
};

$(document).ready(main);
