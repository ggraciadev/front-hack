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

function KPIScreen() {
    return (
        <ScrollView style={styles.container}>
            
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
  

export { KPIScreen }