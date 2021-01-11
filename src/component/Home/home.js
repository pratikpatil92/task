import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

export default class home extends Component {
    constructor(props){
        super();
        this.state={dropdownOpen:false,value:"page1"};
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        this.setState({dropdownOpen:!this.state.dropdownOpen});
    }
    handleChange = (e)=>{
        // console.log(e)
        this.setState({value:e.target.value})
    }
    render() {
        return (
            <div className="container">
            
                <select className="form-control container m-3" onChange={this.handleChange}>
                    <option value="page1">page1</option>
                    <option value="page2">page2</option>
                    <option value="page3">page3</option>
                </select>
                {this.state.value=="page2"?<Page2></Page2>:
                this.state.value=="page3"?<Page3></Page3>:
                <Page1></Page1>}
                </div>
        )
    }
}
