"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[355],{3355:function(c,t,e){e.r(t),e.d(t,{default:function(){return B}});var r=e(6252),o=e(3577);const s={class:"cat"},a={class:"container"},d=(0,r._)("h2",{class:"cat__h"},"Биография",-1),l={class:"main__wrap"},u=["onClick"],n={class:"product__wrap"},i=["src"],p={class:"product__desc"},_={class:"product__h"},g={class:"product__price"},h={key:0,class:"loading-overlay"},y=(0,r._)("div",{class:"loading-circle"},null,-1),v=[y];function k(c,t,e,y,k,w){const P=(0,r.up)("Product");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("section",s,[(0,r._)("div",a,[d,(0,r._)("div",l,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.productsByCategory.biography,(c=>((0,r.wg)(),(0,r.iD)("div",{class:"product",key:c.id,onClick:t=>w.showProductDetails(c)},[(0,r._)("div",n,[(0,r._)("img",{src:w.convertImageUrl(c.image.url),alt:"",class:"product__img"},null,8,i),(0,r._)("div",p,[(0,r._)("h1",_,(0,o.zw)(c.name),1),(0,r._)("h1",g,(0,o.zw)(c.price.formatted)+"0 Сум",1)])])],8,u)))),128))]),c.loading?((0,r.wg)(),(0,r.iD)("div",h,v)):(0,r.kq)("",!0)])]),c.selectedProduct?((0,r.wg)(),(0,r.j4)(P,{key:0,product:c.selectedProduct,onBack:c.clearSelectedProduct},null,8,["product","onBack"])):(0,r.kq)("",!0)],64)}var w=e(6514),P=e(3907),m={components:{Product:w.Z},computed:{...(0,P.rn)(["productsByCategory","selectedProduct","loading"])},methods:{...(0,P.nv)(["fetchProductsByCategory","clearSelectedProduct","selectProduct"]),showProductDetails(c){this.selectProduct(c)},convertImageUrl(c){return c.replace(/\|/g,"%7C")}},created(){this.fetchProductsByCategory({categoryId:"biography"})}},f=e(3744);const C=(0,f.Z)(m,[["render",k]]);var B=C}}]);
//# sourceMappingURL=355.5e21a170.js.map