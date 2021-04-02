import React, { useState } from 'react';

const PhoneBook = () => {
  const [phoneBookList, setPhoneBookList] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updatePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPhoneBookEntry = {
      firstName,
      lastName,
      phoneNumber
    };
    const updatedPhoneBookList = [...phoneBookList, newPhoneBookEntry];
    updatedPhoneBookList.sort((a,b) => {
      if(a.lastName < b.lastName) return -1;
      if(a.lastName > b.lastName) return 1;
      return 0;
    })
    setPhoneBookList(updatedPhoneBookList);
  };

  return (
    <div>
      <form>
        <input data-testid="input-first-name" type="text" placeholder="Enter firstname" onChange={updateFirstName} />
        <input data-testid="input-last-name" type="text" placeholder="Enter lastName" onChange={updateLastName} />
        <input data-testid="input-phone-number" type="text" placeholder="Enter phonenumber" onChange={updatePhoneNumber} />
        <button data-testid="btn-submit" onClick={handleSubmit}>Submit</button>
      </form>
      <div data-testid="phoneBookList">
      {phoneBookList && phoneBookList.map((phooneBookItem, index) => 
        <div data-testid={phooneBookItem.phoneNumber} key={index}>
          <span>{phooneBookItem.firstName}</span>
          <span>{phooneBookItem.lastName}</span>
          <span>{phooneBookItem.phoneNumber}</span>
        </div>
      )}
      </div>
    </div>
  );
};

export default PhoneBook;