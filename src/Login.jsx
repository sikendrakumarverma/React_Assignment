import React, { useState } from 'react'

function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const [Email, setEmail] = useState("");
    const [tnc, setTnc] = useState(false);
    const [Gender, setGender] = useState("");
    const [Country, setCountry] = useState("");

    function loginHandle(e) {
        if (user.length < 3 || password.length < 3) {
            alert("type correct values")
        }
        else {
            alert("all good :)")
        }
        console.warn(user, password, Email,Gender,Country, tnc)
        e.preventDefault()
    }
    function userHandler(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setUserErr(true)
        }
        else {
            setUserErr(false)
        }
        setUser(item)
    }
    function passwordHandler(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setPassErr(true)
        }
        else {
            setPassErr(false)
        }
        setPassword(item)

    }
    return (
        <div>
            <h1>Registration Form</h1>
            <form onSubmit={loginHandle}>
                <input type="text" placeholder="Enter First Name" onChange={userHandler} />{userErr ? <span>First name not valid</span> : ""}
                <br /> <br />
                <input type="text" placeholder="Enter Last Name" />
                <br /> <br />
                <select onChange={(e) => setGender(e.target.value)}>
                <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
                <br /> <br />
                <select onChange={(e) => setCountry(e.target.value)}>
                    <option>country</option>
                    <option>India</option>
                    <option>Japan</option>
                    <option>America</option>
                </select>
                <br /> <br />
                <input type="text" placeholder="Enter Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                <br /> <br />
                <input type="password" placeholder="Enter Password" onChange={passwordHandler} />{passErr ? <span>Password Not Valid</span> : ""}
                <br /> <br />
                <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} /><span>Accept Terms and conditions</span>
                <br /> <br />
                <button type="submit"  >Login</button>
            </form>
        </div>
    )
}

export default Login;