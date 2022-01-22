const imageUrlE1=document.getElementById("image-url");
const imageSrcE1=document.getElementById("image");

const initialC=document.getElementById("initial");

const imageC=document.getElementById("image-container");

const getImage  = () =>{
    const imageUrl = imageUrlE1.value;
    imageSrcE1.setAttribute("src" , imageUrl);
    initialC.style.display ="none";
    imageC.style.display="flex";
    imageUrlE1.value=" ";

}

const closeImage= () =>{
    const initialC= document.getElementById("initial");
    const imageC =document.getElementById("image-container");
    initialC.style.display="flex";
    imageC.style.display="none";
}
const toggleMode =() =>{
    const bodyE1=document.getElementsByTagName("body")[0];
    bodyE1.classList.toggle("dark");
    
}


