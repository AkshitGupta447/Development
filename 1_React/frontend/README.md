# Movie Time
### (React + Vite) 

Learned React concepts 

## 1) Context  (Global State Manager)
Suppose we have a component (Favorite_Movies), that needs to be shown across different pages/components/modules
    To do so, data wouldn't have to travel across different component to reach a single component
    We will have a Gloabal Favorite_movie_list along with its consecuent functions like add/remove/isFavorite that any children can read/write
    Who so ever listened to this global state manager have to update its state

To store data 
    we can either use DB (multi-device-syncing, do when login/register & backend integrated)
    Another way is to store in Local Storage (user harddrive under browser storage)

Now Favorite_Icon & Favorite_Movie_list remains synced across childern pages -> Home and Favorites


## 2) Routing (pages)
Listens to URL and decide which component to show on screen
<Browser Router>-enabling routing, <Routes wrapper> & <Routes path component_to_show/>
SPA (single page application) - swap components gives feel of multiple pages


## 3) UseEffect
React Hook to generate side-effect 
Triggered when a event happens (Count event activated then trigger alert) (First Render => Fetch API)
Side effect fn, Clean Up fn, UseEffect_Activation

useEffect( ()=>{
    side effect fn

    return()=>{
        clean up function
    }
}, [count,total])


## 4) Prop 
It is just properties (parameters) that we are sending to a component (function) and based on this we get a custom result
Provide Resuablitility, Performance & Clarity
One-way flow (parent passes info to children)
<MovieCard  movie={movie} />


## 5) UseState
Gives memeory to component so that it remember the state in re-render
setSate() is asynchronous i.e not immedidatly updated i.e. on next render

const [state, useState] = useState(initialValue)
setValue(newValue)
