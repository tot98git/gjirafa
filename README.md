# <h2 align="center">Gjirafa Bus module</h2>


<h5 align="center"><a href="gjirafa.com">Gjirafa.com</a> offers a very useful service to check the bus schedule in Kosovo. They do not, however, offer an API or module which developers can use and present the information in services that assist people's needs such as a more compact website or mobile application. As such I have created this module that scraps the provider's website and returns the info in JSON format.</h5>
<br/>

## Background 
The Republic Of Kosovo doesn't have much on-line presence of platforms that give informations about public services. Bus transport service is one of those. While Gjirafa offers the most reliable informations regarding the schedules of the buses, it doesn't offer, let's say, an English version of the said service for the international audience. This tool could be used to create the missing platform or various other platforms, according to your creativity.


## Description
This tool parses the page of interest, <a href="https://gjirafa.com/Autobus">Gjirafa Linja te autobuseve</a> (eng. Gjirafa bus lines) using the ``request`` module. Then, the parsed web page is scrapped using the ``cheerio`` module. ``Cheerio`` uses JQuery traversing methods to go through DOM elements.

## Installation
The module can be installed using ``npm install gjirafaapi``. The module is dependent on <strong><a href="https://github.com/cheeriojs/cheerio">Cheerio</a></strong> and <strong><a href="https://www.npmjs.com/package/request">Request native</a></strong>.

## Usage
After the installation, the module could be used in the following way:

  ```JavaScript
  const gjirafa = require('gjirafaapi');
   gjirafa("ferizaj","prishtine","14-7").then((result)=>console.log(result));
```
The method receives three parameters:

| Parameter | Context to be used by | Type | Format|
| ------------- | ------------- | -----------|--------|
| from  | Departure place  | String | Conversion to a strict format is not needed. The webpage will return valid results even if we write City, cit or ci as long as there are no other objects with the respective names.
| to  | Destination place  | String | Conversion to a strict format is not needed. The webpage will return valid results if we write City, cit or ci as long as there are no other objects with the respective names.
| date | Date of travel |  String   | DD-MM 

The function always returns a promise and as such it should be caught with ``then``.

## License 

All the rights belong to the owners of the page of our interest. This module is created with the intention to encourage developers create compact platforms of public services in the Republic of Kosovo.
 
 
 ## Info 
 Author: <b>Toti Kadriu</b> <br/>
 www.totiworks.com <br/>
