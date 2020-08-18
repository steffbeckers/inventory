# Inventory

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Used commands for scaffolding

This app
`ng new inventory`

Clarity design
`npm install @clr/ui`
`ng add @clr/angular`

NgRx store
https://ngrx.io/guide/schematics
`npm install @ngrx/schematics @ngrx/store @ngrx/effects @ngrx/entity @ngrx/store-devtools`
`ng generate @ngrx/schematics:store State --root --statePath store --module app.module.ts`
`ng generate @ngrx/schematics:effect store/App --root --module app.module.ts --group --creators --api`
`npm install ngrx-store-localstorage`
`npm install @ngrx/router-store`

Authentication
`ng generate module auth --route auth --module app.module.ts`
`ng generate @ngrx/schematics:feature auth/store/Auth --module auth/auth.module.ts --group --creators --api`
`ng generate @ngrx/schematics:action auth/store/Login --group --creators --api`
`ng generate component auth/Login --module auth/auth.module.ts`
`ng generate service auth/Auth`
`npm i oidc-client`
`ng generate component auth/oidc-callback --module auth/auth.module.ts`

Apps module (root)
`ng generate module apps --route apps --module app.module.ts`

Dashboard module (feature)
`ng generate module dashboard --route dashboard --module apps/apps.module.ts`

Items module (feature)
`ng generate module items --route items --module apps/apps.module.ts`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
