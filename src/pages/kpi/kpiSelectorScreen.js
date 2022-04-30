import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import useAuth from '../../hooks/useAuth';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import CustomButton from "../../utils/customButton";

function KPISelectorScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Chart catalog</Text>
            <View style={styles.kpiContainer}>
                <View style={styles.buttonRow}>
                    <CustomButton
                        customStyles={[styles.kpiButton, {backgroundColor:'#2f9fb3'}]}
                        text="Purchases"
                        imageSrc={require('../../../assets/images/purchase.png')}
                        imageHeight={50}
                        imageWidth={50}
                        onPress={() => {}}
                    />
                    <CustomButton
                        customStyles={[styles.kpiButton, {backgroundColor:'#f0d5ba'}]}
                        text="Sales"
                        imageSrc={require('../../../assets/images/sale.png')}
                        imageHeight={50}
                        imageWidth={50}
                        onPress={() => {}}
                    />
                </View>

                <View style={styles.buttonRow}>
                    <CustomButton
                        customStyles={[styles.kpiButton, {backgroundColor:'#e3a7c0'}]}
                        text="Costs"
                        imageSrc={require('../../../assets/images/cost.png')}
                        imageHeight={50}
                        imageWidth={50}
                        onPress={() => {}}
                    />
                    <CustomButton
                        customStyles={[styles.kpiButton, {backgroundColor:'#b0abcb'}]}
                        text="Profit"
                        imageSrc={require('../../../assets/images/profit.png')}
                        imageHeight={50}
                        imageWidth={50}
                        onPress={() => {}}
                    />
                </View>

                <View style={styles.buttonRow}>
                    <CustomButton
                        customStyles={[styles.kpiButton, {backgroundColor:'#c2d5a8'}]}
                        text="Inventory"
                        imageSrc={require('../../../assets/images/inventory.png')}
                        imageHeight={50}
                        imageWidth={50}
                        onPress={() => {}}
                    />
                    <CustomButton
                        customStyles={[styles.kpiButton, {backgroundColor:'#f33f00'}]}
                        text="Zones"
                        imageSrc={require('../../../assets/images/zone.png')}
                        imageHeight={50}
                        imageWidth={50}
                        onPress={() => {}}
                    />
                </View>
            </View>
        </ScrollView>
      );
      
}

const styles = StyleSheet.create({
    container: {
      paddingTop: "6%",
      paddingHorizontal: "3%",
    },
    kpiContainer: {
            
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      },
    title: {
      fontSize: 25,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',        
        width: '100%',
    },
    kpiButton: {
        marginTop: '20%',
        height: 100,
        width: 100,
    }
  });
  

export { KPISelectorScreen }