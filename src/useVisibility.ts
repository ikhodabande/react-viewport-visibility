import { useEffect, useState } from "react";

interface Options {
  threshold?: number;
  once?: boolean;
  rootMargin?: string;
}

export function useVisibility(
  ref: React.RefObject<HTMLElement | null>,
  options: Options = {}
) {
  const { threshold = 0.1, once = false, rootMargin = "0px" } = options;
  const [isVisible, setIsVisible] = useState(false);
  const [ratio, setRatio] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setRatio(entry.intersectionRatio);
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else {
          if (!once) setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, threshold, once, rootMargin]);

  return { isVisible, ratio };
}
