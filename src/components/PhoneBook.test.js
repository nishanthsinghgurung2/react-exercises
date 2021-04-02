import { fireEvent, render } from "@testing-library/react"
import PhoneBook from "./PhoneBook";

describe('PhoneBook', () => {
  it('should add the phone book item to the dom after form submission', () => {
    const { getByTestId } = render(<PhoneBook />);
    const inputFirstName = getByTestId('input-first-name');
    const inputLastName = getByTestId('input-last-name');
    const inputPhoneNumber = getByTestId('input-phone-number');
    const btnSubmit = getByTestId('btn-submit');

    fireEvent.change(inputFirstName, { value: { value: 'John'}});
    fireEvent.change(inputLastName, { value: { value: 'Carter'}});
    fireEvent.change(inputPhoneNumber, { value: { value: '09878987898'}});
    fireEvent.click(btnSubmit);
    expect(getByTestId('09878987898')).toBeDefined();
  })

  it.only('should add the phone book entry in the sorted lastname order', () => {
    const { getByTestId } = render(<PhoneBook />);
    const inputFirstName = getByTestId('input-first-name');
    const inputLastName = getByTestId('input-last-name');
    const inputPhoneNumber = getByTestId('input-phone-number');
    const btnSubmit = getByTestId('btn-submit');

    fireEvent.change(inputFirstName, { target: { value: 'John'}})
    fireEvent.change(inputLastName, { target: { value: 'Travolta'}})
    fireEvent.change(inputPhoneNumber, { target: { value: '0123'}})
    fireEvent.click(btnSubmit);
    expect(getByTestId('0123')).toBeDefined();

    fireEvent.change(inputFirstName, { target: { value: 'Ben'}})
    fireEvent.change(inputLastName, { target: { value: 'Federer'}})
    fireEvent.change(inputPhoneNumber, { target: { value: '0124'}})
    fireEvent.click(btnSubmit);
    expect(getByTestId('0124')).toBeDefined();

    fireEvent.change(inputFirstName, { target: { value: 'Novak'}})
    fireEvent.change(inputLastName, { target: { value: 'Djokovic'}})
    fireEvent.change(inputPhoneNumber, { target: { value: '01256'}})
    fireEvent.click(btnSubmit);
    expect(getByTestId('01256')).toBeDefined();

    const firstChildId = getByTestId('phoneBookList').children[0].getAttribute('data-testid');
    expect(firstChildId).toEqual('01256');
  })
})