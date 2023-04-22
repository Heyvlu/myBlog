class MyEventBus{
    constructor() {
        this.eventMap={};
    }

    // 订阅
    on(eventName,eventFn){
        let eventFns=this.eventMap[eventName];
        if(!eventFns){
            eventFns=[];
            this.eventMap[eventName]=eventFns;
        }
        eventFns.push(eventFn);
    }

    // 解绑
    off(eventName,eventFn){
        let eventFns=this.eventMap[eventName];
        if(!eventFns) return;
        for(let i=0;i<eventFns.length;i++){
            let fn=eventFns[i];
            if(fn===eventFn){
                eventFns.splice(i,1);
                break;
            }
        }
        // 如果eventFns已经清空了
        if(eventFns.length===0){
            delete this.eventMap[eventName];
        }
    }

    // 发布
    emit(eventName,...args){
        let eventFns=this.eventMap[eventName];
        if(!eventFns) return;
        eventFns.forEach(fn=>{
            fn(...args);
        })
    }
}

const eventBus=new MyEventBus();

export default eventBus;