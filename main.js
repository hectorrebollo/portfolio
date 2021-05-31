(function() {
  'use strict';

  var section = document.querySelectorAll(".nav-section");
  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });

  function setActiveNav() {
    console.log('hello');
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        if(document.querySelector('.active')) {
          document.querySelector('.active').classList.remove('active');
        }
        document.querySelector('a[href*=' + i + ']').classList.add('active');
      }
    }
  }

  window.onscroll = setActiveNav;
})();
