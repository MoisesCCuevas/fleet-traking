/**
 * AreaCart component renders an area chart using the recharts library.
 * 
 * @component
 * @example
 * const data = [
 *   { year: '2020', National: 4000, International: 2400 },
 *   { year: '2021', National: 3000, International: 1398 },
 *   { year: '2022', National: 2000, International: 9800 },
 *   { year: '2023', National: 2780, International: 3908 },
 * ];
 * return <AreaCart data={data} />;
 * 
 * @param {Object[]} data - The data to be displayed in the chart.
 * @param {string} data[].year - The year of the data point.
 * @param {number} data[].National - The national value of the data point.
 * @param {number} data[].International - The international value of the data point.
 * 
 * @returns {JSX.Element} The rendered AreaChart component.
 */
"use client"
import React, { Fragment } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function AreaCart({ data }) {
  return (
    <Fragment>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="kms15" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#d1a24f" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#d1a24f" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="numberPlate" stroke="white" />
          <YAxis stroke="white" />
          <Tooltip />
          <Area type="monotone" dataKey="kms15" stroke="#d1a24f" fillOpacity={1} fill="url(#kms15)" />
        </AreaChart>
      </ResponsiveContainer>
    </Fragment>
  )
}