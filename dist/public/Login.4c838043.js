let e=document.createElement("style");e.innerHTML=".layout-login[data-v-75e905c4]{padding-top:200px;width:400px;margin:0 auto}",document.head.appendChild(e);import{d as a,r as l,m as t,A as r,B as o,q as n,s as d,b as s,o as m,e as u,g as i,y as p,j as c}from"./index.291c3855.js";import{r as f,v as g}from"./formExtend.2da9e98f.js";const w=()=>{let e=l({name:"admin",pwd:"admin"});const a=t(null),n=async()=>{let{name:l,pwd:t}=e;await g(a)&&(await r.dispatch("layout/login",{username:l,password:t}),o({title:"欢迎",message:"欢迎回来",type:"success"}))},d=l({name:[{validator:(e,a,l)=>{if(!a)return l(new Error("用户名不能为空"));l()},trigger:"blur"}],pwd:[{validator:(e,a,l)=>{if(!a)return l(new Error("密码不能为空"));l()},trigger:"blur"}]});return{form:e,onSubmit:n,enterSubmit:e=>{13===e.keyCode&&n()},rules:d,resetFields:f,ruleForm:a}};var b=a({name:"Login",setup:()=>({labelCol:{span:4},wrapperCol:{span:14},...w()})});const y=p("data-v-75e905c4");n("data-v-75e905c4");const v=c(" 登录 "),_=c(" 重置 "),C=i("p",{class:"leading-5"}," 账号: admin 密码: admin ",-1),h=i("p",{class:"leading-5"}," 账号: dev 密码: dev ",-1),x=i("p",{class:"leading-5"}," 账号: test 密码: test ",-1);d();const V=y(((e,a,l,t,r,o)=>{const n=s("el-input"),d=s("el-form-item"),p=s("el-button"),c=s("el-form");return m(),u("div",{class:"layout-login",onKeyup:a[4]||(a[4]=(...a)=>e.enterSubmit&&e.enterSubmit(...a))},[i(c,{ref:"ruleForm","label-position":"right","label-width":"80px",model:e.form,rules:e.rules},{default:y((()=>[i(d,{label:"用户名",prop:"name"},{default:y((()=>[i(n,{modelValue:e.form.name,"onUpdate:modelValue":a[1]||(a[1]=a=>e.form.name=a)},null,8,["modelValue"])])),_:1}),i(d,{label:"密码",prop:"pwd"},{default:y((()=>[i(n,{modelValue:e.form.pwd,"onUpdate:modelValue":a[2]||(a[2]=a=>e.form.pwd=a),type:"password",autocomplete:"off"},null,8,["modelValue"])])),_:1}),i(d,null,{default:y((()=>[i(p,{type:"primary",onClick:e.onSubmit},{default:y((()=>[v])),_:1},8,["onClick"]),i(p,{onClick:a[3]||(a[3]=a=>e.resetFields(e.ruleForm))},{default:y((()=>[_])),_:1})])),_:1}),i(d,null,{default:y((()=>[C,h,x])),_:1})])),_:1},8,["model","rules"])],32)}));b.render=V,b.__scopeId="data-v-75e905c4";export default b;