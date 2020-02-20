import React from 'react';
import {SafeAreaView} from 'react-native';
import Chart from './component/Chart';

import data from './data';

//modify the json data to use react-native-chat-kit
const getData = () => {
  const colors = ['#00ff00', '#0000ff'];
  const datasets = [];
  data.map((value, index) => {
    const data = [];
    value.datapoints.map(point => {
      /* If point[0] is not a number, will ignore this value  */
      if (parseFloat(point[0])) {
        data.push(point[0]);
      }
    });
    datasets.push({
      data: data,
      color: () => `${colors[index]}`,
    });
  });
  return datasets;
};

class App extends React.Component {
  render() {
    let data = getData();
    return (
      <SafeAreaView style={{backgroundColor: '#e26a0020', flex: 1}}>
        <Chart data={data} />
      </SafeAreaView>
    );
  }
}

export default App;
