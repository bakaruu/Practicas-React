import { create } from "zustand";
type Cell="X"|"O"|null;

interface State{
  board:Cell[];
  turn:"O"|"X";
  winner:Cell;
  play:(i:number)=>void;
  reset:()=>void;
}

const lines=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

export const useGameStore = create<State>()((set,get)=>({
  board:Array(9).fill(null),
  turn:"O",
  winner:null,
  play:(i)=>{
    const { board, turn, winner } = get();
    if(board[i]||winner) return;
    const next=[...board];
    next[i]=turn;
    const win=lines.some(l=>l.every(idx=>next[idx]===turn))?turn:null;
    set({ board:next, winner:win, turn:turn==="O"?"X":"O" });
  },
  reset:()=>set({ board:Array(9).fill(null), turn:"O", winner:null })
}));
