//locators:-

let homepage = function(){
  let firstnumber_input =  element(by.model('first'))
     let secondnumber_input =  element(by.model('second'))
     let gobutton = element(by.css('[ng-click="doAddition()"]'))

     this.get =function(url){
         browser.get(url);
     }

//actions :
 this.enterfirstno = function(firstno){
    firstnumber_input.sendKeys(firstno);
 };

 this.entersecondno = function(secondno){
     secondnumber_input.sendKeys(secondno);
 };


 this.clickGo = function(){
     gobutton.click();
 };
this.verifyresult = function(result){

    let output =element(by.cssContainingText('.ng-binding',result));
         expect(output.getText().toEqual(result));
}
}
module.export = new homepage();
