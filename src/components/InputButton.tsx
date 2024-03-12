import React from "react";

type setNum = React.Dispatch<React.SetStateAction<string[]>>;
type operator = "/" | "*" | "+" | "-" | string;
interface Props {
    num: string;
    inputData: string[];
    setNum: setNum;
}

const InputButton: React.FC<Props> = ({ num, inputData, setNum }) => {
    const operators: operator[] = ["+", "*", "-", "/"];

    const addInputValue = (num: string) => {
        if (num == "=") {
            try {
                console.log("計算する。");
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
            console.log(inputData);
            // console.log(
            //     "data: ",
            //     inputData[inputData.length - 1],
            //     operators.includes(inputData[inputData.length - 1])
            // );
            if (
                operators.includes(inputData[inputData.length - 1]) &&
                operators.indexOf(num) != -1
            ) {
                console.log("最新入力がもうすでにoperator");
                inputData.pop();
                setNum([...inputData, num]);
            }
            console.log("普通に計算する。", num);
            setNum([...inputData, num]);
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
