$(document).ready(function() {

    $('td:contains("Not Available")').addClass("noSelect");
    $('td').not('.noSelect').mouseover(function() {
        $(this).css('cursor', 'pointer');
    })
    $("td").not("td:first-child").click(function(e) {
        var active = $(e.target).not(".noSelect");
        if (active.is(".selected")) {
        active.css("background","#eeffe6");
        active.css("font-weight","normal");
        active.css("color","#000");
        active.removeClass("selected");
        } else {
            active.css("background","#9ed034");
            active.css("font-weight","bold");
            active.css("color","#FFF");
            active.addClass("selected");
        }
    });

    });