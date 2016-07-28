'use strict'
app.run(function(storage){
  $(window).keydown(function(event) {
    if (event.keyCode == 82) {
      location.reload()
    }
  });
});
