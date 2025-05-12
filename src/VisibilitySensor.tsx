import React, { useEffect, useRef } from "react";
import { useVisibility } from "./useVisibility";

interface Props extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  threshold?: number;
  once?: boolean;
  rootMargin?: string;
  onVisibilityChange?: (visible: boolean) => void;
  children: React.ReactNode;
}

export const VisibilitySensor: React.FC<Props> = ({
  threshold = 0.1,
  once = false,
  rootMargin = "0px",
  onVisibilityChange,
  children,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isVisible } = useVisibility(ref, { threshold, once, rootMargin });

  useEffect(() => {
    if (onVisibilityChange) onVisibilityChange(isVisible);
  }, [isVisible, onVisibilityChange]);

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
};
