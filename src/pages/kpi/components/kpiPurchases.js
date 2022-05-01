import { View, Text, StyleSheet, ScrollView, Pressable, Dimensions} from "react-native";
import { useContext, useState, useEffect } from 'react';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

import useLocation  from '../../../hooks/useLocation';




function KPIPurchases() {

  const {getFilteredPurchases} = useLocation();

  const filters = [
    {
      kpiType: "purchases",
      filter: "month&year=2022"
    },
    {
      kpiType: "most_bought",
      filter: "month&year=2022"
    }
  ]

  const [kpiData, setKpiData] = useState(
    [
    ]
  );

  useEffect(async () => {
    let temp=[];
    for(let i = 0; i < filters.length; i++) {
      const data = await getFilteredPurchases(filters[i].kpiType, filters[i].filter);
      const filtered = data.slice(0,5);
      const labels = filtered.map(item => item.year || item.date);
      const values = filtered.map(item => item.count);
      temp.push({labels: labels, datasets: [{data: values}]});
    }
    setKpiData(temp);
  }, []);


    return (
        <ScrollView style={styles.container}>
          <View style={styles.chartContainer}>
            <Text style={styles.pageTitle}>Purchases</Text>
          </View>
          <View style = {styles.lineStyle}>
          </View>
          <View style={styles.kpiContainer}>
            {
              kpiData[0] &&
              <Text>Purchases per Month</Text>
            }
           {kpiData[0] &&
           ( 
           <LineChart
                data={kpiData[0] ?? null}
                width={Dimensions.get("window").width - 20} // from react-native
                height={350}
                yAxisSuffix=""
                fromZero={true}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: "#2f9fb3",
                  backgroundGradientFrom: "#2e8eb5",
                  backgroundGradientTo: "#3fafa3",
                  decimalPlaces: 0, // optional, defaults to 2dp
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
           )
            }    
            {
              kpiData[1] &&
              <Text>Purchases per Brand</Text>
            }
              {kpiData[1] &&
              <BarChart
                data={kpiData[1]}
                width={Dimensions.get("window").width - 20}
                height={350}
                fromZero={true}
                yAxisLabel=""
                chartConfig={{
                  backgroundColor: "#2f9fb3",
                  backgroundGradientFrom: "#2e8eb5",
                  backgroundGradientTo: "#3fafa3",
                  decimalPlaces: 0, // optional, defaults to 2dp
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
                style={{
                  marginVertical: 8,
                  borderRadius: 16
                  }}
                verticalLabelRotation={30}
              />
                }
                {kpiData[2] &&
              <BarChart
                data={kpiData[2]}
                width={Dimensions.get("window").width - 20}
                height={350}
                fromZero={true}
                yAxisLabel="$"
                chartConfig={{
                  backgroundColor: "#2f9fb3",
                  backgroundGradientFrom: "#2e8eb5",
                  backgroundGradientTo: "#3fafa3",
                  decimalPlaces: 0, // optional, defaults to 2dp
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
                style={{
                  marginVertical: 8,
                  borderRadius: 16
                  }}
                verticalLabelRotation={30}
              />
                }
              </View>
            </ScrollView>
      );
      
}

const styles = StyleSheet.create({
    container: {
      paddingTop: "6%",
      paddingBottom: "6%",
      paddingHorizontal: "3%",
    },
    kpiContainer: {
        height: 800,
        flexDirection: "column",
        alignItems: "center",
    },
    chartContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
      fontSize: 25,
    },
    pageTitle: {
      fontSize: 30,
      fontWeight: "bold",
      alignSelf: "center",
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
    },
    lineStyle:{
      borderWidth: 1,
      borderColor:'black',
      margin:10,
      marginBottom: "5%",
    }
  });
  

export { KPIPurchases }