import React from 'react';
import usePhoneBookCustomHook from './usePhoneBookCustomHook';

const PhoneBookCustomHook = () => {

  const { phoneBookList, handleSubmit, onFieldChange} = usePhoneBookCustomHook();

  return (
    <div>
      <form>
        <input name="firstName" data-testid="input-first-name" type="text" placeholder="Enter firstname" onChange={onFieldChange} />
        <input name="lastName" data-testid="input-last-name" type="text" placeholder="Enter lastName" onChange={onFieldChange} />
        <input name="phone" data-testid="input-phone-number" type="text" placeholder="Enter phonenumber" onChange={onFieldChange} />
        <button name="submit" data-testid="btn-submit" onClick={handleSubmit}>Submit</button>
      </form>
      <div data-testid="phoneBookList">
      {phoneBookList && phoneBookList.map((phoneBookItem, index) => 
        <div data-testid={phoneBookItem.phoneNumber} key={index}>
          <span>{phoneBookItem.firstName}</span>
          <span>{phoneBookItem.lastName}</span>
          <span>{phoneBookItem.phone}</span>
        </div>
      )}
      </div>
    </div>
  );
};

export default PhoneBookCustomHook;