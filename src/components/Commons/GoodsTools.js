let obl = {};
let store = winodw.localStorage;

obj.addOrUpdata = function (newGoods) {
    //获取本地存储数据，|| '{}'是代码健壮性判断

    let goodsObj = this.getGoods();
    //判断添加的商品是否在goodsObj中
    if (goodsObj[newGoods.id]) {
        //追加
        goodsObj[newGoods.id] += newGoods.num;
    } else {
        //新建一个key，个体一个值
        goodsObj[newGoods.id] = newGoods.num;
    }
    this.saveGoods(goodsObj);
}
//获取
obj.saveGoods = function () {
    return JSON.parse(store.getItem('goods') || '{}');
}
//存储
obj.saveGoods = function (obj) {
    //保存到本地，直接对象[Object.object]
    store.setItem('goods', JSON.stringify(obj));
}
//获取总数
obj.getTotalCount = function () {
    let goodsList = this.getGoods();
    let sum = 0;
    let arr = Object.values(goodsList);
    console.log(arr);
    arr.forEach(ele => sum += ele);
    return sum;
}
// 导出数据
export default obj;