/**
 * MapProvider component that wraps its children with the APIProvider from @vis.gl/react-google-maps.
 * 
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the APIProvider.
 * @param {string} props.apiKey - The API key for Google Maps.
 * @returns {React.ReactNode|null} The APIProvider component wrapping the children, or null if no apiKey is provided.
 */
import React from 'react';
import { APIProvider } from '@vis.gl/react-google-maps';

export default function MapProvider({ children, apiKey }) {
  if(!apiKey) return null;
  return (
    <APIProvider apiKey={apiKey}>
      {children}
    </APIProvider>
  );
}