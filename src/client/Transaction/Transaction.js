import React, { Component } from 'react';
import './Transaction.css'
import Navbar from '../Homepage/Navbar/Navbar'
import Button from '../Button/Button'

export default class Transaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            category: "",
            amt: 0,
            recipient: "",
            user: "krl2134+user@columbia.edu"
        }
        
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleAmtChange = this.handleAmtChange.bind(this);
        this.handleRecipientChange = this.handleRecipientChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitleChange(event){
        this.setState({title:event.target.value})
    }

    handleCategoryChange(event){
        this.setState({category:event.target.value})
    }

    handleAmtChange(event){
        this.setState({amt:event.target.value})
    }

    handleRecipientChange(event){
        this.setState({recipient:event.target.value})
    }

    handleSubmit(event) {
        alert(this.state.title+this.state.category+this.state.amt+this.state.recipient);
        event.preventDefault();
        var dataUser =  {
            "send": this.state.user,
            "recv": this.state.recipient,
            "amt": this.state.amt    
          }

        if(this.state.category ==  "user"){
            fetch('/api/transact' , {
                method: 'post',
                body: JSON.stringify(dataUser)
              }).then(function(response) {
                console.log(response.json());
            });
        }
        


    }

    render(){
        return <div>
            <Navbar userID = {this.props.userID}/>
            <div className="transaction-wrapper">
                <div className = 'transaction-title'>
                    Create Transaction
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Title<br/>
                        <input type="text" defaultValue={this.state.title} onChange={this.handleTitleChange} />
                    </label><br/>

                    <label>
                    Expense Category<br/>
                        <input type="text" defaultValue={this.state.category} onChange={this.handleCategoryChange} />
                    </label><br/>

                    <label>
                    Amount ($)<br/>
                        <input type="number" defaultValue={this.state.amt} onChange={this.handleAmtChange} />
                    </label><br/>

                    <label>
                    Recipient<br/>
                        <input type="text" defaultValue={this.state.recipient} onChange={this.handleRecipientChange} />
                    </label><br/>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    }
}

Transaction.defaultProps = {
    userID:"4W442QBG9Q"
}