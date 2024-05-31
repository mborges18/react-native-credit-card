import React, {useState} from 'react';

const Mask = {
  //Create your masks here

  cep(text: string) {
    text = text.replace(/\D/g, '');
    text = text.replace(/^(\d{5})(\d)/, '$1-$2');
    return text;
  },

  phoneDDI(text: string) {
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

  phoneDDI2(text: string) {
    text = text.replace(/\D/g, '');
    text = text.replace(/^(\d{2})(\d{2})(\d{4})(\d)/, '+$1 ($2) $3-$4');
    return text;
  },

  phone(text: string) {
    text = text.replace(/\D/g, '');
    text = text.replace(/^(\d{2})(\d)/g, '($1) $2');
    text = text.replace(/(\d)(\d{4})$/, '$1-$2');
    return text;
  },

  date(text: string) {
    text = text.replace(/\D/g, '');
    text = text.replace(/^(\d{2})(\d{2})(\d)/g, '$1/$2/$3');
    return text;
  },

  cpf(text: string) {
    text = text.replace(/\D/g, '');
    text = text.replace(/^(\d{3})(\d{3})(\d{3})(\d)/, '$1.$2.$3-$4');
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

   _maskCustom(maskCustom: string, text: string) {
    let i = 0;
    let lastReplaceIndex = -1;
    const filledMask = maskCustom.replace(/#+/, (match) => {
      if (i >= text.length) {
        return match;
      }
      lastReplaceIndex = match.indexOf(text);
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

export default Mask;