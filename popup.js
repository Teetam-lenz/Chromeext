document.addEventListener('DOMContentloaded', function(){
  var checkPageButton = document.getElementById('');
  checkPageButton.addEventListener('', function() {
    
    chrome,tabs,getSelected(null, function(tab) {
      alert(" Words ");
    });
  }, false);
}, false);
