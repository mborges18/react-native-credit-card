import React, {useState} from 'react';

const MASK = {
  //Create your masks here

  maskCep(text: string) {
    text = text.replace(/\D/g, '');
    text = text.replace(/^(\d{5})(\d)/, '$1-$2');
    return text;
  },

  maskPhoneDDI(text: string) {
    text = text.replace(/\D/g, '');
    text = text.replace(/^(\d)/, '+$1');
    text = text.replace(/(.{3})(\d)/, '$1($2');
    text = text.replace(/(.{6})(\d)/, '$1)$2');
    if (text.length == 12) {
      text = text.replace(/(.{1})$/, '-$1');
    } else if (text.length == 13) {
      text = text.replace(/(.{2})$/, '-$1');
    } else if (text.length == 14) {
      text = text.replace(/(.{3})$/, '-$1');
    } else if (text.length == 15) {
      text = text.replace(/(.{4})$/, '-$1');
    } else if (text.length > 15) {
      text = text.replace(/(.{4})$/, '-$1');
    }
    return text;
  },

  maskPhoneDDI2(text: string) {
    text = text.replace(/\D/g, '');
    text = text.replace(/^(\d{2})(\d{2})(\d{4})(\d)/, '+$1 ($2) $3-$4');
    return text;
  },

  maskPhone(text: string) {
    text = text.replace(/\D/g, '');
    text = text.replace(/^(\d{2})(\d)/g, '($1) $2');
    text = text.replace(/(\d)(\d{4})$/, '$1-$2');
    return text;
  },

  maskDate(text: string) {
    text = text.replace(/\D/g, '');
    text = text.replace(/^(\d{2})(\d{2})(\d)/g, '$1/$2/$3');
    return text;
  },

  maskCpf(text: string) {
    text = text.replace(/\D/g, '');
    text = text.replace(/^(\d{3})(\d{3})(\d{3})(\d)/, '$1.$2.$3-$4');
    return text;
  },

  maskCardHealth(text: string) {
    text = text.replace(/\D/g, '');
    text = text.replace(/^(\d{7})(\d)/, '$1.$2');
    return text;
  },

  //This mask is in test. Don't use it
  maskCustom(maskCustom: string, text: string) {
    var i = 0;
    var lastReplaceIndex = -1;

    const filledMask = maskCustom.replace(/#/g, (_, j) => {
      if (i >= text.length) {
        return '#';
      }
      lastReplaceIndex = j;

      return text[i++];
    });

    return filledMask.substring(0, lastReplaceIndex + 1);
  },

  //Create your mask types here
  PHONE: 'phone',
  CEP: 'cep',
  CPF: 'cpf',
  CNPJ: 'cnpj',
  DATE: 'date',
  
};

export default MASK;