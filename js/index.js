function bindImageSwapper(){
	//Declare the variables we need in the proper scope.
	let $startImage = null;
	let $endImage = null;

	//given two jquery objects. exchange the src and alt attribute of each.
	function swapImage($first, $second){
		//Retrieve src and alt of both images.
		const startImageSrc = $first.attr("src");
		const startImageAlt = $first.attr("alt");
		const endImageSrc = $second.attr("src");
		const endImageAlt = $second.attr("alt");

		//Assign the src to both img tags.
		$endImage.attr({
			src: startImageSrc,
			alt: startImageAlt
		});
		$startImage.attr({
			src: endImageSrc,
			alt: endImageAlt
		});

		//clear the references to each variable.
		$startImage = null;
		$endImage = null;
	};

	/*
		on mousedown store a reference to the image that was clicked.
		on mouseup store a reference to the image that was relieved.
	*/
	$(".js-image-container")
		.on("mousedown touchstart", ".is-swappable", function(e){
			/*
				I originally added a prevent default to the event,
				but after playing with it I prefer the UX of being able to see the image as it's dragged.
				This does change the cursor style back to the pointer though, so its not all positive.
			*/
		 	//e.preventDefault();
			$startImage = $(this);
		})
		.on("mouseup touchend", ".is-swappable", function(e){
			e.preventDefault();
			$endImage = $(this);
			//Verify there is a start image and invoke the swapImage function if so.
			$startImage && swapImage($startImage, $endImage);
		});
	/*
		This functionality is true to the spirit of the challenge,
		but for actual production use - accounting for other attributes might be neccesary.
		Removing and appending the image nodes would be another possible solution.
	*/
}

//Initalize the image swapper functionality on document load.
$(document).ready(function(){
	bindImageSwapper();
});
