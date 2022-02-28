import React from 'react'

class FilterString extends React.Component {
    constructor() {
        super();

        this.state = {
            colors: ['blue', 'purple', 'pink', 'black', 'green', 'brown'],
            userInput: '',
            filteredColors: []
        }
    }

    handleChange = (event) => {
        this.setState({userInput: event.target.value})
    }

    filterColors = () => {
        let colors = this.state.colors
        let filteredColors = []
        let stateInput = this.state.userInput

        for (let i = 0; i < colors.length; i++){
            if (colors[i].includes(stateInput)){
                filteredColors.push(colors[i])
            }
        }
        this.setState({filteredColors: filteredColors})
    }

    render () {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className='puzzleText'>{JSON.stringify(this.state.colors)}</span>
                <input className='inputLine' value={this.state.userInput} onChange={this.handleChange}></input>
                <button className='confirmationBox' onClick={this.filterColors}>Filter</button>
                <span className='resultsBox filterStringRB'>{JSON.stringify(this.state.filteredColors)}</span>
            </div>
        )
    }
}

export default FilterString