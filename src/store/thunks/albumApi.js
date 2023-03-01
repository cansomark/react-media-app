import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";
import { UserListReducer } from "../slices/userSlice";
const albumApi=createApi({
    reducerPath:"Album",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3005"
    }),
    endpoints(builder){
        return{
            addAlbums:builder.mutation({
                // invalidatesTags:(status,error,users)=>{
                //     return [{
                //         type:"AlbumData",
                //         id: users.id
                //     }]
                // },
                invalidatesTags:(status,error,users)=>{
                    return[{type:"Albums",id:users.id}]
                },
                query:(user)=>{
                    return{
                        url:"/albums",
                        method:"POST",
                        body:{
                            userId:user.id,
                            title: faker.commerce.productName()
                        }
                    }
                }
            }),
            fetchAlbums:builder.query({
                // providesTags:(results,error,user)=>{
                //     console.log(results)
                //     const tags=results.map((albumsData)=>{
                //         return {
                //             type:"Album",
                //             id:albumsData.id
                //         }
                //     });
                //     tags.push({type:"AlbumData", id:user.id})
                //     return tags
                    
                // },
                providesTags:(status,error,users)=>{
                    return [{
                        type:"Albums",
                        id:users.id
    
                    }]
                },
                query:(users)=>{
                    return {
                        url:"/albums",
                        params:{
                            userId:users.id
                        },
                        method:"GET"
                    }
                }
            }),

            removeAlbum:builder.mutation({  
                // invalidatesTags:(status,error,album)=>{
                //     return [{
                //         type:"Album",
                //         id:album.id
                //     }]
                // },
                invalidatesTags:(status,error,users)=> {
                    return [{

                        type:"Albums",
                        id:users.userId
                    }]
                },
                query:(album)=>{                               
                    return {                        
                        url:`/albums/${album.id}`,
                        method:"DELETE"
                    }
                   
                }
            })
        }
    }
})


export const {useFetchAlbumsQuery, useAddAlbumsMutation, useRemoveAlbumMutation}=albumApi;
export {albumApi};