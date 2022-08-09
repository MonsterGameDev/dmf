class Utils {
    constructor() {
        this._hasTouchScreen = false;
    }

    get hasTouchScreen() {
        alert('im here: ' + !!('maxTouchPoints' in navigator));
        if ("maxTouchPoints" in navigator) {
            this._hasTouchScreen = navigator.maxTouchPoints > 0;
        } else if ("msMaxTouchPoints" in navigator) {
            this._hasTouchScreen = navigator.msMaxTouchPoints > 0;
        } else {
            var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
            if (mQ && mQ.media === "(pointer:coarse)") {
                this._hasTouchScreen = !!mQ.matches;
            } else if ('orientation' in window) {
                this._hasTouchScreen = true; // deprecated, but good fallback
            } else {
                // Only as a last resort, fall back to user agent sniffing
                var UA = navigator.userAgent;
                this._hasTouchScreen = (
                    /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
                    /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
                );
            }
        }

        return this._hasTouchScreen
    }


}

export default Utils;