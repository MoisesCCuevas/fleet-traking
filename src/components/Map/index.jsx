/**
 * MapComponent is a React component that renders a Google Map with custom markers.
 * It adjusts the map center based on the active marker and changes the color scheme based on the theme.
 *
 * @component
 * @param {Object} props - The component props
 * @param {Array} props.data - Array of data objects to be displayed as markers on the map
 * @param {Object} props.active - The active marker object containing latitude and longitude
 * @param {Function} props.onClick - Callback function to handle marker click events
 *
 * @example
 * const data = [
 *   { lat: 19.508450, lng: -99.236721, ... },
 *   { lat: 19.508451, lng: -99.236722, ... }
 * ];
 * const active = { lat: 19.508450, lng: -99.236721 };
 * const handleClick = (item) => { console.log(item); };
 * 
 * <MapComponent data={data} active={active} onClick={handleClick} />
 */
import React, { useEffect, useState } from 'react'
import { Map, useMapsLibrary, useMap } from '@vis.gl/react-google-maps'
import { useTheme } from "next-themes"
import CostumeMark from '@components/MapCostumeMark'

export default function MapComponent({ data, active, onClick }) {
  const { theme } = useTheme();
  const [colorScheme, setColorScheme] = useState()
  const map = useMap();
  const core = useMapsLibrary("core")

  useEffect(() => {
    if (map && active) {
      map.setCenter({ lat: active.lat, lng: active.lng })
    }
  }, [map, active]);

  useEffect(() => {
    if (map) {
      setColorScheme(theme === "dark" ? core.ColorScheme.DARK : core.ColorScheme.LIGHT)
    }
  }, [map, theme]);

  if (data.length === 0) return null;
  return (
    <div className="w-full h-full overflow-hidden rounded-md">
      <Map
        mapId="fleetTracking"
        style={{width: '100%', height: '100%'}}
        defaultCenter={{lat: 19.508450, lng: -99.236721}}
        defaultZoom={12}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        colorScheme={colorScheme}
      >
        {data.map((item, index) => (
          <CostumeMark key={index} data={item} onClick={onClick} />
        ))}
      </Map>
    </div>
  )
};
