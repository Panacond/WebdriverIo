import { $ } from '@wdio/globals'
import BasePage from './BasePage.js';

class SignUpPage extends BasePage {
    get helloText() {
        return $('span.text-mono')
    }

    get inputEmail(){
        return $('#email')
    }

    get continueEmailBtn(){
        return $('#email-container button')
    }

    get inputPassword(){
        return $('#password')
    }

    get continuePasswordBtn(){
        return $('#password-container>div>button')
    }
    get inputUserName(){
        return $('#login')
    }

    get continueUserNameBtn(){
        return $('#username-container > div > button')
    }

    get typeY(){
        return $('#opt_in')
    }

    get continueYBtn(){
        return $('#opt-in-container > div > button')
    }

    get verify(){
        return $('div.text-mono')
    }

}

export default new SignUpPage();