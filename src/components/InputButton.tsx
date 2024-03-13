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

    const calculate = (inputs: string[]): void => {
        const [values, ops] = getStackNumandOperator(inputs);
        console.log(values, ops);
    };

    function getStackNumandOperator(inputs: string[]): (string[] | number[])[] {
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
                console.log("計算する。");
                calculate(inputData);
            } finally {
                console.log("done");
            }
        } else if (num == "▶️") {
            inputData.pop();
            setNum([...inputData]);
            console.log("一つ消す");
        } else if (num == "AC") {
            console.log("全てからにする");
            const newNum: string[] = [];
            setNum(newNum);
            console.log(inputData);
        } else {
            if (
                (operators.includes(inputData[inputData.length - 1]) &&
                    operators.indexOf(num) != -1) ||
                (inputData[inputData.length - 1] == "." && num == ".")
            ) {
                console.log("最新入力がもうすでにoperator or .");
                inputData.pop();
                setNum([...inputData, num]);
            } else {
                console.log("普通に計算するためスタックに追加する。", num);
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
