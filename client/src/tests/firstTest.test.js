/* Dependencies */
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

/* Components */
import App from '../App'

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() })

describe('Question Rendering', () => {
    it('Should render the question text', () => {
        const wrapper = shallow(<App />);
        const paragraph = wrapper.find('p').first();
        expect(paragraph).toHaveLength(1);
        expect(paragraph.text()).toEqual('New Question:');
    });

})