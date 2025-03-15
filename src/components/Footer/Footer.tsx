import { useState } from 'react';
import { Todo } from '../../types/Todo';
import { Filter } from '../../types/Filter';
import {
  completedTodoId,
  notCompletedTodoCounter,
} from '../../services/todoFunction';

type Props = {
  filterData: (value: Filter) => void;
  todos: Todo[];
  deleteTodos: (ids: number[]) => void;
};

export const Footer: React.FC<Props> = ({ filterData, todos, deleteTodos }) => {
  const [select, setSelect] = useState('All');

  const handleClick = (filter: Filter) => {
    setSelect(filter);
    filterData(filter);
  };

  const completedTodos = completedTodoId(todos);

  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {notCompletedTodoCounter(todos)} items left
      </span>

      {/* Active link should have the 'selected' class */}
      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={`filter__link ${select === 'All' && 'selected'}`}
          data-cy="FilterLinkAll"
          onClick={() => handleClick('All')}
        >
          All
        </a>

        <a
          href="#/active"
          className={`filter__link ${select === 'Active' && 'selected'}`}
          data-cy="FilterLinkActive"
          onClick={() => handleClick('Active')}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={`filter__link ${select === 'Completed' && 'selected'}`}
          data-cy="FilterLinkCompleted"
          onClick={() => handleClick('Completed')}
        >
          Completed
        </a>
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        onClick={() => deleteTodos(completedTodos)}
        disabled={completedTodos.length === 0}
      >
        Clear completed
      </button>
    </footer>
  );
};
