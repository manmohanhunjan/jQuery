$(document).ready(function(){
    $.get("myhtmlpage.html", function() {
        myCallBack(param1, param2);
    });
})