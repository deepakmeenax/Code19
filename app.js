const request=require('request')
const express = require('express')
const path = require('path')
const publicDirectory = path.join(__dirname,'/public')

const app = express();
app.use(express.static(publicDirectory))

const port = process.env.PORT || 3000

var options = {
    method: 'GET',
    url: 'https://covid-193.p.rapidapi.com/statistics',
    headers: {
      'x-rapidapi-host': 'covid-193.p.rapidapi.com',
      'x-rapidapi-key':process.env.API_KEY
    },
    proxy:process.env.PROXY || null
};

 
var indiaurl = {
  method: 'GET',
  url: 'https://api.covid19india.org/data.json',
  proxy:process.env.PROXY || null
};


var rajasthanurl = {
  method: 'GET',
  url: 'https://api.covid19india.org/v2/state_district_wise.json',
  proxy:process.env.PROXY || null
};



const covidCall = (callback) =>{
request(options, function (error, response, body) {
    if (error) {
      return callback('error',undefined)
    }
    
    data=JSON.parse(body);
    callback(undefined,data);

});
}
app.get('/covidata',(req,res)=>{
    covidCall(callback = (error,data)=>{
      if(error)
      {
        return res.send(error)
      }
      res.send(data)

    })
})



const indiaCall = (callback) =>{
  request(indiaurl, function (error, response, body) {
      if (error) {
        return callback('error',undefined)
      }

      data=JSON.parse(body);
      callback(undefined,data);
  
  });
  }
  app.get('/indiadata',(req,res)=>{
      indiaCall(callback = (error,data)=>{
        if(error)
        {
          return res.send(error)
        }
        res.send(data)
  
      })
})



const rajasthanCall = (callback) =>{
  request(rajasthanurl, function (error, response, body) {
      if (error) {
        return callback('error',undefined)
      }

      data=JSON.parse(body);
      callback(undefined,data);
  
  });
  }
  app.get('/rajasthandata',(req,res)=>{
      rajasthanCall(callback = (error,data)=>{
        if(error)
        {
          return res.send(error)
        }
        res.send(data)
  
      })
})





app.listen(port,()=>{
    console.log('server is started on port',port);
})