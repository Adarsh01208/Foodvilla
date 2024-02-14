import {  render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

it('Should render Header Component with a login button', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

    const loginButton = screen.getByText('Login'); // is recommended

    expect(loginButton).toBeInTheDocument();
});

it('Should render Header Component with cart items 0', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText('Cart (0) items'); // is recommended

  expect(cartItems).toBeInTheDocument();
});

it('Should render Header Component with a logo', () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );
    
    const logo = screen.getByAltText('logo_icon'); // is recommended
    
    expect(logo).toBeInTheDocument();
    });