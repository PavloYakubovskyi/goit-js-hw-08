!function(){var e,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o="Expected a function",i=0/0,r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),g=Object.prototype.toString,d=Math.max,p=Math.min,v=function(){return m.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==g.call(t))return i;if(y(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var o=l.test(e);return o||f.test(e)?u(e.slice(2),o?2:8):a.test(e)?i:+e}n=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw TypeError(o);return y(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),function(e,t,n){var i,r,a,l,f,u,c=0,s=!1,m=!1,g=!0;if("function"!=typeof e)throw TypeError(o);function S(t){var n=i,o=r;return i=r=void 0,c=t,l=e.apply(o,n)}function O(e){var n=e-u,o=e-c;return void 0===u||n>=t||n<0||m&&o>=a}function h(){var e,n,o,i=v();if(O(i))return j(i);f=setTimeout(h,(e=i-u,n=i-c,o=t-e,m?p(o,a-n):o))}function j(e){return(f=void 0,g&&i)?S(e):(i=r=void 0,l)}function T(){var e,n=v(),o=O(n);if(i=arguments,r=this,u=n,o){if(void 0===f)return c=e=u,f=setTimeout(h,t),s?S(e):l;if(m)return f=setTimeout(h,t),S(u)}return void 0===f&&(f=setTimeout(h,t)),l}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(m="maxWait"in n)?d(b(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=u=r=f=void 0},T.flush=function(){return void 0===f?l:j(v())},T}(e,t,{leading:i,maxWait:t,trailing:r})};let S="feedback-form-state",O=localStorage.getItem(S)?JSON.parse(localStorage.getItem(S)):{},h={form:document.querySelector(".feedback-form"),inputEmail:document.querySelector('[name="email"]'),textarea:document.querySelector('[name="message"]')};localStorage.getItem(S)&&function(){let e=JSON.parse(localStorage.getItem(S));if(e){let{email:t,message:n}=e;h.inputEmail.value=t||"",h.textarea.value=n||""}}(),h.form.addEventListener("submit",function(e){if(e.preventDefault(),""===h.inputEmail.value.trim()||""===h.textarea.value.trim())alert("Please fill all fields of the form");else{let t=JSON.parse(localStorage.getItem(S));console.log("test:"),console.log(t),e.currentTarget.reset(),localStorage.removeItem(S),O.message="",O.email=""}}),h.form.addEventListener("input",((e=n)&&e.__esModule?e.default:e)(function(e){O[e.target.name]=e.target.value.trim(),localStorage.setItem(S,JSON.stringify(O))},500))}();
//# sourceMappingURL=03-feedback.ac79bd3e.js.map
