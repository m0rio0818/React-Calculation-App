import React from "react";

type setInputNum = React.Dispatch<React.SetStateAction<Array<string>>>;
interface Props {
    num: string;
    inputNum: string[];
    setInputNum: setInputNum;
}

const InputButton: React.FC<Props> = ({ num, inputNum, setInputNum }) => {
    const addInputValue = (num: string) => {
        const newNum = [num];
        // console.log(inputNum)
        console.log(inputNum, newNum);
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
