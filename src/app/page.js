"use client";
import Image from "next/image";
import SideNavBar from "@/components/Sidebar";
import SearchBar from "@/components/Searchbar";
import CategoryList from "@/components/CategoryList";
import Businesslist from "@/components/Businesslist";
import GlobalApi from "@/Shared/GlobalApi";
import { UserLocationContext } from "@/Context/userlocation";
import { useEffect, useState, useContext } from "react";
import Googlemap from "@/components/Googlemap";
import { BusinessListContext } from "@/Context/BusinessList";
export default function Home() {
  const [businesslist, setBusinessList] = useState(null);
  const {userLocation,setUserLocation}=useContext(UserLocationContext)
  useEffect(()=>{
    if(userLocation)
      getNearByPlace('medicine');
  },[userLocation])
  const getNearByPlace=(category)=>{
    GlobalApi.getNearByPlace(category, userLocation?.lat, userLocation.lng).then(resp=>{
      setBusinessList(resp.data.product.results);
    })
  }
  console.log(businesslist)
  return (
    <div className="flex">
      <BusinessListContext.Provider value={{businesslist,setBusinessList}}>
        <SideNavBar/>
        <div className="grid grid-cols-1
      md:grid-cols-2 px-6 md:px-10 w-full mt-10 gap-8">
        <div>
          <SearchBar/>
          <CategoryList selCategory={(category)=>getNearByPlace(category)}/>
          <Businesslist data = {businesslist} /> 
        </div>
        <div className=""><Googlemap/></div>
        </div>
        </BusinessListContext.Provider>
    </div>
  );
}
