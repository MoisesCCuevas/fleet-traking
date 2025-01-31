
/**
 * BarCart component renders a bar chart using the Recharts library.
 *
 * @component
 * @example
 * const data = [
 *   { name: 'Page A', National: 4000, International: 2400 },
 *   { name: 'Page B', National: 3000, International: 1398 },
 *   { name: 'Page C', National: 2000, International: 9800 },
 *   { name: 'Page D', National: 2780, International: 3908 },
 *   { name: 'Page E', National: 1890, International: 4800 },
 *   { name: 'Page F', National: 2390, International: 3800 },
 *   { name: 'Page G', National: 3490, International: 4300 },
 * ];
 * return <BarCart data={data} />;
 *
 * @param {Object[]} props.data - The data to be displayed in the bar chart.
 * @param {string} props.data[].name - The name of the data entry.
 * @param {number} props.data[].National - The value for the National bar.
 * @param {number} props.data[].International - The value for the International bar.
 *
 * @returns {JSX.Element} The rendered bar chart component.
 */
import { Fragment } from "react";
import { BarChart, XAxis, YAxis, Bar, Tooltip, Legend, ResponsiveContainer} from "recharts";

export default function BarCart({ data }){
  return (
    <Fragment>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={730} height={250} data={data}>
          <XAxis dataKey="numberPlate"  stroke="white" />
          <YAxis  stroke="white" />
          <Tooltip />
          <Legend />
          <Bar dataKey="kms15" fill="#d1a24f" />
        </BarChart>
      </ResponsiveContainer>
    </Fragment>
  )
}