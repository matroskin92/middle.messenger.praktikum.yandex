function test(name: string, value: string): string {

  const patterns:{ [key: string]: RegExp } = {
    'name': /^[-a-zA-Zа-яА-ЯёЁ0-9\s]+$/,
    'firstCapital': /^[A-Z\u0410-\u042f]/,
    'onlyDigit': /[0-9\.]/g,
    'space': /\S/,
    'specialSymbols': /^[a-zA-Z0-9]+$/,
    'email': /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    'phone': /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
  }

  if (name === 'first_name' || name === 'second_name') {
    if (!patterns.name.test(value)) {
      return 'Допускается использование только латиницы, кириллицы и тире';
    } else if (value.search(patterns.firstCapital) !== 0) {
      return 'Первая буква должна быть заглавной';
    } else {
      return '';
    }
  }

  if (name === 'login') {
    if (value.length < 3 || value.length > 20) {
      return 'Логин должен быть больше 3 и меньше 20 символов';
    } else if (value.replace(patterns.onlyDigit, '').length === 0) {
      return 'Логин не может состоятеть только из цифр';
    } else if (!patterns.space.test(value)) {
      return 'Логин не должен содержать пробелы';
    } else if (!patterns.specialSymbols.test(value)) {
      return 'Логин не должен содержать спецсимволы';
    } else {
      return '';
    }
  }

  if (name === 'password' || name === 'password2' || name === 'oldPassword' || name === 'newPassword') {
    if (value.length < 8 || value.length > 40) {
      return 'Пароль должен быть больше 8 и меньше 40 символов';
    } else if (value.search(/[A-Z]/) === -1 || value.search(/[0-9]/) === -1) {
      return 'Пароль должен содержать хотя бы 1 заглавную букву и цифру';
    } else {
      return '';
    }
  }

  if (name === 'email') {
    if (!patterns.email.test(value)) {
      return 'Введите корректный e-mail';
    }
  }

  if (name === 'phone') {
    if (value.length < 10 || value.length > 15) {
      return 'Телефон должен быть больше 10 и меньше 15 символов';
    } else if (!patterns.phone.test(value)) {
      return 'Введите корректный телефон';
    }
  }

  if (name === 'message') {
    if (value.length === 0) {
      return 'Сообщение не должно быть пустым';
    }
  }

  return '';
}

export function Validate(data: TStringObject): TStringObject {
  const errors: TStringObject = {};
  for (let key in data) {
    const result = test(key, data[key]);
    errors[key] = result ? result : '';
  }

  return errors;
}

export function isValid(data: TStringObject): boolean {
  let hasError: boolean = false;
  for (let key in data) {
    hasError = (Boolean(data[key]?.length) || hasError) ?? false;
  }

  return !hasError;
}