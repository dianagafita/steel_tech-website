"use client";
import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import Loading from "../util/loading";

export default function MapComponent({ address }) {
  const mapRef = useRef(null);
  const [loading, setLoading] = useState(true); // To track the loading state

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });

    loader.load().then(() => {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK") {
          const map = new google.maps.Map(mapRef.current, {
            center: results[0].geometry.location,
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.SATELLITE, // Set default view to satellite
          });
          new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
          });
          setLoading(false); // Map loaded, hide the loading component
        } else {
          console.error(
            `Geocode was not successful for the following reason: ${status}`
          );
          setLoading(false); // Stop loading if geocoding fails
        }
      });
    });
  }, [address]);

  return <div className="w-full h-full" ref={mapRef} />;
}
