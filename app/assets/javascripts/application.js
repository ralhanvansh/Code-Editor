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
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .


$(document).ready(function(){

  var html = $("#HtmlText").load("html.txt");
  var css = $("#CSSText").load("css.txt ");
  var js = $("#JSText").load("js.txt");

  var result = $("#ResultArea").contents().find("body");
  result.html('<span id="htmlpart"></span><style id="csspart"></style><script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" id="jspart"></script>');

  result.find("#htmlpart").html(html);
  result.find("#csspart").html(css);
  result.find("#jspart").html(js);

  $("#HtmlText").on('keyup', function(){
    result.find("#htmlpart").html($(this).val());
  });

  $("#CSSText").on('keyup', function(){
    result.find("#csspart").html($(this).val());
  });

  $("#JSText").on('keyup', function(){
    result.find("#jspart").html($(this).val());
  });

  $("#btn-result").on('click',function(){
	  p.find("#jspart").remove();
	  p.append('<script  src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" id="jspart">'+$("#jscontainer").val()+'</script>');
	 });
});
