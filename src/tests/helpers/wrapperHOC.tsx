import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

export const wrapperHOC = (Component: React.ComponentType): ShallowWrapper => {
  return shallow(<Component />);
};
