import { Fragment } from 'react';
import classes from './AdminPanel.module.css';

const AdminPanel = (props) => {
  return (
    <div className={classes.container}>
      <h1>List of current items</h1>
      <ul className={classes.list}>
        {props.items.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
