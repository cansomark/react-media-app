import { useFetchAlbumsQuery,useAddAlbumsMutation } from "../store";
import Button from "./Button"
function AlbumList({user}) {
    const {data,isLoading,error}=useFetchAlbumsQuery(user);  
    const [addAlbums, results]=useAddAlbumsMutation();
    console.log(results)
    const handelAddHobby=()=>{
        addAlbums(user)
    }
    return(
        <>
        <div>
            hi {user.name}
        </div>
        { !isLoading && !error && data.map((hobby)=>            
             <span key={hobby.id}>{hobby.title}</span>           
        )}
          <Button onClick={handelAddHobby}>Add hobby</Button> 
        </>
    )
}

export default AlbumList;