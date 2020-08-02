import { UP, up } from '.././actions';
export interface squaresInit {
  squares: string []
}
let squaresInit: squaresInit = {
  squares: ['X', 'O']
}


type BoardAction =  ReturnType<typeof up>;

export default function squaresReducer(state:squaresInit = squaresInit, action: BoardAction): squaresInit{
  switch(action.type) {
    case UP: 
      let newSquares = [ ...state.squares ]
      newSquares[action.index] = action.char
      return {
        squares: newSquares
      }
    
    default:
      return state;
  }
}