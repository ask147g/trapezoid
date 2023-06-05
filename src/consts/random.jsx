export function TopSide() {
    return Math.floor(Math.random() * 100) + 1;
}

export function BottomRightSide(topSide) {
    return topSide+Math.floor(Math.random() * 100) + 1;
}

export function BottomLeftSide() {
    return Math.floor(Math.random() * 100) + 1;
}

export function Height() {
    return Math.floor(Math.random() * 100) + 1;
}

export function RightHypotenuse(topSide, bottomRightSide, height) {
    let rightSideTriangle = bottomRightSide-topSide;
    return (Math.sqrt(rightSideTriangle**2+height**2)).toFixed(1);
}

export function LeftHypotenuse(bottomLeftSide, height) {
    return (Math.sqrt(bottomLeftSide**2+height**2)).toFixed(1);
}

export function Area(topSide, bottomSide, height) {
    return 0.5*((topSide+bottomSide)*height);
}