"use client";
import "./CompanyMap.css";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from '@vis.gl/react-google-maps';



const CompanyMap = () =>
{
  const apiKey = process.env.REACT_APP_API_KEY;
  const mapId = process.env.REACT_APP_API_MAPID;
  const position = {lat: 999, lng: 999};

  const handleMarkerClick = () => 
    {
    const destination = `${position.lat},${position.lng}`;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    window.open(url, isMobile ? '_self' : '_blank');
  };

 


  return(
    <APIProvider apiKey = {apiKey}>
        <div id = "companyLocationMapContainer">
          <Map defaultZoom = {10} defaultCenter = {position} mapId = {mapId}>

            <AdvancedMarker position={position} onClick={handleMarkerClick}>
              <Pin/>
            </AdvancedMarker>
          </Map>
        </div>
    </APIProvider>
  );
}



export default CompanyMap;