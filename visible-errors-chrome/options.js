window.onload = function() {
	// Initialize the option controls.
	chrome.storage.local.get(["hostlist"], function(items){
		options.hostlist.value = items.hostlist || '';
	});
	
	document.getElementById('fe_save').addEventListener('click', function() {
		chrome.storage.local.set({
			hostlist: options.hostlist.value,
		}, function() {
			document.getElementById('results').innerHTML = '<b>Saved.</b>';
		});
	});
};
