const converter = require('./convert-equations.js');                                                       
const equation = "latex(f(x)=a_0+∑_(n=1)^∞▒(a_n  cos〖nπx/L〗+b_n  sin〖nπx/(L  lim┬(n→∞)〖(1+1/n)^n 〗 )〗 ))";
const latex = converter.convert(equation);
console.log('LaTeX', latex);  
