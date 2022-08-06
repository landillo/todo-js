
import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHTML } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHTML( todo ));

// todoList.todos.forEach( crearTodoHTML ); cuando se manda un solo argumento a la funcion
// se puede quitar la flecha y el nombre del argumento, asi como se muestra al principio, si 
// lleva mas de un argumento no funciinaria el codigo
