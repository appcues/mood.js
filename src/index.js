import './createEvent' as createEvent;

const RAGE_CLICK_THRESHOLD = 5;
const ESCAPE_BASH_THRESHOLD = 3;
const ESCAPE_BASH_TIMEOUT = 200;


export function registerRageClick() {
  window.addEventListener('click', (e) => {
    // TODO: Debounce.
    if (e.detail >= RAGE_CLICK_THRESHOLD) {
      let event = createEvent('rageclick');
      e.target.dispatchEvent(event);
    }
  });
}

export function registerEscapeBash() {
  let counter = countConsecutive((count) => {
    if (count >= ESCAPE_BASH_THRESHOLD) {
      let event = createEvent('escapebash');
      window.dispatchEvent(event);
    }
  }, ESCAPE_BASH_TIMEOUT);

  window.addEventListener('keyup', (e) => {
    if (e.type === 'keyup' && e.keyCode === 27) {
      counter();
    }
  });
}

function countConsecutive(func, wait) {
  // If called before the wait, start the count over.
  let count = 0, timeoutId, timestamp;

  let later = () => {
    let last = Date.now() - timestamp;
    if (last < wait && last >= 0) {
      timeoutId = setTimeout(later, wait - last);
    } else {
      timeoutId = null;
      func(count);
      count = 0;
    }
  }

  return () => {
    timestamp = Date.now();
    count++;

    if (!timeoutId) {
      timeoutId = setTimeout(later, wait);
    }
  }
}
