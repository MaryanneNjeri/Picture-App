import React from 'react';
import {
  Content, Container, View, Text,
} from 'native-base';
import { TouchableOpacity, YellowBox } from 'react-native';
import { connect } from 'react-redux';
import SearchBar from '../../components/common/SearchBar/SearchBar';
import HeaderComponent from '../../components/Home/HeaderComponent';
import PopularEventsComponent from '../../components/Home/PopularEventsComponent';
import { fetchEvents } from '../../redux/events/action';
import Loader from '../../components/general/Loader';
import Error from '../../components/general/Error';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

// eslint-disable-next-line react/prefer-stateless-function
class HomeScreen extends React.Component {
  isMounted = false;


  componentDidMount() {
    this.isMounted = true;
    const { fetch } = this.props;
    fetch();
  }

  componentWillUnmount() {
    this.isMounted = false;
  }

  loadStories=() => {
    const { fetch } = this.props;
    fetch();
  }

  render() {
    const { event, loading, error } = this.props;
    if (loading) {
      return (
        <Loader />);
    }
    if (error) {
      return (<Error error={error} />);
    }
    return (
      <Container>
        <HeaderComponent />
        <Content>
          <View style={{ padding: 20 }}>
            <SearchBar
              rounded
              roundedInput
              size={25}
              leftIcon="search"
              color="#d9d9d9"
              placeholder="Search"
            />
            <Text>{' '}</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#4d4d4d' }}>Latest Stories</Text>
          </View>
          <TouchableOpacity onPress={this.loadStories}>
            <Text style={{
              fontWeight: '200', fontSize: 15, color: '#008ae6', textAlign: 'center',
            }}
            >
Load new stories
            </Text>
          </TouchableOpacity>
          <Text>
            {' '}
            {' '}
          </Text>
          <PopularEventsComponent events={event} />

        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  event: state.events.items,
  loading: state.events.loading,
  error: state.events.error,
});
const mapDispatchToProps = dispatch => ({
  fetch: () => { dispatch(fetchEvents()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
