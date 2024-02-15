import { Country } from "../models/Country";

export function memoizedFilter(
  countries: Country[],
  filterCriteria: keyof Country,
  filterValueLower: string,
  customFilterFn?: (property: any, filterValueLower: string) => boolean
): Country[] {
  return countries.filter((country: Country) => {
    const property = getProperty(country, filterCriteria);
    return customFilterFn ? customFilterFn(property, filterValueLower) : defaultFilter(property, filterValueLower);
  });
}

function getProperty(country: Country, filterCriteria: keyof Country): any {
  return country[filterCriteria];
}

function defaultFilter(property: any, filterValueLower: string): boolean {
  if (typeof property === "string" && property !== "continent") {
    return property.toLowerCase().includes(filterValueLower);
  } else if (property && typeof property === "object" && "name" in property) {
    return property.name.toLowerCase().includes(filterValueLower);
  }
  return false;
}