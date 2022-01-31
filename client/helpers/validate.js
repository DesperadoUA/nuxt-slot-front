export default class Validate {
    static minLength(str, length){
        return str.length < length ? true : false
    }
    static maxLength(str, length){
        return str.length > length ? true : false
    }
    static isEmail(str) {
        return str.includes('@')
    }
    static isEmpty(str) {
        return str.length === 0 ? true : false
    }
}