import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile42667Navigator from '../features/UserProfile42667/navigator';
import Tutorial42666Navigator from '../features/Tutorial42666/navigator';
import NotificationList42638Navigator from '../features/NotificationList42638/navigator';
import Settings42637Navigator from '../features/Settings42637/navigator';
import Settings42629Navigator from '../features/Settings42629/navigator';
import UserProfile42627Navigator from '../features/UserProfile42627/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile42667: { screen: UserProfile42667Navigator },
Tutorial42666: { screen: Tutorial42666Navigator },
NotificationList42638: { screen: NotificationList42638Navigator },
Settings42637: { screen: Settings42637Navigator },
Settings42629: { screen: Settings42629Navigator },
UserProfile42627: { screen: UserProfile42627Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
