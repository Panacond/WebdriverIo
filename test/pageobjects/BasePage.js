import { browser } from '@wdio/globals'

export default class BasePage {
    open() {
        browser.url(`https://github.com/`)
        browser.setWindowSize(1080, 1080)
        return browser
    }
    pause(time){
        browser.pause(time)
    }

}