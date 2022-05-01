import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable, Image } from 'react-native';
import Modal from 'react-native-modal';
import Button from '../../../utils/customButton';

export default ({isVisible, handleCancel, handleAccept, locationInfo}) => {
    
    const GetIcon = (info) => {
        let percent = info.current / info.capacity;
            let isWarehouse = info.objectType == "warehouse";
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
    };

    return(
        locationInfo ?
        <Modal isVisible={isVisible}>
            <View style={styles.modal}>
                <View style={styles.modalTitle}>
                    <Image 
                        source={GetIcon(locationInfo[1])}
                        style={[styles.icon]}
                    />
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    {locationInfo[1].objectType.toUpperCase()}
                        
                    </Text>
                </View>
                <View style={styles.modalInfo}>
                    <View style={styles.infoSlot}>
                        <Image 
                        style={styles.iconInfo}
                            source={require( '../../../../assets/images/icons/location.png')}
                        />
                    <View style={styles.modalSubtitle}>
                        <Text style={{fontSize: 15, fontWeight:'bold', marginLeft: 15}}>
                            Direction: 
                        </Text>
                        <Text>
                        {locationInfo[1].direction}
                        </Text>
                    </View>  
                    </View>
                    <View style={styles.infoSlot}>
                    <Image 
                        style={styles.iconInfo}
                            source={require( '../../../../assets/images/icons/open-box.png')}
                        />
                    <View style={styles.modalSubtitle}>
                        
                        <Text style={{fontSize: 15, fontWeight:'bold', marginLeft: 15}}>
                            Available Storage: 
                        </Text>
                        <Text>
                        {locationInfo[1].capacity - locationInfo[1].current} / {locationInfo[1].capacity}
                        </Text>
                    </View>   
                    </View>  
                    <View style={styles.infoSlot}>
                    <View style={styles.modalSubtitle}>
                    <Image 
                        style={styles.iconInfo}
                            source={require( '../../../../assets/images/icons/user.png')}
                        />
                        <Text style={{fontSize: 15, fontWeight:'bold', marginLeft: 15}}>
                            Employees:    
                        </Text>
                        <Text>
                        {locationInfo[1].numEmployees % 15 + 5}
                        </Text>
                    </View> 
                    </View>
                </View>


                <View style={styles.modalButtons}>   
                    <Button
                        customStyles={styles.cancelButton}
                        onPress={handleCancel}
                        text="Close"
                    />      
                        
                </View>
            </View>
        </Modal>
        : null
        
    )
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'space-evenly',
        backgroundColor: '#fff',
        width: '100%',
        height: '50%',
        borderRadius: 20,
        padding: 20,
        // backgroundColor: 'red'
    },
    icon: {
        width: 40,
        height: 40,
    },
    modalTitle:{
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'blue',
    },
    modalSubtitle:{
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'yellow'
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 40,
        // backgroundColor: 'green',
    },
    cancelButton: {
        backgroundColor: 'red',
        width: "45%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    acceptButton: {
        backgroundColor: 'green',
        width: "45%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    infoSlot: {
        flexDirection: 'row',
        height: 30,
        marginBottom: 10,
    },
    iconInfo: {
        height: 30,
        width: 30,

    }
})
