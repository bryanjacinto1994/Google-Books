import React from "react";

const styles ={
    jumbotron:{
        borderRadius: 20,
        backgroundImage: "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a5d2baa3-9fa5-485f-bd73-b2235d902157/d9ykudz-b66ccb0f-f25e-41c5-a2ba-98ce7c6458d4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1ZDJiYWEzLTlmYTUtNDg1Zi1iZDczLWIyMjM1ZDkwMjE1N1wvZDl5a3Vkei1iNjZjY2IwZi1mMjVlLTQxYzUtYTJiYS05OGNlN2M2NDU4ZDQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wibw9ZLlc-fFo2muHWQCKHyeYzaTvYU7w_0ZO1eSO9U')",
        height: 200,
       
        

    }
}
function Jumbotron() {
    return (
        <div class="container" >
    <div className='jumbotron jumbotron-fluid bg-secondary text-white' style={styles.jumbotron}>
        <span className='display-2'>
            
        </span>
        <span className='lead'> 
            
        </span></div>
    </div>
    )
}

export default Jumbotron;