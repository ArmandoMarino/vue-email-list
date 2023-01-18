console.log('JS OK');
console.log(Vue + "Vue OK");



const app = Vue.createApp({
    data() {
        return{
            mails: [],
            isLoading : false,
        }
    },
    // METODO CHE MI RECUPERA L'API DELLA SINGOLA MAIL
    methods:{
        getRandomMail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            this.mails.push(response.data.response);
        })
        }
    },
    // FUNZIONE RICHIAMATA ALLA PAGINA MONTATA PER 5 VOLTE
    mounted(){
        for(let i = 0; i < 5; i++){
          this.getRandomMail();  
        }
    }
  });
  
  
  app.mount('#root');