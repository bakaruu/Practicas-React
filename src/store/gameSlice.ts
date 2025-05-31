import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
type Cell="X"|"O"|null;

interface State{ board:Cell[]; turn:"O"|"X"; winner:Cell; }
const initial:State = { board:Array(9).fill(null), turn:"O", winner:null };

const lines=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const slice = createSlice({
  name:"game",
  initialState:initial,
  reducers:{
    play(state,action:PayloadAction<number>){
      const i=action.payload;
      if(state.board[i]||state.winner) return;
      state.board[i]=state.turn;
      state.winner = lines.some(l=>l.every(idx=>state.board[idx]===state.turn))
        ? state.turn : null;
      state.turn = state.turn==="O" ? "X" : "O";
    },
    reset(){ return initial; }
  }
});

export const { play, reset } = slice.actions;
export default slice.reducer;
