import UserCard from "./UserCard"  
import { useGlobalReducerContext } from "./App";

export default function UserList() {
    // const initialState = [{ id: 1, name: 'Vadim', lastName: 'Ver', age: 16, height: 186, place: 'Kazan', weight: 65 }, { id: 1, name: 'Vadimasdf', lastName: 'Ver3333', age: 11, height: 186, place: 'Kazan', weight: 65 }]
    // enum actionsKind {
    //     ADD = 'ADD',
    //     DELETE = 'DELETE',
    //     EDIT = 'EDIT'
    // }
    // interface dataTypes {
    //     id: number,
    //     name: string,
    //     lastName: string,
    //     age: number,
    //     height: number,
    //     place: string,
    //     weight: number
    // }

    // interface actions {
    //     type: actionsKind;
    //     payload?: dataTypes;
    // }

    // function reducer(state: dataTypes[], action: actions): dataTypes[] {
    //     const { type, payload } = action
    //     switch (type) {
    //         case actionsKind.ADD:
    //             if (payload) {
    //                 return state.concat([{ id: Date.now(), name: payload.name, lastName: payload.lastName, age: payload.age, height: payload.height, place: payload.place, weight: payload.weight }])
    //             }
    //             break;
    //         case actionsKind.DELETE:
    //             if (payload) {
    //                 return state.filter((e) => e.id !== payload.id)
    //             }
    //             break
    //         case actionsKind.EDIT:
    //             if (payload) {
    //                 return state.map((e) => e.id === payload.id ? { ...e, ...payload } : e)
    //             }
    //             break
    //         default:
    //             console.error('undefined reducer action')
    //     }
    //     return state
    // }

    // const [state, dispatch] = useReducer(reducer, initialState)

    const {state} = useGlobalReducerContext()

    return (
        <main className="main">
            <ul>
            {state.map((e) => {
                return (
                    <li key={e.id}>
                        <UserCard user={e}/>
                    </li>
                )
            })
            }
            </ul>
        </main>

    )
}