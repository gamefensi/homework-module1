$(document).ready(function () {

    $('td:contains("Not Available")').addClass("noSelect");
    $('td').slice(1).not('.noSelect').mouseover(function () {
        $(this).css('cursor', 'pointer');
    })
    $("td").not("td:first-child").click(function (e) {
        var active = $(e.target).not(".noSelect");
        if (active.is(".selected")) {
            active.css("background", "#eeffe6");
            active.css("font-weight", "normal");
            active.css("color", "#000");
            active.removeClass("selected");
        } else {
            active.css("background", "#9ed034");
            active.css("font-weight", "bold");
            active.css("color", "#FFF");
            active.addClass("selected");
        }
    });

    $("td").click(function () { //user select a table data cell
        var content = $(this).text(); //get content of cell
        var colIndex = $(this).index();
        var cliff = $("th").eq(colIndex).text();
        if (content != "Not Available") { //check if content does not contain a particular string
            $(this).toggleClass("tdhighlight"); //add or remove class when cell is selected

            if ($(this).hasClass("tdhighlight")) { //check if selected cell has class
                $('#displaySelected').css("visibility", "visible"); //make display box visible
                $('#displaySelected').css("margin-top", "2em"); // add spaces above display box
                $('#result').append("<p>" + content + " at " + cliff + "</p>"); //add child element with contents of cell

            } else { //if selected cell don't have class
                $('#result p:contains(' + content + ')').remove(); //remove child element

                if ($('#result').has('p').length == false) { //check if there are any child elements within parent
                    $('#displaySelected').css("visibility", "hidden"); //make display box hidden
                    $('#displaySelected').css("margin-top", "0"); //remove spaces above display box
                }
            }
        }
    });
});