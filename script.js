console.log('JS OK');
console.log(Vue + "Vue OK");



const app = Vue.createApp({
    data() {
        return{
            mail:''
        }
    },
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            this.mail = response.data.response;
        })
    }
  });
  
  
  app.mount('#root');