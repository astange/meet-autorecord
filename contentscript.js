console.log('Autorecord: starting')

var inMeeting = false

var observer = new MutationObserver(function(mutations) {
  var newInMeeting = document.querySelector('div[data-second-screen') != null

  if (newInMeeting && !inMeeting) {
    inMeeting = true
    document.querySelectorAll('div[role="button"]').forEach(function(match) {
        if (match.innerHTML.includes("Record")) {
            match.click()
        }
    })
  }
});
observer.observe(document, { childList: true, attributes: true, subtree: true})