import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactUs from '../ContactUs';

// * Describe block is used to group the test cases
describe('Contact Us Page Test Case', () => {


  test('Should load Contact component', () => {
    render(<ContactUs />);

    const heading = screen.getByRole('heading');

    // * Assertion
    expect(heading).toBeInTheDocument();
  });

  test('Should load button inside Contact component', () => {
    render(<ContactUs />);

    const button = screen.getByRole('button');
    // const button = screen.getByText('Random');

    // * Assertion
    expect(button).toBeInTheDocument();
  });

  // * Note: test() or it() both are same

  it('Should input name inside Contact component', () => {
    render(<ContactUs />);

    const inputName = screen.getByText('Name');

    // * Assertion
    expect(inputName).toBeInTheDocument();
  });

  it('Should load 2 input boxes on the Contact component', () => {
    render(<ContactUs />);

    // * Querying
    const inputBoxes = screen.getAllByRole('textbox'); // getAllByRole - returns multiple elements

  

    // * Assertion
     expect(inputBoxes.length).toBe(3);

  });
});