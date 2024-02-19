import { Country } from "../models/Country";

/**
 * This function performs memoized filtering on an array of countries based on the specified filter criteria and value.
 * @param countries The array of countries to filter.
 * @param filterCriteria The criteria by which to filter the countries.
 * @param filterValueLower The filter value in lowercase.
 * @returns An array of countries that match the filter criteria and value.
 */
export function memoizedFilter(
  countries: Country[],
  filterCriteria: keyof Country,
  filterValueLower: string
): Country[] {
  // If filter value is empty, return all countries
  if (!filterValueLower.trim()) {
    return countries;
  }

  // Filter countries based on the specified criteria and value
  return countries.filter((country: Country) => {
    const property = getProperty(country, filterCriteria);
    return defaultFilter(property, filterCriteria, filterValueLower);
  });
}

/**
 * This function retrieves the property value from a country object based on the specified filter criteria.
 * @param country The country object.
 * @param filterCriteria The criteria by which to filter.
 * @returns The value of the property.
 */
function getProperty(country: Country, filterCriteria: keyof Country): any {
  return country[filterCriteria];
}

/**
 * This function performs the default filtering based on the property value and filter criteria.
 * @param property The value of the property.
 * @param filterCriteria The criteria by which to filter.
 * @param filterValueLower The filter value in lowercase.
 * @returns A boolean indicating whether the property matches the filter value.
 */
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

/**
 * This function filters a string property based on the filter value.
 * @param property The value of the property.
 * @param filterValueLower The filter value in lowercase.
 * @returns A boolean indicating whether the property matches the filter value.
 */
function filterString(property: any, filterValueLower: string): boolean {
  return typeof property === "string" && property.toLowerCase().includes(filterValueLower);
}

/**
 * This function filters a continent property based on the filter value.
 * @param property The value of the property.
 * @param filterValueLower The filter value in lowercase.
 * @returns A boolean indicating whether the property matches the filter value.
 */
function filterContinent(property: any, filterValueLower: string): boolean {
  return typeof property === "object" && "name" in property && property.name.toLowerCase().includes(filterValueLower);
}

/**
 * This function filters a languages property based on the filter value.
 * @param property The value of the property.
 * @param filterValueLower The filter value in lowercase.
 * @returns A boolean indicating whether the property matches the filter value.
 */
function filterLanguages(property: any, filterValueLower: string): boolean {
  return Array.isArray(property) && property.some((language: any) =>
    language.name.toLowerCase().includes(filterValueLower)
  );
}
