import InputButton from "./InputButton";
import ShowInput from "./ShowInput";
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

    const [inputNum, setInputNum] = useState([]);
    console.log("inputNum: ", inputNum);

    return (
        <>
            <div className="max-w-2xl w-full mx-auto px-4">
                <ShowInput inputs={inputNum} />
                <div className="grid gap-4 grid-cols-4 grid-rows-3">
                    {numLists.map((num) => {
                        console.log("NUM", num);
                        return (
                            <InputButton
                                key={num}
                                num={num}
                                inputNum={inputNum}
                                setInputNum={setInputNum}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};
export default Calculator;
