import React, { Component } from 'react';
import './components.css';

class Form extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleInputChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    constructor(props){
        super(props)
        this.state = {
            fullName: '',
            eMail: '',
            Phone: '',
            Summary: '',
            Education: '',
            Experience: '',
        }
    }

    render() {
        const {fullName} = this.state;
        const {eMail} = this.state;
        const {Phone} = this.state;
        const {Summary} = this.state;
        const {Experience} = this.state;
        const {Education} = this.state;
        return(
            <div id='container'>
            <div className="form" id="form" onSubmit={this.handleSubmit}>
                <h2>Create a Resume</h2>
                <div className='form-element'>
                    <label for='name'>name</label>
                    <input type="text" id="name" name="fullName" placeholder='name' onChange={this.handleInputChange}></input>
                </div>
                <div className='form-element'>
                    <label for='email'>email</label>
                    <input type="text" id="email" name="eMail" placeholder='email' onChange={this.handleInputChange}></input>
                </div>
                <div className='form-element'>
                    <label for='phone'>phone number</label>
                    <input type="text" id="phone" name='Phone' placeholder='phone' onChange={this.handleInputChange}></input>
                </div>
                <div className='form-element'>
                    <label for='summary'>summary</label>
                    <input type="text" id="summary" name= 'Summary' placeholder='summary' onChange={this.handleInputChange}></input>
                </div>
                <div className='form-element'>
                    <label for='experience'>work experience</label>
                    <input type="text" id="experience" name='Experience' placeholder='experience' onChange={this.handleInputChange}></input>
                </div>
                <div className='form-element'>
                    <label for='education'>education</label>
                    <input type="text" id="education" name='Education' placeholder='education' onChange={this.handleInputChange}></input>
                </div>
                {/* <div className='form-element'>
                    <input type='submit' id="create-btn">create resume</input>
                </div> */}
                </div>
                <div id='resume'>
                <h2 className='resume-title'>RESUME</h2>
                <p className='resume-title'>CONTACT INFORMATION</p>
                <p>Your full name is: {fullName}</p>
                <p>Your email is : {eMail}</p>
                <p>Your phone  is : {Phone}</p>
                <p className='resume-title'>SUMMARY</p>
                <p>Your summary is: {Summary}</p>
                <p className='resume-title'>EXPERIENCE</p>
                <p>Your experience is: {Experience}</p>
                <p>Your education is: {Education}</p>
                </div>
            </div>
        )
    }
}

export default Form;