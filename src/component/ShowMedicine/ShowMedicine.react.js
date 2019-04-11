import React from 'react';
import Medicine from '../Medicine/Medicine.react';

const eachMedicine = {
    code: 101,
    productName: 'crocin',
    quantity: 10
}

const ShowMedicine = () => {

    return (
        <div >
            <h2>Show Medicine...</h2>
            <Medicine medicine={eachMedicine} />
        </div>
    );

}

export default ShowMedicine;