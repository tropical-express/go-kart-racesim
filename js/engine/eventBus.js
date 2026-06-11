export class EventBus {
    constructor() {
        this.events = {};
    }

    on(event, fn) {
        (this.events[event] ||= []).push(fn);
    }

    emit(event, data) {
        (this.events[event] || []).forEach(fn => fn(data));
    }
}

export const eventBus = new EventBus();