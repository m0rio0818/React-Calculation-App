import React from "react";

type addNum = React.Dispatch<React.SetStateAction<string>>;
type clearNum = React.Dispatch<>;
interface Props {
    num: string;
    inputData: string[];
    addNum: addNum;
    clearNum: clearNum;
}

const InputButton: React.FC<Props> = ({ num, inputData, clearNum, addNum }) => {
    const addInputValue = (num: string) => {
        if (num == "=") {
            console.log("計算する。");
        } else if (num == "▶️") {
            console.log("一つ消す");
        } else if (num == "AC") {
            console.log("全てからにする");
            clearNum();
            console.log(inputData);
        } else {
            console.log("普通に計算する。", num);
            addNum(num);
            console.log(inputData);
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
