$(document).ready(function() {
  const over3 = confirm("Are you over 3 foot tall?");

  if (over3) {
    $('#rides').show();
  } else {
    $('#under-3').show();
  }
});