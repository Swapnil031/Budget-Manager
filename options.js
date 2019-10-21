$(function(){
	$('#save_limit').click(function(){
		var limit = $('#limit').val();
		if(limit){
			chrome.storage.sync.set({'limit': limit}, function(){
				
			});
		}
	});

	$('#reset_total').click(function(){
		chrome.storage.sync.set({'total': 0});
		
	});

	$('#reset_limit').click(function(){
		chrome.storage.sync.set({'limit': 0});
		
	});

	$('#close').click(function(){
		close();
	});

});