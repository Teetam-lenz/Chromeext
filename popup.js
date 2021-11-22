document.addEventListener('DOMContentloaded', function(){
  var checkPageButton = document.getElementById('Click This');
  checkPageButton.addEventListener('', function() {
    
    chrome,tabs,getSelected(null, function(tab) {
      alert("pop it like its hot");
    });
  }, false);
}, false);
