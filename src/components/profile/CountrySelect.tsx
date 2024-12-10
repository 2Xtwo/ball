import { useState } from 'react';
import { countries } from '../../data/countryFlags';

interface CountrySelectProps {
  value: string;
  onChange: (country: string) => void;
}

export default function CountrySelect({ value, onChange }: CountrySelectProps) {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  const selectedCountry = countries.find(c => c.name === value);

  return (
    <div className="relative">
      <div
        className="mt-1 relative rounded-md shadow-sm cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center p-2 border rounded-md">
          {selectedCountry ? (
            <>
              <span className="text-2xl mr-2">{selectedCountry.flag}</span>
              <span>{selectedCountry.name}</span>
            </>
          ) : (
            <span className="text-gray-500">Select country</span>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg">
          <div className="p-2">
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="Search countries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className="max-h-60 overflow-auto">
            {filteredCountries.map((country) => (
              <div
                key={country.code}
                className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  onChange(country.name);
                  setIsOpen(false);
                }}
              >
                <span className="text-2xl mr-2">{country.flag}</span>
                <span>{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}