import { $ } from '@wdio/globals'
import BasePage from './BasePage.js';

class StartPage extends BasePage {
    get signUp() {
        return $('a.HeaderMenu-link--sign-up')
    }

    get header(){
        return $('div.text-center h2.h3-mktg')
    }

    get headerBtn(){
        return $('a[class*="btn-large-mktg"][href^="/organizations/enterprise_plan"]')
    }

    get subscribleBtn(){
        return $('a[href$="newsletter/"]')
    }

    get searchBtn(){
        return $('.header-search-button')
    }

    get searchInput(){
        return $('#query-builder-test')
    }

    get searchStartBtn(){
        return $('.ActionListItem-description')
    }

    get pricingBtn(){
        return $('a.px-0')
    }
}

export default new StartPage();