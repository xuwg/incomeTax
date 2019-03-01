window.onload = function() {
    var rows = $("shuilvbiao").children;
    var len = ["39px","180px","180px","60px","80px"];
    for(var i=0; i<rows.length; ++i) {
        var cols = rows[i].children;
        for(var j=0; j<cols.length; ++j) {
            cols[j].style.width = len[j];
        }
    }
}