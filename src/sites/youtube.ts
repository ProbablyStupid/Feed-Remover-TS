import * as sm from "./site-manager";
import * as eradicator from "./eradicator";
import type {siteSettings} from "../util/settings-management";

export class Youtube extends sm.Site {

    checkSite(url: string): boolean {
        const urlpattern = "youtube";

        return url.includes(urlpattern);
    }

    eradicate(dom: Document): void {
        const tag_name: string = "ytd-rich-grid-renderer";

        eradicator.eradicate_tag_name(tag_name, dom);
    }

    siteKey: keyof siteSettings = 'youtube';
}