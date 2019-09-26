import React from 'react';
import {
  Body, Card, CardItem, Left, Text, Thumbnail, View,
} from 'native-base';
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

  imagesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  storiesContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  box: {
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,

  },
  image: {
    alignSelf: 'center',
    width: width / 2,
    height: height / 2.8,
    borderRadius: 5,
    padding: 10,
  },
  textBox: {
    padding: 15,
    marginLeft: 10,
    marginRight: 10,
  },
});

// eslint-disable-next-line react/prefer-stateless-function
export default class PopularEventsComponent extends React.Component {
  render() {
    const { events } = this.props;
    return (
      <ScrollView>
        {!_.isEmpty(events)
          ? (
            <View>
              {_.map(events, (item, i) => (
                <View key={i}>
                  <Text note style={{ fontWeight: 'bold', textAlign: 'center' }}>
                    {item.title}
                  </Text>
                  <View style={{ alignSelf: 'flex-start', marginLeft: 10, flexDirection: 'row' }}>
                    {!_.isEmpty(item.photoUrl)
                      ? (
                        <Thumbnail
                          source={{ uri: events.photoURL }}
                          style={{ height: 50, width: 50 }}
                        />
                      )
                      : <Thumbnail source={{ uri: 'https://img.icons8.com/bubbles/100/000000/gender-neutral-user.png' }} style={{ height: 50, width: 50 }} />

                    }

                    <Text style={{
                      fontWeight: '200', fontSize: 12, color: '#ff0066', marginTop: 15,
                    }}
                    >
                      {item.user}
                    </Text>


                  </View>
                  <ScrollView
                    horizontal
                    style={{
                      flexDirection: 'row', marginLeft: 10, marginRight: 10,
                    }}
                  >
                    {_.map(item.images, (image, i) => (
                      !_.isEmpty(item.images)
                        ? (
                          <View key={i} style={styles.box}>

                            <Image
                              source={{ uri: image.image }}
                              style={styles.image}
                            />
                          </View>
                        ) : (
                          <Text>
                                          No photos uploaded to this story
                          </Text>
                        )

                    ))}
                  </ScrollView>

                  <View style={styles.textBox}>
                    <Card>
                      <CardItem>
                        <Left>
                          <Body>
                            <Text note>
                            Story Description
                            </Text>
                          </Body>
                        </Left>
                      </CardItem>

                      <CardItem
                        cardBody
                        style={{
                          alignContent: 'center', justifyContent: 'center', marginBottom: 10, padding: 10,
                        }}
                      >
                        <Text style={{ textAlign: 'center', fontWeight: '200' }}>{item.description}</Text>
                      </CardItem>

                    </Card>
                  </View>
                </View>
              ))}


            </View>
          ) : (
            <View style={styles.storiesContainer}>

              <Text style={{ fontSize: 15 }} note>
                      No stories Available
                {' '}
              </Text>
            </View>
          )}
      </ScrollView>
    );
  }
}
