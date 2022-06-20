

console.log('background running');



chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request.nestle)
    if (request.nestle === true){
      chrome.action.setIcon({path: 'nestle.png'});
    }else{
      chrome.action.setIcon({path: 'nonestle.png'});
    }
  }
);
