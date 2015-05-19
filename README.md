# middlewarePOC

POC for meddleware issue


Under Kraken 1.x,  the composed middleware construct `enabled` flags are respected.

This POC has the following config fragment:

```javascript
        ,"poc":{
            "parallel":{
                "middleware1":{
                    "enabled":true,
                    "module":"path:./lib/middleware1"
                },
                "middleware2":{
                    "enabled":false,
                    "module":"path:./lib/middleware2"
                }
            }
        }
```        

These middewares only set a flag in the request object.

`req.mw1 = true;` and `req.mw2 = true;` 


And a single route to test their behavior:
```javascript
    router.get('/', function (req, res) {
        assert(req.mw1);
        assert(req.mw2);
        res.sendStatus(200);
    });
```    

Running this POC (`curl localhost:8000`) produces:



### Under Meddleware 1.0 (Default included with Kraken 1.x) 

```javascript
Middleware 1 says hi
::ffff:127.0.0.1 - - [19/May/2015:16:06:23 +0000] "GET / HTTP/1.1" 500 395 "-" "curl/7.37.1"
```
Expected to fail.

### Under Meddleware 3.0 (Default included with Kraken 2.x)
Updated Kraken to `2.0.0-rc.1`

```javascript
Middleware 1 says hi
Middleware 2 says hi, *from beyond the grave...*
::ffff:127.0.0.1 - - [19/May/2015:16:07:49 +0000] "GET / HTTP/1.1" 200 2 "-" "curl/7.37.1"
```
Unexpected success... Middleware 2 should be disabled.
