import { siteSettings } from "../util/settings-management";
import { eradicate_by_attribute, eradicate_tag_name } from "./eradicator";
import { Site } from "./site-manager";

export class YoutubeShorts extends Site {
    checkSite(url: string): boolean {
        return (url.includes("youtube") && url.includes("shorts"));
    }

    eradicate(dom: Document): void {
        const tag_name: string = "ytd-reel-video-renderer";
        const tag_attributes: string[] = ['[id="shorts-container"', '[id="offline-container"]'];
    
        eradicate_tag_name(tag_name, dom);
        Array.from(tag_attributes).forEach(a => eradicate_by_attribute(a, dom))
    }

    siteKey: keyof siteSettings = 'youtube_shorts';
}