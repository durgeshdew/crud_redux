import React from 'react';
import { fetchAllMedicines } from '../../action/action';
import { connect } from "react-redux"


// const getMedicine = () => {


// }

const Medicine = (props) => {

    if (!props.prop) {
        return (
            <div>
                <button onClick={props.getMedicine}>Fetch</button>
            </div>
        );
    } else {
        return (
            props.prop.map((list, index) => {
                return (
                    <div key={index}>
                        <div>{list.code}</div>
                        <div>{list.productName}</div>
                        <div>{list.quantity}</div>
                    </div>
                );
            })



        );
    }

}
const mapStateToProps = (state) => {
    return {
        prop: state.payload
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getMedicine: () => {
            dispatch(fetchAllMedicines())
        }
    }
}

export default connect(mapStateToProps,
    mapDispatchToProps)(Medicine);

