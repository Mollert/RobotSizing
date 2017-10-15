
var units = "metric";

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

$("#sizeMe").on("click", function(event) {

    var rR = $("#robotReach").val();
    var pM = $("#partMass").val();

    if (units === "metric") {
        if (rR > 2655) {
            alert("You entered " + rR + " for the Robot Reach\nThe maximum reach of these robots is 2655mm.")
            event.preventDefault();
        }
        else if (pM > 360) {
            alert("You entered " + pM + " for the Part Mass\nThe maximum mass that these robots can life is 360kg.")
            event.preventDefault();
        }
    }

    if (units === "us") {
        if (rR > 67437) {
            alert("You entered " + rR + " for the Robot Reach\nThe maximum reach of these robots is 67437in.")
            event.preventDefault();
        }
        else if (pM > 793.8) {
            alert("You entered " + pM + " for the Part Mass\nThe maximum mass that these robots can lift is 793.8lbs.")
            event.preventDefault();
        }
    }

});
