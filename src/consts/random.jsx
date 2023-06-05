export function TopSide() {
    // разыграть случайное значение верхней стороны трапеции от 1 до 100
    // P.S. случайное от 1 до 100 можно реализовать как
    // Math.floor(Math.random() * 100) + 1
    return 7; // вернуть значение величины
}

export function BottomRightSide(topSide) {
    // вернуть случайное значение правой части нижней стороны трапеции
    // учесть, что часть стороны не должна быть меньше верхней стороны трапеции
    return 12;
}

export function BottomLeftSide() {
    // левая часть нижней стороны трапеции, случайное значение
    return 9;
}

export function Height() {
    // случайная высота трапеции
    return 12;
}

export function RightHypotenuse(topSide, bottomRightSide, height) {
    // расчет правой гипотенузы по стандартной формуле, округлить до 1го знака после запятой
    // значение.toFixed(1)
    return 12;
}

export function LeftHypotenuse(bottomLeftSide, height) {
    // расчет левой гипотенузы, аналогично
    return 15;
}

export function Area(topSide, bottomSide, height) {
    // расчет площади трапеции
    return 168;
}