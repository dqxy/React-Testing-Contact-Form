import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders correctly", () => {
  render(<ContactForm />);
});

test("contact form adds new contact", () => {
  const { getByLabelText, getByTestId, findByText } = render(<ContactForm />);

  // query for the form inputs
  const firstNameInput = getByLabelText(/first name/i);
  const lastNameInput = getByLabelText(/last name/i);
  const emailInput = getByLabelText(/email/i);
  const messageInput = getByLabelText(/message/i);

  

  // fireEvent function from RTL to fill in the inputs
  fireEvent.change(firstNameInput, {
    target: { name: "firstName", value: "fir" }
  });
  fireEvent.change(lastNameInput, {
    target: { name: "lastName", value: "lastName" }
  });
  fireEvent.change(emailInput, {
    target: { name: "email", value: "email" }
  });
  fireEvent.change(messageInput, {
    target: { name: "message", value: "message" }
  });


  console.log(firstNameInput.value);

  // query for the submit button
  const submitButton = getByTestId(/submit/i);

  // clicking the button
  fireEvent.click(submitButton);

  // assertion
 findByText(/fir/i);
});

test("contact form tests maxlength correction", () => {
    const { getByLabelText, getByTestId, findByText } = render(<ContactForm />);
  
    // query for the form inputs
    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);
  
    
  
    // fireEvent function from RTL to fill in the inputs
    fireEvent.change(firstNameInput, {
      target: { name: "firstName", value: "firstnamelengthlonger" }
    });
    fireEvent.change(lastNameInput, {
      target: { name: "lastName", value: "lastName" }
    });
    fireEvent.change(emailInput, {
      target: { name: "email", value: "email" }
    });
    fireEvent.change(messageInput, {
      target: { name: "message", value: "message" }
    });
  
  
    console.log(firstNameInput.value);
  
    // query for the submit button
    const submitButton = getByTestId(/submit/i);
  
    // clicking the button
    fireEvent.click(submitButton);
  
    // assertion
   findByText(/fir/i);
  });
