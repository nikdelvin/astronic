interface AstronicType {
    init: () => any,
    onInit?: () => any,
    Carousel?: {
        version: () => any,
        getInfo: (id: string) => any,
        callEvent: (id: string, name: 'indexChanged' | 'transitionStart' | 'transitionEnd' | 'newBreakpointStart' | 'newBreakpointEnd' | 'touchStart' | 'touchMove' | 'touchEnd' | 'dragStart' | 'dragMove' | 'dragEnd', callback: Function) => any,
        removeEvent: (id: string, name: 'indexChanged' | 'transitionStart' | 'transitionEnd' | 'newBreakpointStart' | 'newBreakpointEnd' | 'touchStart' | 'touchMove' | 'touchEnd' | 'dragStart' | 'dragMove' | 'dragEnd', callback: Function) => any,
        goTo: (id: string, slide: number) => any,
        play: (id: string) => any,
        pause: (id: string) => any,
        updateSliderHeight: (id: string) => any,
        destroy: (id: string) => any,
        rebuild: (id: string) => any
    }
}
const Astronic: AstronicType = {
    init: () => {
        document.addEventListener('DOMContentLoaded', function () {
            Astronic.onInit()
        })
    }
}
export default Astronic