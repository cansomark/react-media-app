import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";
const albumApi=createApi({
    reducerPath:"Album",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3005"
    }),
    endpoints(builder){
        return{
            addAlbums:builder.mutation({
                invalidatesTags:(status,error,users)=>{
                    return [{
                        type:"Albums",
                        id: users.id
                    }]
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
                providesTags:(status,error,users)=>{
                    return [{
                        type:"Albums",
                        id: users.id
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
            })
        }
    }
})


export const {useFetchAlbumsQuery, useAddAlbumsMutation}=albumApi;
export {albumApi};