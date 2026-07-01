import useFetch from "./useFetch";

function MyCustomHooks(props) {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <>
            {data &&
                data.map((item) => {
                    return <p key={item.id}>{item.title}</p>;
            })}
        </>
    );
};

export default MyCustomHooks;