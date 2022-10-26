(()=>{"use strict";class e{constructor(e,t,n,r){this.templateElement=document.getElementById(e),this.hostElement=document.getElementById(t);const s=document.importNode(this.templateElement.content,!0);this.element=s.firstElementChild,r&&(this.element.id=r),this.attach(n)}attach(e){this.hostElement.insertAdjacentElement(e?"afterbegin":"beforeend",this.element)}}function t(e){let t=!0;return e.required&&(t=t&&0!==e.value.toString().trim().length),null!=e.minLength&&"string"==typeof e.minLength&&(t=t&&e.value>e.minLength),null!=e.maxLength&&"string"==typeof e.maxLength&&(t=t&&e.value<e.maxLength),null!=e.min&&"number"==typeof e.min&&(t=t&&e.value>e.min),null!=e.max&&"number"==typeof e.max&&(t=t&&e.value<e.max),t}function n(e,t,n){const r=n.value;return{configurable:!0,get(){return r.bind(this)}}}var r;!function(e){e[e.Active=0]="Active",e[e.Finished=1]="Finished"}(r||(r={}));class s{constructor(e,t,n,r,s){this.id=e,this.title=t,this.description=n,this.people=r,this.status=s}}class i{constructor(){this.listeners=[]}addListener(e){this.listeners.push(e)}}class l extends i{constructor(){super(),this.projects=[]}static getInstance(){return this.instance||(this.instance=new l),this.instance}addProject(e,t,n){const i=new s(Math.random().toString(),e,t,n,r.Active);this.projects.push(i),this.updateListeners()}moveProject(e,t){const n=this.projects.find((t=>t.id===e));n&&n.status!==t&&(n.status=t,this.updateListeners())}updateListeners(){for(const e of this.listeners)e(this.projects.slice())}}const o=l.getInstance();class a extends e{constructor(){super("project-input","app",!0,"user-input"),this.titleInputElement=this.element.querySelector("#title"),this.descriptionInputElement=this.element.querySelector("#description"),this.peopleInputElement=this.element.querySelector("#people"),this.configure()}renderContent(){}gatherUserInput(){const e=this.titleInputElement.value,n=this.descriptionInputElement.value,r=this.peopleInputElement.value,s={value:n,required:!0,minLength:3,maxLength:20},i={value:r,required:!0,minLength:1,maxLength:11};return t({value:e,required:!0,minLength:3,maxLength:12})&&t(s)&&t(i)?[e,n,+r]:void alert("Invalid input, please try again")}clearInputs(){this.titleInputElement.value="",this.descriptionInputElement.value="",this.peopleInputElement.value=""}submitHandler(e){e.preventDefault();const t=this.gatherUserInput();if(Array.isArray(t)){const[e,n,r]=t;o.addProject(e,n,r),this.clearInputs()}}configure(){this.element.addEventListener("submit",this.submitHandler)}}!function(e,t,n,r){var s,i=arguments.length,l=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(l=(i<3?s(l):i>3?s(t,n,l):s(t,n))||l);i>3&&l&&Object.defineProperty(t,n,l)}([n],a.prototype,"submitHandler",null);class c extends e{constructor(e,t){super("single-project",e,!1,t.id),this.project=t,this.configure(),this.renderContent()}get persons(){return 1===this.project.people?"1 person":`${this.project.people} persons`}dragStartHandler(e){e.dataTransfer.setData("text/plain",this.project.id),e.dataTransfer.effectAllowed="move"}dragEndHandler(e){}configure(){this.element.addEventListener("dragstart",this.dragStartHandler),this.element.addEventListener("dragend",this.dragEndHandler)}renderContent(){this.element.querySelector("h2").textContent=this.project.title,this.element.querySelector("h3").textContent=this.persons+" assigned",this.element.querySelector("p").textContent=this.project.description}}!function(e,t,n,r){var s,i=arguments.length,l=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(l=(i<3?s(l):i>3?s(t,n,l):s(t,n))||l);i>3&&l&&Object.defineProperty(t,n,l)}([n],c.prototype,"dragStartHandler",null);var d=function(e,t,n,r){var s,i=arguments.length,l=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(l=(i<3?s(l):i>3?s(t,n,l):s(t,n))||l);return i>3&&l&&Object.defineProperty(t,n,l),l};class p extends e{constructor(e){super("project-list","app",!1,`${e}-projects`),this.type=e,this.assignedProjects=[],this.configure(),this.renderContent()}dragOverHandler(e){e.dataTransfer&&"text/plain"===e.dataTransfer.types[0]&&(e.preventDefault(),this.element.querySelector("ul").classList.add("droppable"))}dropHandler(e){const t=e.dataTransfer.getData("text/plain");o.moveProject(t,"active"===this.type?r.Active:r.Finished)}dragLeaveHandler(e){this.element.querySelector("ul").classList.remove("droppable")}renderProjects(){document.getElementById(`${this.type}-projects-list`).innerHTML="";for(const e of this.assignedProjects)new c(this.element.querySelector("ul").id,e)}configure(){this.element.addEventListener("dragover",this.dragOverHandler),this.element.addEventListener("drop",this.dropHandler),this.element.addEventListener("dragleave",this.dragLeaveHandler),o.addListener((e=>{const t=e.filter((e=>"active"===this.type?e.status===r.Active:e.status===r.Finished));this.assignedProjects=t,this.renderProjects()}))}renderContent(){const e=`${this.type}-projects-list`;this.element.querySelector("ul").id=e,this.element.querySelector("h2").textContent=this.type.toUpperCase()+"PROJECTS"}}d([n],p.prototype,"dragOverHandler",null),d([n],p.prototype,"dropHandler",null),d([n],p.prototype,"dragLeaveHandler",null),new a,new p("active"),new p("finished")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QmpFLEVBQWNxQixPQUFTckIsRUFBYzBFLFNBRWhFLENBR0FDLGlCQUFpQmxGLEdBQ0QzQixLQUFLUSxRQUFRNEQsY0FBYyxNQUNuQ21DLFVBQVVPLE9BQU8sWUFDekIsQ0FFUUMsaUJBQ1E3RyxTQUFTQyxlQUN2QixHQUFHSCxLQUFLbUcsc0JBRUZhLFVBQVksR0FFbkIsSUFBSyxNQUFNQyxLQUFXakgsS0FBS29HLGlCQUMxQixJQUFJWCxFQUFZekYsS0FBS1EsUUFBUTRELGNBQWMsTUFBTzFELEdBQUl1RyxFQUV4RCxDQUVBMUMsWUFDQ3ZFLEtBQUtRLFFBQVFnRixpQkFBaUIsV0FBWXhGLEtBQUtxRyxpQkFDL0NyRyxLQUFLUSxRQUFRZ0YsaUJBQWlCLE9BQVF4RixLQUFLeUcsYUFDM0N6RyxLQUFLUSxRQUFRZ0YsaUJBQWlCLFlBQWF4RixLQUFLNkcsa0JBRWhEN0MsRUFBYXRCLGFBQWFLLElBQ3pCLE1BQU1tRSxFQUFtQm5FLEVBQVNvRSxRQUFRckQsR0FDdkIsV0FBZDlELEtBQUttRyxLQUNEckMsRUFBSXZCLFNBQVdMLEVBQWNxQixPQUU5Qk8sRUFBSXZCLFNBQVdMLEVBQWMwRSxXQUdyQzVHLEtBQUtvRyxpQkFBbUJjLEVBQ3hCbEgsS0FBSytHLGdCQUFnQixHQUV2QixDQUNBdkMsZ0JBQ0MsTUFBTTRDLEVBQVMsR0FBR3BILEtBQUttRyxxQkFDdkJuRyxLQUFLUSxRQUFRNEQsY0FBYyxNQUFPMUQsR0FBSzBHLEVBQ3ZDcEgsS0FBS1EsUUFBUTRELGNBQWMsTUFBTzZCLFlBQ2pDakcsS0FBS21HLEtBQUtrQixjQUFnQixVQUM1QixFQXZEQSxHQURDM0YsRyxvQ0FTRCxHQURDQSxHLGdDQVVELEdBRENBLEcscUNDbENGLElBQUl3QyxFQUNKLElBQUlnQyxFQUFZLFVBQ2hCLElBQUlBLEVBQVksVyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzLy4vc3JjL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vdHlwZXMvLi9zcmMvdXRpbC92YWxpZGF0aW9uLnRzIiwid2VicGFjazovL3R5cGVzLy4vc3JjL2RlY29yYXRvcnMvYXV0b2JpbmQudHMiLCJ3ZWJwYWNrOi8vdHlwZXMvLi9zcmMvbW9kZWxzL3Byb2plY3QudHMiLCJ3ZWJwYWNrOi8vdHlwZXMvLi9zcmMvc3RhdGUvcHJvamVjdC1zdGF0ZS50cyIsIndlYnBhY2s6Ly90eXBlcy8uL3NyYy9jb21wb25lbnRzL3Byb2plY3QtaW5wdXQudHMiLCJ3ZWJwYWNrOi8vdHlwZXMvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LWl0ZW0udHMiLCJ3ZWJwYWNrOi8vdHlwZXMvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LWxpc3QudHMiLCJ3ZWJwYWNrOi8vdHlwZXMvLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vYmFzZSBjbGFzc1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudDxUIGV4dGVuZHMgSFRNTEVsZW1lbnQsIFUgZXh0ZW5kcyBIVE1MRWxlbWVudD4ge1xyXG5cdHRlbXBsYXRlRWxlbWVudDogSFRNTFRlbXBsYXRlRWxlbWVudDtcclxuXHRob3N0RWxlbWVudDogVDtcclxuXHRlbGVtZW50OiBVO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHRlbXBsYXRlSWQ6IHN0cmluZyxcclxuXHRcdGhvc3RFbGVtZW50SWQ6IHN0cmluZyxcclxuXHRcdGluc2VydEF0U3RhcnQ6IGJvb2xlYW4sXHJcblx0XHRuZXdFbGVtZW50SWQ/OiBzdHJpbmdcclxuXHQpIHtcclxuXHRcdHRoaXMudGVtcGxhdGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcblx0XHRcdHRlbXBsYXRlSWRcclxuXHRcdCkhIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XHJcblx0XHR0aGlzLmhvc3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaG9zdEVsZW1lbnRJZCkhIGFzIFQ7XHJcblxyXG5cdFx0Y29uc3QgaW1wb3J0ZWROb2RlID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShcclxuXHRcdFx0dGhpcy50ZW1wbGF0ZUVsZW1lbnQuY29udGVudCxcclxuXHRcdFx0dHJ1ZVxyXG5cdFx0KTtcclxuXHRcdHRoaXMuZWxlbWVudCA9IGltcG9ydGVkTm9kZS5maXJzdEVsZW1lbnRDaGlsZCBhcyBVO1xyXG5cdFx0aWYgKG5ld0VsZW1lbnRJZCkge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnQuaWQgPSBuZXdFbGVtZW50SWQ7XHJcblx0XHR9XHJcblx0XHR0aGlzLmF0dGFjaChpbnNlcnRBdFN0YXJ0KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYXR0YWNoKGluc2VydEF0QmVnaW5uaW5nOiBib29sZWFuKSB7XHJcblx0XHR0aGlzLmhvc3RFbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChcclxuXHRcdFx0aW5zZXJ0QXRCZWdpbm5pbmcgPyBcImFmdGVyYmVnaW5cIiA6IFwiYmVmb3JlZW5kXCIsXHJcblx0XHRcdHRoaXMuZWxlbWVudFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGFic3RyYWN0IGNvbmZpZ3VyZSgpOiB2b2lkO1xyXG5cdGFic3RyYWN0IHJlbmRlckNvbnRlbnQoKTogdm9pZDtcclxufVxyXG4iLCIvL3ZhbGlkYXRpb25cclxuZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0YWJsZSB7XHJcblx0dmFsdWU6IHN0cmluZyB8IG51bWJlcjtcclxuXHRtaW5MZW5ndGg/OiBudW1iZXI7XHJcblx0bWF4TGVuZ3RoPzogbnVtYmVyO1xyXG5cdHJlcXVpcmVkPzogYm9vbGVhbjtcclxuXHRtaW4/OiBudW1iZXI7XHJcblx0bWF4PzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGUodmFsaWRhdGFibGVJbnB1dDogVmFsaWRhdGFibGUpIHtcclxuXHRsZXQgaXNWYWxpZCA9IHRydWU7XHJcblx0aWYgKHZhbGlkYXRhYmxlSW5wdXQucmVxdWlyZWQpIHtcclxuXHRcdGlzVmFsaWQgPSBpc1ZhbGlkICYmIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUudG9TdHJpbmcoKS50cmltKCkubGVuZ3RoICE9PSAwO1xyXG5cdH1cclxuXHRpZiAoXHJcblx0XHR2YWxpZGF0YWJsZUlucHV0Lm1pbkxlbmd0aCAhPSBudWxsICYmXHJcblx0XHR0eXBlb2YgdmFsaWRhdGFibGVJbnB1dC5taW5MZW5ndGggPT09IFwic3RyaW5nXCJcclxuXHQpIHtcclxuXHRcdGlzVmFsaWQgPSBpc1ZhbGlkICYmIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUgPiB2YWxpZGF0YWJsZUlucHV0Lm1pbkxlbmd0aDtcclxuXHR9XHJcblx0aWYgKFxyXG5cdFx0dmFsaWRhdGFibGVJbnB1dC5tYXhMZW5ndGggIT0gbnVsbCAmJlxyXG5cdFx0dHlwZW9mIHZhbGlkYXRhYmxlSW5wdXQubWF4TGVuZ3RoID09PSBcInN0cmluZ1wiXHJcblx0KSB7XHJcblx0XHRpc1ZhbGlkID0gaXNWYWxpZCAmJiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlIDwgdmFsaWRhdGFibGVJbnB1dC5tYXhMZW5ndGg7XHJcblx0fVxyXG5cclxuXHRpZiAoXHJcblx0XHR2YWxpZGF0YWJsZUlucHV0Lm1pbiAhPSBudWxsICYmXHJcblx0XHR0eXBlb2YgdmFsaWRhdGFibGVJbnB1dC5taW4gPT09IFwibnVtYmVyXCJcclxuXHQpIHtcclxuXHRcdGlzVmFsaWQgPSBpc1ZhbGlkICYmIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUgPiB2YWxpZGF0YWJsZUlucHV0Lm1pbjtcclxuXHR9XHJcblx0aWYgKFxyXG5cdFx0dmFsaWRhdGFibGVJbnB1dC5tYXggIT0gbnVsbCAmJlxyXG5cdFx0dHlwZW9mIHZhbGlkYXRhYmxlSW5wdXQubWF4ID09PSBcIm51bWJlclwiXHJcblx0KSB7XHJcblx0XHRpc1ZhbGlkID0gaXNWYWxpZCAmJiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlIDwgdmFsaWRhdGFibGVJbnB1dC5tYXg7XHJcblx0fVxyXG5cdHJldHVybiBpc1ZhbGlkO1xyXG59XHJcbiIsIi8vYXV0b2JpbmQgZGVjYXJhdG9yXHJcbmV4cG9ydCBmdW5jdGlvbiBhdXRvYmluZChfOiBhbnksIF8yOiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikge1xyXG5cdGNvbnN0IG9yaWdpbmFsTWV0aG9kID0gZGVzY3JpcHRvci52YWx1ZTtcclxuXHRjb25zdCBhZGpEZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IgPSB7XHJcblx0XHRjb25maWd1cmFibGU6IHRydWUsXHJcblx0XHRnZXQoKSB7XHJcblx0XHRcdGNvbnN0IGJvdWRuRm4gPSBvcmlnaW5hbE1ldGhvZC5iaW5kKHRoaXMpO1xyXG5cdFx0XHRyZXR1cm4gYm91ZG5GbjtcclxuXHRcdH0sXHJcblx0fTtcclxuXHRyZXR1cm4gYWRqRGVzY3JpcHRvcjtcclxufVxyXG4iLCIvL1Byb2plY3QgVHlwZVxyXG5leHBvcnQgZW51bSBQcm9qZWN0U3RhdHVzIHtcclxuXHRBY3RpdmUsXHJcblx0RmluaXNoZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHB1YmxpYyBpZDogc3RyaW5nLFxyXG5cdFx0cHVibGljIHRpdGxlOiBzdHJpbmcsXHJcblx0XHRwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyxcclxuXHRcdHB1YmxpYyBwZW9wbGU6IG51bWJlcixcclxuXHRcdHB1YmxpYyBzdGF0dXM6IFByb2plY3RTdGF0dXNcclxuXHQpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgUHJvamVjdCwgUHJvamVjdFN0YXR1cyB9IGZyb20gXCIuLi9tb2RlbHMvcHJvamVjdFwiO1xyXG5cclxudHlwZSBMaXN0ZW5lcjxUPiA9IChpdGVtczogVFtdKSA9PiB2b2lkO1xyXG5cclxuY2xhc3MgU3RhdGU8VD4ge1xyXG5cdHByb3RlY3RlZCBsaXN0ZW5lcnM6IExpc3RlbmVyPFQ+W10gPSBbXTtcclxuXHJcblx0YWRkTGlzdGVuZXIobGlzdGVuZXJGbjogTGlzdGVuZXI8VD4pIHtcclxuXHRcdHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXJGbik7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdFN0YXRlIGV4dGVuZHMgU3RhdGU8UHJvamVjdD4ge1xyXG5cdHByb3RlY3RlZCBwcm9qZWN0czogUHJvamVjdFtdID0gW107XHJcblx0cHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFByb2plY3RTdGF0ZTtcclxuXHJcblx0cHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XHJcblx0XHRpZiAodGhpcy5pbnN0YW5jZSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuXHRcdH1cclxuXHRcdHRoaXMuaW5zdGFuY2UgPSBuZXcgUHJvamVjdFN0YXRlKCk7XHJcblx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuXHR9XHJcblxyXG5cdGFkZFByb2plY3QodGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgbnVtT2ZQZW9wbGU6IG51bWJlcikge1xyXG5cdFx0Y29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KFxyXG5cdFx0XHRNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCksXHJcblx0XHRcdHRpdGxlLFxyXG5cdFx0XHRkZXNjcmlwdGlvbixcclxuXHRcdFx0bnVtT2ZQZW9wbGUsXHJcblx0XHRcdFByb2plY3RTdGF0dXMuQWN0aXZlXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG5cdFx0dGhpcy51cGRhdGVMaXN0ZW5lcnMoKTtcclxuXHR9XHJcblxyXG5cdG1vdmVQcm9qZWN0KHByb2plY3RJZDogc3RyaW5nLCBuZXdTdGF0dXM6IFByb2plY3RTdGF0dXMpIHtcclxuXHRcdGNvbnN0IHByb2plY3QgPSB0aGlzLnByb2plY3RzLmZpbmQoKHByaikgPT4gcHJqLmlkID09PSBwcm9qZWN0SWQpO1xyXG5cdFx0aWYgKHByb2plY3QgJiYgcHJvamVjdC5zdGF0dXMgIT09IG5ld1N0YXR1cykge1xyXG5cdFx0XHRwcm9qZWN0LnN0YXR1cyA9IG5ld1N0YXR1cztcclxuXHRcdFx0dGhpcy51cGRhdGVMaXN0ZW5lcnMoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgdXBkYXRlTGlzdGVuZXJzKCkge1xyXG5cdFx0Zm9yIChjb25zdCBsaXN0ZW5lckZuIG9mIHRoaXMubGlzdGVuZXJzKSB7XHJcblx0XHRcdGxpc3RlbmVyRm4odGhpcy5wcm9qZWN0cy5zbGljZSgpKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0U3RhdGUgPSBQcm9qZWN0U3RhdGUuZ2V0SW5zdGFuY2UoKTtcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vYmFzZS1jb21wb25lbnRcIjtcclxuaW1wb3J0ICogYXMgVmFsaWRhdGlvbiBmcm9tIFwiLi4vdXRpbC92YWxpZGF0aW9uXCI7XHJcbmltcG9ydCB7IGF1dG9iaW5kIH0gZnJvbSBcIi4uL2RlY29yYXRvcnMvYXV0b2JpbmRcIjtcclxuaW1wb3J0IHsgcHJvamVjdFN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlL3Byb2plY3Qtc3RhdGVcIjtcclxuXHJcbi8vUHJvamVjdCBpbnB1dCBjbGFzc1xyXG5leHBvcnQgY2xhc3MgUHJvamVjdElucHV0IGV4dGVuZHMgQ29tcG9uZW50PEhUTUxEaXZFbGVtZW50LCBIVE1MRm9ybUVsZW1lbnQ+IHtcclxuXHR0aXRsZUlucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcclxuXHRkZXNjcmlwdGlvbklucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcclxuXHRwZW9wbGVJbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoXCJwcm9qZWN0LWlucHV0XCIsIFwiYXBwXCIsIHRydWUsIFwidXNlci1pbnB1dFwiKTtcclxuXHJcblx0XHR0aGlzLnRpdGxlSW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFwiI3RpdGxlXCJcclxuXHRcdCkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHRcdHRoaXMuZGVzY3JpcHRpb25JbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XCIjZGVzY3JpcHRpb25cIlxyXG5cdFx0KSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cdFx0dGhpcy5wZW9wbGVJbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XCIjcGVvcGxlXCJcclxuXHRcdCkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcblx0XHR0aGlzLmNvbmZpZ3VyZSgpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyQ29udGVudCgpIHt9XHJcblxyXG5cdHByaXZhdGUgZ2F0aGVyVXNlcklucHV0KCk6IFtzdHJpbmcsIHN0cmluZywgbnVtYmVyXSB8IHZvaWQge1xyXG5cdFx0Y29uc3QgZW50ZXJlZFRpdGxlID0gdGhpcy50aXRsZUlucHV0RWxlbWVudC52YWx1ZTtcclxuXHRcdGNvbnN0IGVudGVyZWREZXNjcmlwdGlvbiA9IHRoaXMuZGVzY3JpcHRpb25JbnB1dEVsZW1lbnQudmFsdWU7XHJcblx0XHRjb25zdCBlbnRlcmVkUGVvcGxlID0gdGhpcy5wZW9wbGVJbnB1dEVsZW1lbnQudmFsdWU7XHJcblxyXG5cdFx0Y29uc3QgdGl0bGVWYWxpZGF0YWJsZTogVmFsaWRhdGlvbi5WYWxpZGF0YWJsZSA9IHtcclxuXHRcdFx0dmFsdWU6IGVudGVyZWRUaXRsZSxcclxuXHRcdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHRcdG1pbkxlbmd0aDogMyxcclxuXHRcdFx0bWF4TGVuZ3RoOiAxMixcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgZGVzY3J0aXB0aW9uVmFsaWRhdGFibGU6IFZhbGlkYXRpb24uVmFsaWRhdGFibGUgPSB7XHJcblx0XHRcdHZhbHVlOiBlbnRlcmVkRGVzY3JpcHRpb24sXHJcblx0XHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHRtaW5MZW5ndGg6IDMsXHJcblx0XHRcdG1heExlbmd0aDogMjAsXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHBlb3BsZVZhbGlkYXRhYmxlOiBWYWxpZGF0aW9uLlZhbGlkYXRhYmxlID0ge1xyXG5cdFx0XHR2YWx1ZTogZW50ZXJlZFBlb3BsZSxcclxuXHRcdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHRcdG1pbkxlbmd0aDogMSxcclxuXHRcdFx0bWF4TGVuZ3RoOiAxMSxcclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKFxyXG5cdFx0XHQhVmFsaWRhdGlvbi52YWxpZGF0ZSh0aXRsZVZhbGlkYXRhYmxlKSB8fFxyXG5cdFx0XHQhVmFsaWRhdGlvbi52YWxpZGF0ZShkZXNjcnRpcHRpb25WYWxpZGF0YWJsZSkgfHxcclxuXHRcdFx0IVZhbGlkYXRpb24udmFsaWRhdGUocGVvcGxlVmFsaWRhdGFibGUpXHJcblx0XHQpIHtcclxuXHRcdFx0YWxlcnQoXCJJbnZhbGlkIGlucHV0LCBwbGVhc2UgdHJ5IGFnYWluXCIpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gW2VudGVyZWRUaXRsZSwgZW50ZXJlZERlc2NyaXB0aW9uLCArZW50ZXJlZFBlb3BsZV07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNsZWFySW5wdXRzKCkge1xyXG5cdFx0dGhpcy50aXRsZUlucHV0RWxlbWVudC52YWx1ZSA9IFwiXCI7XHJcblx0XHR0aGlzLmRlc2NyaXB0aW9uSW5wdXRFbGVtZW50LnZhbHVlID0gXCJcIjtcclxuXHRcdHRoaXMucGVvcGxlSW5wdXRFbGVtZW50LnZhbHVlID0gXCJcIjtcclxuXHR9XHJcblxyXG5cdEBhdXRvYmluZFxyXG5cdHByaXZhdGUgc3VibWl0SGFuZGxlcihldmVudDogRXZlbnQpIHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCB1c2VySW5wdXQgPSB0aGlzLmdhdGhlclVzZXJJbnB1dCgpO1xyXG5cclxuXHRcdGlmIChBcnJheS5pc0FycmF5KHVzZXJJbnB1dCkpIHtcclxuXHRcdFx0Y29uc3QgW3RpdGxlLCBkZXNjLCBwZW9wbGVdID0gdXNlcklucHV0O1xyXG5cdFx0XHRwcm9qZWN0U3RhdGUuYWRkUHJvamVjdCh0aXRsZSwgZGVzYywgcGVvcGxlKTtcclxuXHRcdFx0dGhpcy5jbGVhcklucHV0cygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uZmlndXJlKCkge1xyXG5cdFx0dGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5zdWJtaXRIYW5kbGVyKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSBcIi4uL21vZGVscy9kcmFnLWRyb3BcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgYXV0b2JpbmQgfSBmcm9tIFwiLi4vZGVjb3JhdG9ycy9hdXRvYmluZFwiO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4uL21vZGVscy9wcm9qZWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdEl0ZW1cclxuXHRleHRlbmRzIENvbXBvbmVudDxIVE1MVUxpc3RFbGVtZW50LCBIVE1MTElFbGVtZW50PlxyXG5cdGltcGxlbWVudHMgRHJhZ2dhYmxlXHJcbntcclxuXHRwcml2YXRlIHByb2plY3Q6IFByb2plY3Q7XHJcblxyXG5cdGdldCBwZXJzb25zKCkge1xyXG5cdFx0aWYgKHRoaXMucHJvamVjdC5wZW9wbGUgPT09IDEpIHtcclxuXHRcdFx0cmV0dXJuIFwiMSBwZXJzb25cIjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBgJHt0aGlzLnByb2plY3QucGVvcGxlfSBwZXJzb25zYDtcclxuXHRcdH1cclxuXHR9XHJcblx0Y29uc3RydWN0b3IoaG9zdElkOiBzdHJpbmcsIHByb2plY3Q6IFByb2plY3QpIHtcclxuXHRcdHN1cGVyKFwic2luZ2xlLXByb2plY3RcIiwgaG9zdElkLCBmYWxzZSwgcHJvamVjdC5pZCk7XHJcblx0XHR0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG5cclxuXHRcdHRoaXMuY29uZmlndXJlKCk7XHJcblx0XHR0aGlzLnJlbmRlckNvbnRlbnQoKTtcclxuXHR9XHJcblxyXG5cdEBhdXRvYmluZFxyXG5cdGRyYWdTdGFydEhhbmRsZXIoZXZlbnQ6IERyYWdFdmVudCk6IHZvaWQge1xyXG5cdFx0ZXZlbnQuZGF0YVRyYW5zZmVyIS5zZXREYXRhKFwidGV4dC9wbGFpblwiLCB0aGlzLnByb2plY3QuaWQpO1xyXG5cdFx0ZXZlbnQuZGF0YVRyYW5zZmVyIS5lZmZlY3RBbGxvd2VkID0gXCJtb3ZlXCI7XHJcblx0fVxyXG5cdGRyYWdFbmRIYW5kbGVyKF86IERyYWdFdmVudCk6IHZvaWQge31cclxuXHJcblx0Y29uZmlndXJlKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgdGhpcy5kcmFnU3RhcnRIYW5kbGVyKTtcclxuXHRcdHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCB0aGlzLmRyYWdFbmRIYW5kbGVyKTtcclxuXHR9XHJcblx0cmVuZGVyQ29udGVudCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaDJcIikhLnRleHRDb250ZW50ID0gdGhpcy5wcm9qZWN0LnRpdGxlO1xyXG5cdFx0dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKSEudGV4dENvbnRlbnQgPSB0aGlzLnBlcnNvbnMgKyBcIiBhc3NpZ25lZFwiO1xyXG5cdFx0dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwXCIpIS50ZXh0Q29udGVudCA9IHRoaXMucHJvamVjdC5kZXNjcmlwdGlvbjtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vYmFzZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRHJhZ1N0YXJ0LCBEcmFnZ2FibGUgfSBmcm9tIFwiLi4vbW9kZWxzL2RyYWctZHJvcFwiO1xyXG5pbXBvcnQgeyBhdXRvYmluZCB9IGZyb20gXCIuLi9kZWNvcmF0b3JzL2F1dG9iaW5kXCI7XHJcbmltcG9ydCB7IFByb2plY3QsIFByb2plY3RTdGF0dXMgfSBmcm9tIFwiLi4vbW9kZWxzL3Byb2plY3RcIjtcclxuaW1wb3J0IHsgUHJvamVjdEl0ZW0gfSBmcm9tIFwiLi9wcm9qZWN0LWl0ZW1cIjtcclxuaW1wb3J0IHsgcHJvamVjdFN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlL3Byb2plY3Qtc3RhdGVcIjtcclxuZXhwb3J0IGNsYXNzIFByb2plY3RMaXN0XHJcblx0ZXh0ZW5kcyBDb21wb25lbnQ8SFRNTERpdkVsZW1lbnQsIEhUTUxFbGVtZW50PlxyXG5cdGltcGxlbWVudHMgRHJhZ1N0YXJ0XHJcbntcclxuXHRhc3NpZ25lZFByb2plY3RzOiBQcm9qZWN0W107XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgdHlwZTogXCJhY3RpdmVcIiB8IFwiZmluaXNoZWRcIikge1xyXG5cdFx0c3VwZXIoXCJwcm9qZWN0LWxpc3RcIiwgXCJhcHBcIiwgZmFsc2UsIGAke3R5cGV9LXByb2plY3RzYCk7XHJcblx0XHR0aGlzLmFzc2lnbmVkUHJvamVjdHMgPSBbXTtcclxuXHJcblx0XHR0aGlzLmNvbmZpZ3VyZSgpO1xyXG5cdFx0dGhpcy5yZW5kZXJDb250ZW50KCk7XHJcblx0fVxyXG5cclxuXHRAYXV0b2JpbmRcclxuXHRkcmFnT3ZlckhhbmRsZXIoZXZlbnQ6IERyYWdFdmVudCk6IHZvaWQge1xyXG5cdFx0aWYgKGV2ZW50LmRhdGFUcmFuc2ZlciAmJiBldmVudC5kYXRhVHJhbnNmZXIudHlwZXNbMF0gPT09IFwidGV4dC9wbGFpblwiKSB7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGNvbnN0IGxpc3RFbCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIikhO1xyXG5cdFx0XHRsaXN0RWwuY2xhc3NMaXN0LmFkZChcImRyb3BwYWJsZVwiKTtcclxuXHRcdH1cclxuXHR9XHJcblx0QGF1dG9iaW5kXHJcblx0ZHJvcEhhbmRsZXIoZXZlbnQ6IERyYWdFdmVudCk6IHZvaWQge1xyXG5cdFx0Y29uc3QgcHJqSWQgPSBldmVudC5kYXRhVHJhbnNmZXIhLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpO1xyXG5cdFx0cHJvamVjdFN0YXRlLm1vdmVQcm9qZWN0KFxyXG5cdFx0XHRwcmpJZCxcclxuXHRcdFx0dGhpcy50eXBlID09PSBcImFjdGl2ZVwiID8gUHJvamVjdFN0YXR1cy5BY3RpdmUgOiBQcm9qZWN0U3RhdHVzLkZpbmlzaGVkXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0QGF1dG9iaW5kXHJcblx0ZHJhZ0xlYXZlSGFuZGxlcihfOiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuXHRcdGNvbnN0IGxpc3RFbCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIikhO1xyXG5cdFx0bGlzdEVsLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wcGFibGVcIik7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlbmRlclByb2plY3RzKCkge1xyXG5cdFx0Y29uc3QgbGlzdEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcblx0XHRcdGAke3RoaXMudHlwZX0tcHJvamVjdHMtbGlzdGBcclxuXHRcdCkhIGFzIEhUTUxVTGlzdEVsZW1lbnQ7XHJcblx0XHRsaXN0RWwuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcblx0XHRmb3IgKGNvbnN0IHByakl0ZW0gb2YgdGhpcy5hc3NpZ25lZFByb2plY3RzKSB7XHJcblx0XHRcdG5ldyBQcm9qZWN0SXRlbSh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpIS5pZCwgcHJqSXRlbSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25maWd1cmUoKSB7XHJcblx0XHR0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIHRoaXMuZHJhZ092ZXJIYW5kbGVyKTtcclxuXHRcdHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCB0aGlzLmRyb3BIYW5kbGVyKTtcclxuXHRcdHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsIHRoaXMuZHJhZ0xlYXZlSGFuZGxlcik7XHJcblxyXG5cdFx0cHJvamVjdFN0YXRlLmFkZExpc3RlbmVyKChwcm9qZWN0czogYW55W10pID0+IHtcclxuXHRcdFx0Y29uc3QgcmVsZXZhbnRQcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigocHJqKSA9PiB7XHJcblx0XHRcdFx0aWYgKHRoaXMudHlwZSA9PT0gXCJhY3RpdmVcIikge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHByai5zdGF0dXMgPT09IFByb2plY3RTdGF0dXMuQWN0aXZlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gcHJqLnN0YXR1cyA9PT0gUHJvamVjdFN0YXR1cy5GaW5pc2hlZDtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLmFzc2lnbmVkUHJvamVjdHMgPSByZWxldmFudFByb2plY3RzO1xyXG5cdFx0XHR0aGlzLnJlbmRlclByb2plY3RzKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0cmVuZGVyQ29udGVudCgpIHtcclxuXHRcdGNvbnN0IGxpc3RJZCA9IGAke3RoaXMudHlwZX0tcHJvamVjdHMtbGlzdGA7XHJcblx0XHR0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpIS5pZCA9IGxpc3RJZDtcclxuXHRcdHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaDJcIikhLnRleHRDb250ZW50ID1cclxuXHRcdFx0dGhpcy50eXBlLnRvVXBwZXJDYXNlKCkgKyBcIlBST0pFQ1RTXCI7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IFByb2plY3RJbnB1dCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvamVjdC1pbnB1dFwiO1xyXG5pbXBvcnQgeyBQcm9qZWN0TGlzdCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvamVjdC1saXN0XCI7XHJcblxyXG5uZXcgUHJvamVjdElucHV0KCk7XHJcbm5ldyBQcm9qZWN0TGlzdChcImFjdGl2ZVwiKTtcclxubmV3IFByb2plY3RMaXN0KFwiZmluaXNoZWRcIik7XHJcbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInRlbXBsYXRlSWQiLCJob3N0RWxlbWVudElkIiwiaW5zZXJ0QXRTdGFydCIsIm5ld0VsZW1lbnRJZCIsInRoaXMiLCJ0ZW1wbGF0ZUVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaG9zdEVsZW1lbnQiLCJpbXBvcnRlZE5vZGUiLCJpbXBvcnROb2RlIiwiY29udGVudCIsImVsZW1lbnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImlkIiwiYXR0YWNoIiwiaW5zZXJ0QXRCZWdpbm5pbmciLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJ2YWxpZGF0ZSIsInZhbGlkYXRhYmxlSW5wdXQiLCJpc1ZhbGlkIiwicmVxdWlyZWQiLCJ2YWx1ZSIsInRvU3RyaW5nIiwidHJpbSIsImxlbmd0aCIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsIm1pbiIsIm1heCIsImF1dG9iaW5kIiwiXyIsIl8yIiwiZGVzY3JpcHRvciIsIm9yaWdpbmFsTWV0aG9kIiwiY29uZmlndXJhYmxlIiwiZ2V0IiwiYmluZCIsIlByb2plY3RTdGF0dXMiLCJQcm9qZWN0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInBlb3BsZSIsInN0YXR1cyIsIlN0YXRlIiwibGlzdGVuZXJzIiwiYWRkTGlzdGVuZXIiLCJsaXN0ZW5lckZuIiwicHVzaCIsIlByb2plY3RTdGF0ZSIsInN1cGVyIiwicHJvamVjdHMiLCJzdGF0aWMiLCJpbnN0YW5jZSIsImFkZFByb2plY3QiLCJudW1PZlBlb3BsZSIsIm5ld1Byb2plY3QiLCJNYXRoIiwicmFuZG9tIiwiQWN0aXZlIiwidXBkYXRlTGlzdGVuZXJzIiwibW92ZVByb2plY3QiLCJwcm9qZWN0SWQiLCJuZXdTdGF0dXMiLCJwcm9qZWN0IiwiZmluZCIsInByaiIsInNsaWNlIiwicHJvamVjdFN0YXRlIiwiZ2V0SW5zdGFuY2UiLCJQcm9qZWN0SW5wdXQiLCJ0aXRsZUlucHV0RWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkZXNjcmlwdGlvbklucHV0RWxlbWVudCIsInBlb3BsZUlucHV0RWxlbWVudCIsImNvbmZpZ3VyZSIsInJlbmRlckNvbnRlbnQiLCJnYXRoZXJVc2VySW5wdXQiLCJlbnRlcmVkVGl0bGUiLCJlbnRlcmVkRGVzY3JpcHRpb24iLCJlbnRlcmVkUGVvcGxlIiwiZGVzY3J0aXB0aW9uVmFsaWRhdGFibGUiLCJwZW9wbGVWYWxpZGF0YWJsZSIsImFsZXJ0IiwiY2xlYXJJbnB1dHMiLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJJbnB1dCIsIkFycmF5IiwiaXNBcnJheSIsImRlc2MiLCJhZGRFdmVudExpc3RlbmVyIiwiUHJvamVjdEl0ZW0iLCJob3N0SWQiLCJwZXJzb25zIiwiZHJhZ1N0YXJ0SGFuZGxlciIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJlZmZlY3RBbGxvd2VkIiwiZHJhZ0VuZEhhbmRsZXIiLCJ0ZXh0Q29udGVudCIsIlByb2plY3RMaXN0IiwidHlwZSIsImFzc2lnbmVkUHJvamVjdHMiLCJkcmFnT3ZlckhhbmRsZXIiLCJ0eXBlcyIsImNsYXNzTGlzdCIsImFkZCIsImRyb3BIYW5kbGVyIiwicHJqSWQiLCJnZXREYXRhIiwiRmluaXNoZWQiLCJkcmFnTGVhdmVIYW5kbGVyIiwicmVtb3ZlIiwicmVuZGVyUHJvamVjdHMiLCJpbm5lckhUTUwiLCJwcmpJdGVtIiwicmVsZXZhbnRQcm9qZWN0cyIsImZpbHRlciIsImxpc3RJZCIsInRvVXBwZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==