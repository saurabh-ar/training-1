yuktix = {};

yuktix.Ajax = {

	addSpinner : function(messageDivId, spinner) {

		$(messageDivId).html('')

		if (spinner) {

			var content = '<div> <img src="/asset/css/spinner.gif" alt="spinner"/></div>';
		}

		else {

			var content = "<div class='progress progress-striped active'><div class='progress-bar' role='progressbar' aria-valuenow='100'\
	    	aria-valuemin='0' aria-valuemax='100' style='width: 100%;'><span class='sr-only'>please wait</span></div></div>";
		}

		$(messageDivId).html(content);

	},

	show : function(messageDivId, content) {
		$(messageDivId).html(content);
	},

	post : function(dataObj, options, spinner) {
		console.log("postdata =>");
		/* @imp define all properties that we wish to override */
		var defaults = {
			type : "POST",
			dataType : "json",
			timeout : 9000,
			onDoneHandler : undefined
		}

		var settings = $.extend({}, defaults, options);
		this.addSpinner(settings.messageDivId, spinner);

		var xmlRequest = $.ajax({
			url : dataObj.endPoint,
			type : settings.type,
			dataType : settings.dataType,
			data : dataObj.params,
			timeout : settings.timeout,
			processData : true
		});

		xmlRequest.fail(function(response) {
			yuktix.Ajax.show(settings.messageDivId, response);
		});

		xmlRequest.done(function(response) {
			console.log("response =>" + response);

			if (settings.dataType == 'text') {
				yuktix.Ajax.show(settings.messageDivId, response);
			}

			if (settings.dataType == 'json') {
				yuktix.Ajax.show(settings.messageDivId, response.message);
			}

			if (typeof settings.onDoneHandler !== "undefined") {
				settings.onDoneHandler(dataObj, response);
			}
		});

	}
}