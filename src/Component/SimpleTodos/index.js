import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]




class SimpleTodos extends Component {
    state = {list:initialTodosList}

    deleteItem = (id) =>{
        console.log(id)
        const {list} = this.state
        const filterList = list.filter((todo)=>todo.id !== id)
        this.setState({list:filterList})
    }
    render() {
        const {list} = this.state 
        return(
            <div className="container">
                <div className='cart'>
                    <h1>Simple Todos</h1>
                    <ul>
                        {list.map((todo)=><TodoItem todo={todo} key={todo.id} deleteItem={this.deleteItem}/>)}
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default SimpleTodos