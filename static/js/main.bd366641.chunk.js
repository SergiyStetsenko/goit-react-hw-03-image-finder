(this["webpackJsonpimage-finder"]=this["webpackJsonpimage-finder"]||[]).push([[0],{3:function(e,t,a){e.exports={App:"styles_App__1mudI",Searchbar:"styles_Searchbar__1Crd2",SearchForm:"styles_SearchForm__1zgZ6",form:"styles_form__2cLJu",label:"styles_label__1a6LL",seaIntut:"styles_seaIntut__3ChDA",ImageGallery:"styles_ImageGallery__1489-",ImageGalleryItem:"styles_ImageGalleryItem__3gAVq",ImageGalleryItemimage:"styles_ImageGalleryItemimage__22kKc",Overlay:"styles_Overlay__2Oh-Z",Modal:"styles_Modal__3sviW",Button:"styles_Button__C784b"}},66:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(19),c=a.n(s),l=a(10),o=a(5),i=a(6),u=a(8),h=a(7),m=a(3),d=a.n(m),g=a(0),p=function(e){var t=e.closeModal,a=e.src,n=e.tags;return Object(g.jsx)("div",{className:d.a.Overlay,onClick:t,children:Object(g.jsx)("div",{className:d.a.Modal,children:Object(g.jsx)("img",{src:a,alt:n})})})},b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isModalOpen:!1},e.openModal=function(){e.setState({isModalOpen:!0}),window.addEventListener("keydown",e.closeModal)},e.closeModal=function(t){"IMG"===t.target.nodeName&&"Escape"!==t.key||(e.setState({isModalOpen:!1}),window.removeEventListener("keydown",e.closeModal))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.isModalOpen,t=this.props,a=t.alt,n=t.src,r=t.largeImageURL;return Object(g.jsxs)("li",{className:d.a.ImageGalleryItem,onClick:this.openModal,children:[Object(g.jsx)("img",{src:n,alt:a,className:d.a.ImageGalleryItemimage}),e?Object(g.jsx)(p,{closeModal:this.closeModal,src:r,alt:a}):""]})}}]),a}(n.Component),j=function(e){var t=e.images;return Object(g.jsx)("ul",{className:d.a.ImageGallery,children:t.map((function(e){return Object(g.jsx)(b,{src:e.webformatURL,alt:e.tags,largeImageURL:e.largeImageURL},e.id)}))})},y=function(e){var t=e.loadMore;return Object(g.jsx)("button",{className:d.a.Button,onClick:t,children:"Load more..."})},f=a(20),O=a.n(f),_=(a(47),function(){return Object(g.jsx)("div",{children:Object(g.jsx)(O.a,{type:"Puff",color:"#00BFFF",height:100,width:100})})}),v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handleChange=function(t){e.setState({inputValue:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.inputValue),e.setState({inputValue:""})},e}return Object(i.a)(a,[{key:"render",value:function(){this.state.inputValue;return Object(g.jsx)("header",{className:d.a.Searchbar,children:Object(g.jsxs)("form",{className:d.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:d.a.form,children:Object(g.jsx)("span",{className:d.a.label,children:"Search"})}),Object(g.jsx)("input",{onChange:this.handleChange,className:d.a.seaIntut,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),I=a(21),S=a.n(I),x=function(e,t){return S.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("21141880-535734ac686e4cb0f7e819d7c","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},M=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={images:[],loading:!1,error:null,searchQuery:"",page:1,largeImageUrl:null,isModalOpen:!1},e.fetchImages=function(){var t=e.state,a=t.searchQuery,n=t.page;e.setState({loading:!0}),x(a,n).then((function(t){return e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(t)),page:e.page+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.handleSearchFormSubmit=function(t){e.setState({searchQuery:t,page:1,images:[]})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=t.searchQuery,n=this.state.searchQuery,r=this.state,s=(r.searchQuery,r.page);t.page!==s&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),a!==n&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.loading;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(v,{onSubmit:this.handleSearchFormSubmit}),t.length>0&&Object(g.jsx)(j,{images:t}),a&&Object(g.jsx)(_,{}),t.length>0&&Object(g.jsx)(y,{loadMore:this.fetchImages})]})}}]),a}(n.Component);c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(M,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.bd366641.chunk.js.map