import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { google } from "../../redux/auth/slice.js";

export const Redirect = () => {

    const {accessToken} = useParams()

    const dispatch = useDispatch()


    useEffect(() => {
        console.log(accessToken);
       if (accessToken){
        console.log("middle if");
        dispatch(google(accessToken))
       }; 
      }, [accessToken, dispatch]);


    return (
        <div>
            Redirect
        </div>
    )
}