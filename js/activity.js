$(document).ready(function() {
    var notTD = $(".noSelect")
    $("td").click(function(e) {
        $(e.target).not(".noSelect").toggleClass("highlight");
    });
});