import React, { useState } from 'react';

function Day5Practice() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [marketing, setMarketing] = useState(false);

  return (
    <div>
      <h2>Registration Form</h2>
      <div>
        Name:{' '}
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        Gender:{' '}
        <input
          type="radio"
          value="male"
          checked={gender === 'male'}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        Male
        <input
          type="radio"
          value="female"
          checked={gender === 'female'}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        Female
        <input
          type="radio"
          value="other"
          checked={gender === 'other'}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        Other
      </div>

      <div>
        Receive Marketing Emails?{' '}
        <input
          type="checkbox"
          checked={marketing}
          onChange={() => setMarketing(!marketing)}
        />
      </div>

      <button
        onClick={() => {
          if (name && gender && marketing) {
            console.log(name);
            console.log(gender);
            console.log(marketing);

            // clearing all inputs
            setName('');
            setGender('');
            setMarketing(false);
          } else {
            // error
            alert('Please enter everything');
          }
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Day5Practice;
