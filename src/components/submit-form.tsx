'use client'

import {useFormStatus} from 'react-dom';

export default function SubmitForm(){
    const status = useFormStatus();

    if(status.pending){
        return <p>Sending message</p>
    }
    return <>
        {/* <button type="reset">Reset</button> */}
        <button>Submit</button>
    </>
}