import{G as p}from"./fetchAPI-5c186b9d.js";import{_ as v,r as m,o as s,c as a,F as d,b as l,d as u,e as t,n as h,t as n,f as r,p as f,g as k,a as g}from"./index-1a311521.js";const y=o=>(f("data-v-9d531fc5"),o=o(),k(),o),S={class:"container"},w={key:0,class:"skeleton"},x=g('<div class="skeletonFigure" data-v-9d531fc5></div><div class="details" data-v-9d531fc5><p class="topicSkeleton" data-v-9d531fc5></p></div><h3 class="titleSkeleton" data-v-9d531fc5></h3><p class="previewSkeleton" data-v-9d531fc5></p><p class="previewSkeleton" data-v-9d531fc5></p>',5),b=[x],A=["href"],D={class:"animeDetails"},I={style:{"margin-bottom":"10px"}},N={style:{"margin-bottom":"10px"}},V=y(()=>t("br",null,null,-1)),B={class:"animeTitle"},C={class:"animePreview"},F={__name:"Anime",setup(o){const c=m([]),_="/animenewsnetwork/data";return(async()=>{let i=await p.doAjax(_);i&&(c.value=i)})(),(i,P)=>(s(),a("div",S,[c.value.length==0?(s(),a("div",w,[(s(),a(d,null,l(6,e=>t("div",{class:"cards",key:e},b)),64))])):u("",!0),(s(!0),a(d,null,l(c.value,(e,$)=>(s(),a("div",{class:"animeCards",key:e.id},[t("a",{href:e.link,target:"_blank"},[t("div",{class:"animeCover",style:h({background:`url(${e.img}) no-repeat center`,backgroundPosition:`${e.imgStyle}`})},null,4),t("div",D,[t("p",I,[t("time",N,n(e.datetime),1),r(),V,r(" Topic:"+n(e.topic),1)])]),t("h3",B,n(e.title),1),t("div",C,n(e.preview),1)],8,A)]))),128))]))}},E=v(F,[["__scopeId","data-v-9d531fc5"]]);export{E as default};
