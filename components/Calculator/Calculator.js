import CalculatorButtons from "./CalculatorButtons";
import Output from "./Output";
import { CalcuProvider } from "./CalculatorContext";
function Calculator() {
  return (
    <div>
      <CalcuProvider>
        <Output />
        <CalculatorButtons />
      </CalcuProvider>
    </div>
  );
}
export default Calculator;
