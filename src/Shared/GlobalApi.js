const { default: axios } = require("axios");

const getNearByPlace=(category,lat,lng)=>axios.get('/api/nearbysearch?category='+
category+"&lat="+lat+"&lng="+lng);


const searchPlace=(searchtext,lat,lng)=>axios.get('/api/searchplace?searchtext='+
searchtext+"&lat="+lat+"&lng="+lng);


export default{
    getNearByPlace,
    searchPlace
    
}
