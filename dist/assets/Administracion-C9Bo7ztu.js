import{_ as c,c as r,a as e,t as l,F as u,r as C,n as g,e as m,o as a}from"./index-BaeDKnhf.js";const h={props:{estaRegistradoAdministracion:{type:Boolean,required:!0},arrLikes:{type:Array,required:!0},arrJuegos:{type:Array,required:!0}},data(){return{titulo:"Este es el componente Administracion",arrNombreJuegos:[],cantidadCoins:0,claseCoins:"",claseColorBarra:""}},methods:{incrementarCoins(){this.cantidadCoins<100&&(this.cantidadCoins=this.cantidadCoins+2,console.log(this.cantidadCoins),this.claseCoins=`width: ${this.cantidadCoins}%`,console.log(this.claseCoins),this.cantidadCoins<=20?this.claseColorBarra="progress-bar bg-success":this.cantidadCoins>20&&this.cantidadCoins<=30?this.claseColorBarra="progress-bar bg-warning":this.claseColorBarra="progress-bar bg-danger")}},computed:{cantidadLikes(){let n=0;for(let s=0;s<this.arrLikes.length;s++)this.arrLikes[s]==!0&&(n=n+1,this.arrNombreJuegos.push(this.arrJuegos[s].name));return n}}},p={id:"divAdministracion"},b=["innerHTML"],v={key:0},A={id:"divCompraCoins"},_=["aria-valuenow"],k={key:1};function f(n,s,d,L,i,o){return a(),r("div",p,[e("h1",{innerHTML:i.titulo},null,8,b),d.estaRegistradoAdministracion?(a(),r("div",v,[s[3]||(s[3]=e("h1",{class:"registrado"},"AQUI TODO EL COMPONENTE DE ADMINISTRACION",-1)),e("h1",null,"Usted ha dado esta cantidad de likes: "+l(o.cantidadLikes),1),e("ul",null,[(a(!0),r(u,null,C(i.arrNombreJuegos,t=>(a(),r("li",null,"Le diste me gusta al Juego: "+l(t),1))),256))]),e("div",A,[s[1]||(s[1]=e("p",null,"¿Deseas Comprar Coins para los Juegos?",-1)),e("button",{class:"btn btn-warning",onClick:s[0]||(s[0]=(...t)=>o.incrementarCoins&&o.incrementarCoins(...t))},"Agregar Coins"),s[2]||(s[2]=e("hr",null,null,-1)),e("div",{class:"progress",role:"progressbar","aria-label":"Basic example","aria-valuenow":i.cantidadCoins,"aria-valuemin":"0","aria-valuemax":"100"},[e("div",{class:g(i.claseColorBarra),style:m(i.claseCoins)},null,6)],8,_)])])):(a(),r("div",k,s[4]||(s[4]=[e("h1",{class:"noRegistrado"},"USTED NO ESTA REGISTRADO",-1)])))])}const B=c(h,[["render",f],["__scopeId","data-v-1deba185"]]);export{B as default};
