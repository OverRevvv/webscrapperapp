import{G as _}from"./fetchAPI-5c186b9d.js";import{_ as v,r as b,o as s,c as a,F as n,b as i,d as p,e,t as l,a as h}from"./index-1a311521.js";const u={class:"container"},f={key:0,class:"skeleton"},k=h('<div class="skeletonFigure" data-v-b371b9bf></div><div class="details" data-v-b371b9bf><p class="topicSkeleton" data-v-b371b9bf></p></div><h3 class="titleSkeleton" data-v-b371b9bf></h3><p class="previewSkeleton" data-v-b371b9bf></p><p class="previewSkeleton" data-v-b371b9bf></p>',5),m=[k],g=["href"],y={class:"techCover"},S=["src"],T={class:"details"},x=["innerHTML"],w={class:"title"},L={class:"preview"},B={__name:"Tech",setup(D){const c=b([]),r="/tech/data";return(async()=>{let o=await _.doAjax(r);o&&(c.value=o)})(),(o,N)=>(s(),a("div",u,[c.value.length==0?(s(),a("div",f,[(s(),a(n,null,i(4,t=>e("div",{class:"cards",key:t},m)),64))])):p("",!0),(s(!0),a(n,null,i(c.value,(t,d)=>(s(),a("div",{class:"cards",key:d},[e("a",{href:t.articleLink,target:"_blank"},[e("div",y,[e("img",{class:"coverImage",src:t.figure,alt:""},null,8,S)]),e("div",T,[e("div",{innerHTML:t.timeAndTopic},null,8,x)]),e("h3",w,l(t.title),1),e("p",L,l(t.content),1)],8,g)]))),128))]))}},C=v(B,[["__scopeId","data-v-b371b9bf"]]);export{C as default};
