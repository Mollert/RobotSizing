console.log("Works");

var units = "metric";

$("#testing").on("click", function() {
    alert("This is in the javascript");
});

$(":radio").on("change", function() {
    console.log("Are we here yet");

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
	moving();
});    

function moving() {
    console.log(units + " inside");
};




