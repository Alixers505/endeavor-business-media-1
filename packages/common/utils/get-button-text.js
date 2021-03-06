module.exports = (type) => {
  let buttonText = `Full ${type}`;
  switch (type) {
    case 'video':
      buttonText = 'Watch Video';
      break;
    case 'whitepaper':
      buttonText = 'Read More';
      break;
    case 'media-gallery':
      buttonText = 'View Gallery';
      break;
    case 'product':
      buttonText = 'Learn More';
      break;
    case 'press-release':
      buttonText = 'Full Press Release';
      break;
    default:
      break;
  }
  return buttonText;
};
