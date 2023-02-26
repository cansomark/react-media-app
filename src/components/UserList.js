import { useEffect, useState } from "react";
import { fetchUsers,addUsers,removeUsers } from "../store";
import { useDispatch, useSelector } from "react-redux";
import AlbumList from "./AlbumList";
import Button from "./Button";
function UserList(){
    const [isLoading,setIsLoading]=useState(false);
    const [error, setError]=useState(null);
    const [creatingUsers,setCreatingUsers]=useState(false);
    const [creatingUsersError,setCreatingUsersError]=useState(null);
    const dispatch=useDispatch();
    const {data}=useSelector((state)=>{
        return state.users;
    })
    useEffect(()=>{
        setIsLoading(true)
        dispatch(fetchUsers())
        .unwrap()
        .catch((err)=>{
            setError(err)
        }).finally(()=>{
            setIsLoading(false)
        })
    
    },[dispatch])

    const handlerAddBtn=()=>{
        setCreatingUsers(true)
        dispatch(addUsers()).unwrap()
        .catch((err)=>{
            setCreatingUsersError(err)
        }).finally(()=>{
            setCreatingUsers(false)
        });
    }

    const handelDeleteUser=(user)=>{
        dispatch(removeUsers(user))
     }
 

    if(isLoading){
        return(
            <div>
                Loading Please Wait!!!!
            </div>
        )
    }

    if(error) {
        return(
            <div>
                Something Went Wrong!!!
            </div>
        )
    }

    return(
        <div>
            <Button onClick={handlerAddBtn}>Add Users</Button>
            {data.map((users)=>{
                return (
                    <div key={users.id}>
                    <div >
                        <Button onClick={()=>handelDeleteUser(users)}>Delete</Button>
                        {users.name}
                    </div>

                    <AlbumList user={users}/>

                    </div>
                    )
            })}
        </div>
    )
}

export default UserList;