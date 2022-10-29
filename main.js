prediction1="";
prediction2="";
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function takesnapshot(){
    Webcam.snap(function(pickurl){
        document.getElementById("result").innerHTML='<img id="captureimage" src="'+pickurl+'"/>';
    });
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/O3B16Yl62/model.json",modelloaded);
function modelloaded()
{
    console.log("model is loaded");
}
function check()
{
    img=document.getElementById("captureimage");
    classifier.classify(img,getresult);
}
