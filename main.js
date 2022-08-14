Webcam .set({
width:350,height:350,image_format:'png',png_quality:90
});
camera=document.getElementById("camera");
Webcam .attach('#camera');
function kiiich(){
Webcam .snap(function(data_uri){
document.getElementById("Display").innerHTML='<img id="I1" src="'+data_uri+'"/>';
}
);
}
console.log('ml5 version:',ml5.version);
mymodel=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/EI3HdWEDp/model.json',modelLoaded);
function modelLoaded(){
console.log("my model is loaded")


}
function check(){
Im=document.getElementById("I1");
mymodel.classify(Im,gotResult);
}
function speak(){
api=window.speechSynthesis;
p1="Your first prediction is"+pred1;
p2="And your second prediction is"+pred2;
ut=new SpeechSynthesisUtterance(p1+p2);
api.speak(ut);
}
function gotResult(error,results){
if(error){
console.log (error);

}
else{
console.log (results);
document.getElementById ("em1").innerHTML=results[0].label;
document.getElementById ("em2").innerHTML=results[1].label;
pred1=results[0].label;
pred2=results[1].label;
speak();
if(results[0].label=="Happy"){
document.getElementById("ej1").innerHTML="&#128522;";
}
if(results[0].label=="Sad"){
    document.getElementById("ej1").innerHTML="&#128532;";
    }
    if(results[0].label=="Angry"){
        document.getElementById("ej1").innerHTML="&#128545;";
        }
        if(results[0].label=="Sleepy"){
            document.getElementById("ej1").innerHTML="&#128564;";
            }
            if(results[0].label=="Surprise"){
                document.getElementById("ej1").innerHTML="&#128558;";
                } 
            
                if(results[1].label=="Happy"){
                    document.getElementById("ej2").innerHTML="&#128522;";
                    }
                    if(results[1].label=="Sad"){
                        document.getElementById("ej2").innerHTML="&#128532;";
                        }
                        if(results[1].label=="Angry"){
                            document.getElementById("ej2").innerHTML="&#128545;";
                            }
                            if(results[1].label=="Sleepy"){
                                document.getElementById("ej2").innerHTML="&#128564;";
                                }
                                if(results[1].label=="Surprise"){
                                    document.getElementById("ej2").innerHTML="&#128558;";
                                    }          
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            

                    
    






}

















}









