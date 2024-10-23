function getElementWidth(content, padding, border) {
return parseFloat(content);
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));

//const content1 = parseFloat(content);
//const padding1 = parseFloat(padding);
//const border1 = parseFloat(border);
//const totalPixel = content1 + padding1 * 2 + border1 * 2;
//return totalPixel;
