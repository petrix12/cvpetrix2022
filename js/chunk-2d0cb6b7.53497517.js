(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cb6b7"],{"4a1e":function(e,c,t){"use strict";t.r(c);var a=t("7a23"),o=Object(a["e"])("div",{class:"container"},[Object(a["e"])("h1",null,"Introducir datos")],-1);function n(e,c,t,n,r,s){var i=Object(a["y"])("Destacados");return Object(a["r"])(),Object(a["d"])(a["a"],null,[o,Object(a["h"])(i)],64)}var r={class:"container"},s=Object(a["e"])("h2",null,"Destacados",-1),i={class:"form-group"},d=Object(a["e"])("label",{for:"id"},"Id",-1),l={class:"form-group"},u=Object(a["e"])("label",{for:"icon"},"Icon",-1),b={class:"form-group"},p=Object(a["e"])("label",{for:"descripcion"},"Descripcion",-1),j={class:"form-group"},m=Object(a["e"])("label",{for:"enlace"},"Enlace",-1),O=Object(a["e"])("div",{class:"form-group"},[Object(a["e"])("button",{type:"submit",class:"btn btn-primary"},"Enviar")],-1);function f(e,c,t,o,n,f){return Object(a["r"])(),Object(a["d"])("div",r,[s,Object(a["e"])("form",{onSubmit:c[4]||(c[4]=Object(a["F"])((function(){return f.procesarFormulario&&f.procesarFormulario.apply(f,arguments)}),["prevent"]))},[Object(a["e"])("div",i,[d,Object(a["E"])(Object(a["e"])("input",{type:"number",class:"form-control",id:"id",placeholder:"id","onUpdate:modelValue":c[0]||(c[0]=function(e){return n.destacado.id=e})},null,512),[[a["C"],n.destacado.id]])]),Object(a["e"])("div",l,[u,Object(a["E"])(Object(a["e"])("input",{type:"text",class:"form-control",id:"icon",placeholder:"icon","onUpdate:modelValue":c[1]||(c[1]=function(e){return n.destacado.icon=e})},null,512),[[a["C"],n.destacado.icon]])]),Object(a["e"])("div",b,[p,Object(a["E"])(Object(a["e"])("textarea",{class:"form-control",id:"descripcion",rows:"3","onUpdate:modelValue":c[2]||(c[2]=function(e){return n.destacado.descripcion=e})},null,512),[[a["C"],n.destacado.descripcion]])]),Object(a["e"])("div",j,[m,Object(a["E"])(Object(a["e"])("input",{type:"url",class:"form-control",id:"enlace",placeholder:"enlace","onUpdate:modelValue":c[3]||(c[3]=function(e){return n.destacado.enlace=e})},null,512),[[a["C"],n.destacado.enlace]])]),O],32)])}var v=t("5530"),h=t("5502"),D={name:"Destacados",data:function(){return{destacado:{id:1,icon:"ion-ios-albums",servicio:"Sistema de Historia Clínica o similar",descripcion:"Desarrollo de una aplicación web que permita administrar el historial de los pacientes de un centro de salud.",enlace:"https://github.com/petrix12/Sistema-de-Historia-Cl-nica-en-Laravel"}}},methods:Object(v["a"])(Object(v["a"])({},Object(h["b"])(["setDestacados"])),{},{procesarFormulario:function(){console.log(this.destacado),this.setDestacados(this.destacado)}})},w=t("6b0d"),g=t.n(w);const y=g()(D,[["render",f]]);var C=y,E={name:"Datos",components:{Destacados:C}};const F=g()(E,[["render",n]]);c["default"]=F}}]);
//# sourceMappingURL=chunk-2d0cb6b7.53497517.js.map