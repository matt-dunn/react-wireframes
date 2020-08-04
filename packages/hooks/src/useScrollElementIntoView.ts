import { useEffect } from "react";
import scrollIntoView from "scroll-into-view-if-needed";

type useScrollElementIntoViewProps<T> = {
  element: HTMLElement | null;
  boundary: HTMLElement | null;
  onScrollIntoView?: (el: HTMLElement) => void;
};

export function useScrollElementIntoView<T extends Element>({ element, boundary, onScrollIntoView }: useScrollElementIntoViewProps<T>) {
  useEffect(() => {
    /* istanbul ignore else */
    if (element && boundary) {
      scrollIntoView(element, {
        behavior: "smooth",
        block: "start",
        scrollMode: "if-needed",
        boundary,
      });

      /* istanbul ignore else */
      if (onScrollIntoView) {
        onScrollIntoView(element);
      }
    }
  }, [element, onScrollIntoView, boundary]);
}
