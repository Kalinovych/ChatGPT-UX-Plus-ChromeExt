chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'adjustStyles') {
        // Add your custom style adjustments here
    }
});
