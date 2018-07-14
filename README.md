# <h2 align="center">Gjirafa API</h2>


<h5 align="center"><a href="gjirafa.com">Gjirafa.com</a> offers a very useful service to check the bus schedule in Kosovo. They do not, however, offer an API or module which developers can use and present the information in services that assist people's needs such as a more compact website or mobile application. As such I have created this module that scraps the provider's website and returns the info in JSON format.</h5>
<br/>
## Description
This tool parses the page of interest, <a href="https://gjirafa.com/Autobus">Gjirafa Linja te autobuseve</a> (eng. Gjirafa bus lines) using the ``request`` module. Then, the parsed web page is scrapped using the ``cheerio`` module. ``Cheerio`` uses JQuery traversing method to go through DOM elements.

## Installation
The module can be installed using ``npm install gjirafaapi``. The module is dependent on <strong><a href="https://github.com/cheeriojs/cheerio">Cheerio</a></strong> and <strong><a href="https://www.npmjs.com/package/request">Request native</a></strong>.

## Usage
After the installation, the module could be used in the following way:

  ```JavaScript
  const gjirafa = require('gjirafaapi');
   gjirafa("ferizaj","prishtine","14-7").then((result)=>console.log(result));
```
The method receives three parameters:
| Parameter | Context to be used in | Type | Format|
| ------------- | ------------- | -----------|--------|
| from  | Departure place  | String | Conversion to a strict format is not needed. The webpage will return valid results if we write City, cit or ci as long as there are no other objects with the respective names.
| to  | Destination place  | String | Conversion to a strict format is not needed. The webpage will return valid results if we write City, cit or ci as long as there are no other objects with the respective names.
| date | Date of travel |  String   | DD-MM



  
