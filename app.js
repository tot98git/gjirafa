const express = require('express');
const app = express();
const router = express.Router();
const cheerio = require('cheerio');
const request = require('request-promise-native');




function getInfo(from,to,date){
    var schedule=[{}]
    const config = {
        uri:`https://gjirafa.com/Autobus?nisja=${from}&destinacioni=${to}&dataNisjes=${date}`,
        transform:function(body){
            const $=cheerio.load(body);
           return $(".pathsItems li button:first-child").map((index,ele)=>{
                query = $(ele).attr("data-orari")!=undefined?$(ele).attr("data-orari").split("-"):null
                operator = $(ele).attr("data-operator");
               return query!=null?schedule[index]={
                   depart:query[0],
                   arriv:query[1],
                   operat:operator
               }:null
        }).get();
    }
}
 return request(config)
}
module.exports=function getInfo(from,to,date){
    var schedule=[{}]
    const config = {
        uri:`https://gjirafa.com/Autobus?nisja=${from}&destinacioni=${to}&dataNisjes=${date}`,
        transform:function(body){
            const $=cheerio.load(body);
           return $(".pathsItems li button:first-child").map((index,ele)=>{
                query = $(ele).attr("data-orari")!=undefined?$(ele).attr("data-orari").split("-"):null
                operator = $(ele).attr("data-operator");
               return query!=null?schedule[index]={
                   depart:query[0],
                   arriv:query[1],
                   operat:operator
               }:null
        }).get();
    }
}
 return request(config)
}