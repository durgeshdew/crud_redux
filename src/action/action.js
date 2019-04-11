import axios from "axios";

const url = "http://localhost:4040/meidicines";

export const addMedicine = () => ({
    type: 'ADD_MEDICINE'

});

export const handleInputChange = (name, value) => ({
    type: "HANDLE_INPUT_CHANGE",
    payload: { [name]: value }
});

export const AddNewMedicine = () => {
    return (dispatch) => {
        return axios.post(url)
            .then(resp => {
                console.log(resp);
                dispatch(addMedicine(resp.data));
            })


    }
}


export const fetchMedicine = (payload) => ({
    type: 'FETCH_MEDICINE',
    payload
});


export const fetchAllMedicines = () => {
    return (dispatch) => {
        return axios.get(url)
            .then(resp => {
                console.log(resp);
                dispatch(fetchMedicine(resp.data));
            })


    }
}

