/**
 * Dashboard component that displays various reports and charts.
 *
 * @component
 * @example
 * return (
 *   <Dashboard />
 * )
 *
 * @returns {JSX.Element} The rendered Dashboard component.
 *
 * @description
 * This component fetches and displays different types of reports including total reports, area reports, and bar reports.
 * It uses the `useEffect` hook to fetch the reports when the component mounts and stores them in state variables.
 * The component renders a layout with a search input, filter icon, and a button to create a new report.
 * It also displays small cards for total reports and charts for area and bar reports.
 */
"use client"
import { useEffect, useState } from "react"
import Layout from "@components/Layout"
import { logout } from "./actions"
import {
  MagnifyingGlassIcon,
  PlusIcon,
  FunnelIcon,
  DocumentArrowDownIcon
} from "@heroicons/react/24/outline"
import Input from "@components/Input"
import RoundedButton from "@components/RoundedButton"
import SmallCard from "@components/SmallCard"
import Button from "@components/Button"
import Card from "@components/Card"
import AreaCart from "@components/AreaChart"
import BarCart from "@components/BarChart"

export default function Dashboard(){
  const [totalReport, setTotalReport] = useState([])
  const [areaReport, setAreaReport] = useState([])
  const [barReport, setBarReport] = useState([])

  const getReports = () => {
    fetch("/api/getReport/2")
      .then((response) => response.json())
      .then(({ data }) => setAreaReport(data))
    fetch("/api/getReport/1")
      .then((response) => response.json())
      .then(({ data }) => setTotalReport(data))
    fetch("/api/getReport/3")
      .then((response) => response.json())
      .then(({ data }) => setBarReport(data))
  }

  useEffect(() => {
    getReports()
  }, [])

  return (
    <Layout logout={logout}>
      <main className="h-screen w-full md:w-4/5 md:fixed md:top-0 md:right-0 p-8 mt-28 md:mt-0">
        <div className="flex items-center gap-3 justify-self-start flex-wrap md:flex-nowrap w-full md:w-2/3">
          <Input placeholder="Buscar..." />
          <MagnifyingGlassIcon className="size-5" />
          <FunnelIcon className="size-5" />
          <Button>
            New report
            <PlusIcon className="size-5" />
          </Button>
        </div>
        <section className="flex flex-col md:flex-row items-center gap-3 justify-between mt-4">
          {totalReport.map(({ title, total, percentage }) => (
            <SmallCard key={title} title={title} total={total} percentage={percentage} />
          ))}
        </section>
        <section className="flex flex-col md:flex-row my-4 gap-3">
          <Card>
            <BarCart data={barReport} />
            <div className="absolute top-4 right-4">
              <RoundedButton>
                <DocumentArrowDownIcon className="size-5" />
              </RoundedButton>
            </div>
          </Card>
          <Card>
            <AreaCart data={areaReport} />
            <div className="absolute top-4 right-4">
              <RoundedButton>
                <DocumentArrowDownIcon className="size-5" />
              </RoundedButton>
            </div>
          </Card>
        </section>
      </main>
    </Layout>
  );
}