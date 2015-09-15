chrome.runtime.onMessage.addListener(function(msg, sender, callback) {
    console.log("Message recieved from [" + sender.id+ "]");
    console.log(msg.fontname+"-"+msg.csspath);
    $(msg.csspath).css('font-family', 'Roboto');
    console.log("font set done.");
});
