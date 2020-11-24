Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function takePhoto()
{
    Webcam.snap(function(data_uri)
        {
            document.getElementById("result").innerHTML='<img id="capture"src="'+data_uri+'"/>';
        }
        );
}
console.log("ml5 version: "+ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/nPFHuF2-2/model.json',modelLoaded);
function modelLoaded()
{
    console.log("model has loaded");
}
function check()
{
    img=document.getElementById("capture");
    classifier.classify(img,gotResult);
}
function gotResult(error,results)
{
    if(error)
    {
        console.error(error);
    }else{
        console.log(results);
document.getElementById("emotion_name").innerHTML=results[0].label;
document.getElementById("emotion_name2").innerHTML=reults[1].label;


















    }
}
