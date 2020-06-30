                                            React

<h2>P3 - Основы React</h2>

1) Если нет "create-react-app" -> npm install -g create-react-app
2) create-react-app создает структуру проекта 
    
package.json - описывает зависимости и скрипты

Техника использования легковесных обьектов, которые описывают элементы на странице, VirtualDOM, во многом благодаря ей React так быстро работает.

ReactDOM.render() преобразует React элементы в обычные браузерные DOM элементы и рендерит их на странице

<h3>P3.25 - React components</h3>
const AppHeader = () => {
    return <.h3>My Todo List<./h3>;
}

- Функции которые возвращают React элемент;
- Должны начинатся с большой буквы (требование Raect);
- Имя может использоваться в JSX: <AppHeader />;

<h3>P3.26 - JSX</h3>

- Позволяет использовать выражения { foo.bar };
- Аттрибуты называются camelCase ом;
- class = className, for = htmlFor;
- В свойства можно передавать любое значение;
- null, undefined, true and false в теле тегов игнорируются (не вызывая ошибок);

<h3>P3.28 - Структура React проекта</h3>

- один номпонент - один файл;
- компоненты в папке components;
- хороший компонент - независимый компонент;

<h3>P3.29 - Props</h3>

- обьект props передается в каждый компонент:
<code>
  const TodoLostItem = ({ label, important = false }) => {    
    const style = {
        color: important ? 'tomato' : 'green'
    }
    return <span style={style}>{label}</span>;
  };
</code>

- можно передавать любые значения; 
- если не передать в компонент никаких свойств, обьект props будет существовать;

<h3>P3.30 - Массивы как свойства компонентов</h3>

- Можно передавать ВСЕ свойства обьекта в компонент используя Spread оператор

<code>
const elements = todos.map( (item) => {
        return (
            <li>
                <TodoListItem label={item.label}/>
            </li>);
} )

// эквивалентно и проще

const elements = todos.map( (item) => {
        return (
            <li>
                <TodoListItem {...item}/>
            </li>);
} )
</code>

