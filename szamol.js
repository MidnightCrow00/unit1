function szamolas(a, b) {
    if (a === undefined||b === undefined || arguments.length > 2)
        return "Két paraméter legyen!"
    if (isNaN(a) || isNaN(b)) 
        return "Szám legyen mindkét paraméter!";
  return Number(a) + Number(b);
}
