console.log("Home free");


var units = "metric";

$(":radio").on("click", function() {
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




