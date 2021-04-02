import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Todolist from "./Todolist";

describe('TodoList', () => {
  it('should add item to the todoList', () => {
    const { getByTestId } = render(<Todolist />);
    const newItemTextBox = getByTestId('new-item');
    fireEvent.focus(newItemTextBox, { target: { value: 'apple'}});
    fireEvent.blur(newItemTextBox);
    const addItemBtn = getByTestId('add-item-btn');
    fireEvent.click(addItemBtn);
    expect(getByTestId('apple')).toBeDefined();
  })
  it('should remove the selected item from the list', () => {
    const { getByTestId } = render(<Todolist />);
    const inputItem = getByTestId('new-item');
    fireEvent.focus(inputItem, { target: { value: 'apple'}});
    fireEvent.blur(inputItem);
    const addItemBtn = getByTestId('add-item-btn');
    fireEvent.click(addItemBtn);
    fireEvent.focus(inputItem, { target: { value: 'banana'}});
    fireEvent.blur(inputItem);
    fireEvent.click(addItemBtn);
    expect(getByTestId('apple0')).toBeDefined();
    expect(getByTestId('banana1')).toBeDefined();
    const itemToBeDeleted = getByTestId('banana1');
    fireEvent.click(itemToBeDeleted);
    const deletedItem = screen.queryByTestId('banana1');
    expect(deletedItem).not.toBeInTheDocument();
  })
})