/**
 * This is the content Script.
 * Feed remover works through content scripts to remove the feed.
 * That means, this is the entry point into the extension for the removal aspect.
 */

import * as settingsManagement from "./util/settings-management";
import * as sites from "./sites/site-manager";
import { site_list } from "./sites/site-list";
import { debug } from "./util/debug";

// get settings

/**
 * This is unfortunately inherently asynchronous.
 * However, we can very much make the code still "linear"
 * by waiting for the function to finish and then going to
 * the next function.
 */
settingsManagement.getSiteSettings().then((value) => checkSite(value));

// check website + run removal script for website

function checkSite(settings: settingsManagement.siteSettings) {
    debug('checking site with settings : ', settings);
    
    const url: string = window.location.href;

    for (const site of site_list) {
        if (site.checkSite(url) && settings[site.siteKey]) {
            debug('valid site detected! : ', site);
            site.eradicate(document);
        }
    }

}