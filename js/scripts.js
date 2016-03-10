var pingPong = function(pingNumber) {
var showMe = new Array();
for (var i =1; i <= pingNumber; i++) {
	if ((i % 15) === 0) {
	showMe.push("PingPong");
	} else if ((i % 5) === 0) {
	showMe.push("Pong");
	} else if ((i % 3) === 0) {
	showMe.push("Ping");
	} else {
	showMe.push(i);
	}
}
return showMe
};

$(document).ready(function() {
  $("form#pingMe").submit(function(event) {
      var pingNumber = parseInt($("input#userNumber").val());
	var result = pingPong(pingNumber)
	var newResult = result.join("<br />");

	$("#result").append(newResult);

    event.preventDefault();

  });

});
