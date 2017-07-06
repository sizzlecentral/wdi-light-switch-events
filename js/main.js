document.addEventListener('DOMContentLoaded', function(event) {

  var lightSwitch = document.querySelector('button');
  var body = document.querySelector('body');
  var status = document.querySelector('.status');

  lightSwitch.addEventListener('click', function(event) {

    if (lightSwitch.className === 'switch on') {
      lightSwitch.className = 'switch off';
      body.className = 'dark';
      status.innerText = 'Hey, who turned off the lights?';
    } else {
      lightSwitch.className = 'switch on';
      body.className = 'light';
      status.innerText = "It's so bright in here!";
    }
  });
});
