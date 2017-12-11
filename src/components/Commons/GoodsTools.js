let obj = {};
let store = window.localStorage;

obj.addOrUpdate = function (newGoods) {
    //获取本地存储数据，|| '{}'是代码健壮性判断
    // let goodsObj = JSON.parse(store.getItem('goods')||'{}');
    let goodsObj = this.getGoods();
    //判断添加的商品是否在goodsObj中
    if (goodsObj[newGoods.id]) {
        //追加
        goodsObj[newGoods.id] += newGoods.num;
    } else {
        //新建一个key，给一个值
        goodsObj[newGoods.id] = newGoods.num;
    }
    this.saveGoods(goodsObj);
}
//获取
obj.getGoods = function () {
    return JSON.parse(store.getItem('goods') || '{}');
}
//保存到本地
obj.saveGoods = function (obj) {
    //保存到本地，直接对象[Object.object]
    store.setItem('goods', JSON.stringify(goodsObj));
}
//获取总数
obj.getTotalCount = function () {
    let goodsList = this.getGoods();
    let sum = 0;
    let arr = Object.values(goodsList);
    // console.log(arr);
    arr.forEach(ele => sum += ele);
    return sum;
}
//保存数据对象
obj.saveArr = function (arr) {
    let obj = {};
    arr.forEach(ele => {
        obj[ele.id] = ele.pickNum;
    });
    return saveGoods(obj);
}
// 导出数据
export default obj;
