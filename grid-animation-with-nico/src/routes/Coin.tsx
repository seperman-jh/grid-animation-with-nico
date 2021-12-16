import {useLocation} from "react-router-dom";

function Coin() {
    const {state}  = useLocation() // 6.0 부터 typescript generic 지원 안함. 기존 Interface 상속 받아옴.
    return <h1>{state?.name}</h1>; // 기본값 NULL 처리. optional chaining. https://ko.javascript.info/optional-chaining
}
export default Coin;