import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'action', label: 'Action' },
  { value: 'romantic comedy', label: 'Romantic Comedy' },
  { value: 'drama', label: 'Drama' },
  { value: 'comedy', label: 'Comedy' },
  { value: 'all', label: 'All Genres' },
];

export default function DropList({selected, setSelected}) {
  return (
    <Select
      options={options}
      value={selected}
      onChange={setSelected}
      placeholder="Select a genre"

    />
  );
}
