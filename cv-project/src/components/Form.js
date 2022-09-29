import React, { Component } from 'react';
import './components.css';

class Form extends Component {

    render() {
        return(
            <div>
            <div className="form" id="form" >
                <h2>Create a Resume</h2>
                <div className='form-element'>
                    <label for='name'>name</label>
                    <input type="text" id="name" placeholder='name'></input>
                </div>
                <div className='form-element'>
                    <label for='email'>email</label>
                    <input type="text" id="email" placeholder='email'></input>
                </div>
                <div className='form-element'>
                    <label for='phone'>phone number</label>
                    <input type="text" id="phone" placeholder='phone'></input>
                </div>
                <div className='form-element'>
                    <label for='summary'>summary</label>
                    <input type="text" id="summary" placeholder='summary'></input>
                </div>
                <div className='form-element'>
                    <label for='experience'>work experience</label>
                    <input type="text" id="experience" placeholder='experience'></input>
                </div>
                <div className='form-element'>
                    <label for='education'>education</label>
                    <input type="text" id="education" placeholder='education'></input>
                </div>
                <div className='form-element'>
                    <button id="create-btn">create resume</button>
                </div>
                </div>
            </div>
        )
    }
}

export default Form;