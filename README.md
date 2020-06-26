                                            <h1>React</h1>

<h2>P3 - Основы React</h2>
    1) Если нет "create-react-app" -> npm install -g create-react-app
    create-react-app создает структуру проекта 

    package.json - описывает зависимости и скрипты

    Техника использования легковесных обьектов, которые описывают элементы на странице, VirtualDOM, во многом благодаря ей React так быстро работает.

    ReactDOM.render() преобразует React элементы в обычные браузерные DOM элементы и рендерит их на странице

  <h3>P3.25 - React components</h3>
    const AppHeader = () => {
        return <h3>My Todo List</h3>;
    }

    - Функции которые возвращают React элемент
    - Должны начинатся с большой буквы (требование Raect)
    - Имя может использоваться в JSX: <AppHeader />

  <h3>P3.26 - JSX</h3>
    - Позволяет использовать выражения { foo.bar }
    - Аттрибуты называются camelCase ом
    - class = className, for = htmlFor
    - В свойства можно передавать любое значение
    - null, undefined, true and false в теле тегов игнорируются (не вызывая ошибок)