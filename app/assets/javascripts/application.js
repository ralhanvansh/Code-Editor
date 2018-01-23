// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require turbolinks
//= require_tree .


$(document).ready(function(){

  // $("#HtmlText").load("html.txt");
  // $("#CSSText").load("css.txt");
  // $("#JSText").load("js.txt");

      var defaultHTMLInput = "<div class='loader'></div>\n<div class='loader second'></div>";
			var defaultCSSInput =  ".loader{"+
    								"\nbackground:grey;"+
			    					"\nborder: 4px dashed white;"+
    								"\nborder-radius: 50%;"+
    								"\nwidth: 100px;"+
								"\nheight: 100px;"+
								"\nanimation: spin 15s linear infinite;"+
								"\nmargin:0 auto;"+
								"\nmargin-top:55px;"+
								"\n}"+
								"\n@keyframes spin {"+
								    "\n0% { transform: rotate(0deg); }"+
								    "\n100% { transform: rotate(360deg);"+
								    "}"+
								 "\n }"+
								"\n\n.second {"+
			    					"\nbackground-color:tomato;"+
			    					"\nposition:relative;"+
			    					"\nheight:50px;"+
			    					"\nwidth:50px;"+
			    					"\nanimation-duration:8s;"+
								"\ntop:-67px;"+
			    					"\nright:42px;"+
			    					"\nanimation-direction:reverse;"+
			    					"}";


  $("#HtmlText").html(defaultHTMLInput);
  $("#CSSText").html(defaultCSSInput);

  $("#ResultArea").append( "<div id = 'htmlpart'>" +  defaultHTMLInput + "</div>",'<div id = "csspart"><style>' + defaultCSSInput + "</style></div>", "<div id='jspart'><script src='https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'>" + "</script></div>");

  $("#HtmlText").on('keyup', function(){
    $("#ResultArea").find("#htmlpart").html($(this).val());
  });

  $("#CSSText").on('keyup', function(){
    $("#ResultArea").find("#csspart").html("<style>" + $(this).val() + "</style>");
  });

  $("#JSText").on('change', function(){
    $("#ResultArea").find("#jspart").remove();
    $("#ResultArea").append('<div id="jspart"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js">'+ $(this).val() + '</script></div>');
  });

  $("#btn-result").on('click',function(){
    $("#ResultArea").find("#jspart").remove();
    $("#ResultArea").append('<div id="jspart"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js">'+ $("#JSText").val() + '</script></div>');
	 });
});
