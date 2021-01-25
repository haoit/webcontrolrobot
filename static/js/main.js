// This timeout, started on mousedown, triggers the beginning of a hold
var holdStarter = null;

// This is how many milliseconds to wait before recognizing a hold
var holdDelay = 500;

// This flag indicates the user is currently holding the mouse down
var holdActive = false;

// MouseDown
$('#forwardbutton').mousedown(onMouseDown);
function onMouseDown(){
    // Do not take any immediate action - just set the holdStarter
    //  to wait for the predetermined delay, and then begin a hold
    holdStarter = setTimeout(function() {
		holdStarter = null;
		holdActive = true;
		// begin hold-only operation here, if desired
        console.log("hold")
	}, holdDelay);
}

// MouseUp
$('#forwardbutton').mouseup(onMouseUp);
function onMouseUp(){
    // If the mouse is released immediately (i.e., a click), before the
    //  holdStarter runs, then cancel the holdStarter and do the click
	if (holdStarter) {
		clearTimeout(holdStarter);
		// run click-only operation here
        console.log("click")
	}
    // Otherwise, if the mouse was being held, end the hold
	else if (holdActive) {
		holdActive = false;
		// end hold-only operation here, if desired
        console.log("un hold")
	}
}

// OnClick
// not using onclick at all - onmousedown and onmouseup take care of everything

// Optional add-on: if mouse moves out, then release hold
$('#forwardbutton').mouseout( function(){
    onMouseUp();
});
