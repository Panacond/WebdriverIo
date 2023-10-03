import { $ } from '@wdio/globals'
import BasePage from './BasePage.js';

class OrganizationPage extends BasePage {
    get btn(){
        return $('.pricing-recommended-plan')
    }

    get header(){
        return $('h1.d-none')
    }
}

export default new OrganizationPage();