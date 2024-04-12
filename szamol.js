function szamolas(a, b) {
    if (a === undefined||b === undefined)
        return "Két paraméter legyen!"
    if (isNaN(a) || isNaN(b)) 
        return "Szám legyen mindkét paraméter!";
  return Number(a) + Number(b);
}
