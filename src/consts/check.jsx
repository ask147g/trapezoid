import {area} from "./sizes"
export function CheckResult() {
    const result = document.getElementsByName("result");
    let res = result[0].value;
    res = parseFloat(res);
    if (res == area) return true;
    return false;
}