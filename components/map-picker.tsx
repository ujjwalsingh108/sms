"use client";
import { useEffect, useState } from "react";
// Drag-and-drop and location selector features are temporarily disabled.
// All map logic is commented out for now.

export default function MapPicker() {
  const [mapUrl, setMapUrl] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setMapUrl(
            `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`
          );
        },
        () => {
          // Fallback to a default location (e.g., India Gate, Delhi)
          setMapUrl(
            "https://www.google.com/maps?q=28.612964,77.229463&z=15&output=embed"
          );
        }
      );
    } else {
      setMapUrl(
        "https://www.google.com/maps?q=28.612964,77.229463&z=15&output=embed"
      );
    }
  }, []);

  return (
    <div className="relative w-full h-[350px] rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center">
      {mapUrl ? (
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: '12px', minHeight: '300px' }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={mapUrl}
        ></iframe>
      ) : (
        <div className="text-center text-slate-600 dark:text-gray-400">Loading map...</div>
      )}
    </div>
  );
}
