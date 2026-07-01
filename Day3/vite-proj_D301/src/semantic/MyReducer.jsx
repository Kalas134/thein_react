import { useReducer } from 'react';

const initialScore = [
    {
        id: 1,
        score: 0,
        name: "John",
    },
    {
        id: 2,
        score: 0,
        name: "Sally",
    },
];

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREASE":
            return state.map((player) => {
                if (player.id === action.id) {
                    return { ...player, score: player.score + 1 };
                } else {
                return player;
            }
        });
    default:
        return state;
    }
};

function MyReducer(props) {
    const [score, dispatch] = useReducer(reducer, initialScore);
    
    const handleIncrease = (player) => {
        dispatch({ type: "INCREASE", id: player.id });
    };

    return (
        <>
            <h1>MyReducer</h1>
            <table border="1" align="center">
            {score.map((player) => (
                <div key={player.id}>
                <td>
                    <tr>
                        <input
                            type="button"
                            onClick={() => handleIncrease(player)}
                            value={player.name}
                        />
                    </tr>
                    <tr>
                        {player.score}
                    </tr>
                </td>
                </div>
            ))}
            </table>
        </>
    );
}

export default MyReducer;