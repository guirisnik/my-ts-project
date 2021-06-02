import React from "react";
import { Svg, Path, Circle, Text } from "react-native-svg";

type Props = {
  size?: number;
  numberOfItems?: number;
};

function ShoppingCart({ size = 40, numberOfItems }: Props) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 512 512">
      <Path
        fill="#000"
        d="M145.63 331.004h.021c.017 0 .034-.004.051-.004H385.79c5.91 0 11.107-4.441 12.732-10.879l52.968-210c1.142-4.527.342-9.394-2.158-13.152C446.828 93.21 442.914 91 438.759 91H115.09l-9.466-48.254C104.276 35.883 98.903 31 92.696 31H13.242C5.928 31 0 37.715 0 46s5.928 15 13.242 15h68.832c1.676 8.55 45.3 230.918 47.81 243.711-14.073 6.93-23.946 22.824-23.946 41.289 0 24.813 17.821 45 39.726 45H385.79c7.314 0 13.242-6.715 13.242-15s-5.928-15-13.242-15H145.664c-7.3 0-13.242-6.73-13.242-15 0-8.258 5.921-14.976 13.208-14.996zM421.202 121l-45.403 180H156.286l-35.313-180h300.229zM150 436c0 24.812 20.187 45 45 45 24.812 0 45-20.188 45-45 0-24.813-20.188-45-45-45-24.813 0-45 20.187-45 45zm45-15c8.269 0 15 6.73 15 15 0 8.269-6.731 15-15 15-8.27 0-15-6.731-15-15 0-8.27 6.73-15 15-15zM292 436c0 24.812 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15z"
      />
      {numberOfItems != null && numberOfItems > 0 && (
        <>
          <Circle cx="387" cy="156" r="125" fill="#FFA34E" />
          <Text
            fill="white"
            textAnchor="middle"
            strokeWidth="2px"
            fontStyle="normal"
            fontWeight="bold"
            fontSize="188px"
            x="390"
            y="215"
          >
            {numberOfItems > 9 ? "..." : numberOfItems}
          </Text>
        </>
      )}
    </Svg>
  );
}

export { ShoppingCart };
