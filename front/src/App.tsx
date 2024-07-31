import './App.css'
import { Route, Routes } from 'react-router-dom'
import UserList from './UserList'
import NoPage from './NoPage'
import UserAdd from './UserAdd'
import NavBar from './NavBar'
import { useContext, useReducer } from 'react'
import { createContext } from 'react'

const initialState = [{ id: 1, name: 'Vadim', lastName: 'Ver', age: 16, height: 186, place: 'Kazan', weight: 65, sex: true }, { id: 2, name: 'Vadimasdf', lastName: 'Ver3333', age: 11, height: 186, place: 'Kazan', weight: 65, sex: false }]

export interface dataTypes {
  id: number,
  name?: string,
  lastName?: string,
  age?: number,
  height?: number,
  place?: string,
  weight?: number,
  sex?: boolean
}
export enum actionsKind {
  ADD = 'ADD',
  DELETE = 'DELETE',
  EDIT = 'EDIT'
}

interface actions {
  type: actionsKind;
  payload?: dataTypes;
}

type ReducerContent = {
  state: dataTypes[],
  dispatch: (action: actions) => any
}

const GlobalReducerContext = createContext<ReducerContent>({
  state: initialState,
  dispatch: () => {}
})

export const useGlobalReducerContext = () => useContext(GlobalReducerContext)

function App() {
    function reducer(state: dataTypes[], action: actions): dataTypes[] {
        const { type, payload } = action
        switch (type) {
            case actionsKind.ADD:
                if (payload) {
                    return state.concat([{ id: Date.now(), name: payload.name, lastName: payload.lastName, age: payload.age, height: payload.height, place: payload.place, weight: payload.weight, sex: payload.sex }])
                }
                break;
            case actionsKind.DELETE:
                if (payload) {
                    return state.filter((e) => e.id !== payload.id)
                }
                break
            case actionsKind.EDIT:
                if (payload) {
                    return state.map((e) => e.id === payload.id ? { ...payload } : e)
                }
                break
            default:
                console.error('undefined reducer action')
        }
        return state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
    <GlobalReducerContext.Provider value={{state, dispatch}}>
      <NavBar/>
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/addUser' element={<UserAdd />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </GlobalReducerContext.Provider>
    </>
  )
}
import 'bootstrap/dist/css/bootstrap.min.css'

export default App
