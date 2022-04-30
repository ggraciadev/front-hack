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

function KPICosts(color) {
  
  const {getFilteredCosts} = useLocation();

  const filters = [
    {
      kpiType: "purchases",
      filter: "month&year=2022"
    },
    {
      kpiType: "type",
      filter: "month&year=2022"
    },
    {
      kpiType: "most_bought",
      filter: "month&year=2022"
    }
  ]

  const [kpiData, setKpiData] = useState(
    [
      {
        labels: [2020,2021,2022],
        datasets: [
          {
            data: [20, 45, 28],
            color: (opacity = 1) => `${color}`, // optional
            strokeWidth: 2 // optional
          }
        ],
      }
    ]
  );

  useEffect(async () => {
    let temp=[];
    for(let i = 0; i < filters.length; i++) {
      const data = await getFilteredCosts(filters[i].kpiType, filters[i].filter);
      console.log(data);
      const labels = data.map(item => item.year || item.date);
      const values = data.map(item => item.count);
      temp.push({labels: labels, datasets: [{data: values}]});
    }
    setKpiData(temp);
  }, []);

    return (
      <ScrollView style={styles.container}>
      <View style={styles.kpiContainer}>
       {kpiData[0] &&
       <LineChart
            data={kpiData[0] ?? null}
            width={Dimensions.get("window").width - 20} // from react-native
            height={350}
            yAxisSuffix=" units"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#f0d5ba",
              backgroundGradientFrom: "#a18162",
              backgroundGradientTo: "#f0d5ba",
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
        }    
          {kpiData[1] &&
          <BarChart
            data={kpiData[1]}
            width={Dimensions.get("window").width - 20}
            height={350}
            yAxisLabel="$"
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
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
            yAxisLabel="$"
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
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
  

export { KPICosts }