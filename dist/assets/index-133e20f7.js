import{d as k,j as m,Z as P,a8 as _,l as y,o as C,n as h,p as o,L as r,t as p,M as b,q as g}from"./index-4a3460b5.js";import{_ as q}from"./ProposalListItem.vue_vue_type_script_setup_true_lang-8e61f418.js";import{_ as B}from"./PaginationBar.vue_vue_type_script_setup_true_lang-ddf84a05.js";import{b as d}from"./route-block-83d24a4e.js";import"./index-b5ee8cf2.js";import"./index-0e9deab5.js";const j={class:"tabs tabs-boxed bg-transparent mb-4 text-center"},M=k({__name:"index",setup(N){const t=m("2"),s=P(),l=m(new _);y(()=>{s.fetchProposals("2").then(a=>{var e;((e=a==null?void 0:a.proposals)==null?void 0:e.length)===0&&(t.value="3",s.fetchProposals("3")),s.fetchProposals("3"),s.fetchProposals("4")})});const n=a=>{t.value=a};function $(a){l.value.setPage(a),s.fetchProposals(t.value,l.value)}return(a,e)=>{var i,c,u,v;return C(),h("div",null,[o("div",j,[o("a",{class:r(["tab text-gray-400 uppercase",{"tab-active":t.value==="2"}]),onClick:e[0]||(e[0]=f=>n("2"))},p(a.$t("gov.voting")),3),o("a",{class:r(["tab text-gray-400 uppercase",{"tab-active":t.value==="3"}]),onClick:e[1]||(e[1]=f=>n("3"))},p(a.$t("gov.passed")),3),o("a",{class:r(["tab text-gray-400 uppercase",{"tab-active":t.value==="4"}]),onClick:e[2]||(e[2]=f=>n("4"))},p(a.$t("gov.rejected")),3)]),b(q,{proposals:(i=g(s))==null?void 0:i.proposals[t.value]},null,8,["proposals"]),b(B,{total:(v=(u=(c=g(s))==null?void 0:c.proposals[t.value])==null?void 0:u.pagination)==null?void 0:v.total,limit:l.value.limit,callback:$},null,8,["total","limit"])])}}});typeof d=="function"&&d(M);export{M as default};