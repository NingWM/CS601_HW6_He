// app for nav menu
const app = Vue.createApp({
    data() {
        return {
            pics: [
                {id:'pic1', before: './images/before1.JPG', after: './images/after1.JPG', current: './images/before1.JPG', cls: 'before'},
                {id:'pic2', before: './images/before2.JPG', after: './images/after2.JPG', current: './images/before2.JPG', cls: 'before'},
                {id:'pic3', before: './images/before3.JPG', after: './images/after3.JPG', current: './images/before3.JPG', cls: 'before'},
                {id:'pic4', before: './images/before4.JPG', after: './images/after4.JPG', current: './images/before4.JPG', cls: 'before'},
                {id:'pic5', before: './images/before5.JPG', after: './images/after5.JPG', current: './images/before5.JPG', cls: 'before'},
                {id:'pic6', before: './images/before6.JPG', after: './images/after6.JPG', current: './images/before6.JPG', cls: 'before'}
            ],
            hoverCount: 0
        }
    },
    methods: {
        mouseover(id) {
            const activPic = this.pics.find(pic => pic.id === id);
            activPic.current = activPic.after;
            activPic.cls = 'after';
            this.hoverCount++;
        },  
        mouseleave(id){
            const activPic = this.pics.find(pic => pic.id === id);
            activPic.current = activPic.before;
            activPic.cls = 'before';
        }
    }
}).mount('#pics');