if (!localStorage["uuid"]){
    localStorage['uuid'] = s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
}

chrome.webRequest.onHeadersReceived.addListener(
    function(info) {
        console.log('received header');
        var headers = info.responseHeaders;
        for (var i=headers.length-1; i>=0; --i) {
            var header = headers[i].name.toLowerCase();
            if (header == 'x-frame-options' || header == 'frame-options') {
                headers.splice(i, 1); // Remove header
            }
        }
        info.type = 'main_frame';
        return {responseHeaders: headers};
    },
    {
        urls: [ '*://*/*' ], // Pattern to match all http(s) pages
        types: [ 'main_frame', 'sub_frame' ]
    },
    ['blocking', 'responseHeaders']
);

function trigger(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: 'start',
            keyCode: localStorage["shortup_key_code"],
            width: localStorage['width'],
            height: localStorage['height'], 
            uuid: localStorage['uuid']
        }, function(response) {
            if (response){
                console.log(response.farewell);
            }
        });
    });
}
var interval = window.setInterval(function(){trigger();}, 1000);
// add analytics data collector
function s4() {return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);};


