import React from 'react';
import { render, fireEvent } from 'native-testing-library';
import {
  render as rntlRender,
  fireEvent as rntlFireEvent,
} from 'react-native-testing-library';

import { ComponentUnderTest } from './ComponentUnderTest';
import { buttonHandler } from './buttonHandler';

jest.mock('./ButtonWrapper', () => ({ ButtonWrapper: 'ButtonWrapper' }));
jest.mock('./buttonHandler', () => ({ buttonHandler: jest.fn() }));

describe('native-testing-library', () => {
  it('should match snapshot', () => {
    const { container } = render(<ComponentUnderTest />);
    expect(container).toMatchSnapshot();
  });

  it('should check main content is correct', () => {
    const { getByTestId } = render(<ComponentUnderTest />);
    expect(getByTestId('main-content').children[0]).toEqual('Main Content');
  });

  it('should press button', () => {
    const { getByTestId } = render(<ComponentUnderTest />);
    // Throws error: Unable to find an element with the testID of: my-button
    fireEvent.press(getByTestId('my-button'));
    expect(buttonHandler).toHaveBeenCalled();
  });
});

describe('react-native-testing-library', () => {
  it('should match snapshot', () => {
    const { toJSON } = rntlRender(<ComponentUnderTest />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should check main content is correct', () => {
    const { getByTestId } = rntlRender(<ComponentUnderTest />);
    expect(getByTestId('main-content').children[0].children[0]).toEqual(
      'Main Content',
    );
  });

  it('should press button', () => {
    const { getByTestId } = rntlRender(<ComponentUnderTest />);
    rntlFireEvent.press(getByTestId('my-button'));
    expect(buttonHandler).toHaveBeenCalled();
  });
});
