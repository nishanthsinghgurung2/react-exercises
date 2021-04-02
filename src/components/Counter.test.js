import { fireEvent } from "@testing-library/dom";
import { render } from "@testing-library/react";
import Counter from "./Counter"

describe('Counter', () => {
  it('should increment count value when + is clicked', () => {
    const { getByTestId } = render(<Counter />);
    const incrementBtn = getByTestId('increment-btn');
    fireEvent.click(incrementBtn);
    expect(getByTestId('count-value').textContent).toEqual("1");
    fireEvent.click(incrementBtn);
    expect(getByTestId('count-value').textContent).toEqual("2");
  })

  it('should decrement the count value when - is clicked', () => {
    const { getByTestId } = render(<Counter />);
    const decrementBtn = getByTestId("decrement-btn");
    expect(getByTestId('count-value').textContent).toEqual("0");
    fireEvent.click(decrementBtn);
    expect(getByTestId('count-value').textContent).toEqual("-1");
    fireEvent.click(decrementBtn);
    expect(getByTestId('count-value').textContent).toEqual("-2");
  })
})