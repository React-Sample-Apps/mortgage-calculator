import React, { Component } from 'react'
import MortgageCalculator from './components/MortgageCalculator'

class App extends Component {
    render () {
        return (
            <div>
                <header>
                    <h1>React Mortgage Calculator</h1>
                </header>
                <MortgageCalculator principal="200000" years="30" rate="5"/>
            </div>
        )
    }
}

export default App