import { Marker } from 'react-native-maps';
import React, {  useEffect } from 'react';
import { Image } from 'react-native';

export default ({sites, OpenStationInfo,searchedPoint}) => {
    const stationColors = [
        '#629C44', //VERDE (>=90%)
        '#FFE608', //AMARILLO (>= 70%)
        '#FF930F', //NARANJA (>= 1)
        '#D41F31', //ROJO (0)
        '#878787', //GRIS (?),
        '#1D69A6'  //AZUL
    ];

    const IsFavStation = (station) => {
        let ret = auth?.user?.favourites?.includes(station?.id?.toString());
        return ret;
    }

    const GetColorStation = (station) => { 
        if(station !== null) {
            let percent = station[1].current / station[1].capacity;
            let isWarehouse = station[1].objectType == "warehouse";
            if(percent >= 0.9) {
                if(isWarehouse) {
                    return (require( '../../../../assets/images/icons/wareHouseRed.png'));
                }
                else {
                    return (require( '../../../../assets/images/icons/shopRed.png'));
                }
            }
            else if(percent >= 0.7) {
                if(isWarehouse) {
                    return (require( '../../../../assets/images/icons/wareHouseYellow.png'));
                }
                else {
                    return (require( '../../../../assets/images/icons/shopYellow.png'));
                }
            }
            else {
                if(isWarehouse) {
                    return (require( '../../../../assets/images/icons/wareHouseGreen.png'));
                }
                else {
                    return (require( '../../../../assets/images/icons/shopGreen.png'));
                }
            }
        }
    };

    const markers=[]

    useEffect(() => markers.length === 2597 ? markers[searchedPoint].showCallout() : "",[searchedPoint])


    return(
        sites?.map((site, index) => 
            <Marker
            key={index}
            ref={(ref) => markers[site[1].id] = ref}
            onPress={()=>OpenStationInfo(site)}
            image={GetColorStation(site)}
                coordinate={{
                    latitude: site[1].coordinates.lat,
                    longitude: site[1].coordinates.lng
                }}
                title={site[1].name}
                />
                
        )
        )
}