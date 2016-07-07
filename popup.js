document.addEventListener('DOMContentLoaded', function() {
    var queryInfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs.query(queryInfo, function(tabs) {
        var currTab = tabs[0];

        document.getElementById("setbtn").addEventListener("click", function(){
            var font_name = document.getElementById("fontname").value;
            var css_path = document.getElementById("csspath").value;
            var font_msg = {
                "fontname": font_name,
                "csspath": css_path
            }
            chrome.tabs.sendMessage(currTab.id, font_msg, null);
        }, false);
    });
});
