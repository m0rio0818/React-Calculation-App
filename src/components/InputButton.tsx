import React from "react";

type setNum = React.Dispatch<React.SetStateAction<string[]>>;
type operator = "/" | "*" | "+" | "-" | string;
interface Props {
    num: string;
    inputData: string[];
    setNum: setNum;
}

// Errorがが発生するであろう条件
// => 3 * 3 * =
// => 444.44442.4 * 4 =  => ERRORを返すように対処済み

const InputButton: React.FC<Props> = ({ num, inputData, setNum }) => {
    const operators: operator[] = ["+", "*", "-", "/"];

    const calculate = (inputs: string[]): number => {
        const [values, ops] = getStackNumandOperator(inputs);
        for (let i = 0; i < ops.length; ) {
            console.log(i, ops, ops.length);
            if (ops[i] == "*" || ops[i] == "/") {
                // console.log("before", values, "op: ", ops);
                const newVal = calculation(values[i], values[i + 1], ops[i]);
                values.splice(i, 1);
                values.splice(i, 1);
                values.splice(i, 0, newVal);
                ops.splice(i, 1);
            } else {
                i++;
            }
        }

        for (let i = 0; i < ops.length; ) {
            console.log(i, ops, ops.length);
            if (ops[i] == "+" || ops[i] == "-") {
                const newVal = calculation(values[i], values[i + 1], ops[i]);
                values.splice(i, 1);
                values.splice(i, 1);
                values.splice(i, 0, newVal);
                ops.splice(i, 1);
            } else {
                i++;
            }
        }
        return values[0];
    };

    function calculation(x: number, y: number, op: string): number {
        if (op == "+") {
            return x + y;
        } else if (op == "-") {
            return x - y;
        } else if (op == "*") {
            return x * y;
        } else {
            if (y == 0) return x;
            else return Math.floor(x / y);
        }
    }

    function getStackNumandOperator(inputs: string[]): [number[], string[]] {
        const ops: string[] = [];
        const values: number[] = [];

        let str: string = "";
        for (let i = 0; i < inputs.length; i++) {
            if (operators.includes(inputs[i])) {
                values.push(Number(str));
                str = "";
                ops.push(inputs[i]);
            } else {
                str += inputs[i];
            }
        }
        values.push(Number(str));
        console.log("ops: ", ops, "value :", values);

        values.map((value) => {
            if (isNaN(value)) {
                setNum(["ERROR"]);
            }
        });

        return [values, ops];
    }

    const addInputValue = (num: string) => {
        if (num == "=") {
            try {
                const result = calculate(inputData);
                setNum([String(result)]);
            } finally {
                console.log("done");
            }
        } else if (num == "▶️") {
            inputData.pop();
            setNum([...inputData]);
        } else if (num == "AC") {
            const newNum: string[] = [];
            setNum(newNum);
        } else {
            if (
                (operators.includes(inputData[inputData.length - 1]) &&
                    operators.indexOf(num) != -1) ||
                (inputData[inputData.length - 1] == "." && num == ".")
            ) {
                inputData.pop();
                setNum([...inputData, num]);
            } else {
                setNum([...inputData, num]);
            }
        }
    };

    return (
        <>
            <button
                onClick={() => {
                    addInputValue(num);
                }}
                className="bg-blue-500 hover:bg-blue-700 m-2 text-white font-bold py-2 px-4 rounded"
            >
                {num}
            </button>
        </>
    );
};

export default InputButton;
