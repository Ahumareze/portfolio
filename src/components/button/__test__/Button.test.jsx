import React from 'react';
import ReactDOM from 'react-dom';

//import isTSAnyKeyword from babel types
import { isTSAnyKeyword } from '@babel/types';

//import render
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

//import component to run test on
import Button from '../Button';

afterEach(cleanup)

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Button name={'Click me'} />, div)
})

it('renders button correctly', () => {
    const {getByTestId} = render(<Button name='Hello' />);
    expect(getByTestId('button')).toHaveTextContent('Hello')
})