import useResizeObserver from "@react-hook/resize-observer";
import { Copy, RefreshCw } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";

const useWidth = (target: React.RefObject<HTMLElement>) => {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (target.current) {
      setWidth(target.current.getBoundingClientRect().width);
    }

    return () => {
      setWidth(0);
    };
  }, [target]);

  // Where the magic happens
  useResizeObserver(target, (entry) => setWidth(entry.contentRect.width));
  return width;
};

export interface PasswordDisplayProps {
  password: string;
  onRegenerate: () => void;
}

export function PasswordDisplay({
  password,
  onRegenerate,
}: PasswordDisplayProps) {
  const buttonStyle =
    "h-full hover:bg-parchment-paper-stained outline-transparent hover:outline-parchment-paper-stained transition-all duration-300 outline-4 rounded";
  const widthTracker = useRef<HTMLSpanElement>(null);
  const width = useWidth(widthTracker);

  return (
    <div className="my-2 w-full px-2 flex flex-row flex-nowrap gap-2">
      <span ref={widthTracker} className="grow">
        <p
          style={{ width }}
          className="absolute overflow-hidden font-mono text-start text-ellipsis text-nowrap break-none"
        >
          {password}
        </p>
      </span>
      <button
        className={buttonStyle}
        onClick={() => navigator.clipboard.writeText(password)}
      >
        <Copy />
      </button>
      <button className={buttonStyle} onClick={onRegenerate}>
        <RefreshCw />
      </button>
    </div>
  );
}
