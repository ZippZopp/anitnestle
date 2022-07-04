var tab_logo = {};
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    tab_logo[sender.url] = request.nestle
    change_icon(request.nestle)
  }
);

chrome.tabs.onActivated.addListener(function(activeInfo) {
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, {want_info: "nestle"}, function(response) {
      change_icon(response.is_from_nestle)
    });
});
});

function change_icon(is_from_nestle){
  if (is_from_nestle === true){
    chrome.action.setIcon({path: 'img/nestle48.png'});
  }else{
    chrome.action.setIcon({path: 'img/nonestle48.png'});
  }
}