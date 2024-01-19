"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[242],{242:(ge,Z,a)=>{a.r(Z),a.d(Z,{CheckoutModule:()=>fe});var u=a(6814),h=a(2999),c=a(95),e=a(4769),x=a(6448),g=a(2704),J=a(7533),p=a(3971);function I(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"li",4)(1,"div",5)(2,"button",6),e.NdJ("click",function(){const s=e.CHM(t).index,l=e.oxw();return e.KtG(l.onClick(s))}),e._uU(3),e.qZA()()()}if(2&n){const t=i.$implicit,r=i.index,o=e.oxw();e.xp6(2),e.ekj("active",o.selectedIndex===r),e.Q6J("disabled",!0),e.xp6(1),e.hij(" ",t.label," ")}}function P(n,i){if(1&n&&(e.TgZ(0,"div"),e.GkF(1,7),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",t.selected.content)}}let q=(()=>{class n extends p.B8{constructor(){super(...arguments),this.linearModeSelected=!0}ngOnInit(){this.linear=this.linearModeSelected}onClick(t){this.selectedIndex=t}static#e=this.\u0275fac=function(){let t;return function(o){return(t||(t=e.n5z(n)))(o||n)}}();static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-stepper"]],inputs:{linearModeSelected:"linearModeSelected"},features:[e._Bn([{provide:p.B8,useExisting:n}]),e.qOj],decls:4,vars:2,consts:[[1,"container"],[1,"nav","nav-pills","nav-justified"],["class","nav-item",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"nav-item"],[1,"d-grid"],[1,"nav-link","py-3","text-uppercase","fw-bold",3,"disabled","click"],[3,"ngTemplateOutlet"]],template:function(r,o){1&r&&(e.TgZ(0,"div",0)(1,"ul",1),e.YNc(2,I,4,4,"li",2),e.qZA(),e.YNc(3,P,2,1,"div",3),e.qZA()),2&r&&(e.xp6(2),e.Q6J("ngForOf",o.steps),e.xp6(1),e.Q6J("ngIf",o.selected))},dependencies:[u.sg,u.O5,u.tP],styles:["button.nav-link[_ngcontent-%COMP%]{background:#e9ecef;border-radius:0;border:none;color:#333}button.nav-link[_ngcontent-%COMP%]:disabled:not(.active){color:#333;background:#e9ecef}"]})}return n})();var y=a(2425),_=a(9947);function Q(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",6)(1,"div",7)(2,"h4"),e._uU(3,"Shipping address"),e.qZA(),e.TgZ(4,"button",8),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.saveUserAddress())}),e._uU(5," Save as default address "),e.qZA()(),e.TgZ(6,"div",9)(7,"div",10),e._UZ(8,"app-text-input",11),e.qZA(),e.TgZ(9,"div",10),e._UZ(10,"app-text-input",12),e.qZA(),e.TgZ(11,"div",10),e._UZ(12,"app-text-input",13),e.qZA(),e.TgZ(13,"div",10),e._UZ(14,"app-text-input",14),e.qZA(),e.TgZ(15,"div",10),e._UZ(16,"app-text-input",15),e.qZA(),e.TgZ(17,"div",10),e._UZ(18,"app-text-input",16),e.qZA()()()}if(2&n){const t=e.oxw();let r;e.Q6J("formGroup",t.checkoutForm),e.xp6(4),e.Q6J("disabled",!(null!=(r=t.checkoutForm.get("addressForm"))&&r.valid&&null!=(r=t.checkoutForm.get("addressForm"))&&r.dirty)),e.xp6(4),e.Q6J("label","First name"),e.xp6(2),e.Q6J("label","Last name"),e.xp6(2),e.Q6J("label","Street"),e.xp6(2),e.Q6J("label","City"),e.xp6(2),e.Q6J("label","State"),e.xp6(2),e.Q6J("label","Zip code")}}let M=(()=>{class n{constructor(t,r){this.accountService=t,this.toastr=r}saveUserAddress(){this.accountService.updateUserAddress(this.checkoutForm?.get("addressForm")?.value).subscribe({next:()=>{this.toastr.success("Address saved"),this.checkoutForm?.get("addressForm")?.reset(this.checkoutForm?.get("addressForm")?.value)}})}static#e=this.\u0275fac=function(r){return new(r||n)(e.Y36(x.B),e.Y36(y._W))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-checkout-address"]],inputs:{checkoutForm:"checkoutForm"},decls:8,vars:1,consts:[["class","mt-4",3,"formGroup",4,"ngIf"],[1,"d-flex","justify-content-between","flex-row","mb-5"],["routerLink","/basket",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],["cdkStepperNext","",1,"btn","btn-primary"],[1,"fa","fa-angle-right"],[1,"mt-4",3,"formGroup"],[1,"d-flex","justify-content-between","align-items-center"],[1,"btn","btn-outline-success","mb-3",3,"disabled","click"],["formGroupName","addressForm",1,"row"],[1,"form-group","col-6"],["formControlName","firstName",3,"label"],["formControlName","lastName",3,"label"],["formControlName","street",3,"label"],["formControlName","city",3,"label"],["formControlName","state",3,"label"],["formControlName","zipCode",3,"label"]],template:function(r,o){1&r&&(e.YNc(0,Q,19,8,"div",0),e.TgZ(1,"div",1)(2,"button",2),e._UZ(3,"i",3),e._uU(4," Back to basket "),e.qZA(),e.TgZ(5,"button",4),e._uU(6," Go to Delivery "),e._UZ(7,"i",5),e.qZA()()),2&r&&e.Q6J("ngIf",o.checkoutForm)},dependencies:[u.O5,h.rH,c.JJ,c.JL,c.sg,c.u,c.x0,_.t,p.st]})}return n})();var F=a(553),O=a(7398),G=a(9862);let S=(()=>{class n{constructor(t){this.http=t,this.baseUrl=F.N.apiUrl}createOrder(t){return this.http.post(this.baseUrl+"orders",t)}getDeliveryMethods(){return this.http.get(this.baseUrl+"orders/deliveryMethods").pipe((0,O.U)(t=>t.sort((r,o)=>o.price-r.price)))}static#e=this.\u0275fac=function(r){return new(r||n)(e.LFG(G.eN))};static#t=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Y(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",9)(1,"input",10),e.NdJ("click",function(){const s=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.setShippingPrice(s))}),e.qZA(),e.TgZ(2,"label",11)(3,"strong"),e._uU(4),e.ALo(5,"currency"),e.qZA(),e._UZ(6,"br"),e.TgZ(7,"span",12),e._uU(8),e.qZA()()()}if(2&n){const t=i.$implicit;e.xp6(1),e.s9C("id",t.id),e.s9C("value",t.id),e.xp6(1),e.s9C("for",t.id),e.xp6(2),e.AsE("",t.shortName," - ",e.lcZ(5,6,t.price),""),e.xp6(4),e.Oqu(t.description)}}function L(n,i){if(1&n&&(e.TgZ(0,"div",6)(1,"div",7),e.YNc(2,Y,9,8,"div",8),e.qZA()()),2&n){const t=e.oxw();e.Q6J("formGroup",t.checkoutForm),e.xp6(2),e.Q6J("ngForOf",t.deliveryMethods)}}let B=(()=>{class n{constructor(t,r){this.checkoutService=t,this.basketService=r,this.deliveryMethods=[]}ngOnInit(){this.checkoutService.getDeliveryMethods().subscribe({next:t=>this.deliveryMethods=t})}setShippingPrice(t){this.basketService.setShippingPrice(t)}static#e=this.\u0275fac=function(r){return new(r||n)(e.Y36(S),e.Y36(g.v))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-checkout-delivery"]],inputs:{checkoutForm:"checkoutForm"},decls:8,vars:2,consts:[["class","mt-4",3,"formGroup",4,"ngIf"],[1,"d-flex","justify-content-between","flex-row","mb-5"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],["cdkStepperNext","",1,"btn","btn-primary",3,"disabled"],[1,"fa","fa-angle-right"],[1,"mt-4",3,"formGroup"],["formGroupName","deliveryForm",1,"row"],["class","col-6 form-group",4,"ngFor","ngForOf"],[1,"col-6","form-group"],["type","radio","formControlName","deliveryMethod",1,"form-check-input",3,"id","value","click"],[1,"form-check-label","ms-2","mb-3",3,"for"],[1,"label-description"]],template:function(r,o){if(1&r&&(e.YNc(0,L,3,2,"div",0),e.TgZ(1,"div",1)(2,"button",2),e._UZ(3,"i",3),e._uU(4," Back to address "),e.qZA(),e.TgZ(5,"button",4),e._uU(6," Go to Review "),e._UZ(7,"i",5),e.qZA()()),2&r){let s;e.Q6J("ngIf",o.checkoutForm),e.xp6(5),e.Q6J("disabled",null==o.checkoutForm||null==(s=o.checkoutForm.get("deliveryForm"))?null:s.invalid)}},dependencies:[u.sg,u.O5,c.Fj,c._,c.JJ,c.JL,c.sg,c.u,c.x0,p.st,p.po,u.H9]})}return n})();var j=a(9384);let R=(()=>{class n{constructor(t,r){this.basketService=t,this.toastr=r}createPaymentIntent(){this.basketService.createPaymentIntent().subscribe({next:()=>{this.appStepper?.next()},error:t=>this.toastr.error(t.message)})}static#e=this.\u0275fac=function(r){return new(r||n)(e.Y36(g.v),e.Y36(y._W))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-checkout-review"]],inputs:{appStepper:"appStepper"},decls:9,vars:1,consts:[[1,"mt-4"],[3,"isBasket"],[1,"d-flex","justify-content-between","flex-row","mb-5"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],[1,"btn","btn-primary",3,"click"],[1,"fa","fa-angle-right"]],template:function(r,o){1&r&&(e.TgZ(0,"div",0),e._UZ(1,"app-basket-summary",1),e.qZA(),e.TgZ(2,"div",2)(3,"button",3),e._UZ(4,"i",4),e._uU(5," Back to delivery "),e.qZA(),e.TgZ(6,"button",5),e.NdJ("click",function(){return o.createPaymentIntent()}),e._uU(7," Go to Payment "),e._UZ(8,"i",6),e.qZA()()),2&r&&(e.xp6(1),e.Q6J("isBasket",!1))},dependencies:[p.po,j.b]})}return n})();function T(n,i,t,r,o,s,l){try{var m=n[s](l),d=m.value}catch(ve){return void t(ve)}m.done?i(d):Promise.resolve(d).then(r,o)}function C(n){return function(){var i=this,t=arguments;return new Promise(function(r,o){var s=n.apply(i,t);function l(d){T(s,r,o,l,m,"next",d)}function m(d){T(s,r,o,l,m,"throw",d)}l(void 0)})}}var v,w="https://js.stripe.com/v3",V=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,A="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",U=function(i){var t=i&&!i.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(w).concat(t);var o=document.head||document.body;if(!o)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return o.appendChild(r),r},f=null,b=null,k=null,E=!1,N=function(){return v||(v=(i=null,null!==f?f:(f=new Promise(function(t,r){if(typeof window>"u"||typeof document>"u")t(null);else if(window.Stripe&&i&&console.warn(A),window.Stripe)t(window.Stripe);else try{var o=function(){for(var i=document.querySelectorAll('script[src^="'.concat(w,'"]')),t=0;t<i.length;t++){var r=i[t];if(V.test(r.src))return r}return null}();if(o&&i)console.warn(A);else if(o){if(o&&null!==k&&null!==b){var s;o.removeEventListener("load",k),o.removeEventListener("error",b),null===(s=o.parentNode)||void 0===s||s.removeChild(o),o=U(i)}}else o=U(i);k=function(i,t){return function(){window.Stripe?i(window.Stripe):t(new Error("Stripe.js not available"))}}(t,r),b=function(i){return function(){i(new Error("Failed to load Stripe.js"))}}(r),o.addEventListener("load",k),o.addEventListener("error",b)}catch(l){return void r(l)}})).catch(function(t){return f=null,Promise.reject(t)})).catch(function(i){return v=null,Promise.reject(i)}));var i};Promise.resolve().then(function(){return N()}).catch(function(n){E||console.warn(n)});var ee=a(6973),te=a(305);const oe=["cardNumber"],ne=["cardExpiry"],ie=["cardCvc"];function se(n,i){if(1&n&&(e.TgZ(0,"div",7)(1,"div",8)(2,"div",9),e._UZ(3,"app-text-input",10),e.qZA()(),e.TgZ(4,"div",11)(5,"div",12)(6,"div",13),e._UZ(7,"div",14,15),e.TgZ(9,"label"),e._uU(10,"Card Number"),e.qZA(),e.TgZ(11,"span",16),e._uU(12),e.qZA()()(),e.TgZ(13,"div",17)(14,"div",13),e._UZ(15,"div",14,18),e.TgZ(17,"label"),e._uU(18,"Card Expiry"),e.qZA()()(),e.TgZ(19,"div",17)(20,"div",13),e._UZ(21,"div",14,19),e.TgZ(23,"label"),e._uU(24,"Card Cvc"),e.qZA()()()()()),2&n){const t=e.oxw();e.Q6J("formGroup",t.checkoutForm),e.xp6(3),e.Q6J("label","Name on card"),e.xp6(9),e.Oqu(t.cardErrors)}}function ce(n,i){1&n&&e._UZ(0,"i",20)}let ae=(()=>{class n{constructor(t,r,o,s){this.basketService=t,this.checkoutService=r,this.toastr=o,this.router=s,this.stripe=null,this.cardNumberComplete=!1,this.cardExpiryComplete=!1,this.cardCvcComplete=!1,this.loading=!1}ngOnInit(){(function(){for(var i=arguments.length,t=new Array(i),r=0;r<i;r++)t[r]=arguments[r];E=!0;var o=Date.now();return N().then(function(s){return function(i,t,r){if(null===i)return null;var o=i.apply(void 0,t);return function(i,t){!i||!i._registerWrapper||i._registerWrapper({name:"stripe-js",version:"2.3.0",startTime:t})}(o,r),o}(s,t,o)})})(F.N.StripePublishableKey).then(t=>{this.stripe=t;const r=t?.elements();r&&(this.cardNumber=r.create("cardNumber"),this.cardNumber.mount(this.cardNumberElement?.nativeElement),this.cardNumber.on("change",o=>{this.cardNumberComplete=o.complete,this.cardErrors=o.error?o.error.message:null}),this.cardExpiry=r.create("cardExpiry"),this.cardExpiry.mount(this.cardExpiryElement?.nativeElement),this.cardExpiry.on("change",o=>{this.cardExpiryComplete=o.complete,this.cardErrors=o.error?o.error.message:null}),this.cardCvc=r.create("cardCvc"),this.cardCvc.mount(this.cardCvcElement?.nativeElement),this.cardCvc.on("change",o=>{this.cardCvcComplete=o.complete,this.cardErrors=o.error?o.error.message:null}))})}get paymentFormComplete(){return this.checkoutForm?.get("paymentForm")?.valid&&this.cardNumberComplete&&this.cardExpiryComplete&&this.cardCvcComplete}submitOrder(){var t=this;return C(function*(){t.loading=!0;const r=t.basketService.getCurrentBasketValue();if(!r)throw new Error("cannot get basket");try{const o=yield t.createOrder(r),s=yield t.confirmPaymentWithStripe(r);s.paymentIntent?(t.basketService.deleteBasket(r),t.router.navigate(["checkout/success"],{state:o})):t.toastr.error(s.error.message)}catch(o){console.log(o),t.toastr.error(o.message)}finally{t.loading=!1}})()}confirmPaymentWithStripe(t){var r=this;return C(function*(){if(!t)throw new Error("Basket is null");const o=r.stripe?.confirmCardPayment(t.clientSecret,{payment_method:{card:r.cardNumber,billing_details:{name:r.checkoutForm?.get("paymentForm")?.get("nameOnCard")?.value}}});if(!o)throw new Error("Problem attempting payment with stripe");return o})()}createOrder(t){var r=this;return C(function*(){if(!t)throw new Error("Basket is null");const o=r.getOrderToCreate(t);return function re(n,i){const t="object"==typeof i;return new Promise((r,o)=>{const s=new te.Hp({next:l=>{r(l),s.unsubscribe()},error:o,complete:()=>{t?r(i.defaultValue):o(new ee.K)}});n.subscribe(s)})}(r.checkoutService.createOrder(o))})()}getOrderToCreate(t){const r=this.checkoutForm?.get("deliveryForm")?.get("deliveryMethod")?.value,o=this.checkoutForm?.get("addressForm")?.value;if(!r||!o)throw new Error("Problem with basket");return{basketId:t.id,deliveryMethodId:r,shipToAddress:o}}static#e=this.\u0275fac=function(r){return new(r||n)(e.Y36(g.v),e.Y36(S),e.Y36(y._W),e.Y36(h.F0))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-checkout-payment"]],viewQuery:function(r,o){if(1&r&&(e.Gf(oe,5),e.Gf(ne,5),e.Gf(ie,5)),2&r){let s;e.iGM(s=e.CRH())&&(o.cardNumberElement=s.first),e.iGM(s=e.CRH())&&(o.cardExpiryElement=s.first),e.iGM(s=e.CRH())&&(o.cardCvcElement=s.first)}},inputs:{checkoutForm:"checkoutForm"},decls:9,vars:3,consts:[["class","mt-4",3,"formGroup",4,"ngIf"],[1,"d-flex","justify-content-between","flex-row","mb-5"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],[1,"btn","btn-primary",3,"disabled","click"],[1,"fa","fa-angle-right"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"mt-4",3,"formGroup"],[1,"row"],["formGroupName","paymentForm",1,"form-group","col-12"],["formControlName","nameOnCard",3,"label"],[1,"row","mb-3"],[1,"col-6"],[1,"form-floating"],[1,"form-control"],["cardNumber",""],[1,"text-danger"],[1,"col-3"],["cardExpiry",""],["cardCvc",""],[1,"fa","fa-spinner","fa-spin"]],template:function(r,o){1&r&&(e.YNc(0,se,25,3,"div",0),e.TgZ(1,"div",1)(2,"button",2),e._UZ(3,"i",3),e._uU(4," Back to review "),e.qZA(),e.TgZ(5,"button",4),e.NdJ("click",function(){return o.submitOrder()}),e._uU(6," Submit order "),e._UZ(7,"i",5),e.YNc(8,ce,1,0,"i",6),e.qZA()()),2&r&&(e.Q6J("ngIf",o.checkoutForm),e.xp6(5),e.Q6J("disabled",o.loading||!o.paymentFormComplete),e.xp6(3),e.Q6J("ngIf",o.loading))},dependencies:[u.O5,c.JJ,c.JL,c.sg,c.u,c.x0,_.t,p.po]})}return n})();function ue(n,i){if(1&n&&(e.TgZ(0,"button",5),e._uU(1," View your order "),e.qZA()),2&n){const t=e.oxw();e.MGl("routerLink","/orders/",t.order.id,"")}}function de(n,i){1&n&&(e.TgZ(0,"button",6),e._uU(1," View your orders "),e.qZA())}const pe=[{path:"",component:(()=>{class n{constructor(t,r,o){this.fb=t,this.accountService=r,this.basketService=o,this.checkoutForm=this.fb.group({addressForm:this.fb.group({firstName:["",c.kI.required],lastName:["",c.kI.required],street:["",c.kI.required],city:["",c.kI.required],state:["",c.kI.required],zipCode:["",c.kI.required]}),deliveryForm:this.fb.group({deliveryMethod:["",c.kI.required]}),paymentForm:this.fb.group({nameOnCard:["",c.kI.required]})})}ngOnInit(){this.getAddressFormValues(),this.getDeliveryMethodValue()}getAddressFormValues(){this.accountService.getUserAddress().subscribe({next:t=>{t&&this.checkoutForm.get("addressForm")?.patchValue(t)}})}getDeliveryMethodValue(){const t=this.basketService.getCurrentBasketValue();t&&t.deliveryMethodId&&this.checkoutForm.get("deliveryForm")?.get("deliveryMethod")?.patchValue(t.deliveryMethodId.toString())}static#e=this.\u0275fac=function(r){return new(r||n)(e.Y36(c.qu),e.Y36(x.B),e.Y36(g.v))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-checkout"]],decls:15,vars:11,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-8"],["appStepper",""],[3,"label","completed"],[3,"checkoutForm"],[3,"label"],[3,"appStepper"],[1,"col-4"]],template:function(r,o){if(1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"app-stepper",null,3)(5,"cdk-step",4),e._UZ(6,"app-checkout-address",5),e.qZA(),e.TgZ(7,"cdk-step",4),e._UZ(8,"app-checkout-delivery",5),e.qZA(),e.TgZ(9,"cdk-step",6),e._UZ(10,"app-checkout-review",7),e.qZA(),e.TgZ(11,"cdk-step",4),e._UZ(12,"app-checkout-payment",5),e.qZA()()(),e.TgZ(13,"div",8),e._UZ(14,"app-order-totals"),e.qZA()()()),2&r){const s=e.MAs(4);let l,m,d;e.xp6(5),e.Q6J("label","Address")("completed",null==(l=o.checkoutForm.get("addressForm"))?null:l.valid),e.xp6(1),e.Q6J("checkoutForm",o.checkoutForm),e.xp6(1),e.Q6J("label","Delivery")("completed",null==(m=o.checkoutForm.get("deliveryForm"))?null:m.valid),e.xp6(1),e.Q6J("checkoutForm",o.checkoutForm),e.xp6(1),e.Q6J("label","Review"),e.xp6(1),e.Q6J("appStepper",s),e.xp6(1),e.Q6J("label","Payment")("completed",null==(d=o.checkoutForm.get("paymentForm"))?null:d.valid),e.xp6(1),e.Q6J("checkoutForm",o.checkoutForm)}},dependencies:[J.S,q,p.be,M,B,R,ae]})}return n})(),data:{breadcrumb:"checkout"}},{path:"success",component:(()=>{class n{constructor(t){this.router=t;const r=this.router.getCurrentNavigation();this.order=r?.extras?.state}static#e=this.\u0275fac=function(r){return new(r||n)(e.Y36(h.F0))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-checkout-success"]],decls:9,vars:2,consts:[[1,"container","mt-5"],[1,"fa","fa-check-circle","fa-5x",2,"color","green"],[1,"mb-4"],["class","btn btn-outline-success",3,"routerLink",4,"ngIf"],["routerLink","/orders","class","btn btn-outline-success",4,"ngIf"],[1,"btn","btn-outline-success",3,"routerLink"],["routerLink","/orders",1,"btn","btn-outline-success"]],template:function(r,o){1&r&&(e.TgZ(0,"div",0)(1,"div"),e._UZ(2,"i",1),e.qZA(),e.TgZ(3,"h2"),e._uU(4,"Thank you. Your order is confirmed"),e.qZA(),e.TgZ(5,"p",2),e._uU(6,"Your order has not shipped yet, but this is to be expected as we are not a real store!"),e.qZA(),e.YNc(7,ue,2,1,"button",3),e.YNc(8,de,2,0,"button",4),e.qZA()),2&r&&(e.xp6(7),e.Q6J("ngIf",o.order),e.xp6(1),e.Q6J("ngIf",!o.order))},dependencies:[u.O5,h.rH]})}return n})()}];let me=(()=>{class n{static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275mod=e.oAB({type:n});static#r=this.\u0275inj=e.cJS({imports:[h.Bz.forChild(pe),h.Bz]})}return n})();var he=a(6208);let fe=(()=>{class n{static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275mod=e.oAB({type:n});static#r=this.\u0275inj=e.cJS({imports:[u.ez,me,he.m]})}return n})()}}]);