import{b as n}from"./chunk-H3WQT777.js";import{j as u}from"./chunk-OLLCMNIM.js";import{ka as r,r as e,x as o}from"./chunk-SMEBSBMB.js";var g=(m,c)=>{let t=r(n),i=r(u);return t.currentUser()?e(!0):t.getAuthState().pipe(o(a=>a.isAuthenticated?!0:(i.navigate(["/account/login"],{queryParams:{returnUrl:c.url}}),!1)))};export{g as a};
