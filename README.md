#Chris Mayer's <a href="http://stackoverflow.com/questions/671118/what-exactly-is-restful-programming" target="_blank">RESTful API</a> Time Microservice

The app is running on this website:  
<a href="https://mayer-api-microservice.herokuapp.com" target="_blank">https://mayer-api-microservice.herokuapp.com</a>

With this microservice, one will be able to:

- Pass a string as a parameter, and it will check to see whether that string contains either a [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time) or a natural language date (example: January 21, 2017).
- If it does, it returns both the Unix timestamp and the natural language form of that date.
- If it does not contain a date or Unix timestamp, it returns null for those properties.

##Example usage:

<a href="https://mayer-api-microservice.herokuapp.com/January 21, 2017" target="_blank">https://mayer-api-microservice.herokuapp.com/January21,2017 </a>    
<a href="https://mayer-api-microservice.herokuapp.com/1484956800" target="_blank">https://mayer-api-microservice.herokuapp.com/1484956800</a>

##Example JSON output:

~~~
{ "unix": 1484956800, "natural": "January 21, 2017" }
~~~
