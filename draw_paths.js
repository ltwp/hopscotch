function draw_paths(){
	// draw_paths.js will place choose block locations and draw lines, returning block locations.
	var block_locations = [];

	var n_blocks = $('.block').length;
	var n_lines = n_blocks-1;

	// Ordered pairs in TOP, LEFT
	// in PIXEL / PERCENTAGE amounts

	block_locations[1] = 50;
	block_locations[2] = 0.5;
	console_log(block_locations);

	return block_locations;
}


//<path id="path_0" stroke="#000000" fill-opacity="0" stroke-width="2" d="M100,250 c0,-150 300,-180 300,50" />
           //path... d="M#,# c#,# #,# #,#" 
           //         start point x,y ; relative x,y of first control, second control, end point x,y -->

