"use client";
import { useEffect, useRef, useState } from "react";

interface Country {
  name: string;
  alpha3Code: string;
  flag: {
    small: string;
    medium: string;
    large: string;
  };
}

export default function CountrySelect() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<{
    name: string;
    flag: string;
  } | null>(null);
  const [countries, setCountries] = useState<Country[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fetch countries
  useEffect(() => {
    async function fetchCountries() {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json"
        );
        const data = await res.json();

        // Convert object → array
        const values: Country[] = Object.values(data);

        // Sort alphabetically
        const sorted = values.sort((a, b) => a.name.localeCompare(b.name));
        setCountries(sorted);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    }
    fetchCountries();
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Filter
  const filteredCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      ref={dropdownRef}
      className="relative w-full lg:w-max mx-auto mt-4 "
    >
      {/* Button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`p-4 lg:p-[22px] text-[#2C2C2C] text-xl lg:text-[32px] font-medium cursor-pointer outline-0 flex items-center justify-between w-full lg:w-[504px] ${
          open ? "bg-[#084F3D] text-white" : ""
        } `}
        style={{ boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.25)" }}
      >
        {selected ? (
          <span className="flex items-center gap-2">
            <img
              src={selected.flag}
              alt={selected.name}
              className="size-[36px] rounded-full"
            />
            {selected.name}
          </span>
        ) : (
          "Select Country"
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="11"
          viewBox="0 0 24 11"
          fill="none"
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          <path d="M0 0L12 11L24 0H0Z" fill={open ? "white" : "#2C2C2C"} />
        </svg>
      </button>
      :"
      {/* Menu */}
      {open && (
        <ul className="dropdown-scroll absolute shadow-lg bg-white py-2 px-2 z-[1000] min-w-full w-max rounded max-h-96 overflow-auto">
          {/* List */}
          {filteredCountries.map((country) => (
            <li
              key={country.alpha3Code}
              onClick={() => {
                setSelected({ name: country.name, flag: country.flag.small });
                setOpen(false);
              }}
              className="px-3 py-2 cursor-pointer text-xl flex items-center gap-4 mb-9"
            >
              <img
                src={country.flag.small}
                alt={country.name}
                className="size-[36px] rounded-full object-contain"
              />
              {country.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
