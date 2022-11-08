// @ts-check
/**
 * @param {Object} [options] TinySlider options.
 * @param {Node | String} [options.container] Default: `".slider"`. The slider container element or selector.
 * @param {"carousel" | "gallery"} [options.mode] Default: `"carousel"`. Controls animation behaviour.
 * With `carousel` everything slides to the side, while `gallery` uses fade animations and changes all slides at once.
 * @param {"horizontal" | "vertical"} [options.axis] Default: `"horizontal"`. The axis of the slider.
 * @param {Number} [options.items] Default: `1`. Number of slides being displayed in the viewport. If slides less or equal than `items`,
 * the slider won't be initialized.
 * @param {Number} [options.gutter] Default: `0`. Space between slides (in "px").
 * @param {Number} [options.edgePadding] Default: `0`. Space on the outside (in "px").
 * @param {Number | false} [options.fixedWidth] Default: `false`. Controls `width` attribute of the slides.
 * @param {Boolean} [options.autoWidth] Default: `false`. If `true`, the width of each slide will be its natural width as a `inline-block` box.
 * @param {Number | false} [options.viewportMax] Default: `false`. Maximum viewport width for `fixedWidth`/`autoWidth`.
 * @param {Number | "page"} [options.slideBy] Default: `1`. Number of slides going on one "click".
 * @param {Boolean} [options.center] Default: `false`. Center the active slide in the viewport.
 * @param {Boolean} [options.controls] Default: `true`. Controls the display and functionalities of `controls` components (prev/next buttons).
 * If `true`, display the `controls` and add all functionalities. For better accessibility, when a prev/next button is focused,
 * user will be able to control the slider using left/right arrow keys.
 * @param {"top" | "bottom"} [options.controlsPosition] Default: `"top"`. Controls `controls` position.
 * @param {[String, String]} [options.controlsText] Default: `["prev", "next"]`. Text or markup in the prev/next buttons.
 * @param {Node | String | false} [options.controlsContainer] Default: `false`. The container element/selector around the prev/next buttons.
 * `controlsContainer` must have at least 2 child elements.
 * @param {Node | String | false} [options.prevButton] Default: `false`. Customized previous buttons. This option will be ignored if
 * `controlsContainer` is a Node element or a CSS selector.
 * @param {Node | String | false} [options.nextButton] Default: `false`. Customized next buttons. This option will be ignored if
 * `controlsContainer` is a Node element or a CSS selector.
 * @param {Boolean} [options.nav] Default: `true`. Controls the display and functionalities of `nav` components (dots). If `true`,
 * display the `nav` and add all functionalities.
 * @param {"top" | "bottom"} [options.navPosition] Default: `"top"`. Controls `nav` position.
 * @param {Node | String | false} [options.navContainer] Default: `false`. The container element/selector around the dots.
 * `navContainer` must have at least same number of children as the slides.
 * @param {Boolean} [options.navAsThumbnails] Default: `false`. Indicate if the dots are thumbnails. If `true`, they will
 * always be visible even when more than 1 slides displayed in the viewport.
 * @param {Boolean} [options.arrowKeys] Default: `false`. Allows using arrow keys to switch slides.
 * @param {Number} [options.speed] Default: `300`. Speed of the slide animation (in "ms").
 * @param {Boolean} [options.autoplay] Default: `false`. Toggles the automatic change of slides.
 * @param {"top" | "bottom"} [options.autoplayPosition] Default: `"top"`. Controls `autoplay` position.
 * @param {Number} [options.autoplayTimeout] Default: `5000`. Time between 2 `autoplay` slides change (in "ms").
 * @param {"forward" | "backward"} [options.autoplayDirection] Default: `"forward"`. Direction of slide movement
 * (ascending/descending the slide index).
 * @param {[String, String]} [options.autoplayText] Default: `["start", "stop"]`. Text or markup in the autoplay start/stop button.
 * @param {Boolean} [options.autoplayHoverPause] Default: `false`. Stops sliding on mouseover.
 * @param {Node | String | false} [options.autoplayButton] Default: `false`. The customized autoplay start/stop button or selector.
 * @param {Boolean} [options.autoplayButtonOutput] Default: `true`. Output `autoplayButton` markup when `autoplay` is true
 * but a customized `autoplayButton` is not provided.
 * @param {Boolean} [options.autoplayResetOnVisibility] Default: `true`. Pauses the sliding when the page is invisible
 * and resumes it when the page become visiable again.
 * @param {String} [options.animateIn] Default: `"tns-fadeIn"`. Name of intro animation class.
 * @param {String} [options.animateOut] Default: `"tns-fadeOut"`. Name of outro animation class.
 * @param {String} [options.animateNormal] Default: `"tns-normal"`. Name of default animation class.
 * @param {Number | false} [options.animateDelay] Default: `false`. Time between each gallery animation (in "ms").
 * @param {Boolean} [options.loop] Default: `true`. Moves throughout all the slides seamlessly.
 * @param {Boolean} [options.rewind] Default: `false`. Moves to the opposite edge when reaching the first or last slide.
 * @param {Boolean} [options.autoHeight] Default: `false`. Height of slider container changes according to each slide's height.
 * @param {{[key: Number]: { startIndex?: Number, items?: Number, slideBy?: Number | "page", speed?: Number, autoHeight?: Boolean,
 * fixedWidth?: Number | false, edgePadding?: Number, gutter?: Number, center?: Boolean, controls?: Boolean, controlsText?: [String, String],
 * nav?: Boolean, autoplay?: Boolean, autoplayHoverPause?: Boolean, autoplayResetOnVisibility?: Boolean, autoplayText?: [String, String],
 * autoplayTimeout?: Number, touch?: Boolean, mouseDrag?: Boolean, arrowKeys?: Boolean, disable?: Boolean
 * }}|false} [options.responsive] Default: `false`. Defines options for different viewport widths.
 * @param {Boolean} [options.lazyload] Default: `false`. Enables lazyloading images that are currently not viewed, thus saving bandwidth.
 * Class `.tns-lazy-img` need to be set on every image you want to lazyload if option `lazyloadSelector` is not specified;
 * `data-src` attribute with its value of the real image `src` is required;
 * `width` attribute for every image is required for `autoWidth` slider.
 * @param {String} [options.lazyloadSelector] Default: `".tns-lazy-img"`. The CSS selector for lazyload images.
 * @param {Boolean} [options.touch] Default: `true`. Activates input detection for touch devices.
 * @param {Boolean} [options.mouseDrag] Default: `false`. Changing slides by dragging them.
 * @param {Number | Boolean} [options.swipeAngle] Default: `15`. Swipe or drag will not be triggered if the angle is not inside the range.
 * @param {Boolean} [options.preventActionWhenRunning] Default: `false`. Prevent next transition while slider is transforming.
 * @param {"auto" | "force" | false} [options.preventScrollOnTouch] Default: `false`. Prevent page from scrolling on touchmove.
 * If set to "auto", the slider will first check if the touch direction matches the slider axis, then decide whether
 * prevent the page scrolling or not. If set to "force", the slider will always prevent the page scrolling.
 * @param {"inner" | "outer" | false} [options.nested] Default: `false`. Define the relationship between nested sliders.
 * Make sure you run the inner slider first, otherwise the height of the inner slider container will be wrong.
 * @param {Boolean} [options.freezable] Default: `true`. Indicate whether the slider will be frozen
 * (controls, nav, autoplay and other functions will stop work) when all slides can be displayed in one page.
 * @param {Boolean} [options.disable] Default: `false`. Disable slider.
 * @param {Number} [options.startIndex] Default: `0`. The initial `index` of the slider.
 * @param {Function | false} [options.onInit] Default: `false`. Callback to be run on initialization.
 * @param {Boolean} [options.useLocalStorage] Default: `true`. Save browser capability variables to localStorage
 * and without detecting them everytime the slider runs if set to true.
 * @param {String | false} [options.nonce] Default: `false`. Optional Nonce attribute for inline style tag to allow slider usage
 * without `unsafe-inline Content Security Policy source.
*/
const tns = function (options) {
    const slider = globalThis.tns(options)
    /** @function getInfo */
    const getInfo = function () { return slider.getInfo() }
    /** @function version */
    const version = function () { return slider.version() }
    /** @function events */
    const events = function () { return slider.events() }
    /** @function goTo */
    const goTo = function () { return slider.goTo() }
    /** @function play */
    const play = function () { return slider.play() }
    /** @function pause */
    const pause = function () { return slider.pause() }
    /** @function isOn */
    const isOn = function () { return slider.isOn() }
    /** @function updateSliderHeight */
    const updateSliderHeight = function () { return slider.updateSliderHeight() }
    /** @function refresh */
    const refresh = function () { return slider.refresh() }
    /** @function destroy */
    const destroy = function () { return slider.destroy() }
    /** @function rebuild */
    const rebuild = function () { return slider.rebuild() }
    return { slider, getInfo, version, events, goTo, play, pause, isOn, updateSliderHeight, refresh, destroy, rebuild }
}

export default tns
