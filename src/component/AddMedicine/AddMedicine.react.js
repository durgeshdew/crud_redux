import React from 'react';
import { AddNewMedicine, handleInputChange, addMedicine } from '../../action/action';
import { connect } from "react-redux"


// const handleInput = () => {
//     console.log("fired");
// }
// const handleSubmit = () => {
//     console.log("submit fired")
// }


const AddMedicine = (props) => {

    return (
        <form >
            <div>
                <div><label htmlFor="">Medicine Code</label>
                    <input type='text' name='code' onChnage={props.handleInput}></input></div>
                <div><label htmlFor="">Medicine Name</label>
                    <input type='text' name='name' onChnage={props.handleInput}></input></div>
                <div><label htmlFor="">Quantity</label>
                    <input type='text' name='quantity' onChnage={props.handleInput}></input></div>
                <div><button onClick={props.handleSubmit}> Add </button></div>


            </div>
        </form >
    );

}

const mapStateToProps = (state) => {
    return {
        prop: state.payload
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInput: (event) => {
            dispatch(handleInputChange(event.target.name, event.target.value))
        },
        handleSubmit: () => {
            dispatch(AddMedicine(AddNewMedicine))
        }
    }
}

export default connect(mapStateToProps,
    mapDispatchToProps)(AddMedicine);

