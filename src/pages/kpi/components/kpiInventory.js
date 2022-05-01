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

function KPIInventory() {
  
  const {getInventory} = useLocation();

  const filters = [
    {
      filter: "warehouse"
    },
    {
      filter: "shop"
    }
  ]

  const [kpiData, setKpiData] = useState(
    [
    ]
  );

  useEffect(async () => {
    let temp=[];
    for(let i = 0; i < filters.length; i++) {
      const data = await getInventory(filters[i].filter);
      const filtered = data.slice(0,10);
      const labels = filtered?.map((item,index) => index);
      const values = filtered?.map(item => item.percentage);
      temp.push({labels: labels, datasets: [{data: values}]});
    }
    setKpiData(temp);
  }, []);

  var chartConfig = {
    backgroundColor: "#c2d5a8",
    backgroundGradientFrom: "#c2d5a8",
    backgroundGradientTo: "#e2e8b3",
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
            <Text style={styles.pageTitle}>Inventory</Text>
          </View>
          <View style = {styles.lineStyle}></View>
      <View style={styles.kpiContainer}>
      {
              kpiData[0] &&
              <Text>Occupied space per Warehouse</Text>
            }
       {kpiData[0] &&
       
       <LineChart
            data={kpiData[0] ?? null}
            width={Dimensions.get("window").width - 20} // from react-native
            height={350}
            yAxisSuffix=" %"
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
              <Text>Occupied space per Shop</Text>
            }
          {kpiData[1] &&
          <LineChart
          data={kpiData[1] ?? null}
          width={Dimensions.get("window").width - 20} // from react-native
          height={350}
          yAxisSuffix=" %"
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
  

export { KPIInventory }