import * as eradicator from "./eradicator";
import type {siteSettings} from "../util/settings-management";
import { Site } from "./site-manager";

export class Youtube extends Site {

    checkSite(url: string): boolean {

        /**
         * This method will likely expand a lot in the future.
         * 
         * 1. In a channel, the videos shorts and live tabs get removed.
         * 2. The Subscription page gets eradicated too.
         * 
         * I ultimately want to allow fine grained control over what you want to
         * see and what not. This is meant to be a tool for productivity and
         * minimizing distraction caused by social media feeds.
         */


        const urlpattern = "youtube";

        return url.includes(urlpattern);
    }

    eradicate(dom: Document): void {
        const tag_name: string = "ytd-rich-grid-renderer";

        eradicator.eradicate_tag_name(tag_name, dom);
    }

    siteKey: keyof siteSettings = 'youtube';
}