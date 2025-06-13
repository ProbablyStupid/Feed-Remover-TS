import * as global from "../constants";
import * as storage from "./chrome/chrome-storage";

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
    
    const settings: siteSettings = {
        youtube: raw_data.youtube,
        youtube_shorts: raw_data.youtube_shorts,
        facebook: raw_data.facebook,
        instagram: raw_data.instagram,
        threads: raw_data.threads,
        reddit: raw_data.reddit,
        twitter: raw_data.twitter,
        bluesky: raw_data.bluesky,
        mastodon: raw_data.mastodon,
        decent_mastodon: raw_data.decent_mastodon
    };

    return settings;
}