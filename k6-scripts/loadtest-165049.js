// Creator: Grafana k6 Browser Recorder 1.0.1

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {}

export default function main() {
  let response

  group(
    'page_1 - https://plex.k8s.rodrigomompo.com/web/index.html#!/media/8595cdc3bc2d78b6f1040bac89999cc6288a008c/com.plexapp.plugins.library?source=2',
    function () {
      response = http.post(
        'https://analytics.plex.tv/collect/event',
        '{"deviceIdentifier":"7hj3umpjyprdh834aejn5udk","context":{"campaign":{},"device":{"product":"Plex Web","version":"4.116.1","platform":"Chrome","platformVersion":"120.0","device":"Linux","model":"bundled","screenResolution":"1920x959,1920x1080","layout":"desktop","protocol":"https"},"user":{"anonymous":false}},"userId":317525938,"event":"client:click","interaction":true,"properties":{"action":"play","page":"source","identifier":"com.plexapp.plugins.library","type":"movie","context":"source:hub.movie.recentlyadded","row":0,"col":0},"sessionIdentifier":"860fe609-3a65-471a-8f9c-546dd59a0d49"}',
        {
          headers: {
            'content-type': 'text/plain;charset=UTF-8',
            referer: 'https://plex.k8s.rodrigomompo.com/',
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
        'https://plex.k8s.rodrigomompo.com/playQueues?type=video&extrasPrefixCount=0&uri=server%3A%2F%2F8595cdc3bc2d78b6f1040bac89999cc6288a008c%2Fcom.plexapp.plugins.library%2Flibrary%2Fmetadata%2F3&repeat=0&own=1&includeChapters=1&includeMarkers=1&includeGeolocation=1&includeExternalMedia=1&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=7hj3umpjyprdh834aejn5udk&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1920x959%2C1920x1080&X-Plex-Token=eC9iyJDbcpfckdozTQTa&X-Plex-Language=es&X-Plex-Session-Id=860fe609-3a65-471a-8f9c-546dd59a0d49&X-Plex-Drm=widevine&X-Plex-Text-Format=plain&X-Plex-Provider-Version=5.1',
        null,
        {
          headers: {
            accept: 'application/json',
            'accept-language': 'es',
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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

      response = http.get('https://plex.k8s.rodrigomompo.com/web/static/b38a559594ac52d049ba.png', {
        headers: {
          referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.post(
        'https://analytics.plex.tv/collect/event',
        '{"deviceIdentifier":"7hj3umpjyprdh834aejn5udk","context":{"campaign":{},"device":{"product":"Plex Web","version":"4.116.1","platform":"Chrome","platformVersion":"120.0","device":"Linux","model":"bundled","screenResolution":"1920x959,1920x1080","layout":"desktop","protocol":"https"},"user":{"anonymous":false}},"userId":317525938,"event":"client:view","interaction":true,"properties":{"page":"player"},"sessionIdentifier":"860fe609-3a65-471a-8f9c-546dd59a0d49"}',
        {
          headers: {
            'content-type': 'text/plain;charset=UTF-8',
            referer: 'https://plex.k8s.rodrigomompo.com/',
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
        'https://plex.k8s.rodrigomompo.com/photo/:/transcode?width=1920&height=907&minSize=1&opacity=10&background=343a3f&url=%2Flibrary%2Fmetadata%2F3%2Fart%2F1705074572%3FX-Plex-Token%3DeC9iyJDbcpfckdozTQTa&X-Plex-Token=eC9iyJDbcpfckdozTQTa',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/library/metadata/3?Accept-Language=es&includeConcerts=1&includeExtras=1&includeOnDeck=1&includePopularLeaves=1&includePreferences=1&includeChapters=1&includeStations=1&includeMarkers=1&includeExternalMedia=1&asyncAugmentMetadata=1&checkFiles=1&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=7hj3umpjyprdh834aejn5udk&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1920x959%2C1920x1080&X-Plex-Token=eC9iyJDbcpfckdozTQTa&X-Plex-Language=es&X-Plex-Session-Id=860fe609-3a65-471a-8f9c-546dd59a0d49&X-Plex-Drm=widevine&X-Plex-Text-Format=plain&X-Plex-Provider-Version=5.1',
        {
          headers: {
            accept: 'application/json',
            'accept-language': 'es',
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/decision?hasMDE=1&path=%2Flibrary%2Fmetadata%2F3&mediaIndex=0&partIndex=0&protocol=dash&fastSeek=1&directPlay=0&directStream=1&subtitleSize=100&audioBoost=100&location=wan&addDebugOverlay=0&autoAdjustQuality=0&directStreamAudio=1&mediaBufferSize=102400&session=721jqnp27p3z7vweheqrvra9&subtitles=burn&Accept-Language=es&X-Plex-Session-Identifier=aws841umu5s9ydfws3gkitvq&X-Plex-Client-Profile-Extra=add-limitation%28scope%3DvideoCodec%26scopeName%3D%2A%26type%3DupperBound%26name%3Dvideo.frameRate%26value%3D60%26replace%3Dtrue%29%2Bappend-transcode-target-codec%28type%3DvideoProfile%26context%3Dstreaming%26audioCodec%3Daac%26protocol%3Ddash%29&X-Plex-Incomplete-Segments=1&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=7hj3umpjyprdh834aejn5udk&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1920x959%2C1920x1080&X-Plex-Token=eC9iyJDbcpfckdozTQTa&X-Plex-Language=es&X-Plex-Session-Id=860fe609-3a65-471a-8f9c-546dd59a0d49',
        {
          headers: {
            accept: 'text/plain, */*; q=0.01',
            'accept-language': 'es',
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/web/js/chunk-1123-b7f65e78bd5c2c18e3ad-plex-4.116.1.34633-acaef50.js',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/web/js/chunk-9112-144b5069ea5850c1a67b-plex-4.116.1.34633-acaef50.js',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/start.mpd?hasMDE=1&path=%2Flibrary%2Fmetadata%2F3&mediaIndex=0&partIndex=0&protocol=dash&fastSeek=1&directPlay=0&directStream=1&subtitleSize=100&audioBoost=100&location=wan&addDebugOverlay=0&autoAdjustQuality=0&directStreamAudio=1&mediaBufferSize=102400&session=721jqnp27p3z7vweheqrvra9&subtitles=burn&Accept-Language=es&X-Plex-Session-Identifier=aws841umu5s9ydfws3gkitvq&X-Plex-Client-Profile-Extra=add-limitation%28scope%3DvideoCodec%26scopeName%3D%2A%26type%3DupperBound%26name%3Dvideo.frameRate%26value%3D60%26replace%3Dtrue%29%2Bappend-transcode-target-codec%28type%3DvideoProfile%26context%3Dstreaming%26audioCodec%3Daac%26protocol%3Ddash%29&X-Plex-Incomplete-Segments=1&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=7hj3umpjyprdh834aejn5udk&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1920x959%2C1920x1080&X-Plex-Token=eC9iyJDbcpfckdozTQTa&X-Plex-Language=es&X-Plex-Session-Id=860fe609-3a65-471a-8f9c-546dd59a0d49',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/status/sessions?X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=7hj3umpjyprdh834aejn5udk&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1920x959%2C1920x1080&X-Plex-Token=eC9iyJDbcpfckdozTQTa&X-Plex-Language=es',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-language': 'es',
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/header',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/header',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/0.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/0.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/1.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/1.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/2.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/photo/:/transcode?url=%2Flibrary%2Fmetadata%2F3%2Fthumb%2F1705074572%3FX-Plex-Token%3DeC9iyJDbcpfckdozTQTa&X-Plex-Token=eC9iyJDbcpfckdozTQTa&width=192&height=192&minSize=1',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/photo/:/transcode?url=%2Flibrary%2Fmetadata%2F3%2Fthumb%2F1705074572%3FX-Plex-Token%3DeC9iyJDbcpfckdozTQTa&X-Plex-Token=eC9iyJDbcpfckdozTQTa&width=512&height=512&minSize=1',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/2.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/3.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        '{"deviceIdentifier":"7hj3umpjyprdh834aejn5udk","context":{"campaign":{},"device":{"product":"Plex Web","version":"4.116.1","platform":"Chrome","platformVersion":"120.0","device":"Linux","model":"bundled","screenResolution":"1920x959,1920x1080","layout":"desktop","protocol":"https"},"user":{"anonymous":false}},"userId":317525938,"event":"playback:itemstart","interaction":true,"properties":{"serverType":"owned","connectionType":"remote","type":"movie","identifier":"com.plexapp.plugins.library","page":"source","auto":false,"protocol":"dash","offset":0,"container":"mp4","duration":660,"bitrate":4608,"audioCodec":"mp3","audioDecision":"transcode","videoCodec":"h264","videoDecision":"copy","player":"html","latency":540,"context":"source:hub.movie.recentlyadded","row":0,"col":0},"sessionIdentifier":"860fe609-3a65-471a-8f9c-546dd59a0d49"}',
        {
          headers: {
            'content-type': 'text/plain;charset=UTF-8',
            referer: 'https://plex.k8s.rodrigomompo.com/',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/3.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/4.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/4.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/5.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/5.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/6.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/6.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/7.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/7.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/8.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/8.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/9.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/10.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/:/timeline?ratingKey=3&key=%2Flibrary%2Fmetadata%2F3&playbackTime=1000&playQueueItemID=684&state=playing&hasMDE=1&context=source%3Ahub.movie.recentlyadded&row=0&col=0&time=0&duration=634000&utm_referer=https%3A%2F%2Fapp.plex.tv%2F&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=7hj3umpjyprdh834aejn5udk&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1920x959%2C1920x1080&X-Plex-Token=eC9iyJDbcpfckdozTQTa&X-Plex-Language=es&X-Plex-Session-Id=860fe609-3a65-471a-8f9c-546dd59a0d49&X-Plex-Drm=widevine&X-Plex-Text-Format=plain&X-Plex-Provider-Version=5.1&X-Plex-Session-Identifier=aws841umu5s9ydfws3gkitvq',
        {
          headers: {
            accept: 'application/json,application/xml',
            'accept-language': 'es',
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/status/sessions?X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=7hj3umpjyprdh834aejn5udk&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1920x959%2C1920x1080&X-Plex-Token=eC9iyJDbcpfckdozTQTa&X-Plex-Language=es',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-language': 'es',
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/playQueues/685?repeat=0&own=1&includeChapters=1&includeMarkers=1&includeGeolocation=1&includeExternalMedia=1&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=7hj3umpjyprdh834aejn5udk&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1920x959%2C1920x1080&X-Plex-Token=eC9iyJDbcpfckdozTQTa&X-Plex-Language=es&X-Plex-Session-Id=860fe609-3a65-471a-8f9c-546dd59a0d49&X-Plex-Drm=widevine&X-Plex-Text-Format=plain&X-Plex-Provider-Version=5.1',
        {
          headers: {
            accept: 'application/json',
            'accept-language': 'es',
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/9.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/10.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/11.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/12.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/11.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/12.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/13.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/13.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/14.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/14.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/header',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/header',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/16.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/16.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/17.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/18.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/17.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/18.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/19.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/20.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/:/timeline?ratingKey=3&key=%2Flibrary%2Fmetadata%2F3&playbackTime=3001&playQueueItemID=684&state=buffering&hasMDE=1&context=source%3Ahub.movie.recentlyadded&row=0&col=0&time=86000&duration=634000&utm_referer=https%3A%2F%2Fapp.plex.tv%2F&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=7hj3umpjyprdh834aejn5udk&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1920x959%2C1920x1080&X-Plex-Token=eC9iyJDbcpfckdozTQTa&X-Plex-Language=es&X-Plex-Session-Id=860fe609-3a65-471a-8f9c-546dd59a0d49&X-Plex-Drm=widevine&X-Plex-Text-Format=plain&X-Plex-Provider-Version=5.1&X-Plex-Session-Identifier=aws841umu5s9ydfws3gkitvq',
        {
          headers: {
            accept: 'application/json,application/xml',
            'accept-language': 'es',
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/19.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/20.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/21.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/22.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/21.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/:/timeline?ratingKey=3&key=%2Flibrary%2Fmetadata%2F3&playbackTime=3799&playQueueItemID=684&state=playing&hasMDE=1&context=source%3Ahub.movie.recentlyadded&row=0&col=0&time=86000&duration=634000&utm_referer=https%3A%2F%2Fapp.plex.tv%2F&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=7hj3umpjyprdh834aejn5udk&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1920x959%2C1920x1080&X-Plex-Token=eC9iyJDbcpfckdozTQTa&X-Plex-Language=es&X-Plex-Session-Id=860fe609-3a65-471a-8f9c-546dd59a0d49&X-Plex-Drm=widevine&X-Plex-Text-Format=plain&X-Plex-Provider-Version=5.1&X-Plex-Session-Identifier=aws841umu5s9ydfws3gkitvq',
        {
          headers: {
            accept: 'application/json,application/xml',
            'accept-language': 'es',
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/22.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/23.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/24.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/23.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/24.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/25.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/26.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/header',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/24.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/25.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/26.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/27.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/28.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/:/timeline?ratingKey=3&key=%2Flibrary%2Fmetadata%2F3&playbackTime=4801&playQueueItemID=684&state=buffering&hasMDE=1&context=source%3Ahub.movie.recentlyadded&row=0&col=0&time=126000&duration=634000&utm_referer=https%3A%2F%2Fapp.plex.tv%2F&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=7hj3umpjyprdh834aejn5udk&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1920x959%2C1920x1080&X-Plex-Token=eC9iyJDbcpfckdozTQTa&X-Plex-Language=es&X-Plex-Session-Id=860fe609-3a65-471a-8f9c-546dd59a0d49&X-Plex-Drm=widevine&X-Plex-Text-Format=plain&X-Plex-Provider-Version=5.1&X-Plex-Session-Identifier=aws841umu5s9ydfws3gkitvq',
        {
          headers: {
            accept: 'application/json,application/xml',
            'accept-language': 'es',
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/27.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/28.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/29.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/30.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/:/timeline?ratingKey=3&key=%2Flibrary%2Fmetadata%2F3&playbackTime=5431&playQueueItemID=684&state=playing&hasMDE=1&context=source%3Ahub.movie.recentlyadded&row=0&col=0&time=126000&duration=634000&utm_referer=https%3A%2F%2Fapp.plex.tv%2F&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=7hj3umpjyprdh834aejn5udk&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1920x959%2C1920x1080&X-Plex-Token=eC9iyJDbcpfckdozTQTa&X-Plex-Language=es&X-Plex-Session-Id=860fe609-3a65-471a-8f9c-546dd59a0d49&X-Plex-Drm=widevine&X-Plex-Text-Format=plain&X-Plex-Provider-Version=5.1&X-Plex-Session-Identifier=aws841umu5s9ydfws3gkitvq',
        {
          headers: {
            accept: 'application/json,application/xml',
            'accept-language': 'es',
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/29.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/30.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/31.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/32.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/header',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/header',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/37.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/37.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/38.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/38.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/39.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/39.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/header',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/header',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/37.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/37.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/38.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/39.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/38.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/39.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/40.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/41.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/40.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/41.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/42.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/43.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/42.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/43.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/44.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/45.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/44.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/45.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/46.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/47.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/46.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/47.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/48.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/49.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/:/timeline?ratingKey=3&key=%2Flibrary%2Fmetadata%2F3&playbackTime=8432&playQueueItemID=684&state=playing&hasMDE=1&context=source%3Ahub.movie.recentlyadded&row=0&col=0&time=225000&duration=634000&utm_referer=https%3A%2F%2Fapp.plex.tv%2F&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=7hj3umpjyprdh834aejn5udk&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1920x959%2C1920x1080&X-Plex-Token=eC9iyJDbcpfckdozTQTa&X-Plex-Language=es&X-Plex-Session-Id=860fe609-3a65-471a-8f9c-546dd59a0d49&X-Plex-Drm=widevine&X-Plex-Text-Format=plain&X-Plex-Provider-Version=5.1&X-Plex-Session-Identifier=aws841umu5s9ydfws3gkitvq',
        {
          headers: {
            accept: 'application/json,application/xml',
            'accept-language': 'es',
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/48.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/49.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/50.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/51.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/50.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/51.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/52.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/53.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/52.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/53.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/54.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/55.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/54.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/55.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/56.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/0/57.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/56.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/57.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/58.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/video/:/transcode/universal/session/721jqnp27p3z7vweheqrvra9/1/59.m4s',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/:/timeline?ratingKey=3&key=%2Flibrary%2Fmetadata%2F3&playbackTime=11433&playQueueItemID=684&state=stopped&hasMDE=1&context=source%3Ahub.movie.recentlyadded&row=0&col=0&time=227000&duration=634000&utm_referer=https%3A%2F%2Fapp.plex.tv%2F&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=7hj3umpjyprdh834aejn5udk&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1920x959%2C1920x1080&X-Plex-Token=eC9iyJDbcpfckdozTQTa&X-Plex-Language=es&X-Plex-Session-Id=860fe609-3a65-471a-8f9c-546dd59a0d49&X-Plex-Drm=widevine&X-Plex-Text-Format=plain&X-Plex-Provider-Version=5.1&X-Plex-Session-Identifier=aws841umu5s9ydfws3gkitvq',
        {
          headers: {
            accept: 'application/json,application/xml',
            'accept-language': 'es',
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        '{"deviceIdentifier":"7hj3umpjyprdh834aejn5udk","context":{"campaign":{},"device":{"product":"Plex Web","version":"4.116.1","platform":"Chrome","platformVersion":"120.0","device":"Linux","model":"bundled","screenResolution":"1920x959,1920x1080","layout":"desktop","protocol":"https"},"user":{"anonymous":false}},"userId":317525938,"event":"playback:itemend","interaction":true,"properties":{"serverType":"owned","connectionType":"remote","type":"movie","identifier":"com.plexapp.plugins.library","page":"source","auto":false,"protocol":"dash","offset":0,"container":"mp4","duration":660,"bitrate":4608,"audioCodec":"mp3","audioDecision":"transcode","videoCodec":"h264","videoDecision":"copy","player":"html","playbackTime":0,"status":"stopped","context":"source:hub.movie.recentlyadded","row":0,"col":0},"sessionIdentifier":"860fe609-3a65-471a-8f9c-546dd59a0d49"}',
        {
          headers: {
            'content-type': 'text/plain;charset=UTF-8',
            referer: 'https://plex.k8s.rodrigomompo.com/',
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
        '{"deviceIdentifier":"7hj3umpjyprdh834aejn5udk","context":{"campaign":{},"device":{"product":"Plex Web","version":"4.116.1","platform":"Chrome","platformVersion":"120.0","device":"Linux","model":"bundled","screenResolution":"1920x959,1920x1080","layout":"desktop","protocol":"https"},"user":{"anonymous":false}},"userId":317525938,"event":"playback:sessionend","interaction":true,"properties":{"serverType":"owned","connectionType":"remote","type":"movie","playbackCount":1,"playbackTime":0},"sessionIdentifier":"860fe609-3a65-471a-8f9c-546dd59a0d49"}',
        {
          headers: {
            'content-type': 'text/plain;charset=UTF-8',
            referer: 'https://plex.k8s.rodrigomompo.com/',
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
        'https://plex.k8s.rodrigomompo.com/hubs/sections/2/continueWatching/items?contentDirectoryID=2&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=7hj3umpjyprdh834aejn5udk&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1920x959%2C1920x1080&X-Plex-Container-Start=0&X-Plex-Container-Size=0&X-Plex-Token=eC9iyJDbcpfckdozTQTa&X-Plex-Provider-Version=6.3&X-Plex-Text-Format=plain&X-Plex-Drm=widevine&X-Plex-Language=es',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-language': 'es',
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/library/sections/2/all?sort=originallyAvailableAt:desc&originallyAvailableAt%3E=-1y&contentDirectoryID=2&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=7hj3umpjyprdh834aejn5udk&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1920x959%2C1920x1080&X-Plex-Container-Start=0&X-Plex-Container-Size=0&X-Plex-Token=eC9iyJDbcpfckdozTQTa&X-Plex-Provider-Version=6.3&X-Plex-Text-Format=plain&X-Plex-Drm=widevine&X-Plex-Language=es',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-language': 'es',
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/library/sections/2/all?sort=addedAt:desc&contentDirectoryID=2&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=7hj3umpjyprdh834aejn5udk&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1920x959%2C1920x1080&X-Plex-Container-Start=0&X-Plex-Container-Size=1&X-Plex-Token=eC9iyJDbcpfckdozTQTa&X-Plex-Provider-Version=6.3&X-Plex-Text-Format=plain&X-Plex-Drm=widevine&X-Plex-Language=es',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-language': 'es',
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/playlists/all?type=15&playlistType=video&sort=lastViewedAt:desc&sectionID=2&contentDirectoryID=2&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=7hj3umpjyprdh834aejn5udk&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1920x959%2C1920x1080&X-Plex-Container-Start=0&X-Plex-Container-Size=0&X-Plex-Token=eC9iyJDbcpfckdozTQTa&X-Plex-Provider-Version=6.3&X-Plex-Text-Format=plain&X-Plex-Drm=widevine&X-Plex-Language=es',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-language': 'es',
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/library/sections/2/all?sort=lastViewedAt:desc&unwatched=0&viewOffset=0&contentDirectoryID=2&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=7hj3umpjyprdh834aejn5udk&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1920x959%2C1920x1080&X-Plex-Container-Start=0&X-Plex-Container-Size=0&X-Plex-Token=eC9iyJDbcpfckdozTQTa&X-Plex-Provider-Version=6.3&X-Plex-Text-Format=plain&X-Plex-Drm=widevine&X-Plex-Language=es',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-language': 'es',
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/status/sessions?X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=7hj3umpjyprdh834aejn5udk&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1920x959%2C1920x1080&X-Plex-Token=eC9iyJDbcpfckdozTQTa&X-Plex-Language=es',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-language': 'es',
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/hubs/sections/2/continueWatching/items?contentDirectoryID=2&X-Plex-Product=Plex%20Web&X-Plex-Version=4.116.1&X-Plex-Client-Identifier=7hj3umpjyprdh834aejn5udk&X-Plex-Platform=Chrome&X-Plex-Platform-Version=120.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Linux&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1920x959%2C1920x1080&X-Plex-Container-Start=0&X-Plex-Container-Size=24&X-Plex-Token=eC9iyJDbcpfckdozTQTa&X-Plex-Provider-Version=6.3&X-Plex-Text-Format=plain&X-Plex-Drm=widevine&X-Plex-Language=es',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-language': 'es',
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
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
        'https://plex.k8s.rodrigomompo.com/photo/:/transcode?width=240&height=360&minSize=1&upscale=1&url=%2Flibrary%2Fmetadata%2F3%2Fthumb%2F1705074572%3FX-Plex-Token%3DeC9iyJDbcpfckdozTQTa&X-Plex-Token=eC9iyJDbcpfckdozTQTa',
        {
          headers: {
            referer: 'https://plex.k8s.rodrigomompo.com/web/index.html',
            'user-agent':
              'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
            },
            noConnectionReuse: true,
        }
      )
    }
  )

  // Automatically added sleep
  sleep(1)
}
