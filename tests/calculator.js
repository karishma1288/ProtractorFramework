describe('demo calculator test', function(){
    it('addition', function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('2');
        element(by.model('second')).sendKeys('3');

        let result = element(by.css('[ng-click="doAddition()"]')).click();
        let result =lement(by.cssContainingText('.ng-binding','5'));
        

        expect(result.getText().toEqual('5'));

        element(by.model(''));
       

    })

    
})