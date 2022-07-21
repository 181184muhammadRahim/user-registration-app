import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const showSuccessToastMessage=(val)=>{
    toast.success(val,{
        autoClose:2000,
        closeOnClick:true,
        pauseOnHover:false,
        position: toast.POSITION.TOP_CENTER
    })

}
export const showErrorToastMessage=(val)=>{
    toast.error(val,{
        autoClose:2000,
        closeOnClick:true,
        pauseOnHover:false,
        position: toast.POSITION.TOP_CENTER
    })

}