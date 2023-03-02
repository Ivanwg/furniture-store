# Проект магазина мебели
* Для сборки проекта используется сборщик Webpack@5. Команда сборки в режиме PRODUCTION
  * npm run build

  *** для открытия проекта после build сборки нужно использовать serve dist -p НОМЕР ПОРТА (например serve dist -p 5000 )




* Проект выполнен в режиме Multiple Page Application
проект поделен на модули:  каждый модуль (4шт.) соответствует странице:

1) main - главная страница
2) partnership - страница с информацией о сотрудничестве
3) catalod - каталог товаров (диванов) с фильтрацией
4) good - детальная страница товара


* для оформления стилей используется препроцессор SCSS (за исключением файла нормалайзера и файлы для подключения шрифтов)

* файлы стилей также поделены на модули, общие стили хранятся в директории ./src/assets/styles, файлы , характерные для каждой конкретно страницы html в соответсвующих подиректориях (main, partnership, catalog, good)

* файлы js также поделены на модули, для каждой страницы html  характерна своя точка входа в виде файла index.js

в свою очередь, каждый index.js импортирует свой собственный static.js, в который импортируются те функции, что используются для страницы, каждой соответственно


* Минификая, обфускация и подключение стилей и js кода к странице, а также минификая шрифтов и изображений, конвертация изображений в webp, компиляция и постпроцессинг, выполняется сборщиком.

* Для изображений мобильных устройств используются уменьшенного формата изображения согласно макету.


Как перейти по страницам:

1) по умолчанию открывается index.html с главной страницей.
2) переход на страницу сотрудничества осуществляется по нажатию на ссылку ПОСТАВЩИКАМ в подвале сайта

3) переход в каталог товаров осуществляется по нажатию на ссылку КАТАЛОГ в шапке сайта.

4) переход на детальную страницу осуществляется по нажатию на кнопку КУПИТь внутри карточки синего дивана с артикулом D-31. Кнопка работает на всех карточках дивана с этим артикулом на всех страницах

* ссылки навигации по сайту (Хлебные крошки) работают корректно