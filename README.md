# Mood.js

Consolidate user behavior into a single, emittable javascript event.

### `registerRageClick`

Registers a new `rageclick` event to the browser that is triggered when the user clicks many times in rapid succession.

Example:

    registerRageClick();
    window.addEventListener('rageclick', (evt) => {
        console.log('User is enraged.');
    })



### `registerEscapeBash`

Registers a new `escapebash` event to the browser that is triggered when the user presses the escape key several times in rapid succession.

### `registerErraticMouse`

TODO: Implement.

### `registerTabFlipping`

TODO: Implement.