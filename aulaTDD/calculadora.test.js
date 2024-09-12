//SOMA

const { soma } = require('./calculadora');

describe('Operação de Soma', () => {
  test('deve somar corretamente dois números', () => {
    expect(soma(10)).toBe(10); 
    expect(soma(5)).toBe(15);  
  });

  test('deve somar corretamente valores no formato string', () => {
    expect(soma('3')).toBe(18); 
  });
});

//SUBTRAÇÃO

const { subtracao } = require('./calculadora');

describe('Operação de Subtração', () => {
  test('deve subtrair corretamente dois números', () => {
    expect(subtracao(5)).toBe(13); 
  });

  test('deve subtrair corretamente valores no formato string', () => {
    expect(subtracao('3')).toBe(10); 
  });
});

//MUTIPLICAÇÃO 

const { multiplicacao } = require('./calculadora');

describe('Operação de Multiplicação', () => {
  test('deve multiplicar corretamente dois números', () => {
    expect(multiplicacao(2)).toBe(20); 
  });

  test('deve multiplicar corretamente valores no formato string', () => {
    expect(multiplicacao('2')).toBe(40); 
  });
});

//DIVISÃO

const { divisao } = require('./calculadora');

describe('Operação de Divisão', () => {
  test('deve dividir corretamente dois números', () => {
    expect(divisao(2)).toBe(20); 
  });

  test('deve dividir corretamente valores no formato string', () => {
    expect(divisao('2')).toBe(10); 
  });

  test('deve lançar erro ao dividir por 0', () => {
    expect(() => divisao(0)).toThrow('divisão ilegal por zero');
    expect(() => divisao('0')).toThrow('divisão ilegal por zero');
  });
});

//INVERSÃO

const { inversao } = require('./calculadora');

describe('Operação de Inversão', () => {
  test('deve inverter corretamente o sinal de um número positivo', () => {
    expect(inversao(10)).toBe(-10); 
  });

  test('deve inverter corretamente o sinal de um número negativo', () => {
    expect(inversao(-20)).toBe(20); 
  });
});

