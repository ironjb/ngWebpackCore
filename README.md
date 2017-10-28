# Angular 4 with Webpack on ASP.NET Core

This is a simple example of using **Angular 4** with **Webpack** in an **ASP.NET Core** environment.

Some links used to help direct the result of this project:

- [angular.io - Webpack: An Introduction](https://angular.io/guide/webpack)
- [damienbod.com - ASP.NET Core, Angular with Webpack and Visual Studio](https://damienbod.com/2016/06/12/asp-net-core-angular2-with-webpack-and-visual-studio/)
- [codeproject.com - Setting up Angular 2 in ASP.NET Core using Webpack](https://www.codeproject.com/Tips/1197147/Setting-up-Angular-in-ASP-NET-Core-using-Webpack)
- [github.com/MarkPieszak/aspnetcore-angular2-universal](https://github.com/MarkPieszak/aspnetcore-angular2-universal) (I think VS2017 creates a project like this when choosing Angular/Core project)


Looks like **Webpack** works great for development.  It loads the latest `.js` files without the caching problem that **SystemJS** seems to have in our **.Net** environment.

However, is **Webpack** the best option for the final build?  Hard to say.  **Rollup** builds a smaller file for production use, but is it a big enough difference?  It may be better to see which is better with a bigger project.

My thinking is that it is best to use **Webpack** for development and **Rollup** for production files.
