

console.log('background running');



chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request.nestle)
    if (request.nestle === true){
      chrome.action.setIcon({path: 'img/nestle48.png'});
    }else{
      chrome.action.setIcon({path: 'img/nonestle48.png'});
    }
  }
);
