import React, { useRef } from "react";
import { useVisibility } from "./useVisibility";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  threshold?: number;
  once?: boolean;
  rootMargin?: string;
  onChange?: (visible: boolean) => void;
  children: React.ReactNode;
}

export const VisibilitySensor: React.FC<Props> = ({
  threshold,
  once,
  rootMargin,
  onChange,
  children,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isVisible } = useVisibility(ref, { threshold, once, rootMargin });

  useEffect(() => {
    if (onChange) onChange(isVisible);
  }, [isVisible]);

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
};
