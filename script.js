console.log('JS OK');
console.log(Vue + "Vue OK");



const app = Vue.createApp({
    data() {
        return{
            mail:''
        }
    },
   
  });
  
  
  app.mount('#root');