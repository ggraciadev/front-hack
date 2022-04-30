import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import Button from '../../../utils/customButton';

export default ({isVisible, handleCancel, handleAccept, locationInfo}) => {
    
    return(
        locationInfo ?
        <Modal isVisible={isVisible}>
            <View style={styles.modal}>
                <View style={styles.modalTitle}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    {locationInfo[1].objectType}
                        
                    </Text>
                </View>
                <View style={styles.modalInfo}>
                    <View style={styles.modalSubtitle}>
                        <Text style={{fontSize: 15, fontWeight:'bold'}}>
                            Direction: 
                        </Text>
                        <Text>
                        {locationInfo[1].direction}
                        </Text>
                    </View>  
                    <View style={styles.modalSubtitle}>
                        <Text style={{fontSize: 15, fontWeight:'bold'}}>
                            Available Storage: 
                        </Text>
                        <Text>
                        {locationInfo[1].capacity - locationInfo[1].current} / {locationInfo[1].capacity}
                        </Text>
                    </View>     
                    <View style={styles.modalSubtitle}>
                        <Text style={{fontSize: 15, fontWeight:'bold'}}>
                            Employees:    
                        </Text>
                        <Text styles={{marginLeft: 50}}>
                        {locationInfo[1].numEmployees % 15 + 5}
                        </Text>
                    </View> 
                </View>


                <View style={styles.modalButtons}>   
                    <Button
                        customStyles={styles.cancelButton}
                        onPress={handleCancel}
                        text="Cancel"
                    />                 
                    <Button
                        customStyles={styles.acceptButton}
                        onPress={handleAccept}
                        text="Accept"
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
})
