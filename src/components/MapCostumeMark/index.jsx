/**
 * CostumeMark component renders a custom marker on a map using the AdvancedMarker component from @vis.gl/react-google-maps.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Object} props.data - The data object containing information about the marker.
 * @param {number} props.data.lat - The latitude position of the marker.
 * @param {number} props.data.lng - The longitude position of the marker.
 * @param {string} props.data.numberPlate - The number plate of the vehicle, used as the alt text for the marker image.
 * @param {Function} props.onClick - The function to call when the marker is clicked.
 *
 * @example
 * const data = { lat: 37.7749, lng: -122.4194, numberPlate: 'ABC123' };
 * const handleClick = (data) => console.log(data);
 * 
 * <CostumeMark data={data} onClick={handleClick} />
 */
import React from 'react';
import { AdvancedMarker } from '@vis.gl/react-google-maps';

export default function CostumeMark({ data, onClick }) {
  return (
    <AdvancedMarker
      position={{ lat: data.lat, lng: data.lng }}
      onClick={() => onClick(data)}
    >
      <img src="/vehicle.webp" alt={data.numberPlate} className="size-8" />
    </AdvancedMarker>
  )
}