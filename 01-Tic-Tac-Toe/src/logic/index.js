export function SaveGameToStorage({board, turn}){
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

export function ResetGameToStorage(){
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}