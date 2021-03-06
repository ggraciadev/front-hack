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

function KPISales() {
  
  const {getFilteredSales} = useLocation();

  const filters = [
    {
      kpiType: "sales",
      filter: "month&year=2019"
    },
    {
      kpiType: "most_sold",
      filter: "month&year=2019"
    }
  ]

  const [kpiData, setKpiData] = useState(
    [
    ]
  );

  useEffect(async () => {
    let temp=[];
    for(let i = 0; i < filters.length; i++) {
      const data = await getFilteredSales(filters[i].kpiType, filters[i].filter);
      const filtered = data.slice(0,5);
      const labels = filtered?.map(item => item.year || item.date || item.brandName || item.motorType);
      const values = filtered?.map(item => item.count);
      temp.push({labels: labels, datasets: [{data: values}]});
    }
    setKpiData(temp);
  }, []);

  var chartConfig = {
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
  }

    return (
      <ScrollView style={styles.container}>
         <View style={styles.chartContainer}>
            <Text style={styles.pageTitle}>Sales</Text>
          </View>
          <View style = {styles.lineStyle}></View>
      <View style={styles.kpiContainer}>
      {
              kpiData[0] &&
              <Text>Sales per month</Text>
            }
       {kpiData[0] &&
       <LineChart
            data={kpiData[0] ?? null}
            width={Dimensions.get("window").width - 20} // from react-native
            height={350}
            yAxisSuffix=""
            fromZero={true}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={chartConfig}
            bezier
            style={{
            marginVertical: 8,
            borderRadius: 16
            }}
          />   
        }    
        {
              kpiData[1] &&
              <Text>Sales per Brand</Text>
            }
          {kpiData[1] &&
          <BarChart
            data={kpiData[1]}
            width={Dimensions.get("window").width - 20}
            height={350}
            yAxisLabel=""
            fromZero={true}
            chartConfig={chartConfig}
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
        height: 800,
        flexDirection: "column",
        alignItems: "center",
      },
      pageTitle: {
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "center",
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
    },
    lineStyle:{
      borderWidth: 1,
      borderColor:'black',
      margin:10,
      marginBottom: "5%",
    }
  });
  

export { KPISales }