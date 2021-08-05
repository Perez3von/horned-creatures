import React, { Component } from 'react';

class Dropdown extends Component {
    
    render() { 

        const { changeEvent, options } = this.props;
        return (
           <>
            <select className='dropdown' onChange={changeEvent} >
            {
                    options.map((option, index) => (
                        <option key={index} value = {option}>{option}</option>
                    ))

            }
            </select>
           </>

          );
    }
}
 
export default Dropdown;