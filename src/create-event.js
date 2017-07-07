export default function createEvent(eventName, data = {}) {
  let event;
  if (window.CustomEvent) {
    event = new CustomEvent(eventName, {detail: data});
  } else {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent(eventName, true, true, data);
  }

  return event;
}
