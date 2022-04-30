import { View, Text, StyleSheet, ScrollView, Pressable, Dimensions} from "react-native";
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
import { KPIPurchases, KPISales, KPICosts, KPIInventory } from "./components";

function KPIScreen(kpi, color) {
  const kpiType = kpi.route.params.kpi;
  switch (kpiType) {
    case "purchases":
      return(
        <KPIPurchases 
          color={color}
        />
      );
      break;
    case "sales":
      return(
        <KPISales
          color={color}
        />
      );
        break;
    case "costs":
      return(
        <KPICosts
          color={color}  
        />
      );
      break;
    case "inventory":
      return(
        <KPIInventory
          color={color}
        />
      )
      break;
  
    default:
      break;
  }      
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