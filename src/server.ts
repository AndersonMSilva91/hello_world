import * as express from 'express';

const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send('You have to say Hellow world')
});

app.get('/bsm', (request, response) => {
    response.send('You must be persistence!!!<br>'+
     '<br>You must be a responsable person!!!<br>'+
     '<br>You must have future orientation!!!<br>'+
     '<br>You must have mentality of growth!!<br>'+
     '<br>You must have a nice work in team!!<br>'+
     '<br>You must have attention on the details!!<br>'+
     '<br>You must be a proactivity person!!<br>'+
     '<br>You have to be communicative!!')
});

app.get('/Week', (request, response) => {
    response.send('Data Base and API')
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}!`);
  });

