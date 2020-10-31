import React from 'react';
import { StatusBar } from 'react-native';

import { color as mycolor } from '../theme';

interface IMyStatusBar {
  color?: string;
  dark?: boolean;
}

const MyStatusBar: React.FC<IMyStatusBar> = ({ color, dark, ...rest }) => {
  return (
    <StatusBar
      {...rest}
      backgroundColor={color ? color : mycolor.primary}
      barStyle={dark ? 'dark-content' : 'light-content'}
    />
  );
};

export default MyStatusBar;
