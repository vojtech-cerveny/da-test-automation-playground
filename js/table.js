$(document).ready(function () {
  function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  $('table tr:nth-child(5) td:nth-child(5)').text(getRandomArbitrary(40, 50))
  $('table tr:nth-child(3) td:nth-child(3)').text(getRandomArbitrary(30, 40))
});

