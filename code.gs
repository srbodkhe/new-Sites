/* 
 * Written by Shivaji Bodkhe 
 */
/*Ref Links
*
*
*/
var MSID="xxxxxxx-t8zPv5vUg" // Google Sheet Id
var MS=SpreadsheetApp.openById(MSID)
function doGet(e) {
    var template = HtmlService.createTemplateFromFile('Index');
    return template.evaluate()
    .setTitle('Web App Searce')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}
  
function addFeedback(formOBj){
  try{
    MS.appendRow([new Date(),formOBj.fname,formOBj.txtFeedback,formOBj.txtEmail]);
    var mailSent=mailSend(formOBj.txtEmail);
  }catch(ex){
    Logger.log(ex);
    return ex
  }
}


function mailSend(toId){
  try{
  MailApp.sendEmail({
     to: toId,
     subject: "Sample Code Link",
     htmlBody: "Thank you for your feedback...",
   });
  }catch(ex){
  return false;
  }
}
