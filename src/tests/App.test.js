import React from 'react';
import { render, screen , fireEvent} from '@testing-library/react';
import DisplayBox from '../components/DisplayBox';
import App from '../App';
import CalculatorBox from '../components/CalculatorBox';

test('renders_App_component', () => {
  render(<App />);
});

test('renders_CalculatorBox_component', () => {
  render(<CalculatorBox />);
});

test('renders_DisplayBox_component', () => {
  render(<DisplayBox />);
});

test('DisplayBox_component_is_implemented_using_class_component', () => {
  const displayBoxComponent = <DisplayBox value="123" />;
  expect(displayBoxComponent.type.prototype instanceof React.Component).toBeTruthy();
});

test('CalculatorBox_component_uses_functional_component', () => {
  const calculatorBoxComponent = <CalculatorBox />;
  expect(typeof calculatorBoxComponent.type).toBe('function');
});

test('CalculatorBox_component_renders_buttons', () => {
  const { getByText } = render(<App />);
  const button7 = getByText('7');
  const buttonPlus = getByText('+');
  expect(button7).toBeInTheDocument();
  expect(buttonPlus).toBeInTheDocument();
});

test('CalculatorBox_component_performs_calculation', () => {
  const { getByText, getByTestId } = render(<CalculatorBox />);
  const inputElement = getByTestId('input');
  const button1 = getByText('1');
  const buttonPlus = getByText('+');
  fireEvent.click(button1);
  fireEvent.click(buttonPlus);
  fireEvent.click(button1);
  fireEvent.click(button1);
  fireEvent.click(buttonPlus);
  expect(inputElement).toHaveAttribute('value', '1+11+'); 
});