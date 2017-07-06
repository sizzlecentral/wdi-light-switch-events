document.addEventListener('DOMContentLoaded', function(event) {

  var lightSwitch = document.querySelector('button');
  lightSwitch.addEventListener('click', function(event) {
    lightSwitch.className = 'switch off';
    var body = document.querySelector('body');
    body.className = 'dark';
    var status = document.querySelector('.status');
    status.innerText = 'Hey, who turned off the lights?';
  });


});
