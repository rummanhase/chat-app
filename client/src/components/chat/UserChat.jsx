import { Stack } from "react-bootstrap"
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient"
import "../../index.css"
import avatar from "../../assets/profile.svg"

function UserChat({chat , user}) {

    const { recipientUser } = useFetchRecipientUser( chat , user )
    console.log(recipientUser)
  return (
    <Stack direction="horizontal" gap={3} className="user-card align-items-center p-1 justify-content-between" role="button">
        <div className="d-flex">
            <div className="me-2">
               <img src={avatar} alt="" height="35px"/>
            </div>
            <div className="text-content">
                <div className="name">{recipientUser?.name}</div>
                <div className="text">Text message</div>
            </div>
        </div>
        <div className="d-flex flex-column align-items-end">
            <div className="date">12/12/2022</div>
            <div className="this-user-notifications">2</div>
            <div className="user-online"></div>
        </div>
    </Stack>
  )
}

export default UserChat