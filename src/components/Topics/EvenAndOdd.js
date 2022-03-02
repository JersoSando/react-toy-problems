import React from 'react'

class EvenAndOdd extends React.Component {
    constructor() {
        super();

        this.state = {
            evenArray:[],
            oddArray:[],
            userInput: ""
        }
    }
   
    handleChange = (event) => {
        this.setState({userInput: event.target.value})
    }

    createEvenAndOdd = () => {
        let array = this.state.userInput.split(',')
        let even = []
        let odd = []


        for(var i = 0; i < array.length; i++){
            if (Number(array[i]) % 2 === 0){
                even.push(parseFloat(array[i]))
            } else {
                odd.push(parseFloat(array[i]))
            }
        }
        this.setState({ evenArray: even, oddArray: odd })
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine"  value={this.state.userInput} onChange={(e) => this.handleChange(e)}></input>
                <button className="confirmationBox" onClick={this.createEvenAndOdd}>Split</button>
                <span className='resultsBox'> Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className='resultsBox'> Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
    )
    }
}


// export default EvenAndOdd

// import React, {useState} from 'react'

// function EvenAndOdd() {
//     const [userInput, setUserInput] = useState('')
//     const [even, setEven] = useState([])
//     const [odd, setOdd] = useState([])

//     const handleClick = (param) => {
//         let arr = param.split(",").map(function(item) {
//             return parseInt(item, 10)
//         })
//         let evensArr = []
//         let oddsArr = []
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] % 2 === 0) {
//                 evensArr.push(arr[i])
//             } else {
//                 oddsArr.push(arr[i])
//             }
//         }
//         setEven(evensArr)
//         setOdd(oddsArr)
//     }

//     return (
//         <>
//           <div className="puzzleBox evenAndOddPB">
//             <h4> Evens and Odds </h4>
//             <input className="inputLine" onChange={(e) => setUserInput(e.target.value)}/>
//             <button className="confirmationButton" onClick={() => handleClick(userInput)}>button</button>
//             <span className="resultsBox"> Evens: {even}</span>
//             <span className="resultsBox"> Odds: {odd}</span>
//           </div>
//         </>
//       );
// }

// export default EvenAndOdd