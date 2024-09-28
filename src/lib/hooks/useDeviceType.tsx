import { useMemo } from "react";

const useDeviceType = (): "mobile" | "desktop" => {
  return useMemo(
    () =>
      /android|iphone|kindle|ipad/i.test(getPlatform()) ? "mobile" : "desktop",
    [navigator]
  );
};

interface Navigator extends globalThis.Navigator {
  userAgentData?: {
    brands: { brand: string; version: string }[];
    mobile: boolean;
    platform: string;
    getHighEntropyValues: (hints: string[]) => Promise<{
      platform: string;
      platformVersion: string;
      uaFullVersion: string;
    }>;
  };
}
export function getPlatform(): string {
  const nav = navigator as Navigator;

  if (nav.userAgentData) {
    if (nav.userAgentData.platform) {
      return nav.userAgentData.platform;
    }

    nav.userAgentData
      .getHighEntropyValues(["platform"])
      .then((highEntropyValues) => {
        if (highEntropyValues.platform) {
          return highEntropyValues.platform;
        }
      });
  }

  if (typeof navigator.platform === "string") {
    return navigator.platform;
  }

  return "";
}
export default useDeviceType;
