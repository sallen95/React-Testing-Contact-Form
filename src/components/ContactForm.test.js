import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test('renders ContactForm without errors', () => {
    render(<ContactForm/>);
});

test('User can fill out and submit form', () => {
    render(<ContactForm/>);
    
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);

    fireEvent.change(firstNameInput, { target:{ value: 'Scott', name: 'firstName'}});
    fireEvent.change(lastNameInput, { target:{ value: 'Allen', name:"lastName"}});
    fireEvent.change(emailInput, { target:{ value: 's@smail.com', name: 'email'}});

    const button = screen.getByRole('input', {type:/submit/i});
});