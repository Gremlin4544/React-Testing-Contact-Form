import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test('First Name input is rendered', () => {
    const {getByLabelText} = render(<ContactForm />);

    getByLabelText(/first name */i);

})