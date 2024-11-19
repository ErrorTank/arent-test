import {
  LineChart,
  Line,
  XAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import styles from "./Graph.module.css";

interface DataPoint {
  label: string;
  [key: string]: string | number;
}

interface GraphLine {
  dataKey: string;
  color: string;
  strokeWidth?: number;
}

interface GraphProps {
  data: DataPoint[];
  lines: GraphLine[];
  xAxisDataKey?: string;
  height?: number | string;
}

export const Graph = ({
  data,
  lines,
  xAxisDataKey = "label",
  height = 316,
}: GraphProps) => {
  return (
    <div className={styles.wrapper} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            horizontal={true}
            stroke="#777777"
          />

          <XAxis
            dataKey={xAxisDataKey}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#FFFFFF" }}
          />

          {lines.map(({ dataKey, color, strokeWidth = 3 }) => (
            <Line
              key={dataKey}
              type="linear"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={strokeWidth}
              dot={{
                r: 4,
                fill: "#2E2E2E",
                stroke: color,
                strokeWidth: 2,
              }}
              activeDot={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
