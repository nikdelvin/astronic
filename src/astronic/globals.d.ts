export interface global {
    tns: Function
    someTest: any
}
declare global {
    function tns (options: any): any
    // eslint-disable-next-line no-var
    var someTest: any
}
