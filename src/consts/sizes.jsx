import * as equation from "./random"

export const topSide = equation.TopSide();

export const bottomRightSide = equation.BottomRightSide(topSide);

export const bottomLeftSide = equation.BottomLeftSide();

export const height = equation.Height();

export const rightHypotenuse = equation.RightHypotenuse(topSide, bottomRightSide, height);

export const leftHypotenuse = equation.LeftHypotenuse(bottomLeftSide, height);

export const area = equation.Area(topSide, bottomLeftSide+bottomRightSide, height);
console.log(area)