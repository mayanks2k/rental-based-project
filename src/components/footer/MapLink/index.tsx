import React from 'react';

interface MapLinkProps {
  address: string;
}

const MapLink: React.FC<MapLinkProps> = ({ address }) => {
  // Function to open the address in the map application
  const openInMaps = (address: string) => {
    // URL encode the address
    const encodedAddress = encodeURIComponent(address);
    // Create the URL for Google Maps
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    // Open the URL in a new tab/window
    window.open(mapsUrl, '_blank');
  };

  return (
    <div>
      <button className='text-left hover:underline hover:text-green-500' onClick={() => openInMaps(address)}>
      MaberthVilla, Hose21/395/2, 
              NagaliHills, Street2, Lane1, 
              Caranzalem, North Goa, Goa (India), 403002
      </button>
    </div>
  );
};

export default MapLink;
