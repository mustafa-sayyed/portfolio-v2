import posthog from "posthog-js";

export const handleClick = function (menuName: string) {
  posthog.capture(`${menuName}_clicked`);
};
