var Liker = function() {
    var that = this;
    that.like = 1;

    $("#like").on("click", function(e) {
        e.preventDefault();

        that.like++;
        $(this).html(that.like);

        $("#like_count").append("<li>"+new Date().toString()+"</li>");
    });
};
