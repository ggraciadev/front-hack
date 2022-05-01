import React, { Component, useEffect, useState, useRef, useImperativeHandle, forwardRef } from 'react';
import { StyleSheet, ActivityIndicator, View, Image } from 'react-native';
import MapView, {  Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import CustomButton from '../../../utils/customButton';
import useLocation from '../../../hooks/useLocation';
import CustomMapPoints from './customMapPoints';
import LocationModal   from './locationModal';

const CustomMapView = ({color, vehicleType, CloseStationInfo, OpenStationInfo, closeAndGoTo}) => {

  const {getSites} = useLocation();


  const [location,setLocation] = useState({
      latitude:41.3887900,
      longitude:2.1589900,
      latitudeDelta:0.01,
      longitudeDelta:0.01
  });

  const initialRegion = {
    latitude: location.latitude,
    longitude: location.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  var centerPositionReload;

  const [isLoading, setIsLoading] = useState(false);

  const [currentSelected, setCurrentSelected] = useState(null);

  const [sites, setSites] = useState([]);

  const InitSites = async () => {
    let pointsToShow = await getSites();
    let temp = Object.entries(pointsToShow);
    setSites(temp);
    setIsLoading(false);
  }

  useEffect(async () => {
    
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    centerPositionReload = true;
    await InitSites();
    setLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta:0.01,
      longitudeDelta:0.01
    });
  }, []);

  useEffect(() => {
    if(centerPositionReload) {
      centerPosition();
      centerPositionReload = false;
    }
  },[location]);

  const mapRef = useRef(null);
  const centerPosition = () => {
    mapRef.current.animateToRegion(
      location
    , 1500)
  }

  const onSelectLocation = (loc) => {
    setCurrentSelected(loc);
    setModalVisible(true);
  }

  

  const {latitude,longitude} = location;

  //0 -> Available, 1 -> Occupied, 2 -> Faulted, 
  //3 -> Unavailable, 4 -> Reserved, 5 -> Charging

  const [modalVisible, setModalVisible] = useState(false);

  return (
      <View style ={styles.mapContent}>

        <MapView
          style={styles.map}
          ref={mapRef}
          initialRegion={initialRegion}
        >


        <CustomMapPoints
          sites={sites}
          OpenStationInfo={onSelectLocation}
        />  

        </MapView>
        
        <LocationModal
          isVisible={modalVisible}
          handleAccept = {() => closeAndGoTo()}
          handleCancel={() => setModalVisible(false)}
          locationInfo={currentSelected}
        />
            
        <CustomButton
          OpenStationInfo = {OpenStationInfo}
          customStyles={[styles.floatingButton, styles.rightFloat]}
          source={require('../../../../assets/images/center.png')}
        />
        
    </View>
  );
}

const styles = StyleSheet.create({
    map: {
      width: '100%',
      flex: 1
    },
    mapMarker: {
      height: 32,
      width: 64,
      alignSelf: 'center',
      position:'relative',

      left: 0,
      right: 0
    
    },
    mapContent: {
      flex: 1,
      width: '100%',
    }, 
    spinner:{
      position: 'absolute',
      justifyContent: 'center',
      top:0,
      left:0,
      right: 0,
      bottom: 0,
    },
    floatingButton: {
      position: 'absolute',
      justifyContent: 'center',
      alignContent: 'center',
      width: 60,
      height: 60,
      bottom:25,
    },
    rightFloat: {
      right: 25
    },
    leftFloat: {
      left: 25
    },
})

export {CustomMapView};