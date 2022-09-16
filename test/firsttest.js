require('chromedriver');
const { By } = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
const assert = require('assert')
var should=require('chai').should();

describe("Test Case - 1",()=>{
    it("Text is equal.",async()=>{
        var driver =await new webdriver.Builder().forBrowser('chrome').build();
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

// const ex = async()=>{
// }
// ex()