(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{YFqc:function(e,r,t){e.exports=t("cTJO")},cTJO:function(e,r,t){"use strict";var n=t("J4zp"),o=t("284h");r.__esModule=!0,r.default=void 0;var a=o(t("q1tI")),i=t("elyg"),l=t("nOHt"),c=t("vNVm"),s={};function u(e,r,t,n){if(e&&(0,i.isLocalURL)(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[r+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var r=!1!==e.prefetch,t=(0,l.useRouter)(),o=t&&t.pathname||"/",d=a.default.useMemo((function(){var r=(0,i.resolveHref)(o,e.href,!0),t=n(r,2),a=t[0],l=t[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):l||a}}),[o,e.href,e.as]),f=d.href,m=d.as,p=e.children,g=e.replace,h=e.shallow,b=e.scroll,v=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var w=a.Children.only(p),x=w&&"object"===typeof w&&w.ref,j=(0,c.useIntersection)({rootMargin:"200px"}),y=n(j,2),O=y[0],k=y[1],C=a.default.useCallback((function(e){O(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,O]);(0,a.useEffect)((function(){var e=k&&r&&(0,i.isLocalURL)(f),n="undefined"!==typeof v?v:t&&t.locale,o=s[f+"%"+m+(n?"%"+n:"")];e&&!o&&u(t,f,m,{locale:n})}),[m,f,k,v,r,t]);var R={ref:C,onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,a,l,c){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(t))&&(e.preventDefault(),null==l&&(l=n.indexOf("#")<0),r[o?"replace":"push"](t,n,{shallow:a,locale:c,scroll:l}).then((function(e){e&&l&&document.body.focus()})))}(e,t,f,m,g,h,b,v)},onMouseEnter:function(e){(0,i.isLocalURL)(f)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),u(t,f,m,{priority:!0}))}};if(e.passHref||"a"===w.type&&!("href"in w.props)){var E="undefined"!==typeof v?v:t&&t.locale,L=(0,i.getDomainLocale)(m,E,t&&t.locales,t&&t.domainLocales);R.href=L||(0,i.addBasePath)((0,i.addLocale)(m,E,t&&t.defaultLocale))}return a.default.cloneElement(w,R)};r.default=d},dRp5:function(e,r,t){"use strict";var n=t("nKUr"),o=t("YFqc"),a=t.n(o),i=t("q1tI"),l=t("sKyC"),c=t("U6LL"),s=t("pr4h"),u=(t("x9W9"),t("BXwj"));function d(){return(d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function f(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}var m=Object(l.a)(((e,r)=>{var{area:t,templateAreas:n,gap:o,rowGap:a,columnGap:l,column:s,row:u,autoFlow:m,autoRows:p,templateRows:g,autoColumns:h,templateColumns:b}=e,v=f(e,["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"]),w={display:"grid",gridArea:t,gridTemplateAreas:n,gridGap:o,gridRowGap:a,gridColumnGap:l,gridAutoColumns:h,gridColumn:s,gridRow:u,gridAutoFlow:m,gridAutoRows:p,gridTemplateRows:g,gridTemplateColumns:b};return i.createElement(c.a.div,d({ref:r,__css:w},v))}));s.a&&(m.displayName="Grid");var p=t("epLR").a?i.useLayoutEffect:i.useEffect;function g(){return(g=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function h(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}var b=i.forwardRef(((e,r)=>{var{htmlWidth:t,htmlHeight:n,alt:o}=e,a=h(e,["htmlWidth","htmlHeight","alt"]);return i.createElement("img",g({width:t,height:n,ref:r,alt:o},a))})),v=Object(l.a)(((e,r)=>{var{fallbackSrc:t,fallback:n,src:o,align:a,fit:l,loading:s,ignoreFallback:d,crossOrigin:f}=e,m=h(e,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),v=null!=s||d,w=function(e){var{src:r,srcSet:t,onLoad:n,onError:o,crossOrigin:a,sizes:l,ignoreFallback:c}=e,[s,u]=Object(i.useState)("pending");Object(i.useEffect)((()=>{u(r?"loading":"pending")}),[r]);var d=Object(i.useRef)(),f=Object(i.useCallback)((()=>{if(r){m();var e=new Image;e.src=r,a&&(e.crossOrigin=a),t&&(e.srcset=t),l&&(e.sizes=l),e.onload=e=>{m(),u("loaded"),null==n||n(e)},e.onerror=e=>{m(),u("failed"),null==o||o(e)},d.current=e}}),[r,a,t,l,n,o]),m=()=>{d.current&&(d.current.onload=null,d.current.onerror=null,d.current=null)};return p((()=>{if(!c)return"loading"===s&&f(),()=>{m()}}),[s,f,c]),c?"loaded":s}(g({},e,{ignoreFallback:v})),x=g({ref:r,objectFit:l,objectPosition:a},v?m:Object(u.h)(m,["onError","onLoad"]));return"loaded"!==w?n||i.createElement(c.a.img,g({as:b,className:"chakra-image__placeholder",src:t},x)):i.createElement(c.a.img,g({as:b,src:o,crossOrigin:f,loading:s,className:"chakra-image"},x))}));s.a&&(v.displayName="Image");var w=t("v7Hm"),x="https://github.com/u-yas.png";r.a=function(){return Object(i.useLayoutEffect)((function(){(new Image).src=x}),[]),Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(m,{templateColumns:"repeat(4, 1fr)",gap:1,pl:"3vw",maxHeight:"10vh",boxShadow:"md",bgGradient:"linear(90deg, rgba(147,255,255,1) 23%, rgba(109,255,217,1) 47%, rgba(147,255,203,1) 99%)",children:[Object(n.jsx)(a.a,{href:"/",as:"blog/",children:Object(n.jsx)(v,{height:["40px","60px","4rem","60px"],width:["40px","60px","4rem","60px"],htmlHeight:"1rem",htmlWidth:"1rem",src:x,boxShadow:"md",borderRadius:"1rem"})}),Object(n.jsx)(a.a,{href:"/about",as:"blog/about",children:Object(n.jsx)(w.a,{ml:"2vw",mr:"2vw",boxShadow:"md",fontWeight:"bold",fontSize:["11px","md","l","2xl"],backgroundColor:"whiteAlpha.800",color:"#636363",maxWidth:"7rem",minWidth:"3rem",minHeight:"1em",maxHeight:"8em",borderRadius:"1em",display:"grid",flexDirection:"row",justifyContent:"center",alignItems:"center",border:"5px",_hover:{backgroundColor:"#dbd8d8"},children:"\u81ea\u5df1\u7d39\u4ecb"})}),Object(n.jsx)(a.a,{href:"/about",as:"blog/works",children:Object(n.jsx)(w.a,{ml:"2vw",mr:"2vw",boxShadow:"md",fontWeight:"bold",borderRadius:"1em",fontSize:["11px","md","lg","2xl"],color:"#636363",backgroundColor:"whiteAlpha.800",maxWidth:"7rem",minWidth:"3rem",maxHeight:"8em",display:"grid",flexDirection:"row",justifyContent:"center",alignItems:"center",_hover:{backgroundColor:"#dbd8d8"},children:"\u4f5c\u54c1"})}),Object(n.jsx)(a.a,{href:"/post",as:"blog/post",children:Object(n.jsx)(w.a,{ml:"2vw",mr:"2vw",boxShadow:"md",fontWeight:"bold",borderRadius:"1em",fontSize:["11px","md","lg","2xl"],color:"#636363",backgroundColor:"whiteAlpha.800",minWidth:"3rem",maxWidth:"7rem",maxHeight:"8em",display:"grid",flexDirection:"row",justifyContent:"center",alignItems:"center",_hover:{backgroundColor:"#dbd8d8"},children:"\u8a18\u4e8b"})})]})})}},epLR:function(e,r,t){"use strict";t.d(r,"a",(function(){return n}));var n=!("undefined"===typeof window||!window.document||!window.document.createElement)},vNVm:function(e,r,t){"use strict";var n=t("J4zp"),o=t("TqRt");r.__esModule=!0,r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!l,o=(0,a.useRef)(),s=(0,a.useState)(!1),u=n(s,2),d=u[0],f=u[1],m=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||d||e&&e.tagName&&(o.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=c.get(r);if(t)return t;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return c.set(r,t={id:r,observer:o,elements:n}),t}(t),o=n.id,a=n.observer,i=n.elements;return i.set(e,r),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:r}))}),[t,r,d]);return(0,a.useEffect)((function(){l||d||(0,i.default)((function(){return f(!0)}))}),[d]),[m,d]};var a=t("q1tI"),i=o(t("0G5g")),l="undefined"!==typeof IntersectionObserver;var c=new Map}}]);