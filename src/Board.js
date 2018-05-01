import React, { Component } from 'react'
import Note from './Note'
class Board extends Component{
constructor(props){
    super(props)
    this.eachNote = this.eachNote.bind(this)
    this.update = this.update.bind(this)
    this.state = {
        notes:[
            {id:0,note:"live like a dream"},
            {id:1,note:"no more tears my heart is dry"},
            {id:2,note:"winter is coming"}
        ]

     }
}
eachNote(note,i){
    return(
        <Note key={i}
            index={i}
            onChange={this.update}>
           {note.note}
        </Note>
    )

}
update(newText,i){
    console.log('updating the note with a new note with index',i,newText)
    this.setState(prevState=>({
        notes: prevState.notes.map(
            note=> (note.id != i)? note: {...note,note: newText}
        )
    }))

}

render(){
    return(
            <div className='board'>
               {this.state.notes.map(this.eachNote)}
            </div>
        )
    }
}
export default Board