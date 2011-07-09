$(document).ready( function() {
	var song;
    $("a.play").click(function(e) {
      initialize();
      console.log($(this).attr('href'));
      song = new buzz.sound($(this).attr('href'));
      $("#player").show();
      $("#now_playing").html($(this).data('name'));
      song.play()
		.bind( "timeupdate", function() {
		   var timer = buzz.toTimer( this.getTime() );
		   $("#timer").html(timer);
		});
      e.preventDefault();
    });

	$("#pause").click(function(e){
		console.log('pausing');
		song.togglePlay();
		e.preventDefault();
	});

    function initialize() {
      if (song)
        song.stop();
      $("#timer").html('');
    }
});
