

console.log('background running');

var tab_logo = {};
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    tab_logo[sender.url] = request.nestle
    change_icon(request.nestle)
  }
);

chrome.tabs.onActivated.addListener(function(activeInfo) {
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    change_icon(tab_logo[tabs[0].url])
});
});

function change_icon(is_from_nestle){
  if (is_from_nestle === true){
    chrome.action.setIcon({path: 'img/nestle48.png'});
  }else{
    chrome.action.setIcon({path: 'img/nonestle48.png'});
  }
}