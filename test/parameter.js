require('chromedriver');
const { By } = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
const assert = require('assert');
const { title } = require('process');
var should=require('chai').should();
var capability=require('../capability').capability

describe("Test Case - 2",()=>{

    var driver;

    const user=capability['LT:Options'].username;
    const Key=capability['LT:Options'].accessKey;
    const host="hub.lambdatest.com/wd/hub";
    const url="https://"+user+":"+Key+"@"+host;

   var parameter=[{browser:"Chrome",bv:"93.0",os:"Windows 10"},
               {browser:"Firefox",bv:"91.0",os:"Windows 10"},
               {browser:"Chrome",bv:"93.0",os:"Windows 11"}]
    

    parameter.forEach((item)=>{

    it(`Text is equal for ${item.browser},${item.bv},${item.os} .`,async()=>{
        capability.browserName=item.browser
        capability.browserVersion=item.bv
        capability['LT:Options'].platformName=item.os
        capability.name=this.title;

        driver = new webdriver.Builder().usingServer(url).withCapabilities(capability).build();
        // var driver =await new webdriver.Builder().forBrowser('chrome').build();
        await driver.get('https://lambdatest.github.io/sample-todo-app/')
        await driver.findElement(By.id("sampletodotext")).sendKeys("Say hii to akil",webdriver.Key.RETURN)
        let text= await driver.findElement(By.xpath("//li[last()]")).getText().then((res)=>{
            return res
        })
       // assert.strictEqual(text,"hii to akil")
       text.should.equal("Say hii to akil");
        await driver.quit()
        
    })

})


})
