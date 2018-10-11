// 观察者列表
class Subscribe {
  constructor(observers) {
    // 初始化列表
    this.observers = [];
  }
  add(observer) {
    // 将被观察的对象存入队列
    this.observers.push(observer);
  }
  remove(observer) {
    // 删除当前被观察的对象
    let observers = this.observers;
    observers.forEach((element, index) => {
      if (element === observer) {
        observers.splice(index, 1);
      }
    });
  }
  notify() {
    // 通知目前所有队列的对象
    let observers = this.observers;
    observers.forEach((element, index) => {
      element.update();
    });
  }
}
// 目标
class Observer {
  constructor(initData) {
    this.initData = initData;
  }
  update() {
    console.log(`name是:${this.initData.name}`, `age是:${this.initData.age}`);
  }
}
var sub = new Subscribe();

var obs1 = new Observer({ name: "obs1", age: 1 });
var obs2 = new Observer({ name: "obs2", age: 2 });
let obsArr = [obs1, obs2];
obsArr.forEach(ele => {
  sub.add(ele);
});
sub.notify();
sub.remove(obs1);
sub.notify();
