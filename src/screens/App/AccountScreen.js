import React from 'react';
import {
  Container, Content, Text, View,
} from 'native-base';
import { StyleSheet } from 'react-native';
import Button from '../../components/common/buttons/Button';
import getStories from '../../components/lib/functions/app/getStories';

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
// eslint-disable-next-line react/prefer-stateless-function
export default class AccountScreen extends React.Component {
  constructor(props) {
    super(props);
    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;
    if (this.mounted === true) {
      getStories().then((response) => {
        console.log(response);
      }).catch((e) => {
        console.log(e);
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  createStory=() => {
    this.props.navigation.navigate('Story');
  };

  render() {
    console.log(this.mounted);
    return (
      <Container>
        <Content>
          <Text>Account</Text>

          <View style={styles.buttonContainer}>
            <Button account onPress={this.createStory}>Create Story </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
