

camera = document.getElementById("camera");
Webcam.attach( camera );      
  Webcam.set({
    width:350,
    height:300,
    image_format : 'jpg',
    png_quality:90
  });

var i=1;
function take_snapshot()
{
  Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML='<img id="capturedimg" src="'+data_uri+'">';

  });
  
  
}
console.log('ml5 version:',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/grX5_fBD0/model.json', modelLoaded);
function modelLoaded() {
    console.log("modelLoaded");
}
function check(){
  img=document.getElementById("capturedimg");
  classifier.classify(img,gotresult);
}function gotresult(error,results) {
  if (error) {
    console.error(error);

  }
  else{
    console.log(results);
  }
  document.getElementById("result_object_name").innerHTML=results[0].label;
  document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(4);
}