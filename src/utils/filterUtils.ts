import { Country } from "../models/Country";

export function memoizedFilter(
  countries: Country[],
  filterCriteria: keyof Country,
  filterValueLower: string,
  customFilterFn?: (property: any, filterValueLower: string) => boolean
): Country[] {
  if (!filterValueLower.trim()) {
    return countries;
  }
  return countries.filter((country: Country) => {
    const property = getProperty(country, filterCriteria);
    return customFilterFn ? customFilterFn(property, filterValueLower) : defaultFilter(property, filterValueLower);
  });
}

function getProperty(country: Country, filterCriteria: keyof Country): any {
  return country[filterCriteria];
}

function defaultFilter(property: any, filterValueLower: string): boolean {
  if(!property) return false
  if (typeof property === "string" && property !== "continent") {
    return property.toLowerCase().includes(filterValueLower);
  } else if (typeof property === "object" && "name" in property) {
    return property.name.toLowerCase().includes(filterValueLower);
  } else if (Array.isArray(property)) {
    return property.some((language: any) =>
      language.name.toLowerCase().includes(filterValueLower)
    );
  }
  return false;
}