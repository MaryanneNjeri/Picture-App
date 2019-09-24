import React from 'react';
import {
  Content, Container, View, Text,
} from 'native-base';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import SearchBar from '../../components/common/SearchBar/SearchBar';
import HeaderComponent from '../../components/Home/HeaderComponent';
import PopularEventsComponent from '../../components/Home/PopularEventsComponent';
import { fetchEvents } from '../../redux/events/action';
import Loader from '../../components/general/Loader';
import Error from '../../components/general/Error';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

});

// eslint-disable-next-line react/prefer-stateless-function
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;
    const { dispatch } = this.props;
    if (this.mounted === true) {
      dispatch(fetchEvents());
    }
  }

  componentWillUnmount() {
    this.mounted = false;
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
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#4d4d4d' }}>Popular Events</Text>
          </View>
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
export default connect(mapStateToProps)(HomeScreen);
