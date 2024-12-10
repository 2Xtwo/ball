interface Country {
  name: string;
  code: string;
  flag: string;
  region: string;
}

export const countries: Country[] = [
  {
    name: "Kenya",
    code: "KE",
    flag: "🇰🇪",
    region: "Africa"
  },
  {
    name: "England",
    code: "GB-ENG",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    region: "Europe"
  },
  {
    name: "United States",
    code: "US",
    flag: "🇺🇸",
    region: "North America"
  },
  // Add more countries...
];

export function getCountryFlag(countryName: string): string {
  const country = countries.find(
    c => c.name.toLowerCase() === countryName.toLowerCase()
  );
  return country?.flag || "🏳️";
}

export function getCountryByCode(code: string): Country | undefined {
  return countries.find(c => c.code === code);
}

export function getCountriesByRegion(region: string): Country[] {
  return countries.filter(c => c.region === region);
}

export function getAllCountries(): Country[] {
  return [...countries].sort((a, b) => a.name.localeCompare(b.name));
}