export class Event {
  /**
   * @param name {string}
   */
  constructor(name) {
    this.name = name;
    this.callbacks = [];
  }

  /**
   * Attach callback to event
   * @param {Callable} callback
   */
  attach(callback) {
    this.callbacks.push(callback);
  }
}

export class EventDispatcher {
  /**
   * EventDispatcher constructor
   */
  constructor() {
    this.events = {};
  }

  /**
   * Register an event
   * @param {string} eventName
   */
  register(eventName) {
    this.events[eventName] = new Event(eventName);
  }

  /**
   * Dispatch an event with args
   * @param {string} eventName
   * @param {Any} eventArgs
   */
  dispatch(eventName, eventArgs) {
    this.events[eventName].callbacks.forEach((callback) => callback(eventArgs));
  }

  /**
   * Add event listener to an event
   * @param {string} eventName
   * @param {function} callback
   */
  addEventListener(eventName, callback) {
    this.events[eventName].attach(callback);
  }
}
