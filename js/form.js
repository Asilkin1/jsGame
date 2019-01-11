// form.js
'use strict'

var form = document.querySelector('#form');

var signInForm = document.querySelector('#sign-in-form');
var signUpForm = document.querySelector('#sign-up-form');

var signInLink = document.querySelector('#sign-in-link');
var signUpLink = document.querySelector('#sign-up-link');

signUpLink.addEventListener('click',function(){
    signUpForm.classList.remove('hidden');
    signInForm.classList.add('hidden');
});

signInLink.addEventListener('click',function(){
    signUpForm.classList.add('hidden');
    signInForm.classList.remove('hidden');
    if(signUpForm.classList.contains('hidden')){
        console.log('sign up form is hidden');  
    }
});
