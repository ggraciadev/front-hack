import { View, Text, StyleSheet, ScrollView, Pressable, Dimensions} from "react-native";
import { useContext } from 'react';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

function KPISales() {
  
    return (
        <ScrollView style={styles.container}>
          <LineChart
                data={{
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [
                    {
                    data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                    ]
                    }
                ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel="$"purchases
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                backgroundColor: "#3f5ae8",
                backgroundGradientFrom: "#3f5cfe",
                backgroundGradientTo: "#5cfa83",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                },
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                }
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 16
                }}
              />        
            </ScrollView>
      );purchases
      
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
  

export { KPISales }