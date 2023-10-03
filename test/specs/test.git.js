import { expect } from '@wdio/globals'
import StartPage from '../pageobjects/StartPage.js'
import SignUpPage from '../pageobjects/SignUpPage.js'
import OrganizationsPage from '../pageobjects/OrganizationsPage.js'
import ResourcesPage from '../pageobjects/ResourcesPage.js'
import NewsletterPage from '../pageobjects/NewsletterPage.js'
import ResultSearchPage from '../pageobjects/resultSearchPage.js'
import PricingPage from '../pageobjects/PricingPage.js'

describe("Hometask25", () => {
    it('should login with valid credentials', async () => {
        await StartPage.open()
        await StartPage.signUp.click()
        await expect(SignUpPage.helloText).toHaveTextContaining("Welcome to GitHub!")
        SignUpPage.inputEmail.waitUntil(async function () {
            return (await this.isDisplayed())
        }, {
            timeout: 10000,
            timeoutMsg: 'is not displayed inputEmail'
        })
        await SignUpPage.inputEmail.setValue("my_testemail@ukr.com")
        await SignUpPage.continueEmailBtn.waitUntil(async function () {
            return (await this.isClickable())
        }, {
            timeout: 5000,
            timeoutMsg: 'is not  clicable continueEmailBtn' 
        })
        await SignUpPage.continueEmailBtn.click()
        await SignUpPage.inputPassword.waitUntil(async function () {
            return (await this.isDisplayed())
        }, {
            timeout: 5000,
            timeoutMsg: 'is not  displayed inputPassword' 
        })
        await SignUpPage.inputPassword.setValue("mazePassw32465")
        await SignUpPage.continuePasswordBtn.waitUntil(async function () {
            return (await this.isClickable())
        }, {
            timeout: 5000,
            timeoutMsg: 'is not  clicable continuePasswordBtn' 
        })
        await SignUpPage.continuePasswordBtn.click()
        await SignUpPage.inputUserName.waitUntil(async function () {
            return (await this.isDisplayed())
        }, {
            timeout: 5000,
            timeoutMsg: 'is not  displayed inputUserName' 
        })
        await SignUpPage.inputUserName.setValue("AlexSmollet123")
        await SignUpPage.continueUserNameBtn.waitUntil(async function () {
            return (await this.isClickable())
        }, {
            timeout: 5000,
            timeoutMsg: 'is not  clicable continueUserNameBtn' 
        })
        await SignUpPage.continueUserNameBtn.click()
        await SignUpPage.typeY.waitUntil(async function () {
            return (await this.isDisplayed())
        }, {
            timeout: 5000,
            timeoutMsg: 'is not  displayed typeY' 
        })
        await SignUpPage.typeY.setValue("y")
        await SignUpPage.continueYBtn.click()
        await expect(SignUpPage.verify).toHaveTextContaining('Verify your account')
    })

    it("header", async()=>{
        await StartPage.open()
        await StartPage.header.scrollIntoView()
        await expect(StartPage.header).toHaveTextContaining("The place for anyone from anywhere to build anything")
        await StartPage.headerBtn.click()
        await OrganizationsPage.btn.click()
        await expect(OrganizationsPage.header).toHaveTextContaining("First, let's create your user account")
    })

    it("subsrible", async ()=>{
        await StartPage.open()
        await StartPage.subscribleBtn.scrollIntoView()
        await StartPage.subscribleBtn.click()
        await expect(ResourcesPage.header).toHaveTextContaining("Subscribe to our developer newsletter")
        await ResourcesPage.inputEmail.setValue("nyenaui@re.com")
        await ResourcesPage.selectCountry.selectByAttribute('value', 'DM');
        await ResourcesPage.radioBtn.click()
        await ResourcesPage.subscribleBtn.click()
        await expect(NewsletterPage.header).toHaveTextContaining("Thanks for subscribing!")
    })

    it ('result search', async ()=>{
        await StartPage.open()
        await StartPage.searchBtn.click()
        const text = "cat"
        await StartPage.searchInput.setValue(text)
        await StartPage.searchStartBtn.click()
        await expect(ResultSearchPage.firstResult).toHaveHrefContaining(text)
    })

    it.only("pricing", async ()=>{
        await StartPage.open()
        await StartPage.pricingBtn.click()
        await expect(PricingPage.header).toBeDisplayed()
        await PricingPage.compareBtn.scrollIntoView()
        await PricingPage.compareBtn.click()
        await expect(PricingPage.headerCompare).toBeDisplayed()

    })
})