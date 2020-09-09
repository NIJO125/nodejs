const express=require('express');
const express();
const port=3000;
app.get('/',function(request,response){
  response.send('Hello World!');
});
app.listen(port,function(){
  console.log('server listening on http://localhost:'+port);

});
17