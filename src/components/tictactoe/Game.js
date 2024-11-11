import { useReducer } from 'react';
import Board from './Board';
import "./Style.css";
import { winner } from "./helpers";

const initialState = {
    board: Array(9).fill(null),
    turn: 0,
};

const gameReducer = (state, action) => {
    switch (action.type) {
        case "CLICK": {
            const {board, turn} = state;
            const {index, isWinner} = action.payload;
            if(isWinner || board[index]) return state;

            const nextState = JSON.parse(JSON.stringify(state));
            nextState.board[index] = turn ? 'X' : 'O';
            nextState.turn ^= 1;

            return nextState;
        }
        case "RESET" : {
            return initialState;
        }
        default:
            break;
    }
}

const Game = () => {
    const [state, dispatch] = useReducer(gameReducer, initialState);

    const isWinner = winner(state.board);

    const handleClick = (index) => {
        dispatch({
            type: "CLICK",
            payload: {
                index,
                isWinner,
            },
        });
    };

    const handleResetClick = () => {
        dispatch({
            type: "RESET",
        });
    };

    const winnerPlayer = isWinner ? `Winner is ${isWinner}` : (state.board.includes(null) ? (state.turn ? "X turn !!!" : 'O turn!!!') : "Draw");

    return (
        <div>
            <Board cells={state.board} onClick={handleClick}></Board>
            <button className='resetButton' onClick={handleResetClick}>reset game</button>
            <div className='notifyWinner'>
                {winnerPlayer}
            </div>
        </div>
    );
};

export default Game;
