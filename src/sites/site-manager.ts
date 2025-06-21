import * as youtube from "./youtube";
import type {siteSettings} from "../util/settings-management";

export abstract class Site {

    abstract checkSite(url: string): boolean;

    abstract eradicate(dom: Document): void;

    /**
     * The siteKey needs to match with the key in src/util/settings-management's siteSettings interface.
     */
    abstract siteKey: keyof siteSettings;
}