var config = {
    apiKey: "-----APIKEY-----",
    authDomain: "datasheet-116f3.firebaseapp.com",
    databaseURL: "https://datasheet-116f3-default-rtdb.firebaseio.com",
    projectId: "datasheet-116f3",
    storageBucket: "datasheet-116f3.appspot.com",
    messagingSenderId: "---SENDERID---",
    appId: "-----APPID-----"
};
firebase.initializeApp(config);
firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name=getInputVal('name');
  var father=getInputVal('father');
  var gender=getInputVal('gender');
  var mother=getInputVal('mother');
  var marital=getInputVal('marital');
  var spouse=getInputVal('spouse');
  var addrpre=getInputVal('addrpre');
  var addrper=getInputVal('addrper');
  var email=getInputVal('email');
  var phone= getInputVal('phone');
  var dob=getInputVal('dob');
  var birthpl=getInputVal('birthpl');
  var nname1=getInputVal('nname1');
  var per1=getInputVal('per1');
  var rel1=getInputVal('rel1');
  var age1=getInputVal('age1');
  var nname2=getInputVal('nname2');
  var per2=getInputVal('per2');
  var rel2=getInputVal('rel2');
  var age2=getInputVal('age2');
  var bankname=getInputVal('bankname');
  var accno=getInputVal('accno');
  var ifsc=getInputVal('ifsc');
  var micr=getInputVal('micr');
  var acctyp=getInputVal('acctyp');

  // Save message
  saveMessage(name,father,gender,mother,marital,spouse,addrpre,addrper,email,phone,dob,birthpl,nname1,per1,rel1,age1,nname2,per2,rel2,age2,bankname,accno,ifsc,micr,acctyp);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();

}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name,father,gender,mother,marital,spouse,addrpre,addrper,email,phone,dob,birthpl,nname1,per1,rel1,age1,nname2,per2,rel2,age2,bankname,accno,ifsc,micr,acctyp)
{
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    father:father,
    gender:gender,
    mother:mother,
    marital:marital,
    spouse:spouse,
    addrpre:addrpre,
    addrper:addrper,
    email:email,
    phone:phone,
    dob:dob,
    birthpl:birthpl,
    nname1:nname1,
    per1:per1,
    rel1:rel1,
    age1:age1,
    nname2:nname2,
    per2:per2,
    rel2:rel2,
    age2:age2,
    bankname:bankname,
    accno:accno,
    ifsc:ifsc,
    micr:micr,
    acctyp:acctyp
  });
  uploadImage();
}

function uploadImage() {

  const ref = firebase.storage().ref();
  const file = document.querySelector("#photo").files[0];
  const name = +new Date() + "_" + file.name;
  const metadata = {
    contentType: file.type
  };
  const task = ref.child(name).put(file, metadata);
  task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
      console.log(url);
      document.querySelector("#image").src = url;
    })
    .catch(console.error);
}

function showalert()
{
  alert("Click Ok to submit the form.");
}

function showalertfile()
{
  alert("Click Ok to upload your file.");
}

