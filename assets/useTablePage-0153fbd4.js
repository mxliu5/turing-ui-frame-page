import{r as i,a6 as d,K as k,ae as h,w as C,af as m}from"./vendor-849df0c4.js";import{a as Q}from"./index-e7c508d2.js";const I=(c="",o)=>{const u=i({}),s=i({}),y=e=>{u.value=h({},u.value,e)},n=i([]),q=e=>{n.value=e.map(a=>a.id)},v=!!c,{filter:t}=Q(),{queryCache:f}=d(t),l=k({init:()=>{const e=f.value[c];if(e){u.value=h({},u.value,e);for(let a in u.value)s.value[a]&&(s.value[a].modelValue=u.value[a],s.value[a].quick&&(s.value[a].quick.modelValue=u.value[`${a}_quick`]))}return e},save:()=>{const e={...u.value};for(let a in s.value){const r=s.value[a].quick;r&&(e[`${a}_quick`]=r.modelValue)}t.saveQueryChche(c,e)},reset:()=>{t.resetQueryChche(c)}});return C(()=>[s.value,f.value],()=>{if(v){const e=l.init();o&&o("queryCacheInit",e)}}),m((e,a,r)=>{v&&(e.name.includes(c)?l.save():l.reset()),r()}),{query:u,queryItems:s,searchQuery:y,selectedIds:n,handleSelectionChange:q,cacheQuery:l}};export{I as u};
