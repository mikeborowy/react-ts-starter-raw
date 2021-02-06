import Enzyme, { ShallowWrapper } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { App } from './App';
import { wrapperHOC } from './tests/helpers/wrapperHOC';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const findByTestAttr = (wrapper: ShallowWrapper, testId: string) => {
  return (wrapper as ShallowWrapper).find(`[data-testid="${testId}"]`);
};

describe('Checking App Component', () => {
  const wrapper = wrapperHOC(App);

  test('renders without error', () => {
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.length).toBe(1);
  });
  test('renders counter display', () => {
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.length).toBe(1);
  });
  test('renders increment button', () => {
    const button = findByTestAttr(wrapper, 'increment-button');
    expect(button.length).toBe(1);
  });

  test('counter starts at 0', () => {
    const count = findByTestAttr(wrapper, 'count');
    expect(count.length).toBe(1);
  });
  test('clicking on button increments counter display', () => {
    const button = findByTestAttr(wrapper, 'increment-button');
    button.simulate('click');
    const count = findByTestAttr(wrapper, 'count').text();

    expect(count).toBe('1');
  });
  test('clicking on button decrements counter display', () => {
    const button = findByTestAttr(wrapper, 'decrement-button');
    button.simulate('click');
    const count = findByTestAttr(wrapper, 'count').text();

    expect(count).toBe('0');
  });
});
