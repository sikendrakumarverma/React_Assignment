import React, { useState, useEffect, useRef } from 'react';
import Day5Practice from './Day5.jsx'

//import './style.css';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

export default function Day6Practice() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');
  const [displayChild, setDisplayChild] = useState(true);

  // useEffect only Re-render when name changed Because we pass 2nd para. of useEffect with array with name 
  useEffect(() => {
    // code to execute
    //console.log('useEffect');

    return () => {
      // clean up stuff
    };
  }, [name]);

  const router = createBrowserRouter([{
      path: '/',
      element: (
        <div>
          Hello From Sikendra!
          <br/>  <br/>
          <Link to="/login">Go to login</Link>
          <br/>  <br/>
          <Link to="/Day5P"> Go to Day5 Practice page</Link>
        </div>
      ),
    },
    {
      path: '/login',
      element: <Child />,
    },
    {
      path:'/Day5P',
      element:<Day5Practice/>
    },
  ]);
  return (
    <div>
      {/* <h1>Hello StackBlitz!</h1>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>Increase by 1</button>
      <br />

      <input value={name} onChange={(e) => setName(e.target.value)} />
      {name}
      <p>Start editing to see some magic happen :)</p>
      <button
        onClick={() => {
          setDisplayChild(!displayChild);
        }}
      >
        Show/Hide child
      </button>
      {displayChild && <Child />} */}{' '}
      <RouterProvider router={router} />
    </div>
  );
}
// Controlled component
// we are controlling the values using state using React
// function Child() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   return (
//     <div>
//       <h2>Form </h2>
//       Name <input value={name} onChange={(e) => setName(e.target.value)} />{' '}
//       <br />
//       Email{' '}
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <br />
//       <button
//         onClick={() => {
//           console.log(name, email);
//         }}
//       >
//         Submit
//       </button>
//     </div>
//   );
// }

// Uncontrolled component
// we use ref

function Child() {
  const nameRef = useRef();
  const emailRef = useRef();
  return (
    <div>
      <h2>Form </h2>
      Name <input ref={nameRef} /> <br />
      Email <input type="email" ref={emailRef} />
      <br />
      <button
        onClick={() => {
          console.log(nameRef.current.value);
          console.log(emailRef.current.value);
        }}
      >
        Submit
      </button>
      <br />
      <Link to="/">Go back to homepage</Link>
      <br/>
      <a href="https://google.com">Send to Google</a>
    </div>
  );
}

// npm install react-router-dom

// homepage -> /
// login -> /login
// register -> /register
// .....