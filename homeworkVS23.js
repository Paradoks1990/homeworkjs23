var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};
//services['Розбити скло'] = "200 грн";
function parsePrice(priceString) {  return parseFloat(priceString.replace(/[^\d.]/g, ''));
}
//services.price = function() {
    let total = 0;
  for (let key in this) 
{ 
//if (typeof this[key] === 'string') {total += parsePrice(this[key]);
        }
    
    {return total ; }
//services.minPrice = function() {
    let price = [];
    for (let key in this) {
//if (typeof this[key] === 'string') {
            {prices.push(parsePrice(this[key]));
        }
    }
// Math.min()
{return Math.min(...prices);
}
//services.maxPrice = function() {
    let prices = [];
    for (let key in this) {
        if (typeof this[key] === 'string') {
prices.push(parsePrice(this[key]));
        }
    }
   // Math.max()
 {return Math.max(...prices);
}
