import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { removeService, addService, editService, saveService } from './actions/actionCreators';
import logo from '../logo.svg';
import './App.css';
import { services } from './defines'

function App() {
  const [edit, setEdit] = useState({edit: false});
  return (
    <div className="content">
      <ServiceAdd editItem={edit} setEdit={setEdit} />
      <ServiceList editItem={edit} setEdit={setEdit} />
    </div>
  );
}

function ServiceList({editItem, setEdit}) {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();
  const handleEdit = service => {
    dispatch(editService(service));
    setEdit({ id: service.id, edit: true });
  }
  const handleRemove = id => {
    if (id === editItem.id) setEdit({ edit: false });
    dispatch(removeService(id));
  }
  return (
    <ul>
      {items.map(o =>
        <li key={o.id} className={editItem.id === o.id ? 'edit' : null}>
          {o.name} {o.price}
          <button onClick={() => handleEdit(o)}>{`\u{270E}`}</button>
          <button onClick={() => handleRemove(o.id)}>{`\u{1F5D9}`}</button>
        </li>
      )}
    </ul>
  )
}

function ServiceAdd({editItem, setEdit}) {
  const item = useSelector(state => editItem.edit ? state.serviceEdit : state.serviceAdd);
  const [form, setForm] = useState(item);
  useEffect(() => setForm(item), [editItem.edit]);
  const dispatch = useDispatch();
  const handleChange = evt => {
    const {name, value} = evt.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }
  const handleSubmit = evt => {
    evt.preventDefault();
    if (editItem.edit) {
      dispatch(saveService(item.id, form.name, form.price));
      setEdit({ edit: false });
    } else {
      dispatch(addService(form.name, form.price));
    }
    setForm(item);
    evt.target.reset();
  }
  const handleCancel = evt => {
    setEdit({ edit: false });
    setForm(item);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} defaultValue={form.name} required />
      <input name="price" onChange={handleChange} defaultValue={form.price} required />
      <button type="submit">Save</button>
      { editItem.edit && <button onClick={handleCancel}>Cancel</button> }
    </form>
  )
}

export default App;
