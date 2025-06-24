import { Site } from "./site-manager";
import { Youtube } from "./youtube";
import { YoutubeShorts } from "./youtube-shorts";

export const site_list: Site[] = [
    new Youtube(),
    new YoutubeShorts(),

    // Dear contributor,
    // if you want to add a new site, you need to add the class to this list.
    // Happy coding!
];