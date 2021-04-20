import Card, { CardVariant } from "./components/Card"
// import UserList from "./components/UserList"
import EventsExample from './components/EventsExample'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import UsersPage from './components/UsersPage'
import TodosPage from './components/TodosPage'
import UserItemPage from './components/UserItemPage'

const App = () => {
  return (
    <BrowserRouter>
      {/* <EventsExample />
      <Card width='200px' height='200px' variant={CardVariant.primary} onClick={(num) => console.log('click', num)}>
        <button>button</button>
        <div>div</div>
      </Card > */}
      {/* <UserList users={users} /> */}
      <div>
        <div><Link to={'/users'}>Users</Link></div>
        <div><Link to={'/todos'}>Todos</Link></div>
      </div>
      <Route path={'/users'} exact>
        <UsersPage />
      </Route>
      <Route path={'/todos'} exact>
        <TodosPage />
      </Route>
      <Route path={'/users/:id'}>
        <UserItemPage />
      </Route>
      {/* <Route path={'/todos/:id'}>
        <TodoItemPage />
      </Route> */}
    </BrowserRouter>
  )
}

export default App