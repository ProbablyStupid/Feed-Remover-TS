/**
 * This is the content Script.
 * Feed remover works through content scripts to remove the feed.
 * That means, this is the entry point into the extension for the removal aspect.
 */

import * as settingsManagement from "./util/settings-management";
import * as sites from "./sites/site-manager";

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
    const url: string = window.location.href;

    for (const site of sites.site_list) {
        if (site.checkSite(url)) {
            // TODO: implement logic for site settings
        }
    }

}