const Utils = {
  calculateNumber(type, a, b) {
    // Ensure inputs are converted to numbers
    a = Number(a);
    b = Number(b);

    // Round the inputs
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);

    switch(type) {
      case 'SUM':
        return roundedA + roundedB;
      case 'SUBTRACT':
        return roundedA - roundedB;
      case 'DIVIDE':
        // Check if b is 0 to avoid division by zero
        if (roundedB === 0) {
          return 'Error';
        }
        // Perform division and round the result
        return Math.round(roundedA / roundedB);
      default:
        return 0;
    }
  }
};

module.exports = Utils;
