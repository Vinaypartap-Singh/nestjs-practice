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
                    <a href="index.html" data-type="index-link">practice documentation</a>
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
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-c0915e2aef25d8471dadf8cd4b3df53a549cfc3d84a0ba98f0bd803a33bbb4623e21a351ad078d9f18181002f63822dac91a9b72dc2eda7b9959843912ecb226"' : 'data-bs-target="#xs-controllers-links-module-AppModule-c0915e2aef25d8471dadf8cd4b3df53a549cfc3d84a0ba98f0bd803a33bbb4623e21a351ad078d9f18181002f63822dac91a9b72dc2eda7b9959843912ecb226"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-c0915e2aef25d8471dadf8cd4b3df53a549cfc3d84a0ba98f0bd803a33bbb4623e21a351ad078d9f18181002f63822dac91a9b72dc2eda7b9959843912ecb226"' :
                                            'id="xs-controllers-links-module-AppModule-c0915e2aef25d8471dadf8cd4b3df53a549cfc3d84a0ba98f0bd803a33bbb4623e21a351ad078d9f18181002f63822dac91a9b72dc2eda7b9959843912ecb226"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-c0915e2aef25d8471dadf8cd4b3df53a549cfc3d84a0ba98f0bd803a33bbb4623e21a351ad078d9f18181002f63822dac91a9b72dc2eda7b9959843912ecb226"' : 'data-bs-target="#xs-injectables-links-module-AppModule-c0915e2aef25d8471dadf8cd4b3df53a549cfc3d84a0ba98f0bd803a33bbb4623e21a351ad078d9f18181002f63822dac91a9b72dc2eda7b9959843912ecb226"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-c0915e2aef25d8471dadf8cd4b3df53a549cfc3d84a0ba98f0bd803a33bbb4623e21a351ad078d9f18181002f63822dac91a9b72dc2eda7b9959843912ecb226"' :
                                        'id="xs-injectables-links-module-AppModule-c0915e2aef25d8471dadf8cd4b3df53a549cfc3d84a0ba98f0bd803a33bbb4623e21a351ad078d9f18181002f63822dac91a9b72dc2eda7b9959843912ecb226"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DatabaseModule-4df168623bc0d5842f5825843235c9d362eebaf05e9291533586e3364129f76b5a4efd608ac8c93ff06a06e7f8dce8a8d6775674c1162af2cf51db52b00225e7"' : 'data-bs-target="#xs-injectables-links-module-DatabaseModule-4df168623bc0d5842f5825843235c9d362eebaf05e9291533586e3364129f76b5a4efd608ac8c93ff06a06e7f8dce8a8d6775674c1162af2cf51db52b00225e7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabaseModule-4df168623bc0d5842f5825843235c9d362eebaf05e9291533586e3364129f76b5a4efd608ac8c93ff06a06e7f8dce8a8d6775674c1162af2cf51db52b00225e7"' :
                                        'id="xs-injectables-links-module-DatabaseModule-4df168623bc0d5842f5825843235c9d362eebaf05e9291533586e3364129f76b5a4efd608ac8c93ff06a06e7f8dce8a8d6775674c1162af2cf51db52b00225e7"' }>
                                        <li class="link">
                                            <a href="injectables/DatabaseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabaseService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EmployeeModule.html" data-type="entity-link" >EmployeeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-EmployeeModule-56db6f5ca2057c027426c90e9aaf1bf65840e7ea03e1bbc9f2650ffb4442e83c6f83f2a39c92337129b2359855933adbf4d83bb2d93917bf76ec59312714faf4"' : 'data-bs-target="#xs-controllers-links-module-EmployeeModule-56db6f5ca2057c027426c90e9aaf1bf65840e7ea03e1bbc9f2650ffb4442e83c6f83f2a39c92337129b2359855933adbf4d83bb2d93917bf76ec59312714faf4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EmployeeModule-56db6f5ca2057c027426c90e9aaf1bf65840e7ea03e1bbc9f2650ffb4442e83c6f83f2a39c92337129b2359855933adbf4d83bb2d93917bf76ec59312714faf4"' :
                                            'id="xs-controllers-links-module-EmployeeModule-56db6f5ca2057c027426c90e9aaf1bf65840e7ea03e1bbc9f2650ffb4442e83c6f83f2a39c92337129b2359855933adbf4d83bb2d93917bf76ec59312714faf4"' }>
                                            <li class="link">
                                                <a href="controllers/EmployeeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmployeeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-EmployeeModule-56db6f5ca2057c027426c90e9aaf1bf65840e7ea03e1bbc9f2650ffb4442e83c6f83f2a39c92337129b2359855933adbf4d83bb2d93917bf76ec59312714faf4"' : 'data-bs-target="#xs-injectables-links-module-EmployeeModule-56db6f5ca2057c027426c90e9aaf1bf65840e7ea03e1bbc9f2650ffb4442e83c6f83f2a39c92337129b2359855933adbf4d83bb2d93917bf76ec59312714faf4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EmployeeModule-56db6f5ca2057c027426c90e9aaf1bf65840e7ea03e1bbc9f2650ffb4442e83c6f83f2a39c92337129b2359855933adbf4d83bb2d93917bf76ec59312714faf4"' :
                                        'id="xs-injectables-links-module-EmployeeModule-56db6f5ca2057c027426c90e9aaf1bf65840e7ea03e1bbc9f2650ffb4442e83c6f83f2a39c92337129b2359855933adbf4d83bb2d93917bf76ec59312714faf4"' }>
                                        <li class="link">
                                            <a href="injectables/EmployeeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmployeeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-30f0415f5f6bdfcf559b84b823af632cc606e6941124100fdfb54f32d554845d034b6c11cea71edabac1cde945361682b710fea9d94d45092cbd7f77a78f7d69"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-30f0415f5f6bdfcf559b84b823af632cc606e6941124100fdfb54f32d554845d034b6c11cea71edabac1cde945361682b710fea9d94d45092cbd7f77a78f7d69"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-30f0415f5f6bdfcf559b84b823af632cc606e6941124100fdfb54f32d554845d034b6c11cea71edabac1cde945361682b710fea9d94d45092cbd7f77a78f7d69"' :
                                            'id="xs-controllers-links-module-UsersModule-30f0415f5f6bdfcf559b84b823af632cc606e6941124100fdfb54f32d554845d034b6c11cea71edabac1cde945361682b710fea9d94d45092cbd7f77a78f7d69"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-30f0415f5f6bdfcf559b84b823af632cc606e6941124100fdfb54f32d554845d034b6c11cea71edabac1cde945361682b710fea9d94d45092cbd7f77a78f7d69"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-30f0415f5f6bdfcf559b84b823af632cc606e6941124100fdfb54f32d554845d034b6c11cea71edabac1cde945361682b710fea9d94d45092cbd7f77a78f7d69"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-30f0415f5f6bdfcf559b84b823af632cc606e6941124100fdfb54f32d554845d034b6c11cea71edabac1cde945361682b710fea9d94d45092cbd7f77a78f7d69"' :
                                        'id="xs-injectables-links-module-UsersModule-30f0415f5f6bdfcf559b84b823af632cc606e6941124100fdfb54f32d554845d034b6c11cea71edabac1cde945361682b710fea9d94d45092cbd7f77a78f7d69"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Employee.html" data-type="entity-link" >Employee</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});