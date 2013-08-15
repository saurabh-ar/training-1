
		  
		    
  yuktix={};
    
      yuktix.Ajax = {
      
      addSpinner:function(messageDivId) {
	  $(messageDivId).html('');
	  var content = '<div> <img src="/asset/css/spinner.gif" alt="spinner"/></div>'  ;
	  $(messageDivId).html(content);
	
      },

      show: function (messageDivId,content) {
	  $(messageDivId).html(content);
      },

      post:function (dataObj,options) {
	  console.log("postdata =>" );
	  /* @imp define all properties that we wish to override */
	  var defaults = {
	      type : "POST",
	      dataType : "json",
	      timeout : 9000,
	      onDoneHandler : undefined 
	  }

	  var settings = $.extend({}, defaults, options);
	  this.addSpinner(settings.messageDivId);
	  

	  var xmlRequest = $.ajax({
	      url: dataObj.endPoint,
	      type: settings.type ,
	      dataType: settings.dataType,
	      data :  dataObj.params,
	      timeout: settings.timeout,
	      processData:true
	  }) ;

	  xmlRequest.fail(function(response) {
	      yuktix.Ajax.show(settings.messageDivId,response);
	  });

	  xmlRequest.done(function(response) {
	      console.log("response =>" + response);
	      
	      if(settings.dataType == 'text') {
		  yuktix.Ajax.show(settings.messageDivId,response);
	      }
	      
	      if(settings.dataType == 'json') {
		  yuktix.Ajax.show(settings.messageDivId,response.message);
	      }

	      if(typeof settings.onDoneHandler !== "undefined") {
		  settings.onDoneHandler(dataObj,response);
	      }
	  }) ;
	  
      }


  }