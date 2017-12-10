**debug**

# About
Try debug `jest` tests for `es6-code` in `WebStorm`.
В текущий момент mocha при асинхронных тестаах дебажится нормально.
А jest выходит с ошибкой 9 сразу же, ничего не проверяя.

## Run & Test
`npm start`

jest tests: `npm run test-j` или `npm run test-j:watch`

mocha tests: `npm run test-m` или `test-m:debug` для возможности дебага в chrome devtools

После запуска скрипта, обеспечивающего возможность дебага в хром девтулс нужно:

Зайти в chrome, в адресной строке вбить chrome://inspect/ и кликнуть Open Dedicated DevTools for Node link => Developer Tools will be opened; и нажать кнопку Resume.

## Files
Contains files in /.idea.
For distribute Run / Debug configs.

## Known issues
See https://eugen35.gitbooks.io/testing/debug/ww.html

## Комментарий к пакетам
`babel-jest` - нужно, чтобы был. Именно он отвечает за automatically compile JavaScript code using babel.
