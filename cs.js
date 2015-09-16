chrome.runtime.onMessage.addListener(function(msg, sender, callback) {
    console.log("Message recieved:[" + msg.csspath + " , " + msg.fontname +"]");
    $('head').append('<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family='+msg.fontname+'">');
    $(msg.csspath).css('font-family', msg.fontname);
    console.log("Font set.");
});
