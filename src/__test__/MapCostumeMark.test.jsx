import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CostumeMark from '@components/MapCostumeMark';

jest.mock('@vis.gl/react-google-maps', () => ({
  AdvancedMarker: ({ data, children, onClick }) => (
    <div
      data-testid="advanced-marker"
      onClick={() => onClick(data)}
    >
      {children}
    </div>
  ),
}));

describe('CostumeMark Component', () => {
  const data = { lat: 37.7749, lng: -122.4194, numberPlate: 'ABC123' };
  const handleClick = jest.fn();

  test('renders without crashing', () => {
    render(<CostumeMark data={data} onClick={handleClick} />);
    const markerImage = screen.getByAltText('ABC123');
    expect(markerImage).toBeInTheDocument();
  });

  test('displays the correct image', () => {
    render(<CostumeMark data={data} onClick={handleClick} />);
    const markerImage = screen.getByAltText('ABC123');
    expect(markerImage).toHaveAttribute('src', '/vehicle.webp');
  });

  test('calls onClick handler when clicked', () => {
    render(<CostumeMark data={data} onClick={handleClick} />);
    const advancedMarker = screen.getByTestId('advanced-marker');
    expect(advancedMarker).toBeInTheDocument();
    fireEvent.click(advancedMarker);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith(data);
  });
});