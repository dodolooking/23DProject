// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(J,f){function K(b){for(var c={items:[],count:0},a=0;a<b;++a)c.items.push(void 0);return c}function B(b,c){return b[0]*c[0]+b[1]*c[1]}function L(b){return Math.sqrt(B(b,b))}function G(b,c){var a=L(c);b[0]=c[0]/a;b[1]=c[1]/a;return b}function x(b,c){b[0]=-c[1];b[1]=c[0];return b}function C(b,c){return b[0]*c[1]-b[1]*c[0]}function t(b,c){b[0]=-c[0];b[1]=-c[1];return b}function u(b,c,a){b[0]=c[0]*a;b[1]=c[1]*a;return b}function y(b,c,a){b[0]=c[0]+a[0];b[1]=c[1]+a[1];
return b}function N(b,c){b=B(b,c);return.999<b?0:-.999>b?Math.PI:Math.acos(b)}function M(b,c,a,d,g){if(0===d)b.count=0;else{var h=L(c),e=u(k[0],c,1/h);a=u(k[1],a,1/h);e=N(e,a);e=(g?-1:1)*e/d;g=Math.cos(e);e=Math.sin(e);a=c[0];var m=c[1];for(c=0;c<d-1;++c)h=a,a=g*h-e*m,m=e*h+g*m,b.items[c][0]=a,b.items[c][1]=m;b.count=d-1}}function A(b){for(var c=b.count,a=Math.floor(c/2),d=0;d<a;++d){var g=b.items[d];b.items[d]=b.items[c-d-1];b.items[c-d-1]=g}}function D(b,c,a){a=x(k[0],a);c=t(k[1],a);var d=b.vectors.items[0];
d.vector[0]=a[0];d.vector[1]=a[1];d.side=-1;a=b.vectors.items[1];a.vector[0]=c[0];a.vector[1]=c[1];a.side=1;b.vectors.count=2;c=b.lists[l.ENTRY];c.items[0]=0;c.items[1]=1;c.count=2;c=b.lists[l.EXIT];c.items[0]=0;c.items[1]=1;c.count=2;b.lists[l.CAP].count=0;b.capCenter=void 0}var l;(function(b){b[b.ENTRY=1]="ENTRY";b[b.EXIT=2]="EXIT";b[b.CAP=3]="CAP"})(l=f.VectorRole||(f.VectorRole={}));var z;(function(b){b[b.START=1]="START";b[b.END=2]="END"})(z=f.CapPosition||(f.CapPosition={}));f.SYSTEM_MAG_LIMIT=
3.8;f.MITER_SAFE_RADS=2*Math.acos(1/f.SYSTEM_MAG_LIMIT);var H=f.SYSTEM_MAG_LIMIT*f.SYSTEM_MAG_LIMIT,P=16/(2*Math.PI);f.allocTriangles=function(b){for(var c={items:[],count:0},a=0;a<b;++a)c.items.push({v1:{vector:[void 0,void 0],side:void 0},v2:{vector:[void 0,void 0],side:void 0},v3:{vector:[void 0,void 0],side:void 0}});return c};f.allocExtrudeVectors=function(){for(var b={items:[],count:0},c=0;30>c;++c)b.items.push({vector:[void 0,void 0],side:void 0});c={};c[l.ENTRY]=K(20);c[l.EXIT]=K(20);c[l.CAP]=
K(20);return{vectors:b,lists:c}};var k=[];for(J=0;32>J;++J)k.push([void 0,void 0]);var q=function(b){for(var c={items:[],count:0},a=0;a<b;++a)c.items.push([void 0,void 0]);return c}(16);f.length=L;f.normalize=G;f.getNumberOfSlices=function(b){return Math.round(b*P)};f.getRads=N;var E=[void 0,void 0],F=[void 0,void 0];f.bridge=function(b,c,a,d){var g=c.vectors;c=c.lists[l.EXIT];var h=a.vectors;a=a.lists[l.ENTRY];var e,k;if(c.count===a.count+1)d=c.items,e=g.items,k=a.items,h=h.items;else if(a.count===
c.count+1)d=a.items,e=h.items,k=c.items,h=g.items;else if(c.count===a.count)d?(d=c.items,e=g.items,k=a.items,h=h.items):(d=a.items,e=h.items,k=c.items,h=g.items);else throw Error("Cannot bridge "+c.count+" to "+a.count+".");g=c.count+a.count-2;b.count=g;E[0]=d;E[1]=k;F[0]=e;F[1]=h;for(c=0;c<g;++c)h=b.items[c],a=(c+0)%2,a=F[a][E[a][Math.floor((c+0)/2)]],h.v1.vector[0]=a.vector[0],h.v1.vector[1]=a.vector[1],h.v1.side=a.side,h.v1.base=a.base,a=(c+1)%2,a=F[a][E[a][Math.floor((c+1)/2)]],h.v2.vector[0]=
a.vector[0],h.v2.vector[1]=a.vector[1],h.v2.side=a.side,h.v2.base=a.base,a=(c+2)%2,a=F[a][E[a][Math.floor((c+2)/2)]],h.v3.vector[0]=a.vector[0],h.v3.vector[1]=a.vector[1],h.v3.side=a.side,h.v3.base=a.base};f.pie=function(b,c){if(0===c.lists[l.CAP].count)b.count=0;else{if(1===c.lists[l.CAP].count)throw Error("A single vector is not enough to define a pie.");b.count=c.lists[l.CAP].count-1;for(var a=0;a<b.count;++a){var d=b.items[a],g=c.vectors.items[c.lists[l.CAP].items[a]];d.v1.vector[0]=g.vector[0];
d.v1.vector[1]=g.vector[1];d.v1.side=g.side;d.v1.base=g.base;g=c.vectors.items[c.lists[l.CAP].items[a+1]];d.v2.vector[0]=g.vector[0];d.v2.vector[1]=g.vector[1];d.v2.side=g.side;d.v2.base=g.base;g=c.vectors.items[c.capCenter];d.v3.vector[0]=g.vector[0];d.v3.vector[1]=g.vector[1];d.v3.side=g.side;d.v3.base=g.base}}};f.buttCap=function(b,c,a){D(b,c,a)};f.roundCap=function(b,c,a,d,g){D(b,c,a);a=d===z.START?0:1;d=d===z.START?1:0;b.capCenter=b.vectors.count;c=b.vectors.items[b.capCenter];c.vector[0]=0;
c.vector[1]=0;c.side=0;++b.vectors.count;M(q,b.vectors.items[a].vector,b.vectors.items[d].vector,g,!1);g=b.vectors.count;c=b.lists[l.CAP];c.items[0]=a;a=b.vectors.items[a].side;for(var h=b.vectors.items[d].side,e=0;e<q.count;++e){var k=e<q.count/2?a:h,O=q.items[e],f=b.vectors.items[g+e];f.vector[0]=O[0];f.vector[1]=O[1];f.side=k;c.items[e+1]=g+e}c.items[q.count+1]=d;c.count=q.count+2;b.vectors.count=g+q.count};var v=Math.cos(Math.PI/4),p=Math.sin(Math.PI/4),I=Math.sqrt(2);f.squareCap=function(b,c,
a,d){D(b,c,a);c=d===z.START?0:1;a=d===z.START?1:0;var g=k[0],h=k[1],e=k[2],m=k[3];d=k[4];var l=b.vectors.items[c].vector;g[0]=v*l[0]-p*l[1];g[1]=p*l[0]+v*l[1];u(m,g,I);h[0]=v*g[0]-p*g[1];h[1]=p*g[0]+v*g[1];e[0]=v*h[0]-p*h[1];e[1]=p*h[0]+v*h[1];u(d,e,I);c=b.vectors.items[c];c.vector[0]=m[0];c.vector[1]=m[1];b=b.vectors.items[a];b.vector[0]=d[0];b.vector[1]=d[1]};f.squareCapAlt=function(b,c,a,d){D(b,c,a);c=d===z.START?0:1;d=d===z.START?1:0;b.capCenter=b.vectors.count;a=b.vectors.items[b.capCenter];
a.vector[0]=0;a.vector[1]=0;a.side=0;++b.vectors.count;var g=k[0],h=k[1],e=k[2],m=k[3];a=k[4];var f=b.vectors.items[c].vector;g[0]=v*f[0]-p*f[1];g[1]=p*f[0]+v*f[1];u(m,g,I);h[0]=v*g[0]-p*g[1];h[1]=p*g[0]+v*g[1];e[0]=v*h[0]-p*h[1];e[1]=p*h[0]+v*h[1];u(a,e,I);g=b.vectors.count;h=b.lists[l.CAP];h.items[0]=c;e=b.vectors.items[g+0];e.vector[0]=m[0];e.vector[1]=m[1];e.side=b.vectors.items[c].side;h.items[1]=g+0;c=b.vectors.items[g+1];c.vector[0]=a[0];c.vector[1]=a[1];c.side=b.vectors.items[d].side;h.items[2]=
g+1;h.items[3]=d;h.count=4;b.vectors.count+=2};f.fastMiterJoin=D;f.miterJoin=function(b,c,a){c=x(k[0],c);a=x(k[1],a);var d=k[2];d[0]=c[0]+a[0];d[1]=c[1]+a[1];a=G(k[3],d);c=B(a,c);a=u(k[4],a,1/c);c=t(k[5],a);d=b.vectors.items[0];d.vector[0]=a[0];d.vector[1]=a[1];d.side=-1;a=b.vectors.items[1];a.vector[0]=c[0];a.vector[1]=c[1];a.side=1;b.vectors.count=2;c=b.lists[l.ENTRY];c.items[0]=0;c.items[1]=1;c.count=2;c=b.lists[l.EXIT];c.items[0]=0;c.items[1]=1;c.count=2;b.lists[l.CAP].count=0;b.capCenter=void 0};
f.bevelJoin=function(b,c,a,d){var g=d*d;d=C(c,a);var h=0<d?[-1,1]:[1,-1],e=h[0],h=h[1],m=0<d?t(k[0],x(k[1],c)):x(k[2],c),f=0<d?t(k[3],x(k[4],a)):x(k[5],a),q=k[6];q[0]=m[0]+f[0];q[1]=m[1]+f[1];var q=G(k[7],q),r=t(k[8],q),v=B(q,m),n=C(q,m),p=Math.abs(n/v),z=1+p*p,w=z<H?[p,!1]:[Math.sqrt(H-1),!0],n=w[0],w=w[1],p=z<g?[p,!1]:[Math.sqrt(g-1),!0],g=p[0];(p=p[1])&&w?(w=b.vectors.items[0],y(w.vector,t(k[9],m),u(k[10],t(k[11],c),n)),w.side=e,r=b.vectors.items[1],y(r.vector,t(k[12],f),u(k[13],a,n)),r.side=e,
e=b.vectors.items[2],e.vector[0]=0,e.vector[1]=0,e.side=0,e=b.vectors.items[3],y(e.vector,m,u(k[14],c,g)),e.side=h,c=b.vectors.items[4],y(c.vector,f,u(k[15],t(k[16],a),g)),c.side=h,b.vectors.count=5,a=b.lists[l.ENTRY],a.items[0]=0,a.items[1]=2,a.items[2]=3,a.count=3,a=b.lists[l.EXIT],a.items[0]=1,a.items[1]=2,a.items[2]=4,a.count=3,a=b.lists[l.CAP],a.items[0]=3,a.items[1]=4,a.count=2,b.capCenter=2):!p&&w?(w=b.vectors.items[0],y(w.vector,t(k[9],m),u(k[10],t(k[11],c),n)),w.side=e,r=b.vectors.items[1],
y(r.vector,t(k[12],f),u(k[13],a,n)),r.side=e,e=b.vectors.items[2],e.vector[0]=0,e.vector[1]=0,e.side=0,e=b.vectors.items[3],u(e.vector,q,1/v),e.side=h,b.vectors.count=4,a=b.lists[l.ENTRY],a.items[0]=0,a.items[1]=2,a.items[2]=3,a.count=3,a=b.lists[l.EXIT],a.items[0]=1,a.items[1]=2,a.items[2]=3,a.count=3,b.lists[l.CAP].count=0,b.capCenter=void 0):p&&!w?(w=b.vectors.items[0],u(w.vector,r,1/v),w.side=e,r=b.vectors.items[1],r.vector[0]=0,r.vector[1]=0,r.side=0,e=b.vectors.items[2],y(e.vector,m,u(k[9],
c,g)),e.side=h,e=b.vectors.items[3],y(e.vector,f,u(k[10],t(k[11],a),g)),e.side=h,b.vectors.count=4,a=b.lists[l.ENTRY],a.items[0]=0,a.items[1]=1,a.items[2]=2,a.count=3,a=b.lists[l.EXIT],a.items[0]=0,a.items[1]=1,a.items[2]=3,a.count=3,a=b.lists[l.CAP],a.items[0]=2,a.items[1]=3,a.count=2,b.capCenter=1):p||w||(w=b.vectors.items[0],u(w.vector,r,1/v),w.side=e,r=b.vectors.items[1],u(r.vector,q,1/v),r.side=h,b.vectors.count=2,a=b.lists[l.ENTRY],a.items[0]=0,a.items[1]=1,a.count=2,a=b.lists[l.EXIT],a.items[0]=
0,a.items[1]=1,a.count=2,b.lists[l.CAP].count=0,b.capCenter=void 0);0>d&&(A(b.lists[l.ENTRY]),A(b.lists[l.EXIT]))};f.roundJoin=function(b,c,a,d){var g=C(c,a),h=0<g?[-1,1]:[1,-1],e=h[0],h=h[1],m=0<g?t(k[0],x(k[1],c)):x(k[2],c),f=0<g?t(k[3],x(k[4],a)):x(k[5],a),p=k[6];p[0]=m[0]+f[0];p[1]=m[1]+f[1];var r=G(k[7],p),p=t(k[8],r),v=B(r,m),r=C(r,m),r=Math.abs(r/v),n=1+r*r<H?[r,!1]:[Math.sqrt(H-1),!0],r=n[0];n[1]?(n=b.vectors.items[0],n.vector[0]=m[0],n.vector[1]=m[1],n.side=h,n=b.vectors.items[1],n.vector[0]=
f[0],n.vector[1]=f[1],n.side=h,n=b.vectors.items[2],y(n.vector,t(k[9],m),u(k[10],t(k[11],c),r)),n.side=e,c=b.vectors.items[3],y(c.vector,t(k[12],f),u(k[13],a,r)),c.side=e,a=b.vectors.items[4],a.vector[0]=0,a.vector[1]=0,a.side=0,b.vectors.count=5,a=b.lists[l.ENTRY],a.items[0]=2,a.items[1]=4,a.items[2]=0,a.count=3,a=b.lists[l.EXIT],a.items[0]=3,a.items[1]=4,a.items[2]=1,a.count=3,b.capCenter=4):(n=b.vectors.items[0],n.vector[0]=m[0],n.vector[1]=m[1],n.side=h,n=b.vectors.items[1],n.vector[0]=f[0],n.vector[1]=
f[1],n.side=h,n=b.vectors.items[2],u(n.vector,p,1/v),n.side=e,c=b.vectors.items[3],c.vector[0]=0,c.vector[1]=0,c.side=0,b.vectors.count=4,a=b.lists[l.ENTRY],a.items[0]=2,a.items[1]=3,a.items[2]=0,a.count=3,a=b.lists[l.EXIT],a.items[0]=2,a.items[1]=3,a.items[2]=1,a.count=3,b.capCenter=3);M(q,m,f,d,0>g);d=b.vectors.count;m=b.lists[l.CAP];for(f=m.items[0]=0;f<q.count;++f)a=q.items[f],e=b.vectors.items[d+f],e.vector[0]=a[0],e.vector[1]=a[1],e.side=h,m.items[f+1]=d+f;m.items[q.count+1]=1;m.count=q.count+
2;b.vectors.count=d+q.count;0>g&&(A(b.lists[l.ENTRY]),A(b.lists[l.EXIT]))};f.unitRoundJoin=function(b,c,a,d){var g=C(c,a),h=0<g?[-1,1]:[1,-1],e=h[0],h=h[1];c=0<g?t(k[0],x(k[1],c)):x(k[2],c);a=0<g?t(k[3],x(k[4],a)):x(k[5],a);var f=b.vectors.items[0];f.vector[0]=c[0];f.vector[1]=c[1];f.side=h;f=b.vectors.items[1];f.vector[0]=a[0];f.vector[1]=a[1];f.side=h;f=b.vectors.items[2];t(f.vector,c);f.side=e;f=b.vectors.items[3];t(f.vector,a);f.side=e;e=b.vectors.items[4];e.vector[0]=0;e.vector[1]=0;e.side=0;
b.vectors.count=5;e=b.lists[l.ENTRY];e.items[0]=2;e.items[1]=4;e.items[2]=0;e.count=3;e=b.lists[l.EXIT];e.items[0]=3;e.items[1]=4;e.items[2]=1;e.count=3;b.capCenter=4;M(q,c,a,d,0>g);d=b.vectors.count;c=b.lists[l.CAP];for(e=c.items[0]=0;e<q.count;++e)a=q.items[e],f=b.vectors.items[d+e],f.vector[0]=a[0],f.vector[1]=a[1],f.side=h,c.items[e+1]=d+e;c.items[q.count+1]=1;c.count=q.count+2;b.vectors.count=d+q.count;0>g&&(A(b.lists[l.ENTRY]),A(b.lists[l.EXIT]))};f.rectJoin=function(b,c,a){c=x(k[0],c);a=x(k[1],
a);var d=b.vectors.items[0];d.vector[0]=c[0];d.vector[1]=c[1];d.side=-1;d=b.vectors.items[1];d.vector[0]=a[0];d.vector[1]=a[1];d.side=-1;d=b.vectors.items[2];t(d.vector,c);d.side=1;c=b.vectors.items[3];t(c.vector,a);c.side=1;b.vectors.count=4;c=b.lists[l.ENTRY];c.items[0]=0;c.items[1]=2;c.count=2;c=b.lists[l.EXIT];c.items[0]=1;c.items[1]=3;c.count=2;b.capCenter=void 0}});