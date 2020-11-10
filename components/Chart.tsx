import { FC, useEffect, useRef } from "react";

interface Props {
  symbol: string;
}

declare const window: any;

const Chart: FC<Props> = ({ symbol }) => {
  const ref = useRef<any>(null);

  async function initChart(Barchart) {
    await Barchart.widget({
      symbol,
      apiKey: process.env.NEXT_PUBLIC_BARCHART_API_KEY, // required only for localhost testing
      width: ref.current.parentNode.clientWidth,
      height: 240,
      aggregation: 1,
      theme: "LIGHT",
      style: 8,
      showSideToolbar: false,
      showMainToolbar: false,
      showFootToolbar: false,
      studies: [],
      elementId: ref.current?.id,
    });
  }

  useEffect(() => {
    const { Barchart } = window;
    if (ref.current) {
      initChart(Barchart);
    }
  }, [ref.current]);

  return (
    <div
      ref={ref}
      id={`barchartWidget_${symbol}`}
      style={{ width: "100%" }}
    ></div>
  );
};

export default Chart;
