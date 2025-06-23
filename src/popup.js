// This is a very ugly solution. But this will work for now.
// Maybe I'll rewrite this in TypeScript later as well. But right now, it's such a
// simple script that I don't think it's worth it.
var current_settings = {
    "youtube": false,
};

function proceed() {
    // Add dynamic behavior
    const youtube_button = document.getElementById('youtube-btn');

    youtube_button.addEventListener("click", () => {
        current_settings['youtube'] = !current_settings['youtube'];
        debug('current_settings : ', current_settings);
        
        chrome.storage.local.get(['eradicate_settings'], function e(result) {
            _settings = result['eradicate_settings'];
            _settings['youtube'] = !_settings['youtube'];
            chrome.storage.local.set({'eradicate_settings': _settings});
            updateButtonStyle(youtube_button, _settings['youtube']);
            debug('changed settings to : ', {'eradicate_settings': _settings});
        });
    });

    // get settings and apply them to graphics.
    const buttonJson = {
        'youtube': youtube_button,
    };

    chrome.storage.local.get(['eradicate_settings'], function e(result) {
        const settings = result.eradicate_settings;

        for (const key in settings) {
            if (!settings.hasOwnProperty(key) || !buttonJson[key]) {
                return;       
            }

            const button = buttonJson[key];
            const setting = settings[key];
            if (setting) {
                button.classList.add('active');
                button.classList.remove('inactive');
                button.innerHTML = "Eradicating";
            } else {
                button.classList.remove('active');
                button.classList.add('inactive');
                button.innerHTML = "Not Eradicating";
            }
            debug(settings);
        }

        current_settings = settings;
        debug(current_settings);
    });
}

function updateButtonStyle(button, setting) {
    if (setting) {
        button.classList.add('active');
        button.classList.remove('inactive');
        button.innerHTML = "Eradicating";
    } else {
        button.classList.remove('active');
        button.classList.add('inactive');
        button.innerHTML = "Not Eradicating";
    }
}

chrome.storage.local.get(['eradicate_settings'], function (result) {
    if (!result.eradicate_settings) {
        chrome.storage.local.set({'eradicate_settings': current_settings}, () => {
            proceed();
        });
    } else {
        proceed();
    }
});

function debug(...input) {
    console.log(input);
}