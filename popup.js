function refreshPage() {
    chrome.tabs.reload();
}

function alert() {
    createMessage("alert");
}

function floatLeft() {
    createMessage("left");
}

function createMessage(message) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        if (tabs.length == 0) {
            console.log("could not send message to current tab");
        } else {
            chrome.tabs.sendMessage(tabs[0].id, {greeting: message}, function (response) {
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('alert-button').addEventListener('click', alert);
    document.getElementById('refresh-button').addEventListener('click', refreshPage);
    document.getElementById('float-left-button').addEventListener('click', floatLeft);
});



