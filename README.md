React

# P3 - Основы React

- Если нет "create-react-app" -> npm install -g create-react-app
- create-react-app создает структуру проекта

- package.json - описывает зависимости и скрипты

Техника использования легковесных обьектов, которые описывают элементы на странице, VirtualDOM, во многом благодаря ей React так быстро работает.

ReactDOM.render() преобразует React элементы в обычные браузерные DOM элементы и рендерит их на странице

## P3.25 - React components

```javascript
const AppHeader = () => {
    return <.h3>My Todo List<./h3>;
}
```

- Функции которые возвращают React элемент;
- Должны начинатся с большой буквы (требование Raect);
- Имя может использоваться в JSX:

  ```javascript
  <AppHeader />
  ```

## P3.26 - JSX

- Позволяет использовать выражения { foo.bar };
- Аттрибуты называются camelCase ом;
- class = className, for = htmlFor;
- В свойства можно передавать любое значение;
- null, undefined, true and false в теле тегов игнорируются (не вызывая ошибок);

## P3.28 - Структура React проекта

- один номпонент - один файл;
- компоненты в папке components;
- хороший компонент - независимый компонент;

## P3.29 - Props

- обьект props передается в каждый компонент:

```javascript
const TodoLostItem = ({ label, important = false }) => {
  const style = {
    color: important ? "tomato" : "green",
  };
  return <span style={style}>{label}</span>;
};
```

- можно передавать любые значения;
- если не передать в компонент никаких свойств, обьект props будет существовать;

## P3.30 - Массивы как свойства компонентов

- Можно передавать ВСЕ свойства обьекта в компонент используя Spread оператор

```javascript
const elements = todos.map((item) => {
  return (
    <li>
      <TodoListItem label={item.label} />
    </li>
  );
});

// эквивалентно и проще

const elements = todos.map((item) => {
  return (
    <li>
      <TodoListItem {...item} />
    </li>
  );
});
```

## Р3.31 Коллекции и ключи

```javascript
<li key={item.id}>
    <TodoListItem {...item}/>
</li>;
```
Каждый раз когда React рендерит приложение он пытается определить какие именно элементы изменились в DOM дереве и обновить только их. 
React старается минимизировать работу с DOM элементами

- Каждому JSX элементу в массиве нужно уникальное свойство key 
- React использует key чтобы эффективно сравнивать элементы при обновлении
- Не стоит делать ключи из индексов массива - падает производительность будет заменять элементы по индексу
