'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">inventory documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-d196f79c336db43f7079d694db9b6b0b"' : 'data-target="#xs-components-links-module-AppModule-d196f79c336db43f7079d694db9b6b0b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d196f79c336db43f7079d694db9b6b0b"' :
                                            'id="xs-components-links-module-AppModule-d196f79c336db43f7079d694db9b6b0b"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppsModule.html" data-type="entity-link">AppsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppsModule-5e343b74dee0eaacd3732755c811e9fe"' : 'data-target="#xs-components-links-module-AppsModule-5e343b74dee0eaacd3732755c811e9fe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppsModule-5e343b74dee0eaacd3732755c811e9fe"' :
                                            'id="xs-components-links-module-AppsModule-5e343b74dee0eaacd3732755c811e9fe"' }>
                                            <li class="link">
                                                <a href="components/AppsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppsRoutingModule.html" data-type="entity-link">AppsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-8ffd4e1067a22adcf5efd4c926c2c387"' : 'data-target="#xs-components-links-module-AuthModule-8ffd4e1067a22adcf5efd4c926c2c387"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-8ffd4e1067a22adcf5efd4c926c2c387"' :
                                            'id="xs-components-links-module-AuthModule-8ffd4e1067a22adcf5efd4c926c2c387"' }>
                                            <li class="link">
                                                <a href="components/AuthComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthLoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthLoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OidcCallbackComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OidcCallbackComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link">DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-17c296183d2ce68df005ee3f3ce6ec12"' : 'data-target="#xs-components-links-module-DashboardModule-17c296183d2ce68df005ee3f3ce6ec12"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-17c296183d2ce68df005ee3f3ce6ec12"' :
                                            'id="xs-components-links-module-DashboardModule-17c296183d2ce68df005ee3f3ce6ec12"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link">DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DevModule.html" data-type="entity-link">DevModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DevModule-b5b8c8ef8722e727280c76020127e50e"' : 'data-target="#xs-components-links-module-DevModule-b5b8c8ef8722e727280c76020127e50e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DevModule-b5b8c8ef8722e727280c76020127e50e"' :
                                            'id="xs-components-links-module-DevModule-b5b8c8ef8722e727280c76020127e50e"' }>
                                            <li class="link">
                                                <a href="components/DevComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DevComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DevRoutingModule.html" data-type="entity-link">DevRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ItemsModule.html" data-type="entity-link">ItemsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ItemsModule-ced5b0b6a48b04442dc310dacda3aff2"' : 'data-target="#xs-components-links-module-ItemsModule-ced5b0b6a48b04442dc310dacda3aff2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ItemsModule-ced5b0b6a48b04442dc310dacda3aff2"' :
                                            'id="xs-components-links-module-ItemsModule-ced5b0b6a48b04442dc310dacda3aff2"' }>
                                            <li class="link">
                                                <a href="components/ItemsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ItemsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemsOverviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ItemsOverviewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ItemsRoutingModule.html" data-type="entity-link">ItemsRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateItemDto.html" data-type="entity-link">CreateItemDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTodoItemCommand.html" data-type="entity-link">CreateTodoItemCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTodoListCommand.html" data-type="entity-link">CreateTodoListCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/ItemDto.html" data-type="entity-link">ItemDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ItemInfoDto.html" data-type="entity-link">ItemInfoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriorityLevelDto.html" data-type="entity-link">PriorityLevelDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SwaggerException.html" data-type="entity-link">SwaggerException</a>
                            </li>
                            <li class="link">
                                <a href="classes/TodoItemDto.html" data-type="entity-link">TodoItemDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TodoListDto.html" data-type="entity-link">TodoListDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TodosVm.html" data-type="entity-link">TodosVm</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTodoItemCommand.html" data-type="entity-link">UpdateTodoItemCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTodoItemDetailCommand.html" data-type="entity-link">UpdateTodoItemDetailCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTodoListCommand.html" data-type="entity-link">UpdateTodoListCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/WeatherForecast.html" data-type="entity-link">WeatherForecast</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppEffects.html" data-type="entity-link">AppEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthEffects.html" data-type="entity-link">AuthEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ItemsEffects.html" data-type="entity-link">ItemsEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ItemsService.html" data-type="entity-link">ItemsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TodoItemsService.html" data-type="entity-link">TodoItemsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TodoListsService.html" data-type="entity-link">TodoListsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WeatherForecastService.html" data-type="entity-link">WeatherForecastService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/ErrorInterceptor.html" data-type="entity-link">ErrorInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/TokenInterceptor.html" data-type="entity-link">TokenInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/IsAuthenticatedAuthGuard.html" data-type="entity-link">IsAuthenticatedAuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AuthenticatedDto.html" data-type="entity-link">AuthenticatedDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ClientIdClientSecretCredentialsDto.html" data-type="entity-link">ClientIdClientSecretCredentialsDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmailOrUsernamePasswordCredentialsDto.html" data-type="entity-link">EmailOrUsernamePasswordCredentialsDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileResponse.html" data-type="entity-link">FileResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICreateItemDto.html" data-type="entity-link">ICreateItemDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICreateTodoItemCommand.html" data-type="entity-link">ICreateTodoItemCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICreateTodoListCommand.html" data-type="entity-link">ICreateTodoListCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IItemDto.html" data-type="entity-link">IItemDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IItemInfoDto.html" data-type="entity-link">IItemInfoDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IItemsService.html" data-type="entity-link">IItemsService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPriorityLevelDto.html" data-type="entity-link">IPriorityLevelDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITodoItemDto.html" data-type="entity-link">ITodoItemDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITodoItemsService.html" data-type="entity-link">ITodoItemsService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITodoListDto.html" data-type="entity-link">ITodoListDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITodoListsService.html" data-type="entity-link">ITodoListsService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITodosVm.html" data-type="entity-link">ITodosVm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUpdateTodoItemCommand.html" data-type="entity-link">IUpdateTodoItemCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUpdateTodoItemDetailCommand.html" data-type="entity-link">IUpdateTodoItemDetailCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUpdateTodoListCommand.html" data-type="entity-link">IUpdateTodoListCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWeatherForecast.html" data-type="entity-link">IWeatherForecast</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWeatherForecastService.html" data-type="entity-link">IWeatherForecastService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State.html" data-type="entity-link">State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-1.html" data-type="entity-link">State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-2.html" data-type="entity-link">State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserInfoResponse.html" data-type="entity-link">UserInfoResponse</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});