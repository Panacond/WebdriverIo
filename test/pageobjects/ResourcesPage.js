import { $ } from '@wdio/globals'
import BasePage from './BasePage.js';

class ResursesPage extends BasePage {
    get header() {
        return $('#hero-section-brand-heading')
    }
    get inputEmail( ){
        return $('input[id*="R8d7m"]')
    }

    get selectCountry(){
        return $('#country')
    }

    get radioBtn(){
        return $('#gated-agree-marketingEmailOptin1')
    }

    get subscribleBtn(){
        return $('.Primer_Brand__Button-module__Button___lDruK')
    }
}

export default new ResursesPage();