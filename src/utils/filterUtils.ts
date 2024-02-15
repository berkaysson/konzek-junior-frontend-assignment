import { Country } from "../models/Country";

export function memoizedFilter(
  countries: Country[],
  filterCriteria: keyof Country,
  filterValueLower: string
): Country[] {
  if (!filterValueLower.trim()) {
    return countries;
  }
  return countries.filter((country: Country) => {
    const property = getProperty(country, filterCriteria);
    return defaultFilter(property, filterCriteria, filterValueLower);
  });
}

function getProperty(country: Country, filterCriteria: keyof Country): any {
  return country[filterCriteria];
}

function defaultFilter(property: any, filterCriteria: keyof Country, filterValueLower: string): boolean {
  switch (filterCriteria) {
    case "name":
    case "code":
    case "currency":
    case "native":
    case "phone":
      return filterString(property, filterValueLower);
    case "continent":
      return filterContinent(property, filterValueLower);
    case "languages":
      return filterLanguages(property, filterValueLower);
    default:
      return false;
  }
}

function filterString(property: any, filterValueLower: string): boolean {
  return typeof property === "string" && property.toLowerCase().includes(filterValueLower);
}

function filterContinent(property: any, filterValueLower: string): boolean {
  return typeof property === "object" && "name" in property && property.name.toLowerCase().includes(filterValueLower);
}

function filterLanguages(property: any, filterValueLower: string): boolean {
  return Array.isArray(property) && property.some((language: any) =>
    language.name.toLowerCase().includes(filterValueLower)
  );
}
