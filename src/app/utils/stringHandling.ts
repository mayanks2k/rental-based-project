export function capitalizeFirstLetter(str: string): string {
    if (str.length === 0) return str;
    
    return str
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }