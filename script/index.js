
new JustValidate('.feedback__form', {
  colorWrong: 'blue',
  messages: {
    name: {
      minLength: 'В имене должно быть больше 1 буквы',
      required: 'Поле обязательно для заполнения',
      strength: 'В имени допускаются только русские буквы'
    },
    tel: {
      required: 'Поле обязательно для заполнения',
      strength: 'В номере должны быть только цифры'
    }

  },
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 20,
      strength: {
          custom: '[а-яА-Я]'
         } 
    },
    tel: {
      required: true,
      strength: {
          custom: '[0-9]'
         } 
      }
  }
})