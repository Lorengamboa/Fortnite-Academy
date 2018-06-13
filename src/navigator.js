'use strict';

import {
  createStackNavigator,
} from 'react-navigation';
import { HomeNavigator } from './conf/navigator';
import Dance from './screens/Dance';

// Stack Navigator
export const navigator = createStackNavigator(
  {
    Home: { screen: HomeNavigator },
    Dance: { screen: Dance }
  }, {
    mode: 'modal',
    headerMode: 'none',
  }
);

