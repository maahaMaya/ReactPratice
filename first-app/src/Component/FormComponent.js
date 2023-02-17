import { useState } from "react"

export default function FormComponent(){
    const [users] = useState([
        {userId:'ram'},
        {userId:'om'},
        {userId:'hari'}
    ]);
    const [userMsg, setUserMsg] = useState('');
    const [isUserValid, setUserValid] = useState(false);
    function VerifyUserId(e){
        for(var user of users)
        {
            if(user.userId==e.target.value)
            {
                setUserMsg('user id is Taken - try another');
                setUserValid(false);
                break;
            }
            else
            {
                setUserMsg('User Id Avialbe');
                setUserValid(true);
            }
        }
    }
    function HideMsg(){
        setUserMsg('');
    }
    return(
        <>
            <div className="conatiner-fluid">
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text"onBlur={HideMsg} onKeyUp={VerifyUserId}/></dd>
                    <dd className={(isUserValid==true)?'text-success':'text-danger'}>{userMsg}</dd>
                </dl>
            </div>
        </>
    )
}