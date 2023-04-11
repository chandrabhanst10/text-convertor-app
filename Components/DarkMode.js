const DarkMode=(dark)=>{
    if(dark===true){
        document.body.style.color="white"
        document.body.style.background="black"
        
    }else{
        document.body.style.color="black"
        document.body.style.background="white"

    }

}
export default DarkMode;