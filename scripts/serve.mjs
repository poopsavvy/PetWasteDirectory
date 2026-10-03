import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, sep, extname } from 'node:path';
const root=resolve('dist');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.xml':'application/xml','.txt':'text/plain; charset=utf-8'};
http.createServer(async(req,res)=>{
 try {
  const path=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  let file=resolve(root,'.'+path);
  if(file!==root && !file.startsWith(root+sep)){res.writeHead(403);res.end('Forbidden');return;}
  try { if((await stat(file)).isDirectory())file=resolve(file,'index.html'); await stat(file); }
  catch {res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});res.end(await readFile(resolve(root,'404.html')));return;}
  res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream','X-Content-Type-Options':'nosniff'});res.end(await readFile(file));
 }catch {res.writeHead(400);res.end('Bad request');}
}).listen(Number(process.env.PORT||4321),'0.0.0.0',()=>console.log(`Pet Waste Directory listening on port ${process.env.PORT||4321}`));
