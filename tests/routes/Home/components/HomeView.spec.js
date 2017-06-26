import React from 'react'
import { HomeView } from '../../../../src/routes/Home/components/HomeView'
import { mount } from 'enzyme'

describe('(View) Home', () => {
  const setup = (propOverrides) => {
    const props = {
      todos: [],
      ...propOverrides,
    };

    const wrapper = mount(<HomeView {...props} />);

    return { wrapper, props }
  };

  it('renders', () => {
    expect(setup().wrapper.find('HomeView').length).to.equal(1)
  });
});
