function lighter(){ 
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update({url: "http://googleweblight.com/?lite_url=" + tabs[0].url});
})}
  
chrome.browserAction.onClicked.addListener(lighter);
chrome.commands.onCommand.addListener(function(command) {
  if (command == "light") {
	lighter()
  }
});