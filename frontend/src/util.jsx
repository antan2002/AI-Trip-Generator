// import { toast } from "react-toastify";

// export const handleSuccess = (msg) => {
//     toast.success(msg, {
//         position: 'top-right'
//     })
// }

// export const handleError = (msg) => {
//     toast.error(msg, {
//         position: 'top-right'
//     })
// }

import { toast } from "react-toastify";

// Success toast (green by default)
export const handleSuccess = (msg) => {
    toast.success(msg, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
    });
};

// Error toast (red by default)
export const handleError = (msg) => {
    toast.error(msg, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
    });
};
