document.getElementById('apply').addEventListener('click', () => {
    const widthSetting = document.getElementById('widthSetting').value;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'adjustStyles', widthSetting });
    });
});
