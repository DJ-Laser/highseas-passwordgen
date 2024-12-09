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

export function PasswordDisplay() {
  const widthTracker = useRef<HTMLSpanElement>(null);
  const width = useWidth(widthTracker);

  return (
    <div className="w-full px-2 flex flex-row flex-nowrap gap-2">
      <span ref={widthTracker} className="grow">
        <p
          style={{ width }}
          className="absolute overflow-hidden text-start text-ellipsis break-none"
        >
          paubcyiusjncfopusbpiuwsedfrgthyjnbgvfcdsfrgthyjmnhbvcdfrgthyjukmnhbvcf
        </p>
      </span>
      <button className="h-full">
        <Copy />
      </button>
      <button className="h-full">
        <RefreshCw />
      </button>
    </div>
  );
}
