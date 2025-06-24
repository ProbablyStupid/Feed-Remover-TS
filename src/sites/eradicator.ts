import { debug } from "../util/debug";

export function eradicate_tag_name(tag_name: string, dom: Document) {
    var tags = dom.getElementsByTagName(tag_name);
    
    Array.from(tags).forEach((element) => {
        debug('Removing... : ', element);
        element.remove();
        debug('removed!');
    });

    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node.nodeType !== 1) continue;

                if (node instanceof Element) {
                    if (node.tagName === tag_name.toUpperCase()) {
                        node.remove();
                    }
                }
            }
        }
    });

    observer.observe(dom.body, {childList: true, subtree: true});
    debug('eradicate_by_tag_name finished!');
}

export function eradicate_by_attribute(attribute: string, dom: Document) {
    var tags = dom.querySelectorAll(attribute);

    Array.from(tags).forEach((element) => {
        debug('Removing... : ', element);
        element.remove();
        debug('removed!');
    });

    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node.nodeType !== 1) continue;

                if (node instanceof Element) {
                    if (node.matches?.(attribute)) {
                        node.remove();
                    }
                }
            }
        }
    });
    
    observer.observe(dom.body, {childList: true, subtree: true});
    debug('eradicate_by_attribute finished!');
}