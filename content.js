chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

        switch(request.greeting) {
            case 'alert':
                alert("Alert message");
                break;

            case 'left':
                alert("left message");
                break;
        }

        // sendResponse({farewell: "I'm good, thank you popup!"});
    });