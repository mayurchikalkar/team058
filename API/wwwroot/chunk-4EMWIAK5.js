import{a as s,b as a,la as o}from"./chunk-OLLCMNIM.js";import{ea as n,ka as p}from"./chunk-SMEBSBMB.js";var u=(()=>{let r=class r{constructor(){this.baseUrl=o.apiUrl,this.http=p(a)}getOrders(t){let e=new s;return t.filter&&t.filter!=="All"&&(e=e.append("status",t.filter)),e=e.append("pageIndex",t.pageNumber),e=e.append("pageSize",t.pageSize),this.http.get(this.baseUrl+"admin/orders",{params:e})}getOrder(t){return this.http.get(this.baseUrl+"admin/orders/"+t)}refundOrder(t){return this.http.post(this.baseUrl+"admin/orders/refund/"+t,{})}};r.\u0275fac=function(e){return new(e||r)},r.\u0275prov=n({token:r,factory:r.\u0275fac,providedIn:"root"});let i=r;return i})();export{u as a};
