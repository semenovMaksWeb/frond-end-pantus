module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-order'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'number-leading-zero': 'always', // всегда писать 0.3px а не .3px
    'number-max-precision': 3, // Количество дробных символов не более
    'function-calc-no-invalid': true, // calc валидация значении
    'function-calc-no-unspaced-operator': true, // пробелы в calc
    'string-no-newline': true, // Запрет использовать перенос строки без требующих символов
    'declaration-block-no-duplicate-properties': true, // запрет повторяющих символов
    'block-no-empty': true, // Запрещать пустые блоки
    'comment-no-empty': true, // Запрещать пустые комментарии
    'no-descending-specificity': true, // Запретить селекторам с более низкой специфичностью приходить после переопределения селекторов с более высокой специфичностью.
    'no-duplicate-selectors': true, // Запретить дубликаты селекторов
    'no-extra-semicolons': true, // Запретить лишние точки с запятыми
    'declaration-no-important': true, // Запрещать !important в объявлениях.
    'declaration-empty-line-before': null,
    // 'order/order': [
    //   'declarations',
    //   {
    //     type: 'at-rule',
    //     name: 'media',
    //   },
    //   {
    //     type: 'rule',
    //     selector: '^&::(before|after)',
    //   },
    //   {
    //     type: 'rule',
    //     selector: '^&:\\w',
    //   },
    //   {
    //     type: 'rule',
    //     selector: '^&_',
    //   },
    //   {
    //     type: 'rule',
    //     selector: '^.',
    //   },
    // ],
  },
}
