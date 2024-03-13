import InputButton from "./InputButton";
import ShowData from "./ShowData";
import { useState } from "react";

const Calculator = () => {
    const numLists = [
        "7",
        "8",
        "9",
        "/",
        "4",
        "5",
        "6",
        "*",
        "1",
        "2",
        "3",
        "-",
        "0",
        ".",
        "=",
        "+",
        "AC",
        "▶️",
    ];

    const [inputData, setInputNum] = useState(Array<string>());
    console.log("inputNum: ", inputData);

    const setNum = (num: string[]) => {
        setInputNum([...num]);
    };

    return (
        <>
            <div className="max-w-2xl w-full mx-auto px-4">
                <ShowData inputData={inputData} />
                <div className="grid gap-4 grid-cols-4 grid-rows-3 mt-8">
                    {numLists.map((num) => {
                        return (
                            <InputButton
                                key={num}
                                num={num}
                                inputData={inputData}
                                setNum={setNum}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Calculator;
