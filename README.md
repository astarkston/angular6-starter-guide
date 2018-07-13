# Angular Starter App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

## Project Setup

1.  Ensure the latest versions of node `npm` / `node` are installed
2.  Run `npm install @angular/cli -g` to install the Angular CLI globally
3.  Run `npm install` with this directory open to install the necessary npm packages
4.  To run the Angular app, follow the build instructions below

## Development server

Run `ng serve` for a dev server. Navigate to `https://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Project Structure

- If your app isn’t too complex, just use the `/app` folder to store everything. This is a good starting point to logically break up your app into pages or sections. At the root of your `/app` folder, have a different folder for each module.

- Within each module, create a folder for components, directives, models, pipes, and services. For each page-specific module, it’s okay to keep that module’s routing in its module file.

- Create a shared module for any component, model, or service used across multiple modules (dropdowns, grids, etc.).

- All static content should go under the assets folder, e.g. fonts, images, static JSON data, PDFs, etc.

- Create `index.ts` files in large folders to create a single point of entry for importing / exporting. This concept is called 'barreling'. For components, only put an `index.ts` file in a component folder if you have other local files inside that component's folder. A common example of extra files are logic services to house business logic.

- If the project structure gets too nested, consider scoping paths in the tsconfig files (see `tsconfig.app.json` and `tsconfig.json`).

## General Typescript

- Strong type variables and parameters whenever possible.

- Use eslint or tslint to ensure code quality.

- Anyone using the client app should use VS Code (or similar IDE, but VS Code is free), and check in a workspace file to have local configurations the same across every developer’s IDE. You’ll get less merge conflicts from formatting changes. Set these style guidelines at project start and follow them throughout the project. Use IDE plugins like `prettier` to have persistent formatting on save. This project contains `.prettierrc`, `.editorconfig`, and `.vscode/settings.json` to cover formatting scenarios.

## General Angular

- Update early and often (if possible). It’s better to go through 8 hours of upgrade headache (e.g. from 5.x to 6.x) than going putting an upgrade off (e.g. from 4.x to 6.x). This isn’t always possible because of project restrictions.

- Use Angular CLI scaffolding whenever possible to have consistent component skeletons.

- Customize the `angular-cli.json` file however you would like. I would suggest, at the very least, changing the default markup prefix from `app` to a shortname / codename for your project, e.g. `shark`. You can find this property under projects/[project name]/prefix in the JSON file.

- Use the `--aot` flag during CI/CD builds to ensure a project is properly compiled. Optionally include the `--prod` flag when building

## Routing

- Create a separate routing module

- Store route names in a config file that is inside the shared module or the routing module (your choice)

- Lazy load modules (when applicable). This is why you want to break up logically-similar pages / sections into different modules.

## Services

- Create a base API service to send basic get, post, etc. requests. This way, you have a single point to modify all requests to use auth, attach certain headers, etc. See `@shared/services/api` for an example of a base service.

- Don’t be afraid of having too many services. Just be careful if your constructor injections become too lengthy.

- Services should serve a single purpose: accessing a data source. Don't include too much extra logic in here. At most, include logic for setting up HTTP headers. Use reducers, side effects, logic services, etc. for mapping data.

## Models & Enums

- Typically create enums, data contracts (API to typescript), view contracts (typescript to view). Organize each type by folder, and create barrels (i.e. `index.ts` files) for each folder. See `@shared/models/enums` for an example of exporting enums and their custom `toString()` functions.

- The front-end and back-end developers should come to an agreement on what a contract should look like as early in the development lifecycle as possible. This follows a tried and true development paradigm- measure twice, cut once. If a contract structure doesn’t exist, create one! Ensure this is maintained during the lifecycle of this API endpoint such that front-end and back-end contracts match.

- Ensure that any enum created has an enumToString extension method.

## Components

- Keep component code simple. After your imports, component decoration, and constructor parameters, keep the guts of the component to 100 lines or less.

- Move any business logic (data mapping, dropdown setup, etc.) to a file in the same folder called `logic.service.ts`. It should be named [ComponentName]LogicService. See `home/logic.service.ts` as an example. No business logic should be in the component file.

- Sharing data between components is common but isn’t always achievable by `Input` parameters or output `EventEmitters`. Sometimes other disconnected parts of the app need to receive changes and do some operations separately. Use plugins like `ngrx` to manage state across your application. If you just need something simple, you can create your own custom trackers as injectable services. See `@shared/services/trackers` for an example pattern.

## Observables

- Use observables whenever possible. In Angular applications, you shouldn't need to use the Promise API.

- If subscribing to an observable, ensure that you unsubscribe from it. The latest point to unsubscribe would be in the `ngOnDestroy` lifecycle hook. See `home/home.component.ts` for an example.

- Do not use operators directly on an Observable. Instead, pipe the operators in for better error handling.

- Do not have nested `subscribes()`, i.e. `myObservable.subscribe(() => myOtherObservable.subscribe())`. This is an excellent case for using the `switchMap` operator.

## Constants

- Use a non-injectable constants file to keep track of magic strings. Have one for each module you create. Encapsulate with a namespace, scope to a class, and have constants be static / readonly properties. See `@shared/services/constants` for an example.

## Utilites

- See `@shared/services/utils` for an example setup.

- Create a Utilities class inside the Shared module for common operations like null checks, equality checks, destroying subscriptions, etc. Import this class in your components. This is especially nice if you have C# developers using Angular / Typescript, so you can put some familiar methods like `isNullOrUndefined`, or `stringEmpty`.

- If using `moment` or `lodash`, use the Utilities class as a wrapper around these so you don’t have to import it everywhere.

## Styling

- Use `kebab-case` for class names and `camelCase` for ID names.
- Do not use inline styles, e.g. `<div style="width: 80px"></div>`.
- Global stylesheets should live under the `/styles` folder, component-specific styles should live inside the component folder in an external stylesheet.
- Make use of SASS variables in stylesheets to maintain better control over app-specific properties such as colors, typical margins, etc.
