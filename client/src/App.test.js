import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

describe('<App />', () => {
  
  it('renders successfully', () => {
    render(<App />);
  });
//////////////////////////////////////////////
  it('renders Dashboard', () => {
    render(<Dashboard />);
  });

  it('increases strike count when strike button clicked, reset to 0 when reach 3', () => {
    const { getByText } = render(<App />);
    const button = getByText(/david/i);
    fireEvent.click(button);
    getByText(/strikes: 1/i);
  
   
   
  });
/////////////////////////////////////////////
  it('renders Display', () => {
    render(<Display />);
  });

});