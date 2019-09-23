import React from 'react';
import { Text, View } from 'native-base';
import {
  ScrollView, Image, StyleSheet, Dimensions,
} from 'react-native';
import _ from 'lodash';


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  image: {
    marginRight: 7,
    marginLeft: 7,
    marginBottom: 4,
    width: width / 2,
    height: height / 2.8,
    borderRadius: 5,
  },
});

// eslint-disable-next-line react/prefer-stateless-function
export default class PopularEventsComponent extends React.Component {
  render() {
    const { events } = this.props;

    return (
      <ScrollView horizontal>
        {/* we use _.map function which is a collection
          method it can be used on objects and arrays
          */}
        { _.map(events, (event, i) => (
          <View key={i}>
            <Image style={styles.image} source={{ uri: event.image }} />
            <Text style={{
              fontSize: 15, color: '#333333', fontWeight: 'bold', alignItems: 'center',
            }}
            >
              {event.title}
            </Text>
            <Text note style={{ fontSize: 10 }}>{event.location}</Text>
          </View>
        ))
        }
      </ScrollView>
    );
  }
}
