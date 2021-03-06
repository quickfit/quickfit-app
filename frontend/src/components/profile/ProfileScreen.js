import React from 'react';
import { Text, TouchableWithoutFeedback, ScrollView, View, Keyboard, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import FIcon from 'react-native-vector-icons/FontAwesome';
import { textStyle, iconStyle, captionStyle, subHeaderStyle, headerStyle, stackHeaderStyle, headerTitleStyle } from '../../styles/styles';
import { buttonStyle, inputStyle, formContainerStyle } from '../../styles/forms';
import ProfileAuth from './ProfileAuth';
import ProfileIndex from './ProfileIndex';
import ProfileEdit from './ProfileEdit';
import { StackNavigator } from 'react-navigation';
import Loading from '../Loading';


class ProfileScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => (
      <FIcon name="user" color={tintColor} style={iconStyle} />
    )
  }

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      currentUser: {}
    }
  }

  componentWillMount() {
    AsyncStorage.getItem('currentUser').then(res => {
      currentUser = JSON.parse(res);
      if (res !== null) {
        this.props.screenProps.setState({
          loggedIn: true,
          currentUser
        });
      }
    })
  }

  render() {
    if (this.state.loading) return <Loading />;
    return (this.props.screenProps.state.loggedIn) ?
      <ProfileStackNav screenProps={this.props.screenProps}/> :
      <ProfileAuth screenProps={this.props.screenProps}/>
  }
}

const profileStackRoutes = {
  index: { screen: ProfileIndex },
  edit: { screen: ProfileEdit}
}

const profileStackConfig = {
  headerMode: 'float',
  navigationOptions: {
    headerStyle: stackHeaderStyle,
    headerTitleStyle: headerTitleStyle,
    headerBackTitle: ' ',
    shadowHidden: true,
  }
}

const ProfileStackNav = StackNavigator(profileStackRoutes, profileStackConfig);

export default ProfileScreen;
