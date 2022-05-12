/**
 * @description 深拷贝
 * @param {Object|Number} 原始对象
 */
 export const  deepClone = function(data) {
    let newData = null
    if (typeof data === 'object') {
        newData = Array.isArray(data) ? [] : {}
    } else {
        return data
    }
    Object.keys(data).forEach(key => {
        newData[key] = deepClone(data[key])
    })
    return newData
}