function useCreditCardGenerator() {
  const generateRandomNumber = (length) => {
    return Math.floor(Math.random() * Math.pow(10, length));
  };

  const luhnCheck = (cardNumber) => {
    let sum = 0;
    let shouldDouble = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber.charAt(i));
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0;
  };

  const generateCreditCardNumber = (prefix, length) => {
    let cardNumber = prefix.toString();
    while (cardNumber.length < length - 1) {
      cardNumber += generateRandomNumber(1).toString().charAt(0);
    }
    for (let i = 0; i <= 9; i++) {
      let tempNumber = cardNumber + i.toString();
      if (luhnCheck(tempNumber)) {
        cardNumber += i.toString();
        break;
      }
    }
    return cardNumber;
  };

  return { generateCreditCardNumber };
}

export default useCreditCardGenerator;
