({MAKEFUN_INPUT_DIR:I,MAKEFUN_OUTPUT_DIR:O}=process.env)
F=require('fs')
R=F.readFileSync
W=F.writeFileSync
H=n=>{throw n}
for(d of F.readdirSync(I)){
U='/'+d,p=R(I+U+'/program.bin'),q=R(I+U+'/input.bin'),s=[],c=[],m=[],o='',j=k=e=t=0,u=i=>s.length<i&&H(2),w=v=>s.push(v)>256&&H(3),P=()=>s.pop()
try{for(;t++<1e6;){
x=p[j]??H(9)
if(x<8)x||H(0),x<3?(p[j+x*3-2]??H(9),w(x<2?p[j+1]<<24>>24:p.readInt32LE(j+1)),j+=x*3-2):(u(x-1>>1),x<4?P():x%2?s.push(...s.splice((1-x)/2,1)):w(s.at(1-x/2)))
else if(x>15&x<35&x!=31)
n=2-(x==23|x==27),u(n),b=P(),a=n>1&&P(),x>18&x<23&!b&&H(4),A=a>>>0,B=b>>>0,w([a+b,a-b,Math.imul(a,b),a/b,a%b,A/B,A%B,-b,a&b,a|b,a^b,~b,a<<b,a>>b,a>>>b,,a==b,a<b,A<B][x-16]|0)
else if(x>47&x<53)
x<52&&(p[j+2]??H(9)),y=p[j+1]|p[j+2]<<8,x<51?(u(x>48),j+=2+(y<<16>>16)*(x<49||x<50==!P())):x==51?(c[63]&&H(7),c.push(j+3),j=y-1):(j=c.pop()||H(8),j--)
else if(x>63&x<66)
u(1+(x>64)),a=P(),a>>8&&H(6),x==64?w(m[a]|0):m[a]=P()
else if(x>79&x<84)
x<82?(u(1),y=x<81?''+P():String.fromCharCode(P()),o.length>65536-y.length&&H(11),o+=y):x<83?w(q[k++]??-1):(u(1),H(P()&255))
else H(5)
j++
}e=10}catch(g){e=g}
F.mkdirSync(O+U,{recursive:!0})
W(O+U+'/stdout.bin',o,'latin1')
W(O+U+'/exit.txt',e+'')
}
