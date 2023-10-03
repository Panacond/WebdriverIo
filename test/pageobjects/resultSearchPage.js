import { $ } from '@wdio/globals'
import BasePage from './BasePage.js';

class ResultSearchPage extends BasePage {
    get firstResult(){
        return $('a[href$="cat"]')
    }
}

export default new ResultSearchPage();