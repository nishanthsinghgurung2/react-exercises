import React, { useState } from 'react';

const usePhoneBookCustomHook = (callback) => {
  const [formFields, setFormFields] = useState({});
  const [phoneBookList, setPhoneBookList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPhoneBookEntry = {
      firstName: formFields.firstName,
      lastName: formFields.lastName,
      phone: formFields.phone
    };
    const updatedPhoneBookList = [...phoneBookList, newPhoneBookEntry];
    updatedPhoneBookList.sort((a,b) => {
      if(a.lastName < b.lastName) return -1;
      if(a.lastName > b.lastName) return 1;
      return 0;
    })
    setPhoneBookList(updatedPhoneBookList);
  };

  const onFieldChange = (e) => {
    setFormFields({...formFields,
      [e.target.name]: e.target.value
    });
  };

  return { phoneBookList, handleSubmit, onFieldChange};
};

export default usePhoneBookCustomHook;