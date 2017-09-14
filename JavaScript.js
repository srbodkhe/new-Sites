<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script>
//http://jsbeautifier.org/ thanks for formating codes 
  $(function() {
//  	google.script.run.withSuccessHandler(displayResult).withFailureHandler(displayError).getUserName();
  });

  function addFeedback(serverResponce) {
  	try {
    var frmObj=document.getElementById("frmData");
    var validate=false;
    if($("#fname").val()!=""){
    validate=true;
    }else if($("#txtEmail").val()!=""){
     validate=true;
    }else if($("#txtFeedback").val()!=""){
     validate=true;
    }else{
    validate=false;
    }
    
    if(validate==true){
       google.script.run.withSuccessHandler(displayResult).addFeedback(frmObj);
    }else{
    alert("Update All fields");
    }
  	} catch (e) {
  		console.log(e);
  	}
  }

  function displayResult(serverResponce) {
  	try {
  		alert("Thank you for your feedback, Please check your email, I have shared code");
        document.getElementById("frmData").reset();
  	} catch (e) {
  		console.log(e);
  	}
  }
</script>
