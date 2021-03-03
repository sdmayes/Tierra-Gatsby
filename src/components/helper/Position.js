// if server 
const isBrowser = typeof window !== `undefined`

// take in an element and return its scroll position
export function getScrollPosition(element) {
    if (!isBrowser) return { x: 0, y: 0 }

    //no element is supplied
    const target = element ? element.current : document.body

    return target.getBoundingClientRect().y
}