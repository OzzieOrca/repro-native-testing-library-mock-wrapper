import React from 'react';
import { View, Text } from 'react-native';
import { ButtonWrapper } from './ButtonWrapper';
import { buttonHandler } from './buttonHandler';

export const ComponentUnderTest = () => (
  <View>
    <ButtonWrapper testID="my-button" onPress={buttonHandler}>
      <Text testID="main-content">Main Content</Text>
    </ButtonWrapper>
  </View>
);
