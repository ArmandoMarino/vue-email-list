console.log('JS OK');
console.log(Vue + "Vue OK");



const app = Vue.createApp({
    data() {
        return{
            mails: [],
            isLoading : false,
        }
    },
    methods:{
        getRandomMail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            this.mails.push(response.data.response);
        })
        }
    },
    mounted(){
        for(let i = 0; i < 5; i++){
          this.getRandomMail();  
        }
    }
  });
  
  
  app.mount('#root');