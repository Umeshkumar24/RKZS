'use client'

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function Graph() {
  const option = {
    chart: {
      id: 'apexchart-example'
    },
    xaxis: {
      categories: [2019, 2020, 2021, 2022, 2023]
    }
  }

  const series = [{
    name: 'Students',
    data: [22, 35, 40, 52, 98]
  }]

  return (
    <>
      <center>
        <ApexChart type="bar" options={option} series={series} height={400} width={500} />
      </center>
    </>
  )

}