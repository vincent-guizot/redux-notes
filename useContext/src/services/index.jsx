import axios from 'axios'
// import Swal from 'sweetalert2'

const URL = "https://localhost:3000"

const getAllContents = async () => {
    return await axios({
        method: "GET",
        url: "http://localhost:3000/contents",
    }).then(results => {

        // console.log(results.data);
        return results.data
    }).catch(err => {
        return err
    })

};

export {
    getAllContents

}

