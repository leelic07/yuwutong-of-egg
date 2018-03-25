/**
 * Created by Administrator on 2018/3/25 0025.
 */
'use strict';

module.exports = {
  // 将下划线转化成驼峰
  transformStr(str) {
    const re = /_(\w)/g;
    return str.replace(re, ($0, $1) => $1.toUpperCase());
  },
  // 将对象数组中的所有的下划线字符串都转换成驼峰字符串
  transformArr(arr) {
    const newArr = [];
    arr.forEach(item => {
      const doc = item;
      const docTemp = {};
      for (const key in doc) {
        // doc[key] = typeof doc[key] === 'object' ? this.transformObj(doc[key]) : doc[key];
        docTemp[this.transformStr(key)] = doc[key];
      }
      newArr.push(docTemp);
    });
    return newArr;
  },
  // 将对象中的所有的下划线字符串都转换成驼峰字符串
  transformObj(obj) {
    const doc = obj;
    const docTemp = {};
    for (const key in doc) {
      docTemp[this.transformStr(key)] = doc[key];
    }
    return docTemp;
  },
};
