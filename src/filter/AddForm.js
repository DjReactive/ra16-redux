import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addItem } from './actions/actionCreators';

function AddForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({name: '', price: ''});
  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(addItem(form.name, Number(form.price)));
  }
  function handleChange(evt) {
    setForm(prev => ({ ...prev, [evt.target.name]: evt.target.value }));
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="Название"
        defaultValue={form.name}
        required />
      <input
        type="text"
        name="price"
        onChange={handleChange}
        placeholder="Стоимость"
        defaultValue={form.price}
        required />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddForm;
