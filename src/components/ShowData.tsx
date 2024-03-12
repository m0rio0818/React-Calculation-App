interface Props {
    inputData: Array<string>;
}

const ShowData: React.FC<Props> = ({ inputData }) => {
    return (
        <>
            <div className="bg-blue-300 h-24 max-w-2xl w-full flex items-center ">
                <p className="text-center calculator_c">{inputData}</p>
            </div>
        </>
    );
};

export default ShowData;
