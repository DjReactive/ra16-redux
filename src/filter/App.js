import React, { useState, useEffect, useRef } from 'react'
import { fromEvent, debounceTime } from 'rxjs';
import {useSelector, useDispatch} from 'react-redux'
import { filterItems, removeItem } from './actions/actionCreators';
import AddForm from './AddForm';
import logo from '../logo.svg';
import './App.css';

function App() {
  const items = useSelector(state => state.itemsList);
  const dispatch = useDispatch();
  const changeFilter = useRef(null);
  const [filter, setFilter] = useState(items);

  useEffect(() => {
    // Сразу фильтруем всё, как только происходит рендер
    setFilter(inputFilter(items, changeFilter.current.value));

    // Подписка на события input, чтобы получать отфильтрованный список
    fromEvent(changeFilter.current, 'input')
    .pipe(debounceTime(10))
    .subscribe(() => {
      const filter = changeFilter.current.value;
      // Сохраняем локально отфильтрованный список итемов
      setFilter(inputFilter(items, changeFilter.current.value));
    })
  },[items])

  return (
    <div className="content">
      <AddForm />
      <label htmlFor="filter">Фильтр:</label>
      <input type="text" ref={changeFilter} name="filter" placeholder="Поиск..." />
      <Items items={filter} />
    </div>
  )
}

function Items({items}) {
  const dispatch = useDispatch();
  function handleRemove(id) {
    dispatch(removeItem(id));
  }
  return (
    <ol>
      {items.map(o =>
        <li key={o.id}>
          <div className="item">
            {o.name}
            <div className="item__price">
              <span>{o.price}</span>
              <button onClick={() => handleRemove(o.id)}>{`\u{1F5D9}`}</button>
            </div>
          </div>
        </li>
      )}
    </ol>
  )
}

function inputFilter(items, filter = '') {
  return items.filter(item => {
    if (filter.length < 1) return item;
    if ((item.name).toLowerCase().indexOf(filter) >= 0) return item;
  })
}

export default App;
