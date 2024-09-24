
<h1>(routes)</h1>

*All the routes through which you can navigate to different pages are defined inside "src\app\(routes)".*

 *All the related components to each page are inside **src/components** folder*

<h2>blog</h2>

~ The blog page is devided into two components <br>
    (i) Article <br>
    (ii) projects

~ The components that are used inside blog are inside **components/BlogComp** folder.

<h3>mdx</h3>

~ The methods which are getting used to fetch data from the mdx files are all defined inside **src\app\lib\mdx.tsx** <br>
~ All the mdx files in which the data are present are in **xcaria-base\posts** folder <br>
~ **src\app\posts\[slug]\page.tsx** This one is also used in mdx.<br>
~ The clsx for mdx are defined with in **src\components\BlogCompo\ArticleComponent\mdx.tsx**

<h2>contact</h2>

~ The contact us page is there


<h2>home</h2>

~ home is the landing page which will be shown when the user will log in. This page has the input field through which the user will search it's query.

~ For style purpose we have used a spotlight style. This style is defined with in 
**components/homeCompo** folder.

<h2>showcase</h2>

This is the page where all our demo projects will be shown. What features are provided by xcaria will be here.

<h3>[showmore]</h3>
This is a dynamic route. Here the page format will be same but the data will differ. In this there will be a search bar in which user can search anything related to that service.

<h2>backend</h2>
The backed is the folder in which data are stored in a database. The data is getting fetched inside showmore route. While the user will search for any query the data will be fetched from the database.

*In future we will convert it into API*

<h2>utils</h2>

<h3>actions</h3>
Inside this the login and logout action is defined.
<h3>supabase</h3>
This is used for authentication. all the related methods which are needed for authentication is defined here.

~  **cn.ts and mouse.ts** these two files are used for the spotlight part which is used in landing page.

<h2>global.css</h2>
In this the common style for each page is defined.

<h2>middleware.ts</h2>
On which page the authentication will be applied is defined in this and this file is crucial for authentication.

<h2>.env</h2>

In this the environment variables like supabase auth key and all are defined.

<h2>.gitignore</h2>
The files which are need to be ignored while uploading them to github are mentioned here.

<h2>rome.json</h2>
This file is for the installed package Rome. Rome is a formatter, linter, bundler, and more for JavaScript, TypeScript, JSON, HTML, Markdown, and CSS.
 
 






