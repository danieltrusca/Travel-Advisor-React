import axios from 'axios';

const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData=async (sw, ne)=>{
    try {
        const {data: {data}}=await axios.get(URL, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': 'a868bf0e96mshd64a97c0af4d738p193e94jsnc129f9dc57bf'
            }
          });

        return data;
    } catch(err){
        console.log(err);
    }
}