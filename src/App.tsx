/**
 * Main App component.
 */
import type { FC } from 'react';

const App: FC = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <section>
        <h2>Create Todo</h2>
        {/* Example form for creating todos */}
        <form>
          <input type="text" placeholder="Add a todo" />
          <button type="submit">Add</button>
        </form>
      </section>
      <section>
        <h2>Filters</h2>
        {/* Example filter buttons */}
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </section>
      <section>
        <h2>Todo List</h2>
        <ul>
          <li>Test Todo</li>
        </ul>
      </section>
    </div>
  );
};

export default App;