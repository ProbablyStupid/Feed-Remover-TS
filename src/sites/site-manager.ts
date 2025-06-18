import * as youtube from "./youtube";

export const site_list: Site[] = [
    new youtube.Youtube(),
];

export abstract class Site {

    abstract checkSite(url: string): boolean;

    abstract eradicate(dom: Document, enabled: boolean): void;

    /**
     * The siteKey needs to match with the key in src/util/settings-management's siteSettings interface.
     */
    abstract siteKey: string;
}