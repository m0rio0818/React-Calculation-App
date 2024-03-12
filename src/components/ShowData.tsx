interface Props {
    inputData: Array<string>;
}

const ShowData: React.FC<Props> = ({ inputData }) => {
    return (
        <>
            <div>
                <p className="text-center">{inputData}</p>
            </div>
        </>
    );
};

export default ShowData;
