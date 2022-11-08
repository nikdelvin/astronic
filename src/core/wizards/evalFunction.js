// @ts-check
class evalFunction {
    /**
     * @param {{params?: Object, callback: Function} | false} [event] Function object to initialization
    */
    static init (event) {
        let strCallback = 'false'
        if (event) {
            if (event.callback) {
                strCallback = String(event.callback)
                let strParams = ''
                if (event.params) {
                    for (const [param, value] of Object.entries(event.params)) {
                        strParams = strParams + param + ' = ' + JSON.stringify(value) + ','
                    }
                }
                strCallback = strCallback.replace('() =>', 'const run = (' + strParams + ') =>')
            }
        }
        return strCallback
    }

    /**
     * @param {Element} element DOM element with function data to eval
     * @param {String} attribute DOM element data-attribute with function data to eval
    */
    static run (element, attribute) {
        // eslint-disable-next-line no-eval
        return eval(element.getAttribute(attribute) + '; run();')
    }
}
export default evalFunction
