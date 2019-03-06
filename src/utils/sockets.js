import ReconnectingWebSocket from 'reconnecting-websocket';

const ws = new ReconnectingWebSocket('ws://localhost:29671');

export function receiveMessage(callback) {
  ws.onmessage = event => {
    const jsonData = JSON.parse(event.data);
    callback(jsonData);
  };

  ws.onerror = event => {
    return event.type;
  };
}

export function sendMessage(target, payload) {
  ws.send(JSON.stringify({ target, data: payload }));
}