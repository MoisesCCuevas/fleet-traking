/**
 * Tracking component that displays a map and a table of vehicle tracking data.
 *
 * @component
 * @example
 * return (
 *   <Tracking />
 * )
 *
 * @returns {JSX.Element} The rendered component.
 *
 * @description
 * This component fetches vehicle tracking data and a Google API key, and displays the data on a map and in a table.
 * The map is provided by the MapProvider component and rendered using the MapComponent component.
 * The table is rendered using the Table component.
 *
 * @function
 * @name Tracking
 *
 * @property {Array} tracking - State variable that holds the tracking data.
 * @property {Object} selectedVehicle - State variable that holds the selected vehicle's coordinates.
 * @property {Object} apiKeyGoogle - State variable that holds the Google API key.
 *
 * @method handleVehicleClick - Handles the click event on a vehicle, setting the selected vehicle's coordinates.
 * @param {Object} vehicle - The vehicle object containing latitude and longitude.
 *
 * @method getReports - Fetches the tracking data and Google API key.
 *
 * @hook useEffect - Calls getReports on component mount.
 */
"use client"
import React, { useEffect, useState } from "react"
import Layout from "@components/Layout"
import { logout } from "./actions"
import MapProvider from "@components/MapProvider"
import MapComponent from "@components/Map"
import { getGoogleAPI } from "./actions"
import Table from "@components/Table"

export default function Tracking(){
  const [tracking, setTracking] = useState([])
  const [selectedVehicle, setSelectedVehicle] = useState()
  const [apiKeyGoogle, setApiKeyGoogle] = useState({ key: null})

  const handleVehicleClick = (vehicle) => {
    setSelectedVehicle({
      lat: vehicle.lat,
      lng: vehicle.lng
    })
  }

  const getReports = () => {
    fetch("/api/getTracking")
      .then((response) => response.json())
      .then(({ data }) => setTracking(data))
    getGoogleAPI().then((data) => setApiKeyGoogle(data))
  }

  useEffect(() => {
    getReports()
  }, [])

  return (
    <Layout logout={logout}>
        <main className="h-screen w-4/5 fixed top-0 right-0 p-8">
          <figure className="w-full h-3/5">
            {apiKeyGoogle.key && (
              <MapProvider apiKey={apiKeyGoogle.key}>
                <MapComponent data={tracking} active={selectedVehicle} onClick={handleVehicleClick} />
              </MapProvider>
            )}
          </figure>
          <div className="w-full h-2/5 overflow-auto">
            <Table
              headers={["Id", "Latitude","Longitude","Kms (15 days)","Number Plate"]}
              data={tracking}
              onClickRow={handleVehicleClick}
            />
          </div>
      </main>
    </Layout>
  );
}