const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const resetBtn = document.getElementById("resetBtn");
const mainElement = document.querySelector("main");


const setValues = (fontSize, bgColor) => {
        selectFontSize.value = fontSize;
        selectBgColor.value = bgColor;
        mainElement.style.fontSize = fontSize;
        mainElement.style.backgroundColor = bgColor;
}


// load LocalStorage Value
const initialSetup = () => {
   const bgColor = localStorage.getItem("bgColor");
   const fontSize = localStorage.getItem("fontSize");

   if(bgColor && fontSize){
       setValues(fontSize, bgColor)
   }
   if(!bgColor && !fontSize){
    setValues("16px", "aqua");
   }
   if(!bgColor && fontSize){
    setValues(fontSize, "aqua");
   }
   if(bgColor && !fontSize){
    setValues("16px", backgroundColor);
   }
}

// changeFont Size
const changeFontSize = (event) => {

    const selectedFontSize = event.target.value;
    mainElement.style.fontSize = selectedFontSize;
    localStorage.setItem("fontSize", selectedFontSize)
}
// changeBgColor
const changeBgColor = (event) => {

    const selectedBgColor = event.target.value;
    mainElement.style.backgroundColor = selectedBgColor;
    localStorage.setItem("bgColor", selectedBgColor);
    
}
// clearLocalStorage
const clearLocalStorage = () => {
    localStorage.removeItem("bgColor");
    localStorage.removeItem("fontSize");
    setValues("16px", "aqua");
};

// add event listener
selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change", changeBgColor);
resetBtn.addEventListener("click", clearLocalStorage);

initialSetup();