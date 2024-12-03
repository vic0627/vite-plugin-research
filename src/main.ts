import store, { useSelector } from "./store";
import { cdom, on, setInnerText } from "chop-dom";
import { decrement, increment } from "./store/slices/counter";
import "./style.css";

cdom(
  "#increase",
  on("click", () => store.dispatch(increment()))
);
cdom(
  "#decrease",
  on("click", () => store.dispatch(decrement()))
);

const updateValue = () => {
  const count = useSelector((state) => state.counter.value);
  cdom("#value", setInnerText(count.toString()));
};

updateValue();

store.subscribe(updateValue);