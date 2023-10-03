import { $ } from '@wdio/globals'
import BasePage from './BasePage.js';

class PricingPage extends BasePage {
    get header() {
        return $('h1.h2-mktg')
    }
    get compareBtn(){
        return $('a.flex-justify-center')
    }
     get headerCompare(){
        return $('.h1')
     }
}

export default new PricingPage()