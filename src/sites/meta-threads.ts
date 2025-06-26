import { Site } from "./site-manager";
import type {siteSettings} from "../util/settings-management";
import { eradicate_by_attribute } from "./eradicator";

export class Threads extends Site {

    checkSite(url: string): boolean {
        const urlpattern = "threads.com";

        return url.includes(urlpattern);
    }

    eradicate(dom: Document): void {
        const attributes: string = '[aria-label="Column body"]';

        eradicate_by_attribute(attributes, dom);
    }

    siteKey: keyof siteSettings = 'threads';
}