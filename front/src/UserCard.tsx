import UserCardContent from './UserCardContent';
import { useState } from 'react';
import UserEdit from './UserEdit';
import { dataTypes } from './App';

interface props {
    user: dataTypes,
    handleClick?: () => void
}

export default function UserCard({ user, handleClick }: props) {
    const [edit, setEdit] = useState<boolean>(false)
    function onClick(action: boolean): void {
        if (action && handleClick) {
            handleClick()
        }
        setEdit((e) => !e)
    }
    if (edit) {
        return (
            <UserEdit user={user} onClick={onClick} />
        )
    } else {
        return (
            <UserCardContent user={user} onClick={onClick} />
        )
    }

}