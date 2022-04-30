import { Marker } from 'react-native-maps';
import React, {  useEffect } from 'react';
import { Image } from 'react-native';

export default ({chargePoints, OpenStationInfo,searchedPoint}) => {

    const IsFavStation = (station) => {
        let ret = auth?.user?.favourites?.includes(station?.id?.toString());
        return ret;
    }

    const GetColorStation = (station) => { 
        
    }


    const markers=[]

    useEffect(() => markers.length === 2597 ? markers[searchedPoint].showCallout() : "",[searchedPoint])


    return(
        chargePoints?.map(chargePoint => 
            <Marker
            key={chargePoint[1].id}
            ref={(ref) => markers[chargePoint[1].id] = ref}
            onPress={()=>OpenStationInfo(chargePoint[1])}
                pinColor={GetColorStation(chargePoint[1])}
                //image={GetColorStation(chargePoint[1])}
                coordinate={{
                    latitude: chargePoint[1].lat,
                    longitude: chargePoint[1].lng
                }}
                title={chargePoint[1].name}
                />
                
        )
        )
}