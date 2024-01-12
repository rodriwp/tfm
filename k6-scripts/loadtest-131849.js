// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {}

export default function main() {
  let response

  group('page_1 - https://plex.rodrigomompo.com/web/index.html#!/', function () {
    response = http.post(
      'https://analytics.plex.tv/collect/event',
      '{"deviceIdentifier":"ecwh71kj68l3di7yloaa65v0","context":{"campaign":{},"device":{"product":"Plex Web","version":"4.116.1","platform":"Chrome","platformVersion":"120.0","device":"Linux","model":"bundled","screenResolution":"1868x897,1920x1080","layout":"desktop","protocol":"http-loopback"},"user":{"anonymous":false}},"userId":317525938,"event":"client:click","interaction":true,"properties":{"page":"sidebar","identifier":"com.plexapp.plugins.library","action":"selectSource"},"sessionIdentifier":"5bf08213-7349-4f73-8f79-08582f44b05d"}',
      {
        headers: {
          'content-type': 'text/plain;charset=UTF-8',
          referer: 'https://plex.rodrigomompo.com/',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
        
      }
    )

    response = http.post(
      'https://o17675.ingest.sentry.io/api/5594889/envelope/?sentry_key=54c24aee6403406294dd6094728f20e0&sentry_version=7',
      '{"sent_at":"2024-01-12T12:17:04.501Z","sdk":{"name":"sentry.javascript.browser","version":"6.0.1"}}\n{"type":"session"}\n{"sid":"44d82731fbd54c53b8ecade10e4ef605","init":true,"started":"2024-01-12T12:17:04.501Z","timestamp":"2024-01-12T12:17:04.501Z","status":"exited","errors":0,"duration":0,"attrs":{"release":"desktop-desktop@4.116.1.34633-acaef50","environment":"public"}}',
      {
        headers: {
          'content-type': 'text/plain;charset=UTF-8',
          referer: 'https://plex.rodrigomompo.com/',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/web/js/chunk-8111-4eb8b68a0c1733a64313-plex-4.116.1.34633-acaef50.js',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/web/js/chunk-7274-7ce0b1b13fb199975825-plex-4.116.1.34633-acaef50.js',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/web/chunk-9477-c35cbdc40d0b400e187f-plex-4.116.1.34633-acaef50.css',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/web/js/chunk-9477-c35cbdc40d0b400e187f-plex-4.116.1.34633-acaef50.js',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/web/chunk-3580-a0971ab551e281b0048c-plex-4.116.1.34633-acaef50.css',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/web/js/chunk-3580-a0971ab551e281b0048c-plex-4.116.1.34633-acaef50.js',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get('https://plex.rodrigomompo.com/web/favicon.ico', {
      headers: {
        referer: 'https://plex.rodrigomompo.com/web/index.html',
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })

    response = http.get(
      'https://plex.rodrigomompo.com/hubs/sections/1?count=12&includeLibraryPlaylists=1&includeStations=1&includeRecentChannels=1&includeMeta=1&includeExternalMetadata=1&excludeFields=summary&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=ecwh71kj68l3di7yloaa65v0&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1868x897%2C1920x1080&X-Plex-Token=b6KDJwwHscsLkSWpag6U&X-Plex-Provider-Version=6.3&X-Plex-Text-Format=plain&X-Plex-Drm=widevine&X-Plex-Language=es',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-language': 'es',
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.post(
      'https://analytics.plex.tv/collect/event',
      '{"deviceIdentifier":"ecwh71kj68l3di7yloaa65v0","context":{"campaign":{},"device":{"product":"Plex Web","version":"4.116.1","platform":"Chrome","platformVersion":"120.0","device":"Linux","model":"bundled","screenResolution":"1868x897,1920x1080","layout":"desktop","protocol":"http-loopback"},"user":{"anonymous":false}},"userId":317525938,"event":"client:view","interaction":true,"properties":{"page":"source","latency":20,"context":"source:content.discover"},"sessionIdentifier":"5bf08213-7349-4f73-8f79-08582f44b05d"}',
      {
        headers: {
          'content-type': 'text/plain;charset=UTF-8',
          referer: 'https://plex.rodrigomompo.com/',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/photo/:/transcode?width=240&height=360&minSize=1&upscale=1&url=%2Flibrary%2Fmetadata%2F1%2Fthumb%2F1705060327%3FX-Plex-Token%3Db6KDJwwHscsLkSWpag6U&X-Plex-Token=b6KDJwwHscsLkSWpag6U',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.post(
      'https://analytics.plex.tv/collect/event',
      '{"deviceIdentifier":"ecwh71kj68l3di7yloaa65v0","context":{"campaign":{},"device":{"product":"Plex Web","version":"4.116.1","platform":"Chrome","platformVersion":"120.0","device":"Linux","model":"bundled","screenResolution":"1868x897,1920x1080","layout":"desktop","protocol":"http-loopback"},"user":{"anonymous":false}},"userId":317525938,"event":"client:click","interaction":true,"properties":{"action":"play","page":"source","identifier":"com.plexapp.plugins.library","type":"movie","context":"source:hub.movie.recentlyadded","row":0,"col":0},"sessionIdentifier":"5bf08213-7349-4f73-8f79-08582f44b05d"}',
      {
        headers: {
          'content-type': 'text/plain;charset=UTF-8',
          referer: 'https://plex.rodrigomompo.com/',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.post(
      'https://plex.rodrigomompo.com/playQueues?type=video&extrasPrefixCount=0&uri=server%3A%2F%2F8595cdc3bc2d78b6f1040bac89999cc6288a008c%2Fcom.plexapp.plugins.library%2Flibrary%2Fmetadata%2F1&repeat=0&own=1&includeChapters=1&includeMarkers=1&includeGeolocation=1&includeExternalMedia=1&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=ecwh71kj68l3di7yloaa65v0&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1868x897%2C1920x1080&X-Plex-Token=b6KDJwwHscsLkSWpag6U&X-Plex-Language=es&X-Plex-Session-Id=5bf08213-7349-4f73-8f79-08582f44b05d&X-Plex-Drm=widevine&X-Plex-Text-Format=plain&X-Plex-Provider-Version=5.1',
      null,
      {
        headers: {
          accept: 'application/json',
          'accept-language': 'es',
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'x-requested-with': 'XMLHttpRequest',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get('https://plex.rodrigomompo.com/web/static/b38a559594ac52d049ba.png', {
      headers: {
        referer: 'https://plex.rodrigomompo.com/web/index.html',
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })

    response = http.post(
      'https://analytics.plex.tv/collect/event',
      '{"deviceIdentifier":"ecwh71kj68l3di7yloaa65v0","context":{"campaign":{},"device":{"product":"Plex Web","version":"4.116.1","platform":"Chrome","platformVersion":"120.0","device":"Linux","model":"bundled","screenResolution":"1868x897,1920x1080","layout":"desktop","protocol":"http-loopback"},"user":{"anonymous":false}},"userId":317525938,"event":"client:view","interaction":true,"properties":{"page":"player"},"sessionIdentifier":"5bf08213-7349-4f73-8f79-08582f44b05d"}',
      {
        headers: {
          'content-type': 'text/plain;charset=UTF-8',
          referer: 'https://plex.rodrigomompo.com/',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/photo/:/transcode?width=1920&height=869&minSize=1&opacity=10&background=343a3f&url=%2Flibrary%2Fmetadata%2F1%2Fart%2F1705060327%3FX-Plex-Token%3Db6KDJwwHscsLkSWpag6U&X-Plex-Token=b6KDJwwHscsLkSWpag6U',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/library/metadata/1?Accept-Language=es&includeConcerts=1&includeExtras=1&includeOnDeck=1&includePopularLeaves=1&includePreferences=1&includeChapters=1&includeStations=1&includeMarkers=1&includeExternalMedia=1&asyncAugmentMetadata=1&checkFiles=1&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=ecwh71kj68l3di7yloaa65v0&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1868x897%2C1920x1080&X-Plex-Token=b6KDJwwHscsLkSWpag6U&X-Plex-Language=es&X-Plex-Session-Id=5bf08213-7349-4f73-8f79-08582f44b05d&X-Plex-Drm=widevine&X-Plex-Text-Format=plain&X-Plex-Provider-Version=5.1',
      {
        headers: {
          accept: 'application/json',
          'accept-language': 'es',
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'x-requested-with': 'XMLHttpRequest',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/decision?hasMDE=1&path=%2Flibrary%2Fmetadata%2F1&mediaIndex=0&partIndex=0&protocol=dash&fastSeek=1&directPlay=0&directStream=1&subtitleSize=100&audioBoost=100&location=lan&addDebugOverlay=0&autoAdjustQuality=0&directStreamAudio=1&mediaBufferSize=102400&session=5xsq5lodh1aivk9p54mmy448&subtitles=burn&Accept-Language=es&X-Plex-Session-Identifier=83rdtmgdmn9hl047mk4rac6w&X-Plex-Client-Profile-Extra=add-limitation%28scope%3DvideoCodec%26scopeName%3D%2A%26type%3DupperBound%26name%3Dvideo.frameRate%26value%3D60%26replace%3Dtrue%29%2Bappend-transcode-target-codec%28type%3DvideoProfile%26context%3Dstreaming%26audioCodec%3Daac%26protocol%3Ddash%29&X-Plex-Incomplete-Segments=1&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=ecwh71kj68l3di7yloaa65v0&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1868x897%2C1920x1080&X-Plex-Token=b6KDJwwHscsLkSWpag6U&X-Plex-Language=es&X-Plex-Session-Id=5bf08213-7349-4f73-8f79-08582f44b05d',
      {
        headers: {
          accept: 'text/plain, */*; q=0.01',
          'accept-language': 'es',
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'x-requested-with': 'XMLHttpRequest',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/web/js/chunk-1123-b7f65e78bd5c2c18e3ad-plex-4.116.1.34633-acaef50.js',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/web/js/chunk-9112-144b5069ea5850c1a67b-plex-4.116.1.34633-acaef50.js',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/start.mpd?hasMDE=1&path=%2Flibrary%2Fmetadata%2F1&mediaIndex=0&partIndex=0&protocol=dash&fastSeek=1&directPlay=0&directStream=1&subtitleSize=100&audioBoost=100&location=lan&addDebugOverlay=0&autoAdjustQuality=0&directStreamAudio=1&mediaBufferSize=102400&session=5xsq5lodh1aivk9p54mmy448&subtitles=burn&Accept-Language=es&X-Plex-Session-Identifier=83rdtmgdmn9hl047mk4rac6w&X-Plex-Client-Profile-Extra=add-limitation%28scope%3DvideoCodec%26scopeName%3D%2A%26type%3DupperBound%26name%3Dvideo.frameRate%26value%3D60%26replace%3Dtrue%29%2Bappend-transcode-target-codec%28type%3DvideoProfile%26context%3Dstreaming%26audioCodec%3Daac%26protocol%3Ddash%29&X-Plex-Incomplete-Segments=1&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=ecwh71kj68l3di7yloaa65v0&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1868x897%2C1920x1080&X-Plex-Token=b6KDJwwHscsLkSWpag6U&X-Plex-Language=es&X-Plex-Session-Id=5bf08213-7349-4f73-8f79-08582f44b05d',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/status/sessions?X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=ecwh71kj68l3di7yloaa65v0&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1868x897%2C1920x1080&X-Plex-Token=b6KDJwwHscsLkSWpag6U&X-Plex-Language=es',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-language': 'es',
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/1/header',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/0/header',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/1/0.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/0/0.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/1/1.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/0/1.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/1/2.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/photo/:/transcode?url=%2Flibrary%2Fmetadata%2F1%2Fthumb%2F1705060327%3FX-Plex-Token%3Db6KDJwwHscsLkSWpag6U&X-Plex-Token=b6KDJwwHscsLkSWpag6U&width=192&height=192&minSize=1',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/photo/:/transcode?url=%2Flibrary%2Fmetadata%2F1%2Fthumb%2F1705060327%3FX-Plex-Token%3Db6KDJwwHscsLkSWpag6U&X-Plex-Token=b6KDJwwHscsLkSWpag6U&width=512&height=512&minSize=1',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get('https://plex.rodrigomompo.com/web/favicon.ico', {
      headers: {
        referer: 'https://plex.rodrigomompo.com/web/index.html',
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/0/2.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/0/3.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.post(
      'https://analytics.plex.tv/collect/event',
      '{"deviceIdentifier":"ecwh71kj68l3di7yloaa65v0","context":{"campaign":{},"device":{"product":"Plex Web","version":"4.116.1","platform":"Chrome","platformVersion":"120.0","device":"Linux","model":"bundled","screenResolution":"1868x897,1920x1080","layout":"desktop","protocol":"http-loopback"},"user":{"anonymous":false}},"userId":317525938,"event":"playback:itemstart","interaction":true,"properties":{"serverType":"owned","connectionType":"localhost","type":"movie","identifier":"com.plexapp.plugins.library","page":"source","auto":false,"protocol":"dash","offset":0,"container":"mp4","duration":660,"bitrate":4608,"audioCodec":"mp3","audioDecision":"transcode","videoCodec":"h264","videoDecision":"copy","player":"html","latency":523,"context":"source:hub.movie.recentlyadded","row":0,"col":0},"sessionIdentifier":"5bf08213-7349-4f73-8f79-08582f44b05d"}',
      {
        headers: {
          'content-type': 'text/plain;charset=UTF-8',
          referer: 'https://plex.rodrigomompo.com/',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/1/3.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/0/4.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/1/4.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/1/5.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/0/5.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/1/6.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/0/6.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/1/7.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/0/7.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/1/8.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/0/8.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/1/9.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/0/9.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/1/10.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/0/10.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/1/11.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/0/11.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/1/12.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/0/12.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/0/13.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/:/timeline?ratingKey=1&key=%2Flibrary%2Fmetadata%2F1&playbackTime=1000&playQueueItemID=9&state=playing&hasMDE=1&context=source%3Ahub.movie.recentlyadded&row=0&col=0&time=1000&duration=634000&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=ecwh71kj68l3di7yloaa65v0&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1868x897%2C1920x1080&X-Plex-Token=b6KDJwwHscsLkSWpag6U&X-Plex-Language=es&X-Plex-Session-Id=5bf08213-7349-4f73-8f79-08582f44b05d&X-Plex-Drm=widevine&X-Plex-Text-Format=plain&X-Plex-Provider-Version=5.1&X-Plex-Session-Identifier=83rdtmgdmn9hl047mk4rac6w',
      {
        headers: {
          accept: 'application/json,application/xml',
          'accept-language': 'es',
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'x-requested-with': 'XMLHttpRequest',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/status/sessions?X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=ecwh71kj68l3di7yloaa65v0&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1868x897%2C1920x1080&X-Plex-Token=b6KDJwwHscsLkSWpag6U&X-Plex-Language=es',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-language': 'es',
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/playQueues/10?repeat=0&own=1&includeChapters=1&includeMarkers=1&includeGeolocation=1&includeExternalMedia=1&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=ecwh71kj68l3di7yloaa65v0&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1868x897%2C1920x1080&X-Plex-Token=b6KDJwwHscsLkSWpag6U&X-Plex-Language=es&X-Plex-Session-Id=5bf08213-7349-4f73-8f79-08582f44b05d&X-Plex-Drm=widevine&X-Plex-Text-Format=plain&X-Plex-Provider-Version=5.1',
      {
        headers: {
          accept: 'application/json',
          'accept-language': 'es',
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'x-requested-with': 'XMLHttpRequest',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/1/13.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/0/14.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/1/14.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/1/15.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/0/15.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/:/timeline?ratingKey=1&key=%2Flibrary%2Fmetadata%2F1&playbackTime=9004&playQueueItemID=9&state=playing&hasMDE=1&context=source%3Ahub.movie.recentlyadded&row=0&col=0&time=9000&duration=634000&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=ecwh71kj68l3di7yloaa65v0&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1868x897%2C1920x1080&X-Plex-Token=b6KDJwwHscsLkSWpag6U&X-Plex-Language=es&X-Plex-Session-Id=5bf08213-7349-4f73-8f79-08582f44b05d&X-Plex-Drm=widevine&X-Plex-Text-Format=plain&X-Plex-Provider-Version=5.1&X-Plex-Session-Identifier=83rdtmgdmn9hl047mk4rac6w',
      {
        headers: {
          accept: 'application/json,application/xml',
          'accept-language': 'es',
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'x-requested-with': 'XMLHttpRequest',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/1/16.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/0/16.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/1/17.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/0/17.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/:/timeline?ratingKey=1&key=%2Flibrary%2Fmetadata%2F1&playbackTime=19004&playQueueItemID=9&state=playing&hasMDE=1&context=source%3Ahub.movie.recentlyadded&row=0&col=0&time=19000&duration=634000&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=ecwh71kj68l3di7yloaa65v0&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1868x897%2C1920x1080&X-Plex-Token=b6KDJwwHscsLkSWpag6U&X-Plex-Language=es&X-Plex-Session-Id=5bf08213-7349-4f73-8f79-08582f44b05d&X-Plex-Drm=widevine&X-Plex-Text-Format=plain&X-Plex-Provider-Version=5.1&X-Plex-Session-Identifier=83rdtmgdmn9hl047mk4rac6w',
      {
        headers: {
          accept: 'application/json,application/xml',
          'accept-language': 'es',
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'x-requested-with': 'XMLHttpRequest',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/0/18.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/1/18.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/1/19.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/0/19.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/:/timeline?ratingKey=1&key=%2Flibrary%2Fmetadata%2F1&playbackTime=29007&playQueueItemID=9&state=playing&hasMDE=1&context=source%3Ahub.movie.recentlyadded&row=0&col=0&time=29000&duration=634000&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=ecwh71kj68l3di7yloaa65v0&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1868x897%2C1920x1080&X-Plex-Token=b6KDJwwHscsLkSWpag6U&X-Plex-Language=es&X-Plex-Session-Id=5bf08213-7349-4f73-8f79-08582f44b05d&X-Plex-Drm=widevine&X-Plex-Text-Format=plain&X-Plex-Provider-Version=5.1&X-Plex-Session-Identifier=83rdtmgdmn9hl047mk4rac6w',
      {
        headers: {
          accept: 'application/json,application/xml',
          'accept-language': 'es',
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'x-requested-with': 'XMLHttpRequest',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/1/20.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/video/:/transcode/universal/session/5xsq5lodh1aivk9p54mmy448/0/20.m4s',
      {
        headers: {
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/:/timeline?ratingKey=1&key=%2Flibrary%2Fmetadata%2F1&playbackTime=35007&playQueueItemID=9&state=paused&hasMDE=1&context=source%3Ahub.movie.recentlyadded&row=0&col=0&time=35000&duration=634000&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=ecwh71kj68l3di7yloaa65v0&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1868x897%2C1920x1080&X-Plex-Token=b6KDJwwHscsLkSWpag6U&X-Plex-Language=es&X-Plex-Session-Id=5bf08213-7349-4f73-8f79-08582f44b05d&X-Plex-Drm=widevine&X-Plex-Text-Format=plain&X-Plex-Provider-Version=5.1&X-Plex-Session-Identifier=83rdtmgdmn9hl047mk4rac6w',
      {
        headers: {
          accept: 'application/json,application/xml',
          'accept-language': 'es',
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'x-requested-with': 'XMLHttpRequest',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/:/timeline?ratingKey=1&key=%2Flibrary%2Fmetadata%2F1&playbackTime=35636&playQueueItemID=9&state=playing&hasMDE=1&context=source%3Ahub.movie.recentlyadded&row=0&col=0&time=35000&duration=634000&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=ecwh71kj68l3di7yloaa65v0&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1868x897%2C1920x1080&X-Plex-Token=b6KDJwwHscsLkSWpag6U&X-Plex-Language=es&X-Plex-Session-Id=5bf08213-7349-4f73-8f79-08582f44b05d&X-Plex-Drm=widevine&X-Plex-Text-Format=plain&X-Plex-Provider-Version=5.1&X-Plex-Session-Identifier=83rdtmgdmn9hl047mk4rac6w',
      {
        headers: {
          accept: 'application/json,application/xml',
          'accept-language': 'es',
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'x-requested-with': 'XMLHttpRequest',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/:/timeline?ratingKey=1&key=%2Flibrary%2Fmetadata%2F1&playbackTime=37636&playQueueItemID=9&state=paused&hasMDE=1&context=source%3Ahub.movie.recentlyadded&row=0&col=0&time=37000&duration=634000&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=ecwh71kj68l3di7yloaa65v0&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1868x897%2C1920x1080&X-Plex-Token=b6KDJwwHscsLkSWpag6U&X-Plex-Language=es&X-Plex-Session-Id=5bf08213-7349-4f73-8f79-08582f44b05d&X-Plex-Drm=widevine&X-Plex-Text-Format=plain&X-Plex-Provider-Version=5.1&X-Plex-Session-Identifier=83rdtmgdmn9hl047mk4rac6w',
      {
        headers: {
          accept: 'application/json,application/xml',
          'accept-language': 'es',
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'x-requested-with': 'XMLHttpRequest',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/:/timeline?ratingKey=1&key=%2Flibrary%2Fmetadata%2F1&playbackTime=37844&playQueueItemID=9&state=paused&hasMDE=1&context=source%3Ahub.movie.recentlyadded&row=0&col=0&time=37000&duration=634000&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=ecwh71kj68l3di7yloaa65v0&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1868x897%2C1920x1080&X-Plex-Token=b6KDJwwHscsLkSWpag6U&X-Plex-Language=es&X-Plex-Session-Id=5bf08213-7349-4f73-8f79-08582f44b05d&X-Plex-Drm=widevine&X-Plex-Text-Format=plain&X-Plex-Provider-Version=5.1&X-Plex-Session-Identifier=83rdtmgdmn9hl047mk4rac6w',
      {
        headers: {
          accept: 'application/json,application/xml',
          'accept-language': 'es',
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'x-requested-with': 'XMLHttpRequest',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/:/timeline?ratingKey=1&key=%2Flibrary%2Fmetadata%2F1&playbackTime=37844&playQueueItemID=9&state=stopped&hasMDE=1&context=source%3Ahub.movie.recentlyadded&row=0&col=0&time=37000&duration=634000&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=ecwh71kj68l3di7yloaa65v0&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1868x897%2C1920x1080&X-Plex-Token=b6KDJwwHscsLkSWpag6U&X-Plex-Language=es&X-Plex-Session-Id=5bf08213-7349-4f73-8f79-08582f44b05d&X-Plex-Drm=widevine&X-Plex-Text-Format=plain&X-Plex-Provider-Version=5.1&X-Plex-Session-Identifier=83rdtmgdmn9hl047mk4rac6w',
      {
        headers: {
          accept: 'application/json,application/xml',
          'accept-language': 'es',
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'x-requested-with': 'XMLHttpRequest',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.post(
      'https://analytics.plex.tv/collect/event',
      '{"deviceIdentifier":"ecwh71kj68l3di7yloaa65v0","context":{"campaign":{},"device":{"product":"Plex Web","version":"4.116.1","platform":"Chrome","platformVersion":"120.0","device":"Linux","model":"bundled","screenResolution":"1868x897,1920x1080","layout":"desktop","protocol":"http-loopback"},"user":{"anonymous":false}},"userId":317525938,"event":"playback:itemend","interaction":true,"properties":{"serverType":"owned","connectionType":"localhost","type":"movie","identifier":"com.plexapp.plugins.library","page":"source","auto":false,"protocol":"dash","offset":0,"container":"mp4","duration":660,"bitrate":4608,"audioCodec":"mp3","audioDecision":"transcode","videoCodec":"h264","videoDecision":"copy","player":"html","playbackTime":60,"status":"stopped","context":"source:hub.movie.recentlyadded","row":0,"col":0},"sessionIdentifier":"5bf08213-7349-4f73-8f79-08582f44b05d"}',
      {
        headers: {
          'content-type': 'text/plain;charset=UTF-8',
          referer: 'https://plex.rodrigomompo.com/',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.post(
      'https://analytics.plex.tv/collect/event',
      '{"deviceIdentifier":"ecwh71kj68l3di7yloaa65v0","context":{"campaign":{},"device":{"product":"Plex Web","version":"4.116.1","platform":"Chrome","platformVersion":"120.0","device":"Linux","model":"bundled","screenResolution":"1868x897,1920x1080","layout":"desktop","protocol":"http-loopback"},"user":{"anonymous":false}},"userId":317525938,"event":"playback:sessionend","interaction":true,"properties":{"serverType":"owned","connectionType":"localhost","type":"movie","playbackCount":1,"playbackTime":60},"sessionIdentifier":"5bf08213-7349-4f73-8f79-08582f44b05d"}',
      {
        headers: {
          'content-type': 'text/plain;charset=UTF-8',
          referer: 'https://plex.rodrigomompo.com/',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/hubs/sections/1/continueWatching/items?contentDirectoryID=1&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=ecwh71kj68l3di7yloaa65v0&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1868x897%2C1920x1080&X-Plex-Container-Start=0&X-Plex-Container-Size=0&X-Plex-Token=b6KDJwwHscsLkSWpag6U&X-Plex-Provider-Version=6.3&X-Plex-Text-Format=plain&X-Plex-Drm=widevine&X-Plex-Language=es',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-language': 'es',
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/library/sections/1/all?sort=originallyAvailableAt:desc&originallyAvailableAt%3E=-1y&contentDirectoryID=1&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=ecwh71kj68l3di7yloaa65v0&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1868x897%2C1920x1080&X-Plex-Container-Start=0&X-Plex-Container-Size=0&X-Plex-Token=b6KDJwwHscsLkSWpag6U&X-Plex-Provider-Version=6.3&X-Plex-Text-Format=plain&X-Plex-Drm=widevine&X-Plex-Language=es',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-language': 'es',
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/library/sections/1/all?sort=addedAt:desc&contentDirectoryID=1&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=ecwh71kj68l3di7yloaa65v0&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1868x897%2C1920x1080&X-Plex-Container-Start=0&X-Plex-Container-Size=1&X-Plex-Token=b6KDJwwHscsLkSWpag6U&X-Plex-Provider-Version=6.3&X-Plex-Text-Format=plain&X-Plex-Drm=widevine&X-Plex-Language=es',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-language': 'es',
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/playlists/all?type=15&playlistType=video&sort=lastViewedAt:desc&sectionID=1&contentDirectoryID=1&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=ecwh71kj68l3di7yloaa65v0&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1868x897%2C1920x1080&X-Plex-Container-Start=0&X-Plex-Container-Size=0&X-Plex-Token=b6KDJwwHscsLkSWpag6U&X-Plex-Provider-Version=6.3&X-Plex-Text-Format=plain&X-Plex-Drm=widevine&X-Plex-Language=es',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-language': 'es',
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/library/sections/1/all?sort=lastViewedAt:desc&unwatched=0&viewOffset=0&contentDirectoryID=1&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=ecwh71kj68l3di7yloaa65v0&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1868x897%2C1920x1080&X-Plex-Container-Start=0&X-Plex-Container-Size=0&X-Plex-Token=b6KDJwwHscsLkSWpag6U&X-Plex-Provider-Version=6.3&X-Plex-Text-Format=plain&X-Plex-Drm=widevine&X-Plex-Language=es',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-language': 'es',
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )

    response = http.get(
      'https://plex.rodrigomompo.com/status/sessions?X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=ecwh71kj68l3di7yloaa65v0&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1868x897%2C1920x1080&X-Plex-Token=b6KDJwwHscsLkSWpag6U&X-Plex-Language=es',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-language': 'es',
          referer: 'https://plex.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        noConnectionReuse: true,
      }
    )
  })

  // Automatically added sleep
  sleep(1)
}
