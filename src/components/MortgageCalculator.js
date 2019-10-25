import React, { Component } from 'react'

class MortgageCalculator extends Component {
    state = {
        principal: this.props.principal,
        years: this.props.years,
        rate: this.props.rate
    }

    principalChange = (event) => {
        this.setState({principal: event.target.value})
    }

    yearsChange = (event) => {
        this.setState({years: event.target.value})
    }

    rateChange = (event) => {
        this.setState({rate: event.target.value})
    }

    calculatePayment (principal, years, rate) {
        const monthlyRate = rate / 100 / 12;
        const monthlyPayment = principal * monthlyRate / (1-(Math.pow(1/(1+monthlyRate), years * 12)));
        let balance = principal;
        let y,m;
        for(y=0; y<years; y++) {
            let interestY = 0;
            let principalY = 0;
    
            for(m=0; m<12; m++) {
                const interestM = balance * monthlyRate;
                const principalM = monthlyPayment - interestM;
    
                interestY = interestY + interestM;
                principalY = principalY + principalM;
    
                balance = balance - principalM;
            }
        }
        return {monthlyPayment: monthlyPayment}
    }

    render () {
        const {principal, years, rate} = this.state;
        const payment = this.calculatePayment(principal, years, rate);
        const monthlyPayment = payment.monthlyPayment;

        return (
            <div className="content">
                <div className="form">
                    <div>
                        <label>Principal:</label>
                        <input type="text" value={this.state.principal} onChange={this.principalChange}/>
                    </div>
                    <div>
                        <label>Years:</label>
                        <input type="text" value={this.state.years} onChange={this.yearsChange}/>
                    </div>
                    <div>
                        <label htmlFor="rate">Rate:</label>
                        <input type="text" value={this.state.rate} onChange={this.rateChange}/>
                    </div>

                    <h2>Monthly Payment:  
                        <span className="currency">
                            {Number(monthlyPayment.toFixed(2)).toLocaleString()}
                        </span></h2>
                </div>
            </div>
        )
    }
}

export default MortgageCalculator