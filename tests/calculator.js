let homepage = require('../pages/homepage');


describe('Demo Calculator Tests', function() {

    it('addition test 1', function() {
        
        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/');
       
        // fill the first field from calculator with the value 2
        // element(by.model('first')).sendKeys('2');
        homepage.enterFirstNumber('4');

        browser.sleep(1000) 

        // fill the second field from calculator with the value 3
        // element(by.model('second')).sendKeys('3');
        homepage.enterSecondNumber('3');
                
        browser.sleep(1000) 
        
        // clicl the GO! Buttom from calculator
        // element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();
        
        browser.sleep(1000) 
       

        // returns the result fromn the calculator 
        // let result = element(by.cssContainingText('.ng-binding', '5'));
        // expect(result.getText()).toEqual('5');
        homepage.verifyResult('7');

        //console.log(result.getText());
        
      });



    it('add test 2', function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('4');
        browser.sleep(1000) 

        homepage.enterSecondNumber('3');
        browser.sleep(1000) 

        homepage.clickGo1();
        browser.sleep(1000) 

        homepage.verifyResult('7');
        
        browser.sleep(3000)

    });
  

  });