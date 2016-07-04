### Install Dependencies

We have two kinds of dependencies in this project: tools, angular and bootstrap framework code.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```


Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

## Run on your localHost
- please add to your brawser " Allow-Control-Allow-Origin: * " addon.
- Add the following URLs to the addon permisions:
1.  http://api.tumblr.com/v2/blog/passport-life.tumblr.com/info?api_key=SOiMe7M47zoEcQYKtnuzjO6Kcq2M1dAZESAQ9ipStoqvpMMYpT&notes_info=true
2.  http://api.tumblr.com/v2/blog/passport-life.tumblr.com/posts/link?api_key=SOiMe7M47zoEcQYKtnuzjO6Kcq2M1dAZESAQ9ipStoqvpMMYpT&notes_info=true
3.  http://api.tumblr.com/v2/blog/passport-life.tumblr.com/posts/photo?api_key=SOiMe7M47zoEcQYKtnuzjO6Kcq2M1dAZESAQ9ipStoqvpMMYpT&notes_info=true
  
