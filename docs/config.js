var config = {
  "useNicks": false,
  "disableAudioLevels": true,
  "useIPv6": false,
  "webrtcIceTcpDisable": false,
  "defaultSipNumber": "",
  "startBitrate": 800,
  "enableWelcomePage": true,
  "useStunTurn": false,
  "enableRtpStats": true,
  "enableRecording": false,
  "resolution": 720,
  "constraints": {"video": {
    "aspectRatio": 16 / 9,
    "height": {
      "ideal": 240,
      "min": 120,
      "max": 360
    }
  }},
  "hiddenDomain": "recorder.meet.ffmuc.net",
  "enableLipSync": false,
  "minHDHeight": 540,
  "useRoomAsSharedDocumentName": false,
  "recordingType": "colibri",
  "bosh": '//meet.ffmuc.net/http-bind',
  "websocket": 'wss://meet.ffmuc.net/xmpp-websocket',
  "startAudioMuted": 9,
  "openSctp": true,
  "clientNode": "http://igniterealtime.org/ofmeet/jitsi-meet/",
  "conferences": [],
  "webinar": false,
  "channelLastN": -1,
  "desktopSharingFirefoxDisabled": false,
  "adaptiveLastN": false,
  "hosts": {
    "domain": "meet.ffmuc.net",
    "focus": "focus.meet.ffmuc.net",
    "muc": "conference.meet.ffmuc.net",
    "bridge": "jitsi-videobridge.meet.ffmuc.net"
  },
  "logStats": false,
  "useRtcpMux": true,
  "requireDisplayName": true,
  "startVideoMuted": 9,
  "adaptiveSimulcast": false,
  "enforcedBridge": "jitsi-videobridge.meet.ffmuc.net",
  "useBundle": true,
  "p2p": {
    "disableH264": true,
    "preferH264": true,
    "useStunTurn": false,
    "enabled": true
  },
  "desktopSharingChromeDisabled": false,
  "disableRtx": false,
  "disableAdaptiveSimulcast": true,
  "desktopSharingChromeSources": [
    "screen",
    "window",
    "tab"
  ],
  "webrtcIceUdpDisable": false,
  "disableSimulcast": true,
  "startAudioOnly": false,
  "stereo": false,
  "focusUserJid": "focus@meet.ffmuc.net"
};