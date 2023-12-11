// app for nav menu
const app = Vue.createApp({
    data() {
        return {
            pics: [
                {id:'pic1', before: './images/before1.JPG', after: './images/after1.JPG', current: './images/after1.JPG', cls: 'after'},
                {id:'pic2', before: './images/before2.JPG', after: './images/after2.JPG', current: './images/after2.JPG', cls: 'after'},
                {id:'pic3', before: './images/before3.JPG', after: './images/after3.JPG', current: './images/after3.JPG', cls: 'after'},
                {id:'pic4', before: './images/before4.JPG', after: './images/after4.JPG', current: './images/after4.JPG', cls: 'after'},
                {id:'pic5', before: './images/before5.JPG', after: './images/after5.JPG', current: './images/after5.JPG', cls: 'after'},
                {id:'pic6', before: './images/before6.JPG', after: './images/after6.JPG', current: './images/after6.JPG', cls: 'after'}
            ],
            hoverCount: 0
        }
    },
    methods: {
        mouseover(id) {
            const activPic = this.pics.find(pic => pic.id === id);
            activPic.current = activPic.before;
            activPic.cls = 'before';
            this.hoverCount++;
        },  
        mouseleave(id){
            const activPic = this.pics.find(pic => pic.id === id);
            activPic.current = activPic.after;
            activPic.cls = 'after';
        }
    }
}).mount('#pics');