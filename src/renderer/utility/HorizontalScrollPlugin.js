import Scrollbar from 'smooth-scrollbar'

export default class HorizontalScrollPlugin extends Scrollbar.ScrollbarPlugin {
    static pluginName = 'horizontalScroll';
    transformDelta (delta, fromEvent) {
      const { x, y } = delta
      if (!this.scrollbar.options.horizontal) {
        return {
          y: y,
          x: 0
        }
      }
      if (!/wheel/.test(fromEvent.type)) {
        return delta
      }
      // @see: https://github.com/idiotWu/smooth-scrollbar/issues/181
      return {
        y: 0,
        x: Math.abs(x) > Math.abs(y) ? x : y
      }
    }
}
