import React, {Component} from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import moment from 'moment';

const createLabelArray = data => {
  const labelArray = [];
  let length = 0;
  data.map(value => {
    length = length > value.data.length ? length : value.data.length;
  });
  let time = moment('2019-2-20 8:00');
  let label = '';
  for (let i = 0; i < length; i += 20) {
    label = time.format('HH:mm');
    time = moment(time).add(20, 'm');
    labelArray.push(label);
  }
  return labelArray;
};

class Chart extends Component {
  render() {
    let labels = createLabelArray(this.props.data);
    return (
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text style={{marginLeft: 10, fontSize: 18}}>Test Chart</Text>
        <ScrollView horizontal={true}>
          <LineChart
            data={{
              labels: labels,
              datasets: this.props.data,
            }}
            width={Dimensions.get('window').width * 8}
            height={500}
            withDots={false}
            withShadow={false}
            withInnerLines={true}
            withOuterLines={true}
            fromZero={true}
            yAxisInterval={2} // optional, defaults to 1
            chartConfig={{
              backgroundGradientFrom: '#1E2923',
              backgroundGradientFromOpacity: 0,
              backgroundGradientTo: '#08130D',
              backgroundGradientToOpacity: 0,
              decimalPlaces: 0, // optional, defaults to 2dp
              color: () => `rgba(0, 0, 0, 0.2)`,
              labelColor: () => `rgba(0, 0, 0, 1)`,
              strokeWidth: 2,
            }}
            style={{
              marginVertical: 10,
              borderRadius: 0,
            }}
            segments={10}
            bezier
          />
        </ScrollView>
      </View>
    );
  }
}

export default Chart;
