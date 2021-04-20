import { FC } from "react"
import { IUser } from "../types/types"

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <div onClick={() => onClick(user)}>
      <div>{user.id}</div>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.address.city}</div>
    </div>
  )
}

export default UserItem