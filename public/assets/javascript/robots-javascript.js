
var units = "metric";
// when the radio button is changed, it changes the placeholders to metric or in
$(":radio").on("change", function() {

	$(":radio").not(':checked').prop("checked", false);
	if (this.value == "metric") {
        units = "metric";
        $("#sizeX, #sizeY, #sizeZ, #gravityX, #gravityY, #gravityZ, #robotReach").attr("placeholder", "mm");
        $("#partMass").attr("placeholder", "kg");
    }
    else {
        units = "us";
        $("#sizeX, #sizeY, #sizeZ, #gravityX, #gravityY, #gravityZ, #robotReach").attr("placeholder", "in");
        $("#partMass").attr("placeholder", "lbs");
    }
});

// This is error handeling - alert if - reaching to far or part weigth is to heavy
$("#sizeMe").on("click", function(event) {

    var rR = $("#robotReach").val();
    var pM = $("#partMass").val();

    if (units === "metric") {
        if (rR > 2832) {
            alert("You entered " + rR + " for the Robot Reach\nThe maximum reach of these robots is 2832mm.")
            event.preventDefault();
        }
        else if (pM > 700) {
            alert("You entered " + pM + " for the Part Mass\nThe maximum mass that these robots can lift is 700kg.")
            event.preventDefault();
        }
    }

    if (units === "us") {
        if (rR > 71932.8) {
            alert("You entered " + rR + " for the Robot Reach\nThe maximum reach of these robots is 71932.8in.")
            event.preventDefault();
        }
        else if (pM > 1543.5) {
            alert("You entered " + pM + " for the Part Mass\nThe maximum mass that these robots can lift is 1543.5lbs.")
            event.preventDefault();
        }
    }

});
