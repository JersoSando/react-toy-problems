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
    handleChange (event) {
        this.setState({userInput: event.target.value})
    }

    handleClick () {
        

    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e)}></input>
                <button className="confirmationBox" onClick={}></button>
                <span className='resultsBox'></span>
                <span className='resultsBox'></span>
            </div>
    )
    }
}

export default EvenAndOdd