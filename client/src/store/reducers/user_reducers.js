const DEFAULT_STORE={
    data:"Not yet available"
}

export default function(state=DEFAULT_STORE,action){
    switch(action.type){
        case "MOVIE_DATA":
            return{...state,
                movieData:action.payload}
        default:
            return state    
    }
}