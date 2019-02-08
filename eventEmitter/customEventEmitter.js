 class CustomEventEmitter {
    constructor() {
        this.queue = [];
    }

    on(event, cb){
        this.queue.push({event, cb});
    }

    remove(event) {
        this.queue = this.queue.filter((item) => {
            return item.event !== event;
        });
    }

    emit(event, ...params) {
        this.queue.forEach((item) => {
            if(item.event === event) {
                item.cb(...params)
            }
        })
    }
}

module.exports = CustomEventEmitter;