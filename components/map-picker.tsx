/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

interface MapPickerProps {
  onLocationSelect: (location: {
    latitude: number;
    longitude: number;
    address: string;
    placeId?: string;
  }) => void;
  selectedLocation?: {
    latitude: number;
    longitude: number;
  };
}

export default function MapPicker({
  onLocationSelect,
  selectedLocation,
}: MapPickerProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load Google Maps script
    if (typeof window !== "undefined" && !(window as any).google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => setIsLoaded(true);
      document.head.appendChild(script);
    } else if ((window as any).google) {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded || !mapRef.current || map) return;

    // Default to HSR Layout, Bengaluru
    const defaultCenter = {
      lat: selectedLocation?.latitude || 12.9116,
      lng: selectedLocation?.longitude || 77.6195,
    };

    // Initialize map
    const googleMap = new (window as any).google.maps.Map(mapRef.current, {
      center: defaultCenter,
      zoom: 15,
      mapTypeControl: true,
      streetViewControl: false,
      fullscreenControl: true,
    });

    // Initialize marker
    const googleMarker = new (window as any).google.maps.Marker({
      map: googleMap,
      position: defaultCenter,
      draggable: true,
      animation: (window as any).google.maps.Animation.DROP,
      title: "Click on the map or drag me to select your location",
    });

    setMap(googleMap);

    // Handle map click
    googleMap.addListener("click", (e: any) => {
      if (e.latLng) {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        googleMarker.setPosition(e.latLng);
        getAddressFromLatLng(lat, lng);
      }
    });

    // Handle marker drag
    googleMarker.addListener("dragend", () => {
      const position = googleMarker.getPosition();
      if (position) {
        const lat = position.lat();
        const lng = position.lng();
        getAddressFromLatLng(lat, lng);
      }
    });

    // Geocoding function
    const getAddressFromLatLng = (lat: number, lng: number) => {
      const geocoder = new (window as any).google.maps.Geocoder();
      geocoder.geocode(
        { location: { lat, lng } },
        (results: any, status: string) => {
          if (status === "OK" && results && results[0]) {
            onLocationSelect({
              latitude: lat,
              longitude: lng,
              address: results[0].formatted_address,
              placeId: results[0].place_id,
            });
          } else {
            onLocationSelect({
              latitude: lat,
              longitude: lng,
              address: `${lat.toFixed(6)}, ${lng.toFixed(6)}`,
            });
          }
        }
      );
    };

    // Get initial address
    if (!selectedLocation) {
      getAddressFromLatLng(defaultCenter.lat, defaultCenter.lng);
    }
  }, [isLoaded, map, selectedLocation, onLocationSelect]);

  return (
    <div className="relative">
      <div
        ref={mapRef}
        className="h-[500px] rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
      />
      <div className="absolute top-4 left-4 bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-gray-300">
          <MapPin className="h-4 w-4 text-blue-600" />
          <span className="font-medium">
            Click or drag marker to select location
          </span>
        </div>
      </div>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-2xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-slate-600 dark:text-gray-400">Loading map...</p>
          </div>
        </div>
      )}
    </div>
  );
}
