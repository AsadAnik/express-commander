/**
 * == To Make Capitalise any Files name ==
 * @param str 
 * @returns 
 */
export const capitalize = (str: string): string => {
    if (typeof str !== 'string') return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

