// import React from 'react'

// class Sum extends React.Component{
//     constructor() {
//         super();

//         this.state = {
//             number1: 0,
//             number2: 0,
//             sum: null
//         }
//     }

//     handleChangeOne = (event) => {
//         this.setState({number1: parseFloat(event.target.value)})
//     }
//     handleChangeTwo = (event) => {
//         this.setState({number2: parseFloat(event.target.value)})
//     }
//     add = (num1, num2) => {
//         this.setState({sum: num1 + num2})
//     }

//     render (){
//         return(
//             <div className='puzzleBox sumPB'>
//                 <h4>Sum</h4>
//                 <input className='inputLine' value={this.state.number1} onChange={this.handleChangeOne}></input>
//                 <input className='inputLine' value={this.state.number2} onChange={this.handleChangeTwo}></input>
//                 <button className='confirmationButton' onClick={ () => this.add(this.state.number1, this.state.number2)}>Add</button>
//                 <span className='resultsBox'>Sum: {this.state.sum}</span>
//             </div>
//         )
//     }
// }

// export default Sum

import React, {useState} from 'react'

function Sum() {

    const [numberOne, setNumberOne] = useState(0)
    const [numbetTwo, setNumberTwo] = useState(0)
    const [display, setDisplay] = useState(0)

    const handleClick = () => {
        setDisplay(+numberOne + +numbetTwo)
    }

  return (
    <div>
        <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine" type="number" onChange={(e) => setNumberOne(e.target.value)}/>
        <input className="inputLine" type="number" onChange={(e) => setNumberTwo(e.target.value)}/>
        <button className="confirmationButton" onClick={() => handleClick()}>Add</button>
        <span className="resultsBox"> Sum: {display}</span>
        </div>
    </div>
  )
}

export default Sum