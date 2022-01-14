import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render,waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm/>);
  
});

test("shows success message on submit with form details", async () => {
//I dont understand the issue on why screen.getByLabelText isnt a function
    render(<CheckoutForm/>);
    const firstName = screen.getByLabelText(/first name:/i);
    userEvent.type(firstName, 'Abdullahi');

    const lastName = screen.getByLabelText(/last name:/i);
    userEvent.type(lastName, 'Ahmed');

    const address = screen.getByLabelText(/address:/i);
    userEvent.type(address, '1110 11th Ave N');


    const city = screen.getByLabelText(/city:/i);
    userEvent.type(city, 'Saint Cloud');


    const state = screen.getByLabelText(/state:/i);
    userEvent.type(state, 'MINNESOTA');


    const zip = screen.getByLabelText(/zip:/i);
    userEvent.type(zip, '56303');



    const button = screen.getByRole('button')
    userEvent.click(button);

    await waitFor (()=> {
        const successMessage = screen.queryByTestId('successMessage')
        const firstNameRender = screen.queryByTestId('firstName');
        const lastNameRender = screen.queryByTestId('lastName');
        const addressRender = screen.queryByTestId('address');
        const cityRender = screen.queryByTestId('city');
        const stateRender = screen.queryByTestId('state');
        const zipRender = screen.queryByTestId('zip');
        
        expect(successMessage).toBeInTheDocument();
        expect(firstNameRender).toBeInTheDocument();
        expect(lastNameRender).toBeInTheDocument();
        expect(addressRender).toBeInTheDocument();
        expect(cityRender).toBeInTheDocument();
        expect(stateRender).toBeInTheDocument();
        expect(zipRender).toBeInTheDocument();


        

   
    })

});
