
$(document).ready(function() { 
    var options = { 
        target:        '#output1',   // target element(s) to be updated with server response 
        beforeSubmit:  showRequest,  // pre-submit callback 
       complete: function(r){
       if(r.responseText == 1)
	   sss();
	   else
	   errr(r.responseText);
    }
    }; 
 
    $('#form').ajaxFormnow(options); 
}); 

function showRequest(formData, jqForm, options) { 
   
    var queryString = $.param(formData); 
   $('#ajax-loading').show();
   $('#ajax-loading2').show();
   window.scrollTo(0,0);
    return true; 
} 
 
function sss(responseText)  { 
     $('#ajax-loading').hide();
	 $('#ajax-loading2').hide();
	 $("#success").show().delay(2000).fadeOut();
	 
	
     if(urls != "")
     window.location.href = urls;
	 
} 



function errr(msg)  { 
    
     $('#ajax-loading').hide();
	 $('#ajax-loading2').hide();
	 $("#error").show();
	
	  $("#error").show().delay(4000).fadeOut();
	 document.getElementById("error").innerHTML=msg;
     //window.location.href = "s";
} 

// ops
$(document).ready(function() { 
    var options = { 
        target:        '#output1',   // target element(s) to be updated with server response 
        beforeSubmit:  showRequesty,  // pre-submit callback 
       complete: function(r){
       if(r.responseText == 1)
	   sssy();
	   else
	   errry(r.responseText);
    }
    }; 
 
    $('#formy').ajaxFormnow(options); 
}); 

function showRequesty(formData, jqForm, options) { 
   
    var queryString = $.param(formData); 
   
   $('#ajax-loading2').show();
   //window.scrollTo(0,0);
    return true; 
} 
 
function sssy(responseText)  { 
   
	 $('#ajax-loading2').hide();
	// $("#successy").show().delay(2000).fadeOut();
	 
	
	 if (typeof opps != 'undefined')
	 {
	 document.getElementById("ajay").innerHTML="";
	 document.getElementById("ajay2").innerHTML="";
	 $('#closeit').click(); // This will work.
     $('#closeit').trigger('click'); // This will work.
	
	 }
	 else
	 {
		if(document.getElementById("email").value == "admin@fundi.com")
		window.location.href="sysadmin";
		else  
		window.location.href = "d"; 
	 }
	 } 



function errry(msg)  { 
    
    
	 $('#ajax-loading2').hide();
	 $("#errory").show();
	  $("#errory").show().delay(4000).fadeOut();
	 document.getElementById("errory").innerHTML=msg;
     //window.location.href = "s";
} 

//
jQuery().ready(function () {
	jQuery("#checkstore5").click(function() {
		
		storeurl = jQuery("#url").val();
		if(storeurl.length > 0)
			{
			jQuery.ajax({
			  type: "GET",
			  data: {store_url : storeurl},
			  url: "check_domain5.php",
			  dataType: "html",
			  success: function(html){
				  if(html == 0) {
					   jQuery("#store_msg").css('color','green');
					jQuery("#store_msg").html("Congratulation store address is available");
					jQuery("#avail_url").attr("value",'1');
				  } else {
					  
					   jQuery("#store_msg").css('color','red');
					 jQuery("#store_msg").html("Sorry Already Exists. Try Aonther name");
				 	 jQuery("#avail_url").attr("value",'0');
				 }
			  }

			});
		}
	});
});	


jQuery().ready(function () {
	jQuery("#checkstore").click(function() {
		
		storeurl = jQuery("#url").val();
		if(storeurl.length > 0)
			{
			jQuery.ajax({
			  type: "GET",
			  data: {store_url : storeurl},
			  url: "check_domain.php",
			  dataType: "html",
			  success: function(html){
				  if(html == 0) {
					   jQuery("#store_msg").css('color','green');
	jQuery("#store_msg").html("Congratulation URL is available<br />www.fundi.co/fundraiser/"+storeurl);
					jQuery("#avail_url").attr("value",'1');
				  } else {
					  
					   jQuery("#store_msg").css('color','red');
					 jQuery("#store_msg").html("Sorry Already Exists. Try Aonther name");
				 	 jQuery("#avail_url").attr("value",'0');
				 }
			  }

			});
		}
	});
});	



$(document).ready(function(){
   
 
   $("#mcat").change( function() {
       $("#scat").hide();
        $("#result").html('Retrieving ...');
        $.ajax({
           type: "POST",
            data: "data=" + $(this).val(),
           url: "list.php",
            success: function(msg){
               if (msg != ''){
                   $("#scat").html(msg).show();
                   $("#result").html('');
				   $("#scat2").show();
                }
                else{
                    $("#result").html('<em>No item result</em>');
               }
           }
        });
    });
});


      function countChar(val) {
        var len = val.value.length;
        if (len >= 500) {
          val.value = val.value.substring(0, 500);
        } else {
          $('#charNum').text(500 - len);
        }
      };
   
   
   
      function countChar5(val) {
        var len = val.value.length;
        if (len >= 200) {
          val.value = val.value.substring(0, 200);
        } else {
          $('#charNum').text(200 - len);
        }
      };
   
   
   
   
   
   //sssssssssssssss
   
   $(document).ready(function() { 
    var options = { 
        target:        '#output1',   // target element(s) to be updated with server response 
        beforeSubmit:  showRequest2,  // pre-submit callback 
       complete: function(r){
       if(r.responseText == 1)
	   sss2();
	   else
	   errr2(r.responseText);
    }
    }; 
 
    $('#signInForm').ajaxFormnow(options); 
}); 

function showRequest2(formData, jqForm, options) { 
   
    var queryString = $.param(formData); 
   $('#ajax-loading2').show()
   $('#ajax-loading3').show();
   window.scrollTo(0,0);
    return true; 
} 
 
function sss2(responseText)  { 
    $('#ajax-loading2').hide();
	$('#ajax-loading3').hide();
	 //$("#success").show().delay(2000).fadeOut();
	 
	 if(urls2 != "")
     window.location.href = urls2;
} 

function errr2(msg)  { 
    
    $('#ajax-loading2').hide();
	 $('#ajax-loading3').hide();
	$("#error2").show();
	$("#error3").show();
	 $("#error2").show().delay(4000).fadeOut();
	  $("#error3").show().delay(4000).fadeOut();
	 document.getElementById("error2").innerHTML=msg;
	  document.getElementById("error3").innerHTML=msg;
     //window.location.href = "s";
} 








//sssssssssssssss
   
   $(document).ready(function() { 
    var options = { 
        target:        '#output1',   // target element(s) to be updated with server response 
        beforeSubmit:  showRequest2,  // pre-submit callback 
       complete: function(r){
       if(r.responseText == 1)
	   sss2();
	   else
	   errr2(r.responseText);
    }
    }; 
 
    $('#signInForm5').ajaxFormnow(options); 
}); 

function showRequest2(formData, jqForm, options) { 
   
    var queryString = $.param(formData); 
   $('#ajax-loading2').show()
   $('#ajax-loading3').show();
   window.scrollTo(0,0);
    return true; 
} 
 
function sss2(responseText)  { 
    $('#ajax-loading2').hide();
	$('#ajax-loading3').hide();
	 //$("#success").show().delay(2000).fadeOut();
	 
	 if(urls2 != "")
     window.location.href = urls2;
} 

function errr2(msg)  { 
    
    $('#ajax-loading2').hide();
	 $('#ajax-loading3').hide();
	$("#error2").show();
	$("#error3").show();
	 $("#error2").show().delay(4000).fadeOut();
	  $("#error3").show().delay(4000).fadeOut();
	 document.getElementById("error2").innerHTML=msg;
	  document.getElementById("error3").innerHTML=msg;
     //window.location.href = "s";
} 



$(document).ready(function(){
   
 
   $("#city").change( function() {
       $("#cat").hide();
        $("#result").html('Retrieving ...');
        $.ajax({
           type: "POST",
            data: "data=" + $(this).val(),
           url: "listing.php",
            success: function(msg){
               if (msg != ''){
                   $("#cat").html(msg).show();
                   $("#result").html('');
				   $("#cat").show();
                }
                else{
                    $("#result").html('<em>No item result</em>');
               }
           }
        });
    });
});


setTimeout(function() {
    $('#error2').fadeOut('slow');
}, 3000); // <-- time in milliseconds

setTimeout(function() {
    $('#success').fadeOut('slow');
}, 3000); // <-- time in milliseconds

setTimeout(function() {
    $('#error').fadeOut('slow');
}, 9000); // <-- time in milliseconds