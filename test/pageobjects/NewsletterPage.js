import { $ } from '@wdio/globals'
import BasePage from './BasePage.js';

class NewslettersPage extends BasePage {
    get header(){
        return $('#hero-section-brand-heading')
    }
}

export default new NewslettersPage();