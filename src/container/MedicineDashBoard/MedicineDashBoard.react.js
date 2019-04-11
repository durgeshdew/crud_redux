import React from 'react';
import AddMedicine from '../../component/AddMedicine/AddMedicine.react';
import ShowMedicine from '../../component/ShowMedicine/ShowMedicine.react';



class MedicineDashBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <AddMedicine />
                <ShowMedicine />
            </div>
        );
    }
}

export default MedicineDashBoard;