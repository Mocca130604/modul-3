Vue.component('showform', {
    template: '#show-form',
    data(){
        return {
            data: { nama: '', title: '', singer: ''}
        }
    },
    methods: {
        simpan: function() {
            this.$emit('send-data', this.data);
            this.data.nama = "";
            this.data.title = "";
            this.data.singer = "";
        }
    }
})

Vue.component('showdata', {
    template: '#show-data',
    props: ['data']
})

var app = new Vue({
    el: '#app',
    data: {
        biodata: {}
    },
    methods: {
        getData: function (value) {
            this.biodata = {
                nama : value.nama,
                title : value.title,
                singer : value.singer
            }
        }
    }
})
