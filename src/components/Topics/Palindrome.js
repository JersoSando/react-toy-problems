import React from 'react'

class Palindrome extends React.Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }
    handleChange = (event) => {
        this.setState({userInput: event.target.value})
    }

    isItPalindrome = () => {
        const inputValue = this.state.userInput.split(' ').join(''); // getting rig of white space
        console.log('what is input value', inputValue)
        let forwardStr = inputValue
        let backwardStr = inputValue
        backwardStr = backwardStr.split('').reverse().join('')

        console.log('backwardsStr: ', backwardStr)

        if (forwardStr === backwardStr) {
            this.setState({palindrome: 'true'})
        } else {
            this.setState({palindrome: 'false'})
        }
    }

    render () {
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input className='inputLine' value={this.state.userInput} onChange={this.handleChange}></input>
                <button className='confirmationButton' onClick={this.isItPalindrome}>Check</button>
                <span className='resultsBox'> Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome