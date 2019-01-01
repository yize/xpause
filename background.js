chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('Pause ' + tab.url);
  chrome.tabs.executeScript({
    code: 'setTimeout(function(){debugger;},0)'
  });
});
