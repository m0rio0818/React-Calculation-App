interface Props {
    inputs: Array<string>;
}

const ShowInput: React.FC<Props> = ({ inputs }) => {
    return (
        <>
            <div>
                <p>{inputs}</p>
            </div>
        </>
    );
};

export default ShowInput;
