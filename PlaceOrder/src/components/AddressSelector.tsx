import React from 'react';

interface AddressSelectorProps {
  addresses: string[];
  selected: string;
  onSelect: (address: string) => void;
}

const AddressSelector: React.FC<AddressSelectorProps> = ({ addresses, selected, onSelect }) => (
  <div className="mt-4">
    <h3 className="font-bold">Select Address</h3>
    {addresses.map((address, idx) => (
      <div key={idx} className="flex items-center mt-1">
        <input
          type="radio"
          name="address"
          value={address}
          checked={selected === address}
          onChange={() => onSelect(address)}
          className="mr-2"
        />
        <label>{address}</label>
      </div>
    ))}
  </div>
);

export default AddressSelector;