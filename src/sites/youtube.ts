import * as sm from "./site-manager";
import * as eradicator from "./eradicator";

export class Youtube extends sm.Site {

    checkSite(url: string): boolean {
        const urlpattern = "youtube";

        return url.includes(urlpattern);
    }

    eradicate(dom: Document, enabled: boolean): void {
        const tag_name: string = "ytd-rich-grid-renderer";

        eradicator.eradicate_tag_name(tag_name, dom);
    }

    siteKey = "youtube";
}