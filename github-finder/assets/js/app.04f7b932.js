(function(t){function e(e){for(var n,a,i=e[0],c=e[1],u=e[2],f=0,p=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&p.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==s[c]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},s={app:0},o=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},1515:function(t,e,r){},3056:function(t,e,r){"use strict";var n=r("33c8"),s=r.n(n);s.a},"33c8":function(t,e,r){},4120:function(t,e,r){},4597:function(t,e,r){"use strict";var n=r("4120"),s=r.n(n);s.a},"52ea":function(t,e,r){"use strict";var n=r("f2b7"),s=r.n(n);s.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[t._m(0),r("router-view")],1)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("div",{staticClass:"navbar"},[r("div",{staticClass:"container"},[r("div",{staticClass:"navbar-content"},[r("div",{staticClass:"logo"},[t._v("GithubFinder")])])])])])}],a={data:function(){return{links:[{title:"Home",url:"/"},{title:"PageSearch",url:"pageSearch"}]}}},i=a,c=(r("5c0b"),r("2877")),u=Object(c["a"])(i,s,o,!1,null,null,null),l=u.exports,f=r("8c4f"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper-content wrapper-content--fixed"},[r("section",[r("div",{staticClass:"container"},[r("search",{attrs:{value:t.search,placeholder:"Find user github.com"},on:{search:function(e){t.search=e}}}),t.repos?r("button",{staticClass:"btn btnPrimary",on:{click:t.getRepos}},[t._v("Search again !")]):r("button",{staticClass:"btn btnPrimary",on:{click:t.getRepos}},[t._v("Search !")]),t.userInfo?r("div",{staticClass:"user-info"},[r("user",{attrs:{userInfo:t.userInfo}})],1):t._e(),t.repos?r("div",{staticClass:"repos repos_wrapper"},[r("table",{staticClass:"table"},[r("thead",[r("tr",[r("sortBy",{attrs:{text:"Name",field:"name",currentSort:t.currentSort.field,currentSortDir:t.currentSort.dir},on:{sort:t.sort}}),r("sortBy",{attrs:{text:"Clone_url",field:"clone_url",currentSort:t.currentSort.field,currentSortDir:t.currentSort.dir},on:{sort:t.sort}}),r("sortBy",{attrs:{text:"created_at",field:"created_at",currentSort:t.currentSort.field,currentSortDir:t.currentSort.dir},on:{sort:t.sort}}),r("sortBy",{attrs:{text:"Stars",field:"stargazers_count",currentSort:t.currentSort.field,currentSortDir:t.currentSort.dir},on:{sort:t.sort}})],1)]),t._l(t.reposSort,(function(e){return r("tbody",{attrs:{keu:e.id}},[r("tr",[r("td",[r("a",{staticClass:"link",attrs:{href:e.html_url,target:"_blank"}},[t._v(t._s(e.name))])]),r("td",[r("span",[t._v(" "+t._s(e.clone_url)+" ")])]),r("td",[r("span",[t._v(" "+t._s(e.created_at)+" ")])]),r("td",[r("span",[t._v(" "+t._s(e.stargazers_count)+" ⭐")])])])])}))],2)]):t._e(),t.error?r("div",{staticClass:"error"},[r("br"),r("br"),r("p",[t._v(t._s(t.error))])]):t._e(),t.repos?r("pagination",{attrs:{current:t.pageCurrent,total:t.repos.length,itemPerPage:t.itemPerPage},on:{setPage:t.setPage}}):t._e()],1)])])},d=[],g=(r("ac1f"),r("841c"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper__search"},[r("div",{staticClass:"search"},[r("div",{staticClass:"search-icon"},[r("svg",{staticClass:"feather feather-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("circle",{attrs:{cx:"11",cy:"11",r:"8"}}),r("line",{attrs:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}})])])]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])}),h=[],_={props:{value:{type:String,required:!0},placeholder:{type:String,default:"Search"}},data:function(){return{search:this.value}},watch:{search:function(t){this.$emit("search",t)}}},m=_,v=(r("c5ca"),Object(c["a"])(m,g,h,!1,null,"56c606ca",null)),b=v.exports,P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"table"},[t._m(0),r("tbody",[r("tr",[r("td",[t._v(t._s(t.userInfo.login))]),r("td",[r("a",{staticClass:"avatar",attrs:{href:t.userInfo.html_url,target:"_blank"}},[r("img",{attrs:{src:t.userInfo.avatar_url,alt:""}})])]),r("td",[r("a",{staticClass:"name",attrs:{href:t.userInfo.html_url}},[t._v(t._s(t.userInfo.name))])]),r("td",[t._v(t._s(t.userInfo.company))]),r("td",[r("div",{staticClass:"count-repos"},[t._v(t._s(t.userInfo.public_repos))])])])])])},S=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("login")]),r("th",[t._v("avatar")]),r("th",[t._v("name")]),r("th",[t._v("company")]),r("th",[t._v("count-repos")])])])}],y={props:{userInfo:{type:Object,requeired:!0}}},C=y,$=(r("3056"),Object(c["a"])(C,P,S,!1,null,null,null)),x=$.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("th",{on:{click:function(e){return t.$emit("sort",t.field)}}},[t._v(t._s(t.text)+" "),t.currentSort==t.field?["asc"==t.currentSortDir?r("span",[t._v("↓")]):r("span",[t._v("↑")])]:t._e()],2)},k=[],R={props:{field:{type:String,default:null},text:{type:String,default:null},currentSort:{type:String,required:!0},currentSortDir:{type:String,default:null}}},M=R,O=Object(c["a"])(M,w,k,!1,null,null,null),j=O.exports,I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"button-list"},[r("div",{class:["btn",{btnPrimary:t.current>1}],on:{click:t.prevPage}},[t._v(" ← ")]),t._l(t.pages,(function(e){return r("div",{key:e,class:["page",{current:e+1==t.current}],on:{click:function(r){return t.setPage(e+1)}}},[t._v(t._s(e+1))])})),r("div",{class:["btn",{btnPrimary:t.current*t.itemPerPage<t.total}],on:{click:t.nextPage}},[t._v(" → ")])],2)},E=[],B=(r("a9e3"),r("d3b7"),r("ddb0"),r("284c")),D={props:{current:{type:Number,default:1},total:{type:Number,default:1},itemPerPage:{type:Number,default:5}},methods:{setPage:function(t){console.log(t),this.$emit("setPage",t)},nextPage:function(){this.current*this.itemPerPage<this.total&&this.setPage(this.current+1)},prevPage:function(){this.current>1&&this.setPage(this.current-1)}},computed:{pages:function(){return Object(B["a"])(Array(Math.ceil(this.total/this.itemPerPage)).keys())}}},N=D,U=(r("4597"),Object(c["a"])(N,I,E,!1,null,null,null)),z=U.exports,A={components:{search:b,user:x,sortBy:j,pagination:z},data:function(){return{search:""}},methods:{getRepos:function(){this.search?this.$store.dispatch("getReposActions",this.search):this.$store.commit("setError","Cant`t empty  user")},sort:function(t){this.$store.commit("sortReposMutations",t)},setPage:function(t){this.$store.commit("setPageMutations",t)}},computed:{error:function(){return this.$store.getters.getError},userInfo:function(){return this.$store.getters.getUser},repos:function(){return this.$store.getters.getRepos},reposSort:function(){return this.$store.getters.getReposSorted},pageCurrent:function(){return this.$store.getters.getPage},itemPerPage:function(){return this.$store.getters.getItemPerPage},currentSort:function(){return this.$store.getters.getSort}}},F=A,q=(r("52ea"),Object(c["a"])(F,p,d,!1,null,"356ded54",null)),T=q.exports,J=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper-content wrapper-content--fixed"},[r("section",[r("div",{staticClass:"container"},[r("search",{attrs:{value:t.search,placeholder:"Find user github.com"},on:{search:function(e){t.search=e}}}),t.repos?r("button",{staticClass:"btn btnPrimary",on:{click:t.getRepos}},[t._v("Search again !")]):r("button",{staticClass:"btn btnPrimary",on:{click:t.getRepos}},[t._v("Search !")]),t.userInfo?r("div",{staticClass:"user-info"},[r("user",{attrs:{userInfo:t.userInfo}})],1):t._e(),t.repos?r("div",{staticClass:"repos repos_wrapper"},[r("table",{staticClass:"table"},[r("thead",[r("tr",[r("sortBy",{attrs:{text:"Name",field:"name",currentSort:t.currentSort.field,currentSortDir:t.currentSort.dir},on:{sort:t.sort}}),r("sortBy",{attrs:{text:"Clone_url",field:"clone_url",currentSort:t.currentSort.field,currentSortDir:t.currentSort.dir},on:{sort:t.sort}}),r("sortBy",{attrs:{text:"created_at",field:"created_at",currentSort:t.currentSort.field,currentSortDir:t.currentSort.dir},on:{sort:t.sort}}),r("sortBy",{attrs:{text:"Stars",field:"stargazers_count",currentSort:t.currentSort.field,currentSortDir:t.currentSort.dir},on:{sort:t.sort}})],1)]),t._l(t.reposSort,(function(e){return r("tbody",{attrs:{keu:e.id}},[r("tr",[r("td",[r("a",{staticClass:"link",attrs:{href:e.html_url,target:"_blank"}},[t._v(t._s(e.name))])]),r("td",[r("span",[t._v(" "+t._s(e.clone_url)+" ")])]),r("td",[r("span",[t._v(" "+t._s(e.created_at)+" ")])]),r("td",[r("span",[t._v(" "+t._s(e.stargazers_count)+" ⭐")])])])])}))],2)]):t._e(),t.error?r("div",{staticClass:"error"},[r("br"),r("br"),r("p",[t._v(t._s(t.error))])]):t._e(),t.repos?r("pagination",{attrs:{current:t.pageCurrent,total:t.repos.length,itemPerPage:t.itemPerPage},on:{setPage:t.setPage}}):t._e()],1)])])},G=[],H={components:{search:b,user:x,sortBy:j,pagination:z},data:function(){return{search:""}},methods:{getRepos:function(){this.search?this.$store.dispatch("getReposActions",this.search):this.$store.commit("setError","Cant`t empty  user")},sort:function(t){this.$store.commit("sortReposMutations",t)},setPage:function(t){this.$store.commit("setPageMutations",t)}},computed:{error:function(){return this.$store.getters.getError},userInfo:function(){return this.$store.getters.getUser},repos:function(){return this.$store.getters.getRepos},reposSort:function(){return this.$store.getters.getReposSorted},pageCurrent:function(){return this.$store.getters.getPage},itemPerPage:function(){return this.$store.getters.getItemPerPage},currentSort:function(){return this.$store.getters.getSort}}},K=H,L=(r("64b5"),Object(c["a"])(K,J,G,!1,null,"2ae2a1b7",null)),Q=L.exports;n["a"].use(f["a"]);var V=new f["a"]({mode:"history",routes:[{path:"/",name:"home",component:T},{path:"*",name:"notFound",component:Q}]}),W=r("2f62"),X=(r("4de4"),r("4e82"),r("3ca3"),r("bc3a")),Y=r.n(X),Z={state:{repos:null,user:null,sort:{field:"name",dir:"asc"},page:{current:1,itemPerPage:5}},mutations:{setUserMutations:function(t,e){t.user=e},setReposMutations:function(t,e){t.repos=e},setSortMutations:function(t,e){t.sort=e},sortReposMutations:function(t,e){e===t.sort.field?t.sort.dir="asc"===t.sort.dir?"desc":"asc":t.sort.dir="asc",t.sort.field=e},setPageMutations:function(t,e){t.page.current=e}},actions:{getReposActions:function(t,e){var r=t.commit;r("setPageMutations",1),r("setSortMutations",{field:"name",dir:"asc"});var n=Y.a.get("https://api.github.com/users/".concat(e)),s=Y.a.get("https://api.github.com/users/".concat(e,"/repos"));console.log(s),Promise.all([n,s]).then((function(t){200===t[0].status?(console.log(r),console.log(e),r("setUserMutations",t[0].data),r("setReposMutations",t[1].data),r("setError",null)):r("setError","Can't find user ".concat(e,"."))})).catch((function(t){console.log(t),r("setUserMutations",null),r("setReposMutations",null),r("setError",t)}))}},getters:{getUser:function(t){return t.user},getRepos:function(t){return t.repos},getSort:function(t){return t.sort},getReposSorted:function(t){return t.repos.sort((function(e,r){var n=1;return"desc"===t.sort.dir&&(n=-1),e[t.sort.field]<r[t.sort.field]?-1*n:e[t.sort.field]>r[t.sort.field]?1*n:0})).filter((function(e,r){var n=(t.page.current-1)*t.page.itemPerPage,s=t.page.current*t.page.itemPerPage;if(r>=n&&r<s)return!0}))},getPage:function(t){return t.page.current},getItemPerPage:function(t){return t.page.itemPerPage}}},tt={state:{error:null},mutations:{setError:function(t,e){t.error=e}},getters:{getError:function(t){return t.error}}};n["a"].use(W["a"]);var et=new W["a"].Store({modules:{repos:Z,error:tt}});r("c1c3");n["a"].config.productionTip=!1,new n["a"]({router:V,store:et,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("91c4"),s=r.n(n);s.a},"64b5":function(t,e,r){"use strict";var n=r("afbc"),s=r.n(n);s.a},"91c4":function(t,e,r){},afbc:function(t,e,r){},c1c3:function(t,e,r){},c5ca:function(t,e,r){"use strict";var n=r("1515"),s=r.n(n);s.a},f2b7:function(t,e,r){}});