const sizes = {
    small: 640,
    medium: 768,
    large: 1024,
    extraLarge: 1280,
  }
  
  const devices = {
    small: `(max-width: ${sizes.small}px)`,
    medium: `(max-width: ${sizes.medium}px)`,
    large: `(max-width: ${sizes.large}px)`,
    extraLarge: `(max-width: ${sizes.extraLarge}px)`,
  }
  
  export default devices;
  