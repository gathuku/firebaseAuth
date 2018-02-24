(function(){



    //get for elements
    const txtemail=document.getElementById('txtEmail');
    const txtpass=document.getElementById('txtPass');
    const btnlogin=document.getElementById('btnlogin');
    const btnsignup=document.getElementById('btnsignup');
    const logout=document.getElementById('logout');


    //Add login Event

    btnlogin.addEventListener('click', e=>{
        const email=txtemail.value;
        const pass=txtpass.value;
        const auth=firebase.auth();

        //sign in
       const promise= auth.signInWithEmailAndPassword(email,pass);
       promise.catch(e=>console.log(e.message));
     
    });

    
    //Add sign up Event
    btnsignup.addEventListener('click', e=>{
        const email=txtemail.value;
        const pass=txtpass.value;
        const auth=firebase.auth();

        //sign up
       const promise= auth.createUserWithEmailAndPassword(email,pass);
       promise.catch(e=>console.log(e.message));
  
       
    });

    //real time listener

 firebase.auth().onAuthStateChanged(firebaseUser=>{
   if(firebaseUser){
       console.log(firebaseUser);
       btnlogout.classList.remove('w3-hide');
   }else {
       console.log('Not Logged in buddy');
   }

    });

    btnlogout.addEventListener('click',e=>{
        firebase.auth().signOut();
    });

 

}());


