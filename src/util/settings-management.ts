import * as global from "../constants";
import * as storage from "./chrome/chrome-storage";
import { debug } from "./debug";

/**
 * These names should match with the names stored in
 * chrome storage!
 */
export interface siteSettings {
    // google
    youtube: boolean;
    youtube_shorts: boolean;

    // meta
    facebook: boolean;
    instagram: boolean;
    threads: boolean;

    // reddit
    reddit: boolean;

    // Twitter
    twitter: boolean;
    
    // independent twitter-likes
    bluesky: boolean;
    mastodon: boolean;
    // decent -> decentralized. This feature is to come
    decent_mastodon: boolean;
}

export async function getSiteSettings(): Promise<siteSettings> {
    var raw_data: any = await storage.getLocal<any>(global.ERADICATION_SETTINGS_NAME);
    debug('raw_data in getSiteSettings() : ', raw_data);
    
    // This needs to be done because raw_data looks like { eradication_settings: { ... }}.
    // That means that the base key youtube is not defined
    // we need it in the format { youtube: true, ... }, not { eradication_settings: { youtube: true, ... }}
    var proper_data: any = raw_data[global.ERADICATION_SETTINGS_NAME];
    debug('proper_data in getSiteSettings() : ', proper_data);

    const settings: siteSettings = {
        youtube: proper_data.youtube,
        youtube_shorts: proper_data.youtube_shorts,
        facebook: proper_data.facebook,
        instagram: proper_data.instagram,
        threads: proper_data.threads,
        reddit: proper_data.reddit,
        twitter: proper_data.twitter,
        bluesky: proper_data.bluesky,
        mastodon: proper_data.mastodon,
        decent_mastodon: proper_data.decent_mastodon
    };

    debug('evaluated settings in getSiteSettings() : ', settings);
    return settings;
}