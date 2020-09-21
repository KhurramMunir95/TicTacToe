import React, {Component} from 'react'

class TicTacToe extends Component
{

    constructor()
    {
        super();
        this.state=
        {   
            board: Array(9).fill(null),
            val: 'X',
            TotalMoves: 0,
            Winner: undefined,
            gameEnds:false
        }

    }

    Clicked(event)
    {   
        if(this.state.gameEnds) return;
        if(this.state.board[event.target.dataset.value] == null)
        {
            this.state.board[event.target.dataset.value] = this.state.val
            event.target.innerText = this.state.val
            this.setState
            ({
                val: event.target.innerText == 'X' ? 'O' : 'X'
            })

        }

        this.state.TotalMoves++
        
        var Result = this.CheckWinner();

        if(Result == 'X')
        {
            this.setState
            ({
                gameEnds: true,
                Winner: 'X Wins'

            })
        }

        else if(Result == 'O')
        {
            this.setState
            ({
                gameEnds: true,
                Winner: 'O Wins'

            })
        }

        if(Result == 'Draw')
        {
            this.setState
            ({
                gameEnds: true,
                Winner: 'Draw'

            })
        }
    }

    CheckWinner()
    {
        var board = this.state.board;
        var moves = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
        for(let i=0; i<moves.length; i++)
        {
            if(board[moves[i][0]] == board[moves[i][1]] && board[moves[i][1]] == board[moves[i][2]] )
            {
                return board[moves[i][0]];

            }

            if(this.state.TotalMoves == 9)
            {
                return 'Draw'
            
            }
        }
    }

    render()
    {
        return(
            <div>
                <h1 id="result">{this.state.Winner}</h1>
                <div id="board" onClick={(e) => this.Clicked(e)}>
                    <div data-value="0"></div>
                    <div data-value="1"></div>
                    <div data-value="2"></div>
                    <div data-value="3"></div>
                    <div data-value="4"></div>
                    <div data-value="5"></div>
                    <div data-value="6"></div>
                    <div data-value="7"></div>
                    <div data-value="8"></div>
                </div>
            </div>
        )
    }
}

export default TicTacToe;