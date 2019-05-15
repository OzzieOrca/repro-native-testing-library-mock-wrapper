import React from 'react';
import { TouchableHighlight } from 'react-native';

export const ButtonWrapper = ({ children, onPress }) => (
  <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>
);
