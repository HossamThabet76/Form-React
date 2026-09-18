export default function Submit(){
    return(
        <>
            <div className="container" onClick={()=>{
                document.querySelector('.container').style.display='none'
                document.querySelector('.message').style.display='none'
            }}></div>
            <h1 className="message">The Form Has Been Submitted Successfully</h1>
        </>
    )
}