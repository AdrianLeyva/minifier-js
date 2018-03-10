# MinifierJS 
It's an easy minifier for several files like: css, js, and html, also implements   
images optimization to reduce their sizes.    
  
## How to use  
**First you have to configure the file: path.json**  
There you have to set the absolute path of your files that going to be minified.  
````
{  
  "img":{  
	  "src":  
	    [  
		  "/path/to/directory/*.png",  
	      "/path/to/directory/*.jpg",  
	      "/path/to/directory/*.gif"  
	    ],  
	  "destination": "/path/to/directory/"  
  },  
  
  "css":{  
	  "src": 
	  [  
		  "/path/to/directory/styles.css"  
	  ],  
	  "destination": "/path/to/directory/"  
  },  
  
  "js":{  
	  "src": 
	  [  
		  "/path/to/directory/app.js"  
	  ],  
	  "destination": "/path/to/directory/"  
  },  
  
  "html":{  
	  "src": 
	  [
		  "/path/to/directory/*.html"
	  ],  
	  "destination": "/path/to/directory/"  
  }  
}
````  

### Configuration
**src:**  
Here you define an array of files to be minified.  
If you want minify all files of specific type inside a directory, then you just have to type like following example:  "/*.html" or  "/*.css"  or "/*.js" or "/*.png".  
Example:
````
["/path/to/directory/*.html"]
````  

**destination**  
Here you define the destination directory where the minified files will be generated.  
````
"/destination/path/directory/"
````  

## Get started  
If you have already configured path.json, then now you can run MinifierJS and minify your files.  
````
$ npm start
````  

And that's it.  

