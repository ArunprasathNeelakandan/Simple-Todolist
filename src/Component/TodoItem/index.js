import './index.css'

const TodoItem =(props) =>{
    const {todo,deleteItem} = props
    console.log(deleteItem)
    const deleted = () => {
        deleteItem(todo.id)
    }

    return <li className='todo-item'>
                <p>{todo.title}</p>
                <button className='delete-button' onClick={deleted}>Delete</button>
            </li>

}

export default TodoItem