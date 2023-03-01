import { useFetchAlbumsQuery,useAddAlbumsMutation,useRemoveAlbumMutation } from "../store";
import Button from "./Button"
function AlbumList({user}) {
    const {data,isLoading,error}=useFetchAlbumsQuery(user);  
    const [addAlbumsItem, results]=useAddAlbumsMutation();
    const [removeData,resultsData]=useRemoveAlbumMutation();
   
    const handelAddHobby=()=>{
        addAlbumsItem(user)
    }
    const handelDelete=(hobby)=>{        
        removeData(hobby)
    }
    return(
        <>
        <div>
            hi {user.name}
        </div>
        { !isLoading && !error && data.map((hobby)=>  
            <>          
             <span key={hobby.id} id={hobby.id}>{hobby.title}</span> 
             <Button onClick={()=>handelDelete(hobby)} id={hobby.id}>Delete</Button>   
             </>       
        )}
          <Button onClick={handelAddHobby}>Add hobby</Button> 
        </>
    )
}

export default AlbumList;