
const useDeviceType = (): "mobile" | "desktop" => {
    return (/android|iphone|kindle|ipad/i.test(navigator.userAgent) ? "mobile" : "desktop")
}

export default useDeviceType