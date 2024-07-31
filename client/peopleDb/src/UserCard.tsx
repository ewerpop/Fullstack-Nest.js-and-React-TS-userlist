import UserCardContent from './UserCardContent';
import { useState } from 'react';
import UserEdit from './UserEdit';
import { dataTypes } from './App';

interface props {
    user: dataTypes
}

export default function UserCard({user}: props) {
    const [edit, setEdit] = useState<boolean>(false)
    function onClick(): void {
        setEdit((e) => !e)
    }
    if (edit) {
        return (
            <UserEdit user={user} onClick={onClick}/>
        )
    } else {
        return (
            <UserCardContent user={user} onClick={onClick}/>
        )
    }

}