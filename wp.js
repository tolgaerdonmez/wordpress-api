Vue.config.devtools = true
// Vue.component('template-list', {
//     props: ['items'],
//     template: '<ul></ul>'
// })
var app = new Vue({
    el:'#app',
    data:{
        info: "info",
        template: null,
        query: '',
    },
    components:{

    },
    methods: {
        async getInfo(query = String()){
            // var query = 'https://api.wordpress.org/themes/info/1.1/?action=theme_information&request[slug]=twentynineteen';
            let data = await fetch(query,{method: 'get'})
                .then((response) => {return response.json()})
                .then((json) => {return json;});
            return data
        },
        async get_info(){
            let data = await this.getInfo(this.query);
            let info = Array();
            Object.keys(data).forEach((key) => {
                const pair = [key,data[key]]
                info.push(pair)
            });
            this.template = info;
        }
    },


})