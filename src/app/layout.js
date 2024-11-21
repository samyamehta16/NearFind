"use client";
import localFont from "next/font/local";
import "./globals.css";
import { useState, useEffect } from "react";
import { UserLocationContext } from "@/Context/userlocation";

export default function RootLayout({ children }) {
  const [userLocation,setUserLocation]=useState(null)
  useEffect(()=>{
    getUserLocation()
  },[])
  const getUserLocation=()=>{
    navigator.geolocation.getCurrentPosition(function(pos){
      setUserLocation({
        lat:pos.coords.latitude,
        lng:pos.coords.longitude
      })
    })
  }
  return (
    <html lang="en">
      <body>
        <UserLocationContext.Provider value={{userLocation,setUserLocation}}>
        {children}
        </UserLocationContext.Provider>
      </body>
    </html>
  );
}
