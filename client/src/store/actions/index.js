
export const movieData=()=>{
    return{
        type:"MOVIE_DATA",
        payload:{
            id:1,
            name:"Pulp fiction",
            actors:['Travolta',"Thurman"],
            year:1990,
            director:'Tarantino'
        }
    }
}