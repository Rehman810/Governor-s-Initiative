import React from "react";

const page = ({ params }: any) => {
  const countryInfo: any = {
    pakistan: {
      name: "Pakistan",
      population: "220 million",
      capital: "Islamabad",
    },
    india: {
      name: "India",
      population: "1.4 billion",
      capital: "New Delhi",
    },
    usa: {
      name: "United States of America",
      population: "331 million",
      capital: "Washington D.C.",
    },
    uk: {
      name: "United Kingdom",
      population: "67 million",
      capital: "London",
    },
    afghanistan: {
      name: "Afghanistan",
      population: "39 million",
      capital: "Kabul",
    },
  };

  const country =
    params.country_name.toLowerCase();

  let countryData = countryInfo[country];

  if (!countryData) {
    return <p>No data found</p>;
  }

  return (
    <>
      <ul>
        <li>Country Name: {countryData.name}</li>
        <li>
          Country Population:
          {countryData.population}
        </li>
        <li>
          Country Capital: {countryData.capital}
        </li>
      </ul>
    </>
  );
};

export default page;

// name, population ,capital
