'use client';
import { useState } from 'react';
import { Button } from 'ui';
import styles from './page.module.css';
const listTodos = [
  {
    id: 1,
    description: 'test',
  },
  {
    id: 2,
    description: 'test2',
  },
  {
    id: 3,
    description: 'test3',
  },
];
export default function Page(): JSX.Element {
  const [todos, setTodos] = useState(listTodos);

  const copyLastTodo = () => {
    const lastTodo = todos[todos.length - 1];
    const newTodo = { ...lastTodo, id: lastTodo.id + 1 };
    setTodos([...todos, newTodo]);
  };
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          examples/basic&nbsp;
          <code className={styles.code}>web</code>
        </p>
        <Button content="click me" onClick={copyLastTodo} />
        {/* show me how to add data test id to the next div */}

        <div role="list" data-testid="list-container">
          {todos.map((todo) => {
            return <div key={todo.id}>{todo.description}</div>;
          })}
        </div>
      </div>
    </main>
  );
}
