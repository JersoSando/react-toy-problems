import React from 'react'

class FilterObject extends React.Component {
    constructor() {
        super();

        this.state = {
            books: [
                {
                    title: "Twilight",
                    about: "vampires",
                    year: 2011
                },
                {
                    title: "Jade City",
                    year: 2018,
                    author: "Fonda Lee",
                },
                {
                    title: "All of Us Villains",
                    author: "Amanda Foody",
                    publisher: 'abc books'
                }
            ],
            userInput: '',
            filteredBooks: []
        }
    }

    handleChange = (event) => {
        this.setState({userInput: event.target.value})
    }

    filterBook = () => {
        let books = this.state.books
        let filteredBooks = [];
        let inputFromState = this.state.userInput;

        for (let i = 0; i < books.length; i++) {
            if(books[i][inputFromState]) {
                filteredBooks.push(books[i]);
            }
        }
        this.setState({filteredBooks})
    }



    render () {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className='puzzleText'>{JSON.stringify(this.state.books)}</span>
                <input className='inputLine' value={this.state.userInput} onChange={this.handleChange}></input>
                <button className='confirmationButton' onClick={this.filterBook}>Filter</button>
                <span className='resultsBox filterObjectRB'>{JSON.stringify(this.state.filteredBooks)}</span>
            </div>
        )
    }
}

export default FilterObject 

// import React, {useState} from 'react'

// function FilterObject() {
//     const [unfilteredArray, setUnfilteredArray] = useState([
//         { name: "Jimmy Joe", title: "Hack0r", age: 12 },
//         { name: "Jeremy Schrader", age: 24, hairColor: "brown" },
//         { name: "Carly Armstrong", title: "CEO" },
//       ]);

//       const [input, setInput] = useState('')

//       const handleClick = (param) => {
//           let filter = []
//           for (let i =0; )
//       }

//     return (
//     <div className="puzzleBox filterObjectPB">
//     <h4> Filter Object </h4>
//     <span className="puzzleText">Original:{JSON.stringify(unfiltered)}</span>
//     <input className="inputLine" onChange={(e) => setInput(e.target.value)}></input>
//     <button className="confirmationButton" onClick={() => handleClick(input)}>Filter</button>
//     <span className="resultsBox filterObjectRB">Filtered:</span>
//     </div> 
//     )
// }

// export default FilterObject