/*获取dom结点*/
var maskWrapper=document.getElementById("mask-wrapper"),
    closeButton=document.getElementById("close-button"),
    // determineButton=document.getElementById("determine-button"),
    // cancelButton=document.getElementById("cancel-button"),
    mask=document.getElementById("mask"),
    login=document.getElementById("login");

/*初始遮罩层关闭*/
maskWrapper.style.display="none";
mask.style.display="none";

/*点击登陆显示遮罩层*/
function showMaskPage() {
    maskWrapper.style.display = "block";
    mask.style.display = "block";
}
login.onclick=showMaskPage;

/*点击遮罩层或者X按钮关闭*/
function closeMask() {
    maskWrapper.style.display="none";
    mask.style.display="none";
}
closeButton.onclick=closeMask;
mask.onclick=closeMask;