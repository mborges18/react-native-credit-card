import { fireEvent } from "@testing-library/react-native";
import React from "react";
import Range from "..";
 
jest.mock("react-native-gesture-handler", () => {
  return {
    PanGestureHandler: jest.fn(({ children }) => children),
  };
});
 
describe("Range component", () => {
  const min = 0;
  const max = 100;
  const step = 10;
  const value = 50;
  const inputValue = 10;
  const onValueChange = jest.fn();
 
  it("renders correctly", () => {
    const { queryByTestId } = renderWithTheme(
      <Range
        min={min}
        max={max}
        step={step}
        value={value}
        inputValue={inputValue}
        onValueChange={onValueChange}
      />,
    );
    const range = queryByTestId("range");
    const thumb = queryByTestId("thumb");
    const track = queryByTestId("track");
    const trackFront = queryByTestId("track-front");
    expect(range).toBeDefined();
    expect(thumb).toBeDefined();
    expect(track).toBeDefined();
    expect(trackFront).toBeDefined();
  });
 
  it("calls onValueChange when value changes", () => {
    const { queryByTestId } = renderWithTheme(
      <Range
        min={min}
        max={max}
        step={step}
        value={value}
        inputValue={inputValue}
        onValueChange={onValueChange}
      />,
    );
    const thumb = queryByTestId("thumb");
    if (thumb) {
      fireEvent(thumb, "onGestureEvent", { nativeEvent: { translationX: 50 } });
      expect(onValueChange).toHaveBeenCalledWith(0);
    }
  });
});
 
 