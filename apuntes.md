# CV Petrix 2022
+ [URL del sitio](https://petrix12.github.io/cvpetrix2022)
+ [URL del repositorio en GitHub](https://github.com/petrix12/cvpetrix2022.git)


## Antes de iniciar:
1. Crear proyecto en la página de [GitHub](https://github.com) con el nombre: **cvpetrix2022**.
    + **Description**: Proyecto para mostrar mi CV Online para el 2022.
    + **Public**.
2. En la ubicación raíz del proyecto en la terminal de la máquina local:
    + $ git init
    + $ git add .
    + $ git commit -m "Antes de iniciar"
    + $ git branch -M main
    + $ git remote add origin https://github.com/petrix12/cvpetrix2022.git
    + $ git push -u origin main


## Crear proyecto
1. Crear proyecto **cvpetrix2022**:
    + $ vue create cvpetrix2022
    + Seleccionar: Manually select features
    + Seleccionar unicamente:
        + (*) Choose Vue version
        + (*) Babel
        + (*) Router
        + (*) Vuex
    + Seleccionar: 3.x
    + ? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n): y
    + Seleccionar: In dedicated config files
    + ? Save this as a preset for future projects? (y/N): n
2. Ejecutar proyecto :
    + $ cd cvpetrix2022
    + $ npm run serve
3. Subir repositorio:
    + $ git add .
    + $ git commit -m "Proyecto en blanco"
    + $ git push -u origin main


## Adaptar proyecto a plantilla
1. Descargar el template de la URL: **https://themewagon.com/themes/bootstrap-4-business-template**.
2. Ubicar el template en la carpeta **public** del proyecto, reemplazar todos los archivos exepto **public\index.html**.
3. Reemplazar **public\img\favicon.ico** por el favicon de la aplicación.
4. Reemplazar **public\img\apple-touch-icon.png** por el icono de la aplicación.
5. Modificar **public\index.html**:
    ```html
    <!DOCTYPE html>
    <html lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <link rel="icon" href="<%= BASE_URL %>favicon.ico">
        <title><%= htmlWebpackPlugin.options.title %></title>

        <!-- Favicons -->
        <link href="favicon.png" rel="icon">
        <link href="img/apple-touch-icon.png" rel="apple-touch-icon">

        <!-- Google Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700" rel="stylesheet">
    
        <!-- Bootstrap CSS File -->
        <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    
        <!-- Libraries CSS Files -->
        <link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">
        <link href="lib/animate/animate.min.css" rel="stylesheet">
        <link href="lib/ionicons/css/ionicons.min.css" rel="stylesheet">
        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
        <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet">
    
        <!-- Main Stylesheet File -->
        <link href="css/style.css" rel="stylesheet">
    </head>
    <body>
        <noscript>
            <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
        </noscript>
        <div id="app"></div>
        <!-- built files will be auto injected -->
        
        <!-- JavaScript Libraries -->
        <script src="lib/jquery/jquery.min.js"></script>
        <script src="lib/jquery/jquery-migrate.min.js"></script>
        <script src="lib/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/superfish/hoverIntent.js"></script>
        <script src="lib/superfish/superfish.min.js"></script>
        <script src="lib/wow/wow.min.js"></script>
        <script src="lib/waypoints/waypoints.min.js"></script>
        <script src="lib/counterup/counterup.min.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>
        <script src="lib/isotope/isotope.pkgd.min.js"></script>
        <script src="lib/lightbox/js/lightbox.min.js"></script>
        <script src="lib/touchSwipe/jquery.touchSwipe.min.js"></script>
        <!-- Contact Form JavaScript File -->
        <script src="contactform/contactform.js"></script>

        <!-- Template Main Javascript File -->
        <script src="js/main.js"></script>
    </body>
    </html>
    ```
6. Modificar componente proncipal **src\App.vue**:
    ```vue
    <template>
        <div>
            <router-view/>
        </div>
    </template>
    ```
7. Modificar vista **src\views\Home.vue**:
    ```vue
    <template>
        <div>
            <!-- *** Header *** -->
            <header id="header">
                <div class="container-fluid">
                    <div id="logo" class="pull-left">
                        <h1><a href="#intro" class="scrollto">BizPage</a></h1>
                        <!-- Uncomment below if you prefer to use an image logo -->
                        <!-- <a href="#intro"><img src="img/logo.png" alt="" title="" /></a>-->
                    </div>
                    <nav id="nav-menu-container">
                        <ul class="nav-menu">
                            <li class="menu-active"><a href="#intro">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#team">Team</a></li>
                            <li class="menu-has-children"><a href="">Drop Down</a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                    <li><a href="#">Drop Down 5</a></li>
                                </ul>
                            </li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav><!-- #nav-menu-container -->
                </div>
            </header>
            
            <!-- *** Intro Section *** -->
            <section id="intro">
                <div class="intro-container">
                    <div id="introCarousel" class="carousel  slide carousel-fade" data-ride="carousel">
                        <ol class="carousel-indicators"></ol>
                        <div class="carousel-inner" role="listbox">
                            <div class="carousel-item active" style="background-image: url('img/intro-carousel/1.jpg');">
                                <div class="carousel-container">
                                    <div class="carousel-content">
                                        <h2>We are professional</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <a href="#featured-services" class="btn-get-started scrollto">Get Started</a>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item" style="background-image: url('img/intro-carousel/2.jpg');">
                                <div class="carousel-container">
                                    <div class="carousel-content">
                                        <h2>At vero eos et accusamus</h2>
                                        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.</p>
                                        <a href="#featured-services" class="btn-get-started scrollto">Get Started</a>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item" style="background-image: url('img/intro-carousel/3.jpg');">
                                <div class="carousel-container">
                                    <div class="carousel-content">
                                        <h2>Temporibus autem quibusdam</h2>
                                        <p>Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.</p>
                                        <a href="#featured-services" class="btn-get-started scrollto">Get Started</a>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item" style="background-image: url('img/intro-carousel/4.jpg');">
                                <div class="carousel-container">
                                    <div class="carousel-content">
                                        <h2>Nam libero tempore</h2>
                                        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum.</p>
                                        <a href="#featured-services" class="btn-get-started scrollto">Get Started</a>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item" style="background-image: url('img/intro-carousel/5.jpg');">
                                <div class="carousel-container">
                                    <div class="carousel-content">
                                        <h2>Magnam aliquam quaerat</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <a href="#featured-services" class="btn-get-started scrollto">Get Started</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a class="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>

                        <a class="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
                            <span class="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </section>

            <!-- *** Cuerpo Principal *** -->
            <main id="main">
                <!-- *** Featured Services Section *** -->
                <section id="featured-services">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 box">
                                <i class="ion-ios-bookmarks-outline"></i>
                                <h4 class="title"><a href="">Lorem Ipsum Delino</a></h4>
                                <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                            </div>
                            <div class="col-lg-4 box box-bg">
                                <i class="ion-ios-stopwatch-outline"></i>
                                <h4 class="title"><a href="">Dolor Sitema</a></h4>
                                <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                            </div>
                            <div class="col-lg-4 box">
                                <i class="ion-ios-heart-outline"></i>
                                <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
                                <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <!-- *** About Us Section *** -->
                <section id="about">
                    <div class="container">
                        <header class="section-header">
                            <h3>About Us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </header>
                        <div class="row about-cols">
                            <div class="col-md-4 wow fadeInUp">
                                <div class="about-col">
                                    <div class="img">
                                        <img src="img/about-mission.jpg" alt="" class="img-fluid">
                                        <div class="icon"><i class="ion-ios-speedometer-outline"></i></div>
                                    </div>
                                    <h2 class="title"><a href="#">Our Mission</a></h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="about-col">
                                    <div class="img">
                                        <img src="img/about-plan.jpg" alt="" class="img-fluid">
                                        <div class="icon"><i class="ion-ios-list-outline"></i></div>
                                    </div>
                                    <h2 class="title"><a href="#">Our Plan</a></h2>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                                <div class="about-col">
                                    <div class="img">
                                        <img src="img/about-vision.jpg" alt="" class="img-fluid">
                                        <div class="icon"><i class="ion-ios-eye-outline"></i></div>
                                    </div>
                                    <h2 class="title"><a href="#">Our Vision</a></h2>
                                    <p>
                                        Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <!-- *** Services Section *** -->
                <section id="services">
                    <div class="container">
                        <header class="section-header wow fadeInUp">
                            <h3>Services</h3>
                            <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus, ad pro quaestio laboramus. Ei ubique vivendum pro. At ius nisl accusam lorenta zanos paradigno tridexa panatarel.</p>
                        </header>
                        <div class="row">
                            <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
                                <div class="icon"><i class="ion-ios-analytics-outline"></i></div>
                                <h4 class="title"><a href="">Lorem Ipsum</a></h4>
                                <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                            </div>
                            <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
                                <div class="icon"><i class="ion-ios-bookmarks-outline"></i></div>
                                <h4 class="title"><a href="">Dolor Sitema</a></h4>
                                <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                            </div>
                            <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
                                <div class="icon"><i class="ion-ios-paper-outline"></i></div>
                                <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
                                <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                            </div>
                            <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                                <div class="icon"><i class="ion-ios-speedometer-outline"></i></div>
                                <h4 class="title"><a href="">Magni Dolores</a></h4>
                                <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                            <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                                <div class="icon"><i class="ion-ios-barcode-outline"></i></div>
                                <h4 class="title"><a href="">Nemo Enim</a></h4>
                                <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                            </div>
                            <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                                <div class="icon"><i class="ion-ios-people-outline"></i></div>
                                <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
                                <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <!-- *** Call To Action Section *** -->
                <section id="call-to-action" class="wow fadeIn">
                    <div class="container text-center">
                        <h3>Call To Action</h3>
                        <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <a class="cta-btn" href="#">Call To Action</a>
                    </div>
                </section>

                <!-- *** Skills Section *** -->
                <section id="skills">
                    <div class="container">
                        <header class="section-header">
                            <h3>Our Skills</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                        </header>
                        <div class="skills-content">
                            <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <span class="skill">HTML <i class="val">100%</i></span>
                                </div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-info" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                    <span class="skill">CSS <i class="val">90%</i></span>
                                </div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <span class="skill">JavaScript <i class="val">75%</i></span>
                                </div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                                    <span class="skill">Photoshop <i class="val">55%</i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <!-- *** Facts Section *** -->
                <section id="facts"  class="wow fadeIn">
                    <div class="container">
                        <header class="section-header">
                            <h3>Facts</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                        </header>
                        <div class="row counters">
                            <div class="col-lg-3 col-6 text-center">
                                <span data-toggle="counter-up">274</span>
                                <p>Clients</p>
                            </div>
                            <div class="col-lg-3 col-6 text-center">
                                <span data-toggle="counter-up">421</span>
                                <p>Projects</p>
                            </div>
                            <div class="col-lg-3 col-6 text-center">
                                <span data-toggle="counter-up">1,364</span>
                                <p>Hours Of Support</p>
                            </div>
                            <div class="col-lg-3 col-6 text-center">
                                <span data-toggle="counter-up">18</span>
                                <p>Hard Workers</p>
                            </div>
                        </div>
                        <div class="facts-img">
                            <img src="img/facts-img.png" alt="" class="img-fluid">
                        </div>
                    </div>
                </section>
                
                <!-- *** Portfolio Section *** -->
                <section id="portfolio"  class="section-bg" >
                    <div class="container">
                        <header class="section-header">
                            <h3 class="section-title">Our Portfolio</h3>
                        </header>
                        <div class="row">
                            <div class="col-lg-12">
                                <ul id="portfolio-flters">
                                    <li data-filter="*" class="filter-active">All</li>
                                    <li data-filter=".filter-app">App</li>
                                    <li data-filter=".filter-card">Card</li>
                                    <li data-filter=".filter-web">Web</li>
                                </ul>
                            </div>
                        </div>
                        <div class="row portfolio-container">
                            <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
                                <div class="portfolio-wrap">
                                    <figure>
                                        <img src="img/portfolio/app1.jpg" class="img-fluid" alt="">
                                        <a href="img/portfolio/app1.jpg" data-lightbox="portfolio" data-title="App 1" class="link-preview" title="Preview"><i class="ion ion-eye"></i></a>
                                        <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                    </figure>

                                    <div class="portfolio-info">
                                        <h4><a href="#">App 1</a></h4>
                                        <p>App</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
                                <div class="portfolio-wrap">
                                    <figure>
                                        <img src="img/portfolio/web3.jpg" class="img-fluid" alt="">
                                        <a href="img/portfolio/web3.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 3" title="Preview"><i class="ion ion-eye"></i></a>
                                        <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                    </figure>

                                    <div class="portfolio-info">
                                        <h4><a href="#">Web 3</a></h4>
                                        <p>Web</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
                                <div class="portfolio-wrap">
                                    <figure>
                                        <img src="img/portfolio/app2.jpg" class="img-fluid" alt="">
                                        <a href="img/portfolio/app2.jpg" class="link-preview" data-lightbox="portfolio" data-title="App 2" title="Preview"><i class="ion ion-eye"></i></a>
                                        <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                    </figure>

                                    <div class="portfolio-info">
                                        <h4><a href="#">App 2</a></h4>
                                        <p>App</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
                                <div class="portfolio-wrap">
                                    <figure>
                                        <img src="img/portfolio/card2.jpg" class="img-fluid" alt="">
                                        <a href="img/portfolio/card2.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 2" title="Preview"><i class="ion ion-eye"></i></a>
                                        <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                    </figure>

                                    <div class="portfolio-info">
                                        <h4><a href="#">Card 2</a></h4>
                                        <p>Card</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
                                <div class="portfolio-wrap">
                                    <figure>
                                        <img src="img/portfolio/web2.jpg" class="img-fluid" alt="">
                                        <a href="img/portfolio/web2.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 2" title="Preview"><i class="ion ion-eye"></i></a>
                                        <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                    </figure>
                                    <div class="portfolio-info">
                                        <h4><a href="#">Web 2</a></h4>
                                        <p>Web</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
                                <div class="portfolio-wrap">
                                    <figure>
                                        <img src="img/portfolio/app3.jpg" class="img-fluid" alt="">
                                        <a href="img/portfolio/app3.jpg" class="link-preview" data-lightbox="portfolio" data-title="App 3" title="Preview"><i class="ion ion-eye"></i></a>
                                        <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                    </figure>

                                    <div class="portfolio-info">
                                        <h4><a href="#">App 3</a></h4>
                                        <p>App</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
                                <div class="portfolio-wrap">
                                    <figure>
                                        <img src="img/portfolio/card1.jpg" class="img-fluid" alt="">
                                        <a href="img/portfolio/card1.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 1" title="Preview"><i class="ion ion-eye"></i></a>
                                        <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                    </figure>
                                    <div class="portfolio-info">
                                        <h4><a href="#">Card 1</a></h4>
                                        <p>Card</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp" data-wow-delay="0.1s">
                                <div class="portfolio-wrap">
                                    <figure>
                                        <img src="img/portfolio/card3.jpg" class="img-fluid" alt="">
                                        <a href="img/portfolio/card3.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 3" title="Preview"><i class="ion ion-eye"></i></a>
                                        <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                    </figure>
                                    <div class="portfolio-info">
                                        <h4><a href="#">Card 3</a></h4>
                                        <p>Card</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
                                <div class="portfolio-wrap">
                                    <figure>
                                        <img src="img/portfolio/web1.jpg" class="img-fluid" alt="">
                                        <a href="img/portfolio/web1.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                                        <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                    </figure>
                                    <div class="portfolio-info">
                                        <h4><a href="#">Web 1</a></h4>
                                        <p>Web</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <!-- *** Clients Section *** -->
                <section id="clients" class="wow fadeInUp">
                    <div class="container">
                        <header class="section-header">
                            <h3>Our Clients</h3>
                        </header>
                        <div class="owl-carousel clients-carousel">
                            <img src="img/clients/client-1.png" alt="">
                            <img src="img/clients/client-2.png" alt="">
                            <img src="img/clients/client-3.png" alt="">
                            <img src="img/clients/client-4.png" alt="">
                            <img src="img/clients/client-5.png" alt="">
                            <img src="img/clients/client-6.png" alt="">
                            <img src="img/clients/client-7.png" alt="">
                            <img src="img/clients/client-8.png" alt="">
                        </div>
                    </div>
                </section>
                
                <!-- *** Testimonials Section *** -->
                <section id="testimonials" class="section-bg wow fadeInUp">
                    <div class="container">
                        <header class="section-header">
                            <h3>Testimonials</h3>
                        </header>
                        <div class="owl-carousel testimonials-carousel">
                            <div class="testimonial-item">
                                <img src="img/testimonial-1.jpg" class="testimonial-img" alt="">
                                <h3>Saul Goodman</h3>
                                <h4>Ceo &amp; Founder</h4>
                                <p>
                                    <img src="img/quote-sign-left.png" class="quote-sign-left" alt="">
                                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                    <img src="img/quote-sign-right.png" class="quote-sign-right" alt="">
                                </p>
                            </div>
                            <div class="testimonial-item">
                                <img src="img/testimonial-2.jpg" class="testimonial-img" alt="">
                                <h3>Sara Wilsson</h3>
                                <h4>Designer</h4>
                                <p>
                                    <img src="img/quote-sign-left.png" class="quote-sign-left" alt="">
                                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                    <img src="img/quote-sign-right.png" class="quote-sign-right" alt="">
                                </p>
                            </div>
                            <div class="testimonial-item">
                                <img src="img/testimonial-3.jpg" class="testimonial-img" alt="">
                                <h3>Jena Karlis</h3>
                                <h4>Store Owner</h4>
                                <p>
                                    <img src="img/quote-sign-left.png" class="quote-sign-left" alt="">
                                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                    <img src="img/quote-sign-right.png" class="quote-sign-right" alt="">
                                </p>
                            </div>
                            <div class="testimonial-item">
                                <img src="img/testimonial-4.jpg" class="testimonial-img" alt="">
                                <h3>Matt Brandon</h3>
                                <h4>Freelancer</h4>
                                <p>
                                    <img src="img/quote-sign-left.png" class="quote-sign-left" alt="">
                                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                    <img src="img/quote-sign-right.png" class="quote-sign-right" alt="">
                                </p>
                            </div>
                            <div class="testimonial-item">
                                <img src="img/testimonial-5.jpg" class="testimonial-img" alt="">
                                <h3>John Larson</h3>
                                <h4>Entrepreneur</h4>
                                <p>
                                    <img src="img/quote-sign-left.png" class="quote-sign-left" alt="">
                                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                    <img src="img/quote-sign-right.png" class="quote-sign-right" alt="">
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <!-- *** Team Section *** -->
                <section id="team">
                    <div class="container">
                        <div class="section-header wow fadeInUp">
                            <h3>Team</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 col-md-6 wow fadeInUp">
                                <div class="member">
                                    <img src="img/team-1.jpg" class="img-fluid" alt="">
                                    <div class="member-info">
                                        <div class="member-info-content">
                                            <h4>Walter White</h4>
                                            <span>Chief Executive Officer</span>
                                            <div class="social">
                                                <a href=""><i class="fa fa-twitter"></i></a>
                                                <a href=""><i class="fa fa-facebook"></i></a>
                                                <a href=""><i class="fa fa-google-plus"></i></a>
                                                <a href=""><i class="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="member">
                                    <img src="img/team-2.jpg" class="img-fluid" alt="">
                                    <div class="member-info">
                                        <div class="member-info-content">
                                            <h4>Sarah Jhonson</h4>
                                            <span>Product Manager</span>
                                            <div class="social">
                                                <a href=""><i class="fa fa-twitter"></i></a>
                                                <a href=""><i class="fa fa-facebook"></i></a>
                                                <a href=""><i class="fa fa-google-plus"></i></a>
                                                <a href=""><i class="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                                <div class="member">
                                    <img src="img/team-3.jpg" class="img-fluid" alt="">
                                    <div class="member-info">
                                        <div class="member-info-content">
                                            <h4>William Anderson</h4>
                                            <span>CTO</span>
                                            <div class="social">
                                                <a href=""><i class="fa fa-twitter"></i></a>
                                                <a href=""><i class="fa fa-facebook"></i></a>
                                                <a href=""><i class="fa fa-google-plus"></i></a>
                                                <a href=""><i class="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div class="member">
                                    <img src="img/team-4.jpg" class="img-fluid" alt="">
                                    <div class="member-info">
                                        <div class="member-info-content">
                                            <h4>Amanda Jepson</h4>
                                            <span>Accountant</span>
                                            <div class="social">
                                                <a href=""><i class="fa fa-twitter"></i></a>
                                                <a href=""><i class="fa fa-facebook"></i></a>
                                                <a href=""><i class="fa fa-google-plus"></i></a>
                                                <a href=""><i class="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- *** Contact Section *** -->
                <section id="contact" class="section-bg wow fadeInUp">
                    <div class="container">
                        <div class="section-header">
                            <h3>Contact Us</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                        </div>
                        <div class="row contact-info">
                            <div class="col-md-4">
                                <div class="contact-address">
                                    <i class="ion-ios-location-outline"></i>
                                    <h3>Address</h3>
                                    <address>A108 Adam Street, NY 535022, USA</address>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="contact-phone">
                                    <i class="ion-ios-telephone-outline"></i>
                                    <h3>Phone Number</h3>
                                    <p><a href="tel:+155895548855">+1 5589 55488 55</a></p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="contact-email">
                                    <i class="ion-ios-email-outline"></i>
                                    <h3>Email</h3>
                                    <p><a href="mailto:info@example.com">info@example.com</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="form">
                            <div id="sendmessage">Your message has been sent. Thank you!</div>
                            <div id="errormessage"></div>
                            <form action="" method="post" role="form" class="contactForm">
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div class="validation"></div>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                        <div class="validation"></div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                    <div class="validation"></div>
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                    <div class="validation"></div>
                                </div>
                                <div class="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            
            <!-- *** Footer *** -->
            <footer id="footer">
                <div class="footer-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 footer-info">
                                <h3>BizPage</h3>
                                <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
                            </div>
                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i class="ion-ios-arrow-right"></i> <a href="#">Home</a></li>
                                    <li><i class="ion-ios-arrow-right"></i> <a href="#">About us</a></li>
                                    <li><i class="ion-ios-arrow-right"></i> <a href="#">Services</a></li>
                                    <li><i class="ion-ios-arrow-right"></i> <a href="#">Terms of service</a></li>
                                    <li><i class="ion-ios-arrow-right"></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-6 footer-contact">
                                <h4>Contact Us</h4>
                                <p>
                                    A108 Adam Street <br>
                                    New York, NY 535022<br>
                                    United States <br>
                                    <strong>Phone:</strong> +1 5589 55488 55<br>
                                    <strong>Email:</strong> info@example.com<br>
                                </p>

                                <div class="social-links">
                                    <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                                    <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                                    <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                                    <a href="#" class="google-plus"><i class="fa fa-google-plus"></i></a>
                                    <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 footer-newsletter">
                                <h4>Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>
                                <form action="" method="post">
                                    <input type="email" name="email"><input type="submit"  value="Subscribe">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="copyright">
                        &copy; Copyright <strong>BizPage</strong>. All Rights Reserved
                    </div>
                    <div class="credits">
                        <!--
                        All the links in the footer should remain intact.
                        You can delete the links only if you purchased the pro version.
                        Licensing information: https://bootstrapmade.com/license/
                        Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=BizPage
                        -->
                        Best <a href="https://bootstrapmade.com/">Bootstrap Templates</a> by BootstrapMade
                    </div>
                </div>
            </footer>
            <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>		
        </div>
    </template>

    <script>
    export default {
        name: 'Home',
        components: {
        }
    }
    </script>
    ```
8. Eliminar los siguientes archivos:
    + src\components\HelloWorld.vue
    + src\assets\logo.png
    + src\views\About.vue
9.  Modificar archivo de rutas **src\router\index.js**:
    ```js
    import { createRouter, createWebHistory } from 'vue-router'
    import Home from '../views/Home.vue'

    const routes = [
        {
            path: '/',
            name: 'Home',
            component: Home
        }
    ]

    const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes
    })

    export default router
    ```
10. Subir repositorio:
    + $ git add .
    + $ git commit -m "Adaptación del template"
    + $ git push -u origin main


## Personalización inicial del template
1. Reemplazar las siguiente imagenes por las alusivas a la aplicación:
    + public\img\about-bg.jpg
    + public\img\call-to-action-bg.jpg
    + public\img\facts-bg.jpg
    + public\img\about-mission.jpg
    + public\img\about-plan.jpg
    + public\img\about-vision.jpg
    + public\img\intro-carousel\1.jpg
    + public\img\intro-carousel\2.jpg
    + public\img\intro-carousel\3.jpg
    + public\img\intro-carousel\4.jpg
    + public\img\intro-carousel\5.jpg
2. Eliminar archivo:
    + public\img\favicon.png
3. Subir repositorio:
    + $ git add .
    + $ git commit -m "Personalización inicial del template"
    + $ git push -u origin main


## Diseño del componente Header
1. Ubicar logo de la aplicación en **public\img\logo-completo-sm.png**.
2. Crear componente **src\components\Header.vue**:
    ```vue
    <template>
        <div>
            <header id="header">
                <div class="container-fluid">
                    <div id="logo" class="pull-left">
                        <!-- Descomente a continuación si prefiere usar un logotipo de texto -->
                        <!-- <h1><a href="#intro" class="scrollto">Soluciones++</a></h1> -->
                        <!-- Descomente a continuación si prefiere usar un logotipo de imagen -->
                        <a href="#intro"><img src="img/logo-completo-sm.png" alt="Logo de la aplicación" title="" height="35" /></a>
                    </div>
                    <nav id="nav-menu-container">
                        <ul class="nav-menu">
                            <li class="menu-active"><a href="#intro">Inicio</a></li>
                            <li><a href="#portfolio">Portafolio</a></li>
                            <li><a href="#services">Servicios</a></li>
                            <li><a href="#clients">Experiencia</a></li>
                            <li><a href="#team">Estudios</a></li>
                            <!--
                            <li class="menu-has-children"><a href="">Drop Down</a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                    <li><a href="#">Drop Down 5</a></li>
                                </ul>
                            </li>
                            -->
                            <li><a href="#contact">Contáctame</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    </template>

    <script>
    export default {
        name: 'Header'
    }
    </script>
    ```
3. Modificar vista **src\views\Home.vue**:
    ```vue
    <template>
        <div>
            <Header />
            <!-- *** Intro Section *** -->
            ≡	
        </div>
    </template>

    <script>
    import Header from '@/components/Header'
    export default {
        name: 'Home',
        components: {
            Header
        }
    }
    </script>
    ```
4. Subir repositorio:
    + $ git add .
    + $ git commit -m "Diseño del componente Header"
    + $ git push -u origin main


## Diseño del componente IntroSection
1. Editar la tienda **src\store\index.js**:
    ```js
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            intro: {
                titulo1: '¡Hola, soy Pedro Bazó!',
                descripcion1: 'Desarrollador Web, principalmente en los stacks MERN, MEVN, MEAN y Laravel',
                titulo2: 'Objetivos y propósitos',
                descripcion2: 'Me considero una persona que consigue lo que se propone, ya que estoy convencido de que los logros son los resultados de las decisiones que se toman y de las metas que nos establecemos. Estoy consciente de mis limitaciones, no lo sé todo ni lo domino todo, pero procuro siempre hallar una solución eficiente a los problemas.',
                titulo3: 'Tecnologías',
                descripcion3: 'Procuro mantenerme actualizado con las diferentes tecnologías para el desarrollo web, así como en el uso de los distintos lenguajes de programación.',
                titulo4: 'Capacitación',
                descripcion4: 'Aprovecho muchos recursos que me ofrece internet para capacitarme continuamente, con la intención de adquirir nuevas competencias o mejorar las que ya tengo.',
                titulo5: 'Fortaleza',
                descripcion5: 'Mi punto fuerte es mi entusiasmo para resolver problemas, y me apropio de aquella frase de Thomas Edison: “Nuestra más grande debilidad yace en rendirnos. El camino más seguro hacia el éxito es siempre intentarlo una vez más”'
            }
        },
        mutations: {
        },
        actions: {
        },
        modules: {
        }
    })
    ```
2. Crear componente **src\components\IntroSection.vue**:
    ```vue
    <template>
        <div>
            <section id="intro">
                <div class="intro-container">
                    <div id="introCarousel" class="carousel slide carousel-fade" data-ride="carousel">
                        <ol class="carousel-indicators"></ol>
                        <div class="carousel-inner" role="listbox">
                            <div class="carousel-item active" style="background-image: url('img/intro-carousel/1.jpg');">
                                <div class="carousel-container">
                                    <div class="carousel-content">
                                        
                                        <div class="slider-info banner-view text-center">
                                            <div class="banner-info container">
                                                <img src="img/autor.jpg" alt="Autor de la página" class="img-fluid rounded-circle border border-white">
                                            </div>
                                        </div>

                                        <h2>{{ intro.titulo1 }}</h2>
                                        <p>{{ intro.descripcion1 }}</p>
                                        <a href="#featured-services" class="btn-get-started scrollto">Empezar</a>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item" style="background-image: url('img/intro-carousel/2.jpg');">
                                <div class="carousel-container">
                                    <div class="carousel-content">
                                        <h2>{{ intro.titulo2 }}</h2>
                                        <p>{{ intro.descripcion2 }}</p>
                                        <a href="#featured-services" class="btn-get-started scrollto">Empezar</a>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item" style="background-image: url('img/intro-carousel/3.jpg');">
                                <div class="carousel-container">
                                    <div class="carousel-content">
                                        <h2>{{ intro.titulo3 }}</h2>
                                        <p>{{ intro.descripcion3 }}</p>
                                        <a href="#featured-services" class="btn-get-started scrollto">Empezar</a>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item" style="background-image: url('img/intro-carousel/4.jpg');">
                                <div class="carousel-container">
                                    <div class="carousel-content">
                                        <h2>{{ intro.titulo4 }}</h2>
                                        <p>{{ intro.descripcion4 }}</p>
                                        <a href="#featured-services" class="btn-get-started scrollto">Empezar</a>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item" style="background-image: url('img/intro-carousel/5.jpg');">
                                <div class="carousel-container">
                                    <div class="carousel-content">
                                        <h2>{{ intro.titulo5 }}</h2>
                                        <p>{{ intro.descripcion5 }}</p>
                                        <a href="#featured-services" class="btn-get-started scrollto">Empezar</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a class="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
                            <span class="sr-only">Anterior</span>
                        </a>

                        <a class="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
                            <span class="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
                            <span class="sr-only">Siguiente</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    </template>

    <script>
    import { mapState } from 'vuex'

    export default {
        name: 'IntroSection',
        computed: {
            ...mapState(['intro'])
        },
    }
    </script>
    ```
3. Modificar vista **src\views\Home.vue**:
    ```vue
    <template>
        <div>
            <Header />
            <IntroSection />
            <!-- *** Cuerpo Principal *** -->
            ≡	
        </div>
    </template>

    <script>
    import Header from '@/components/Header'
    import IntroSection from '@/components/IntroSection'

    export default {
        name: 'Home',
        components: {
            Header,
            IntroSection
        }
    }
    </script>
    ```
4. Subir repositorio:
    + $ git add .
    + $ git commit -m "Diseño del componente IntroSection"
    + $ git push -u origin main


## Diseño del componente FeaturedServicesSection
1. Editar la tienda **src\store\index.js**:
    ```js
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            intro: [
                ≡
            ],
            destacados: [
                // Los iconos se pueden obtener de: https://infinitered.github.io/ionicons-version-3-search
                {
                    id: 1,
                    icon: 'ion-ios-albums',
                    servicio: 'Sistema de Historia Clínica o similar',
                    descripcion: 'Desarrollo de una aplicación web que permita administrar el historial de los pacientes de un centro de salud.',
                    enlace: 'https://github.com/petrix12/Sistema-de-Historia-Cl-nica-en-Laravel'
                },
                {
                    id: 2,
                    icon: 'ion-ios-cloud-upload',
                    servicio: 'Publicación de aplicaciones web',
                    descripcion: 'Alojar webs a Hosting o VPS, creadas con HTML, CSS, JavaScript, PHP, MySQL, Angular, Node, Mongo, Laravel, Symfony, WP, Python y Django.',
                    enlace: 'https://github.com/petrix12/deploy_2022'
                },
                {
                    id: 3,
                    icon: 'ion-ios-book',
                    servicio: 'Plataforma de cursos',
                    descripcion: 'Desarrollo de una plataforma de cursos, con un sistema completo de roles y servicios.',
                    enlace: 'https://github.com/petrix12/PlataformaDeCursosLaravel'
                },
                {
                    id: 4,
                    icon: 'ion-ios-browsers',
                    servicio: 'Crea una pasarela de pagos',
                    descripcion: 'Implementación de una pasarela de pagos con Stripe y PayPal completa para un negocio virtual o tienda online.',
                    enlace: 'https://github.com/petrix12/pasarela_pago'
                },
                {
                    id: 5,
                    icon: 'ion-ios-cart',
                    servicio: 'Crea una ecommerce',
                    descripcion: 'Desarrollo de una aplicación ecommerce completamente funcional.',
                    enlace: 'https://github.com/petrix12/2021_ecommerce'
                }
            ]
        },
        mutations: {
        },
        actions: {
        },
        modules: {
        }
    })
    ```
2. Crear componente **src\components\FeaturedServicesSection.vue**:
    ```vue
    <template>
        <div>
            <section id="featured-services">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 box" v-for="destacado in destacados" :key="destacado.id">
                            <i :class="destacado.icon"></i>
                            <h4 class="title"><a :href="destacado.enlace" target="_blank">{{ destacado.servicio }}</a></h4>
                            <p class="description">{{ destacado.descripcion }}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </template>

    <script>
    import { mapState } from 'vuex'

    export default {
        name: 'FeaturedServicesSection',
        computed: {
            ...mapState(['destacados'])
        },
    }
    </script>
    ```
3. Modificar vista **src\views\Home.vue**:
    ```vue
    <template>
        <div>
            <Header />
            <IntroSection />

            <!-- *** Cuerpo Principal *** -->
            <main id="main">
                <FeaturedServicesSection />  
                ≡
            </main>
            ≡		
        </div>
    </template>

    <script>
    import Header from '@/components/Header'
    import IntroSection from '@/components/IntroSection'
    import FeaturedServicesSection from '@/components/FeaturedServicesSection'

    export default {
        name: 'Home',
        components: {
            Header,
            IntroSection,
            FeaturedServicesSection
        }
    }
    </script>
    ```
4. Subir repositorio:
    + $ git add .
    + $ git commit -m "Diseño del componente FeaturedServicesSection"
    + $ git push -u origin main


## Diseño del componente PoliticasCalidad
1. Editar la tienda **src\store\index.js**:
    ```js
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            intro: {
                ≡
            },
            destacados: [
                ≡
            ],
            calidad: {
                texto: 'La mejor razón para iniciar una empresa es que esta tenga sentido, sentido para crear un producto o servicio que la sociedad necesite, y de esta forma hacer un mundo mejor. "Guy Kawasaki"',
                mision: 'Ofrecer herramientas y soluciones de trabajo que disminuyan las horas hombres a partir de la automatización de procesos informáticos, a través de un servicio de alta calidad, tecnologías de vanguardia y gran pasión por el desarrollo web.',
                valores: 'Espíritu de servicio, pasión por el trabajo, superación constante, honestidad, lealtad, respeto y creatividad.',
                vision: 'Ser un desarrollador de aplicaciones web, reconocido por la innovación, simpleza y generación de soluciones, con una alta productividad y gran espíritu de servicio.'
            }
        },
        mutations: {
        },
        actions: {
        },
        modules: {
        }
    })
    ```
2. Crear componente **src\components\PoliticasCalidad.vue**:
    ```vue
    <template>
        <div>
            <section id="about">
                <div class="container">
                    <header class="section-header">
                        <h3>Política de calidad</h3>
                        <p>{{ calidad.texto }}</p>
                    </header>
                    <div class="row about-cols">
                        <div class="col-md-4 wow fadeInUp">
                            <div class="about-col">
                                <div class="img">
                                    <img src="img/about-mission.jpg" alt="" class="img-fluid">
                                    <div class="icon"><i class="ion-ios-speedometer-outline"></i></div>
                                </div>
                                <h2 class="title"><a href="#">Misión</a></h2>
                                <p class="alto">{{ calidad.mision }}</p>
                            </div>
                        </div>
                        <div class="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="about-col">
                                <div class="img">
                                    <img src="img/about-plan.jpg" alt="" class="img-fluid">
                                    <div class="icon"><i class="ion-ios-list-outline"></i></div>
                                </div>
                                <h2 class="title"><a href="#">Valores</a></h2>
                                <p class="alto">{{ calidad.valores }}</p>
                            </div>
                        </div>
                        <div class="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                            <div class="about-col">
                                <div class="img">
                                    <img src="img/about-vision.jpg" alt="" class="img-fluid">
                                    <div class="icon"><i class="ion-ios-eye-outline"></i></div>
                                </div>
                                <h2 class="title"><a href="#">Visión</a></h2>
                                <p class="alto">{{ calidad.vision }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </template>

    <script>
    import { mapState } from 'vuex'

    export default {
        name: 'PoliticasCalidad',
        computed: {
            ...mapState(['calidad'])
        },
    }
    </script>

    <style scoped>
        .alto {
            height: 175px;
        }
    </style>
    ```
3. Modificar vista **src\views\Home.vue**:
    ```vue
    <template>
        <div>
            <Header />
            <IntroSection />

            <!-- *** Cuerpo Principal *** -->
            <main id="main">
                <FeaturedServicesSection />
                <PoliticasCalidad />
                ≡
            </main>
            ≡		
        </div>
    </template>

    <script>
    import Header from '@/components/Header'
    import IntroSection from '@/components/IntroSection'
    import FeaturedServicesSection from '@/components/FeaturedServicesSection'
    import PoliticasCalidad from '@/components/PoliticasCalidad'

    export default {
        name: 'Home',
        components: {
            Header,
            IntroSection,
            FeaturedServicesSection,
            PoliticasCalidad
        }
    }
    </script>
    ```
4. Subir repositorio:
    + $ git add .
    + $ git commit -m "Diseño del componente PoliticasCalidad"
    + $ git push -u origin main


## Diseño del componente Servicios
1. Editar la tienda **src\store\index.js**:
    ```js
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            intro: {
                ≡
            },
            destacados: [
                ≡
            ],
            calidad: {
                ≡
            },
            servicios: {
                texto: 'Hagas lo que hagas, hazlo tan bien para que vuelvan y además traigan a sus amigos. "Walt Disney"',
                items: [
                    // Los iconos se pueden obtener de: https://infinitered.github.io/ionicons-version-3-search
                    {
                        id: 1,
                        icon: 'ion-ios-albums',
                        servicio: 'Sistema de Historia Clínica o similar',
                        descripcion: 'Desarrollo de una aplicación web que permita administrar el historial de los pacientes de un centro de salud.',
                        enlace: 'https://github.com/petrix12/Sistema-de-Historia-Cl-nica-en-Laravel'
                    },
                    {
                        id: 2,
                        icon: 'ion-ios-cloud-upload',
                        servicio: 'Publicación de aplicaciones web',
                        descripcion: 'Alojar webs a Hosting o VPS, creadas con HTML, CSS, JavaScript, PHP, MySQL, Angular, Node, Mongo, Laravel, Symfony, WP, Python y Django.',
                        enlace: 'https://github.com/petrix12/deploy_2022'
                    },
                    {
                        id: 3,
                        icon: 'ion-ios-book',
                        servicio: 'Plataforma de cursos',
                        descripcion: 'Desarrollo de una plataforma de cursos, con un sistema completo de roles y servicios.',
                        enlace: 'https://github.com/petrix12/PlataformaDeCursosLaravel'
                    },
                    {
                        id: 4,
                        icon: 'ion-ios-browsers',
                        servicio: 'Pasarela de pagos',
                        descripcion: 'Implementación de una pasarela de pagos con Stripe y PayPal completa para un negocio virtual o tienda online.',
                        enlace: 'https://github.com/petrix12/pasarela_pago'
                    },
                    {
                        id: 5,
                        icon: 'ion-ios-cart',
                        servicio: 'Ecommerce',
                        descripcion: 'Desarrollo de una aplicación ecommerce completamente funcional.',
                        enlace: 'https://github.com/petrix12/2021_ecommerce'
                    },
                    {
                        id: 6,
                        icon: 'ion-ios-cog',
                        servicio: 'Front-end',
                        descripcion: 'Desarrollo de aplicaciones Front-end principalmente mediante el uso de las siguientes tecnologías: HTML5, CSS3 y Javascript.',
                        enlace: '#'
                    },
                    {
                        id: 7,
                        icon: 'ion-ios-photos',
                        servicio: 'Back-end',
                        descripcion: 'Desarrollo de aplicaciones Back-end principalmente mediante el uso de las siguientes tecnologías: PHP, Node.js, MySQL y MongoDB.',
                        enlace: '#'
                    },
                    {
                        id: 8,
                        icon: 'ion-ios-barcode',
                        servicio: 'Aplicaciones de escritorio',
                        descripcion: 'Desarrollo de aplicaciones de escritorio principalmente mediante el uso de los siguientes lenguajes de programación: Delphi, C++ Builder, Visual Basic, Microsoft C#.',
                        enlace: '#'
                    },
                    {
                        id: 9,
                        icon: 'ion-ios-analytics',
                        servicio: 'Hojas de cálculo',
                        descripcion: 'Diseño de Hojas de Cálculo de Microsoft Excel, aplicando funcionalidad mediante el uso de VBA.',
                        enlace: '#'
                    }
                ]
            }
        },
        mutations: {
        },
        actions: {
        },
        modules: {
        }
    })
    ```
2. Crear componente **src\components\Servicios.vue**:
    ```vue
    <template>
        <div>
            <section id="services">
                <div class="container">
                    <header class="section-header wow fadeInUp">
                        <h3>Servicios</h3>
                        <p>{{ servicios.texto }}</p>
                    </header>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s" v-for="servicio in servicios.items" :key="servicio.id">
                            <div class="icon"><i :class="servicio.icon"></i></div>
                            <h4 class="title"><a :href="servicio.enlace" target="_blank">{{ servicio.servicio }}</a></h4>
                            <p class="description">{{ servicio.descripcion }}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </template>

    <script>
    import { mapState } from 'vuex'

    export default {
        name: 'Servicios',
        computed: {
            ...mapState(['servicios'])
        },
    }
    </script>
    ```
3. Modificar vista **src\views\Home.vue**:
    ```vue
    <template>
        <div>
            <Header />
            <IntroSection />

            <!-- *** Cuerpo Principal *** -->
            <main id="main">
                <FeaturedServicesSection />
                <PoliticasCalidad />
                <Servicios />
                
                <!-- *** Call To Action Section *** -->
                ≡
            </main>
            ≡		
        </div>
    </template>

    <script>
    import Header from '@/components/Header'
    import IntroSection from '@/components/IntroSection'
    import FeaturedServicesSection from '@/components/FeaturedServicesSection'
    import PoliticasCalidad from '@/components/PoliticasCalidad'
    import Servicios from '@/components/Servicios'

    export default {
        name: 'Home',
        components: {
            Header,
            IntroSection,
            FeaturedServicesSection,
            PoliticasCalidad,
            Servicios
        }
    }
    </script>
    ```
4. Subir repositorio:
    + $ git add .
    + $ git commit -m "Diseño del componente Servicios"
    + $ git push -u origin main


## Diseño del componente CallToAction
1. Editar la tienda **src\store\index.js**:
    ```js
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            intro: {
                ≡
            },
            destacados: [
                ≡
            ],
            calidad: {
                ≡
            },
            servicios: {
                ≡
            },
            accion: {
                texto: 'Estoy consciente de mis limitaciones, no lo sé todo ni lo domino todo, pero estoy convencido de que encontraremos una muy buena solución.'
            }
        },
        mutations: {
        },
        actions: {
        },
        modules: {
        }
    })
    ```
2. Crear componente **src\components\CallToAction.vue**:
    ```vue
    <template>
        <div>
            <section id="call-to-action" class="wow fadeIn">
                <div class="container text-center">
                    <h3>Call To Action</h3>
                    <p>{{ accion.texto }}</p>
                    <a class="cta-btn" href="#portfolio">Call To Action</a>
                </div>
            </section>
        </div>
    </template>

    <script>
    import { mapState } from 'vuex'

    export default {
        name: 'CallToAction',
        computed: {
            ...mapState(['accion'])
        },
    }
    </script>
    ```
3. Modificar vista **src\views\Home.vue**:
    ```vue
    <template>
        <div>
            <Header />
            <IntroSection />

            <!-- *** Cuerpo Principal *** -->
            <main id="main">
                <FeaturedServicesSection />
                <PoliticasCalidad />
                <Servicios />
                <CallToAction />
                
                <!-- *** Skills Section *** -->
                ≡
            </main>
            ≡		
        </div>
    </template>

    <script>
    import Header from '@/components/Header'
    import IntroSection from '@/components/IntroSection'
    import FeaturedServicesSection from '@/components/FeaturedServicesSection'
    import PoliticasCalidad from '@/components/PoliticasCalidad'
    import Servicios from '@/components/Servicios'
    import CallToAction from '@/components/CallToAction'

    export default {
        name: 'Home',
        components: {
            Header,
            IntroSection,
            FeaturedServicesSection,
            PoliticasCalidad,
            Servicios,
            CallToAction
        }
    }
    </script>
    ```
4. Subir repositorio:
    + $ git add .
    + $ git commit -m "Diseño del componente CallToAction"
    + $ git push -u origin main


## Diseño del componente Skills
1. Guardar imagenes de stacks en la ubicación **public\img\stacks**:
    + public\img\stacks\laravel-vue.png
    + public\img\stacks\mevn.png
    + public\img\stacks\mern.png
    + public\img\stacks\mean.png
2. Editar la tienda **src\store\index.js**:
    ```js
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            intro: {
                ≡
            },
            destacados: [
                ≡
            ],
            calidad: {
                ≡
            },
            servicios: {
                ≡
            },
            accion: {
                ≡
            },
            skills: {
                texto: 'Principales stacks web con los que he tenido el placer de trabajar.',
                stacks: [
                    {
                        id: 1,
                        stack: 'Laravel - Vue.js',
                        color_bootstrap: 'bg-dark',
                        progressbar: 90,
                        img: 'laravel-vue.png'
                    },
                    {
                        id: 2,
                        stack: 'MEVN',
                        color_bootstrap: 'bg-success',
                        progressbar: 80,
                        img: 'mevn.png'
                    },
                    {
                        id: 3,
                        stack: 'MERN',
                        color_bootstrap: 'bg-info',
                        progressbar: 75,
                        img: 'mern.png'
                    },
                    {
                        id: 4,
                        stack: 'MEAN',
                        color_bootstrap: 'bg-danger',
                        progressbar: 55,
                        img: 'mean.png'
                    }
                ]
            }
        },
        mutations: {
        },
        actions: {
        },
        modules: {
        }
    })
    ```
3. Crear componente **src\components\Skills.vue**:
    ```vue
    <template>
        <div>
            <section id="skills">
                <div class="container">
                    <header class="section-header">
                        <h3>Tecnologías trabajadas</h3>
                        <p>{{ skills.texto }}</p>
                    </header>
                    <div class="skills-content">  
                        <div class="progress" v-for="stack in skills.stacks" :key="stack.id">
                            <div class="progress-bar" :class="stack.color_bootstrap" role="progressbar" :aria-valuenow="stack.progressbar" aria-valuemin="0" aria-valuemax="100">
                                <span class="skill">{{ stack.stack }}<i class="val">{{ stack.progressbar }}%</i></span>
                            </div>
                        </div>
                        
                        <div class="row mt-5">
                            <div class="col-lg-3 col-6 text-center mt-5" v-for="stack in skills.stacks" :key="stack.id">
                                <img :src="`img/stacks/${stack.img}`" :alt="'Stack ' + stack.stack" height="140">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </template>

    <script>
    import { mapState } from 'vuex'

    export default {
        name: 'Skills',
        computed: {
            ...mapState(['skills'])
        },
    }
    </script>
    ```
5. Modificar vista **src\views\Home.vue**:
    ```vue
    <template>
        <div>
            <Header />
            <IntroSection />

            <!-- *** Cuerpo Principal *** -->
            <main id="main">
                <FeaturedServicesSection />
                <PoliticasCalidad />
                <Servicios />
                <CallToAction />
                <Skills />
                
                <!-- *** Facts Section *** -->
                ≡
            </main>  
            ≡		
        </div>
    </template>

    <script>
    import Header from '@/components/Header'
    import IntroSection from '@/components/IntroSection'
    import FeaturedServicesSection from '@/components/FeaturedServicesSection'
    import PoliticasCalidad from '@/components/PoliticasCalidad'
    import Servicios from '@/components/Servicios'
    import CallToAction from '@/components/CallToAction'
    import Skills from '@/components/Skills'

    export default {
        name: 'Home',
        components: {
            Header,
            IntroSection,
            FeaturedServicesSection,
            PoliticasCalidad,
            Servicios,
            CallToAction,
            Skills
        }
    }
    </script>
    ```
6. Subir repositorio:
    + $ git add .
    + $ git commit -m "Diseño del componente Skills"
    + $ git push -u origin main


## Diseño del componente Facts
1. Reemplazar la imagen **public\img\facts-img.png** por una acorde con nuestro proyecto.
2. Editar la tienda **src\store\index.js**:
    ```js
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            intro: {
                ≡
            },
            destacados: [
                ≡
            ],
            calidad: {
                ≡
            },
            servicios: {
                ≡
            },
            accion: {
                ≡
            },
            skills: {
                ≡
            },
            facts: {
                texto: '“Vive como si fueses a morir mañana. Aprende como si fueses a vivir para siempre”. — Mahatma Gandhi',
                cursos: 85,
                horas: 824
            }
        },
        mutations: {
        },
        actions: {
        },
        modules: {
        }
    })
    ```
3. Crear componente **src\components\Facts.vue**:
    ```vue
    <template>
        <div>
            <section id="facts"  class="wow fadeIn">
                <div class="container">
                    <header class="section-header">
                        <h3>Autoaprendizaje</h3>
                        <p>{{ facts.texto }}</p>
                    </header>
                    <div class="row counters">
                        <div class="col-lg-6 col-6 text-center">
                            <span data-toggle="counter-up">{{ facts.cursos }}</span>
                            <p>Cursos realizados</p>
                        </div>
                        <div class="col-lg-6 col-6 text-center">
                            <span data-toggle="counter-up">{{ facts.horas }}</span>
                            <p>Horas invertidas</p>
                        </div>
                    </div>
                    <div class="facts-img">
                        <img src="img/facts-img.png" alt="" class="img-fluid">
                    </div>
                </div>
            </section>
        </div>
    </template>

    <script>
    import { mapState } from 'vuex'

    export default {
        name: 'Facts',
        computed: {
            ...mapState(['facts'])
        },
    }
    </script>
    ```
4. Modificar vista **src\views\Home.vue**:
    ```vue
    <template>
        <div>
            <Header />
            <IntroSection />

            <!-- *** Cuerpo Principal *** -->
            <main id="main">
                <FeaturedServicesSection />
                <PoliticasCalidad />
                <Servicios />
                <CallToAction />
                <Skills />
                <Facts />
                
                <!-- *** Portfolio Section *** -->
                ≡
            </main>
            ≡		
        </div>
    </template>

    <script>
    import Header from '@/components/Header'
    import IntroSection from '@/components/IntroSection'
    import FeaturedServicesSection from '@/components/FeaturedServicesSection'
    import PoliticasCalidad from '@/components/PoliticasCalidad'
    import Servicios from '@/components/Servicios'
    import CallToAction from '@/components/CallToAction'
    import Skills from '@/components/Skills'
    import Facts from '@/components/Facts'

    export default {
        name: 'Home',
        components: {
            Header,
            IntroSection,
            FeaturedServicesSection,
            PoliticasCalidad,
            Servicios,
            CallToAction,
            Skills,
            Facts
        }
    }
    </script>
    ```
5. Subir repositorio:
    + $ git add .
    + $ git commit -m "Diseño del componente Facts"
    + $ git push -u origin main


## Diseño del componente Portfolio
1. Reemplazar el contenido del directorio **public\img\portfolio** por las imagenes de tu portafolio.
2. Guardar todos los logos en formato **png** relacionados con la aplicación en **public\img\logos**.
3. Modificar archivo de estilos **public\css\style.css**:
    ```css
    ≡
    #portfolio .portfolio-item {
        position: relative;
        height: 500px;
        overflow: hidden;
    }
    ≡
    ```
4. Editar la tienda **src\store\index.js**:
    ```js
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            intro: {
                ≡
            },
            destacados: [
                ≡
            ],
            calidad: {
                ≡
            },
            servicios: {
                ≡
            },
            accion: {
                ≡
            },
            skills: {
                ≡
            },
            facts: {
                ≡
            },
            portafolio: { 
                proyectos: [
                    {
                        id: 28,
                        titulo: 'Aplicación Laravel con base de datos MongoDB',
                        descripcion: 'Creación de una aplicación en Laravel que conecta con una base de datos MongoDB. La aplicación se publicó en Heroku mientras que la base de datos se alojó en Atlas MongoDB.',
                        img: 'laravel_mongodb.png',
                        enlace: 'http://laravelmongo.herokuapp.com/',
                        repositorio: 'https://github.com/petrix12/laravel_mongodb_2021',
                        data_filter: 'filter-web',
                        anho: 2021,
                        tecnologias: ['laravel', 'mongo', 'atlas', 'heroku']
                    },
                    {
                        id: 27,
                        titulo: 'CRUD Laravel - Vue.js con Sweetalert2, Toastr y Axios',
                        descripcion: 'Creación de un CRUD en Laravel y Vue.js, que conecta con una API Rest y utiliza las tecnologías de Sweetalert2, Toastr para la creación de formularios y mensajes, y Axios para consumir la API.',
                        img: 'laravel_vue20021.png',
                        enlace: 'http://laravelvue-2021.herokuapp.com/',
                        repositorio: 'https://github.com/petrix12/laravel_vue_2021.git',
                        data_filter: 'filter-web',
                        anho: 2021,
                        tecnologias: ['laravel', 'vuejs', 'axios', 'sweetalert2']
                    },
                    {
                        id: 26,
                        titulo: 'Creación de proyectos en Vue.js',
                        descripcion: 'En este apartado se pretende mostrar varios tipos de proyectos realizados en Vue.js, con la intención de explorar el potencial de unos de los framework de FrontEnd más demandados de la actualidad.',
                        img: 'vuejs2021.png',
                        enlace: 'https://solucionespp-vuejs.netlify.app/',
                        repositorio: 'https://github.com/petrix12/vue2021',
                        data_filter: 'filter-web',
                        anho: 2021,
                        tecnologias: ['vuejs', 'netlify', 'net_core', 'git']
                    },
                    {
                        id: 25,
                        titulo: 'Creación de una pasarela de pagos en Laravel 8',
                        descripcion: 'En este proyecto se creó una pasarela de pagos en Laravel 8. La aplicación se implementó con Laravel Cashier, y se utilizó como API de pagos a la plataforma de Stripe. Las vistas se desarrollaron principalmente con Tailwind CSS.',
                        img: 'paymet.png',
                        enlace: 'http://paymet.herokuapp.com/tutorial',
                        repositorio: 'https://github.com/petrix12/pasarela_pago.git',
                        data_filter: 'filter-web filter-destacados',
                        anho: 2021,
                        tecnologias: ['laravel', 'tailwindcss', 'stripe', 'git']
                    },
                    {
                        id: 24,
                        titulo: 'Creación de una API RESTful en Laravel 8',
                        descripcion: 'En este proyecto se creó una API RESTful en Laravel 8, con un sistema de autenticación generado por Laravel Passport, un sistema de roles y permisos generados por Laravel Permission, también se utilizó Vue Js y Axios.',
                        img: 'apirestful.png',
                        enlace: 'https://github.com/petrix12/apirestful_laravel8/blob/main/apuntes.md',
                        repositorio: 'https://github.com/petrix12/apirestful_laravel8/blob/main/apuntes.md',
                        data_filter: 'filter-web',
                        anho: 2021,
                        tecnologias: ['laravel', 'vuejs', 'github', 'git']
                    },
                    {
                        id: 23,
                        titulo: 'Creación de un Curriculum Vitae desarrollado en Laravel 8',
                        descripcion: 'Creación de un Curriculum Vitae Online personalizado y administrable, desarrollado en Laravel 8, alojado en Heroku y con deploy automático desde GitHub.',
                        img: 'cvonline.png',
                        enlace: 'https://cvpetrix.herokuapp.com',
                        repositorio: 'https://github.com/petrix12/cvpetrix',
                        data_filter: 'filter-web',
                        anho: 2021,
                        tecnologias: ['laravel', 'heroku', 'github', 'git']
                    },
                    {
                        id: 22,
                        titulo: 'Instalación de un proyecto Laravel en AWS',
                        descripcion: 'Instalación de un proyecto Laravel 8 en Amazon Web Services, en una instancia de máquina virtual EC2 y un servicio RDS para instalación de una instancia de base de datos MariaDB.',
                        img: 'aws_laravel.png',
                        enlace: 'https://github.com/petrix12/awsejemplo/blob/main/apuntes.md',
                        repositorio: 'https://github.com/petrix12/awsejemplo/blob/main/apuntes.md',
                        data_filter: 'filter-web',
                        anho: 2021,
                        tecnologias: ['aws', 'laravel', 'github', 'git']
                    },
                    {
                        id: 21,
                        titulo: 'Creación de una plataforma de cursos online con Laravel 8',
                        descripcion: 'Creación de una aplicación en Laravel Jetstream, que permite adiministrar una plataforma de cursos online, en donde se consume una API de PayPal para dar acceso a los cursos de pago.',
                        img: 'cursos_laravel.png',
                        enlace: 'https://github.com/petrix12/PlataformaDeCursosLaravel/blob/main/000%20Soportes/apuntes.md',
                        repositorio: 'https://github.com/petrix12/PlataformaDeCursosLaravel/blob/main/000%20Soportes/apuntes.md',
                        data_filter: 'filter-web filter-destacados',
                        anho: 2021,
                        tecnologias: ['laravel', 'paypal', 'livewire', 'git']
                    },
                    {
                        id: 20,
                        titulo: 'Creación de una plataforma de información genealógica desarrollado en Laravel 8',
                        descripcion: 'Creación de una plataforma para administrar la carga de información genealógica de la empresa Sefar Universal, desarrollado en Laravel 8 con Jetstream y Livewire. Alojada en GoDaddy.',
                        img: 'app_sefar.png',
                        enlace: 'https://github.com/petrix12/AppSefarUniversal',
                        repositorio: 'https://github.com/petrix12/AppSefarUniversal',
                        data_filter: 'filter-web filter-destacados',
                        anho: 2021,
                        tecnologias: ['laravel', 'tailwindcss', 'github', 'godaddy']
                    },
                    {
                        id: 19,
                        titulo: 'Creación de un sistema base de roles y permisos',
                        descripcion: 'Creación de una aplicación con un sistema de roles y permisos que sirve de base para el desarrollo de otras aplicaciones que requieran de esta modalidad. Esta aplicación se desarrollo principalmente con Larevel 8, Jetstream y Livewire.',
                        img: 'roles_permisos2021.png',
                        enlace: 'http://laravel-permission-2021.herokuapp.com/',
                        repositorio: 'https://github.com/petrix12/laravel-permission2021',
                        data_filter: 'filter-web filter-destacados',
                        anho: 2021,
                        tecnologias: ['laravel', 'jetstream', 'livewire', 'github']
                    },
                    {
                        id: 18,
                        titulo: 'Creación de una aplicación de árbol genealógico en Laravel 7',
                        descripcion: 'Creación de una aplicación para consultar árboles genealógico. Aplicación desarrollada en Laravel 7 para la empresa Sefar Universal. Repositorios: ftm_sefar y arbol_sefar. Sitio web: App Genealogía Sefar',
                        img: 'genealogia_sefar.png',
                        enlace: 'https://www.youtube.com/watch?v=2VsGfquR7KU',
                        enlace2: 'https://genealogiasefar.com/',
                        repositorio: 'https://github.com/petrix12/ftm_sefar',
                        repositorio2: 'https://github.com/petrix12/arbol_sefar',
                        data_filter: 'filter-web filter-destacados',
                        anho: 2020,
                        tecnologias: ['laravel', 'php', 'html5', 'github']
                    },
                    {
                        id: 17,
                        titulo: 'Soluciones++: Creación de una página web con Blogger',
                        descripcion: 'Desarrollo de un blog con tecnología Blogger, titulado Soluciones++, que trata sobre temas relacionados con propuestas de soluciones a problemas principalmente de desarrollo web y de aplicaciones informáticas.',
                        img: 'solucionespp.png',
                        enlace: 'https://solplusplus.blogspot.com',
                        repositorio: '#',
                        data_filter: 'filter-otros',
                        anho: 2020,
                        tecnologias: ['blogger', 'html5']
                    },
                    {
                        id: 16,
                        titulo: 'Subir archivos a la red con Laravel y almacenar sus datos en MySQL',
                        descripcion: 'Desarrollo de una aplicación en Laravel para subir multiples archivos al sitio en donde se encuentra alojado el proyecto. Con este programa no solo se pretende subir multiples archivos, sino llevar un control de estos en una base de datos MySQL.',
                        img: 'subir_archivos.png',
                        enlace: 'https://solucionespp-file.herokuapp.com/',
                        repositorio: '#',
                        data_filter: 'filter-web',
                        anho: 2020,
                        tecnologias: ['laravel', 'php', 'mysql', 'heroku']
                    },
                    {
                        id: 15,
                        titulo: 'Soluciones Office: Creación de una página web con Facebook',
                        descripcion: 'Desarrollo de una página web con Facebook, titulado Soluciones Office, que trata principalmente sobre temas relacionados con el desarrollo web y el desarrollo aplicaciones aplicaciones informáticas en general.',
                        img: 'pag_facebook.png',
                        enlace: 'https://www.facebook.com/solplusplus',
                        repositorio: '#',
                        data_filter: 'filter-otros',
                        anho: 2020,
                        tecnologias: ['facebook']
                    },
                    {
                        id: 14,
                        titulo: 'Aplicación Árbol Genealógico en Excel',
                        descripcion: 'Aplicación desarrollada en Microsoft Excel y Visual Basic para Aplicaciones, para cargar un árbol genealógico.',
                        img: 'app_excel.png',
                        enlace: 'http://cvpetrix.herokuapp.com/descargas/arbol_excel/arbol.xlsm',
                        repositorio: 'https://github.com/petrix12/arbol_excel2019',
                        data_filter: 'filter-otros',
                        anho: 2019,
                        tecnologias: ['excel', 'vba']
                    },
                    {
                        id: 13,
                        titulo: 'Herramientas y Soluciones Office: Creación de una página web con Blogger',
                        descripcion: 'Desarrollo de un blog con tecnología Blogger, titulado Herramientas y Soluciones Office, que trata principalmente temas relacionados con Microsoft Excel y Visual Basic para Aplicaciones.',
                        img: 'hysoffice.png',
                        enlace: 'https://toolssolucionesoffice.blogspot.com/',
                        repositorio: '#',
                        data_filter: 'filter-otros',
                        anho: 2019,
                        tecnologias: ['blogger', 'html5']
                    },
                    {
                        id: 12,
                        titulo: 'Edición y revisión de redacción del libro Color Esperanza',
                        descripcion: 'Edición y redacción del libro Color Esperanza escrito por Isabel Bazó, en este proyecto se editó el libro con Microsoft Word, la caratula se trabajó en Microsoft PowerPoint, y finalmente se ensambló con Adobe Acrobat.',
                        img: 'esperanza.png',
                        enlace: 'http://cvpetrix.herokuapp.com/descargas/portafolio/Color%20Esperanza.pdf',
                        repositorio: '#',
                        data_filter: 'filter-otros',
                        anho: 2019,
                        tecnologias: ['word', 'powerpoint', 'pdf']
                    },
                    {
                        id: 11,
                        titulo: 'Automatización reportes PDVSA Comercio y Suministro',
                        descripcion: 'Automatización de reportes de la Gerencia de Administración y Finanzas de PDVSA Comercio y Suministo con Microsoft Excel y Visual Basic para Aplicaciones.',
                        img: 'pdvsa_cys.png',
                        enlace: 'https://www.youtube.com/watch?v=TUydu-_D_yE',
                        repositorio: 'https://github.com/petrix12/automatizacion_vba_2017',
                        data_filter: 'filter-otros',
                        anho: 2017,
                        tecnologias: ['excel', 'vba', 'vb6']
                    },
                    {
                        id: 10,
                        titulo: 'Automatización reportes PDVSA Planificación Distrito San Tomé',
                        descripcion: 'Automatización de reportes de guardias de la Superintendencia de Planificación, Presupuesto y Gestión del Distrito San Tomé con Microsoft Excel y Visual Basic para Aplicaciones.',
                        img: 'guardia_stm.png',
                        enlace: 'http://cvpetrix.herokuapp.com/en_construccion',
                        repositorio: '#',
                        data_filter: 'filter-otros',
                        anho: 2015,
                        tecnologias: ['excel', 'vba', 'vb6']
                    },
                    {
                        id: 9,
                        titulo: 'Edición y producción de un video sobre gestión de la calidad',
                        descripcion: 'Edición y producción de un mini documental sobre la implementación de un sistema de gestión de la calidad en la Gerencia de Infraestructura y Procesos de Superficie de PDVSA San Tomé, desarrollado en Adobe Premiere, After Effects y Photoshop.',
                        img: 'video_gips.png',
                        enlace: 'https://www.youtube.com/watch?v=Bm49wbe4vdY',
                        repositorio: '#',
                        data_filter: 'filter-otros',
                        anho: 2011,
                        tecnologias: ['premiere', 'after_effects', 'photoshop']
                    },
                    {
                        id: 8,
                        titulo: 'Animación 3D actividades de la Gcia. Procesos de Superficie PDVSA San Tomé',
                        descripcion: 'Video sobre las actividades de la Gerencia de Procesos de Superficie PDVSA San Tomé, el cual desarrollé y edité con mi compañero Félix Santaella por el año 2009. Pido disculpa por la política incluida, pero eso escapaba de mis manos. Espero que les guste.',
                        img: 'gps.png',
                        enlace: 'https://www.youtube.com/watch?v=T4K_YjPMG2s',
                        repositorio: '#',
                        data_filter: 'filter-otros',
                        anho: 2009,
                        tecnologias: ['3dsmax', 'premiere', 'after_effects', 'photoshop']
                    },
                    {
                        id: 7,
                        titulo: 'Animación 3D presentación del Templo de Media Legua',
                        descripcion: 'Animación 3D para la recaudación de fondos para la construcción de la Iglesia San Juan María Vianney en Media Legua. Para el desarrollo de esta animación se utilizó principalmente AutoCAD, 3DS Max y la Suite de Adobe Creative.',
                        img: 'media_legua.png',
                        enlace: 'https://www.youtube.com/watch?v=lhEiIR0jjq4',
                        repositorio: '#',
                        data_filter: 'filter-otros',
                        anho: 2009,
                        tecnologias: ['3dsmax', 'premiere', 'photoshop', 'autocad']
                    },
                    {
                        id: 6,
                        titulo: 'Animación 3D video navideño Infraestructura Dacion',
                        descripcion: 'Video navideño de la Superintendencia de Infraestructura Dacion PDVSA San Tomé, el cual desarrollé y edité en diciembre del año 2007 apoyandome en los programas de la Suite de Adobe Creative.',
                        img: 'navidad2007.png',
                        enlace: 'https://www.youtube.com/watch?v=tqk6xrtbNdY',
                        repositorio: '#',
                        data_filter: 'filter-otros',
                        anho: 2007,
                        tecnologias: ['3dsmax', 'premiere', 'after_effects', 'photoshop']
                    },
                    {
                        id: 5,
                        titulo: 'Automatización memorias descriptivas de líneas de flujo y de transferencia',
                        descripcion: 'Automatización de memorias descriptivas de líneas de flujo y de transferencia del campo Dacion de PDVSA Distrito San Tomé con Microsoft Excel y Visual Basic para Aplicaciones.',
                        img: 'memorias.png',
                        enlace: 'http://cvpetrix.herokuapp.com/en_construccion',
                        repositorio: '#',
                        data_filter: 'filter-otros',
                        anho: 2007,
                        tecnologias: ['excel', 'vba', 'vb6']
                    },
                    {
                        id: 4,
                        titulo: 'Aplicación para el ajuste de datos experimentales con modelos no lineales',
                        descripcion: 'En este trabajo se desarrolló una aplicación en Microsoft Visual C++ 6.0 junto con Digital Visual Fortran 6.0 el cual permite optimizar parámetros de modelos matemáticos lineales y no lineales de diversas complejidades.',
                        img: 'tesis.png',
                        enlace: 'http://cvpetrix.herokuapp.com/descargas/portafolio/tesis_ing.zip',
                        repositorio: '#',
                        data_filter: 'filter-otros',
                        anho: 2002,
                        tecnologias: ['vcpp6', 'vf6', 'word', 'powerpoint']
                    },
                    {
                        id: 3,
                        titulo: 'Testimonio sobre la tragedia de Vargas del 15 de diciembre de 1999',
                        descripcion: 'Escrito relatado en modo cronológico sobre mis vivencias durante la tragedia de Vargas del 15 de diciembre de 1999. Este escrito se realizó a pocos días de lo ocurrido para evitar olvidar detalles que luego se podrían borrar con el tiempo.',
                        img: 'tragedia99.png',
                        enlace: 'https://petrix12.github.io/tragedia99',
                        repositorio: 'https://petrix12.github.io/tragedia99',
                        data_filter: 'filter-otros filter-destacados',
                        anho: 1999,
                        tecnologias: ['word']
                    },
                    {
                        id: 2,
                        titulo: 'Resolución de problemas de programación en Pascal, C, C++ y Visual Basic 6.0',
                        descripcion: 'En este apartado se presentan repositorios en GitHub con problemas de programación orientado a estudiantes de ingenieria, con la finalidad de ejercitar la lógica de programación.',
                        img: 'logica.png',
                        enlace: 'http://cvpetrix.herokuapp.com/en_construccion',
                        repositorio: '#',
                        data_filter: 'filter-otros',
                        anho: 1995,
                        tecnologias: ['pascal', 'c', 'cpp', 'vb6']
                    },
                    {
                        id: 1,
                        titulo: 'Resolución de problemas en el lenguaje UserRPL',
                        descripcion: 'En este apartado se presentan repositorios en GitHub con problemas resueltos en el lenguaje UserRPL, que es el empleado en las calculadoras gráficas HP48G.',
                        img: 'user_rpl.png',
                        enlace: 'http://cvpetrix.herokuapp.com/en_construccion',
                        repositorio: '#',
                        data_filter: 'filter-otros',
                        anho: 1993,
                        tecnologias: ['hp']
                    }
                ]
            }
        },
        mutations: {
        },
        actions: {
        },
        modules: {
        }
    })
    ```
5. Crear componente **src\components\Portfolio.vue**:
    ```vue
    <template>
        <div>
            <section id="portfolio"  class="section-bg" >
                <div class="container">
                    <header class="section-header">
                        <h3 class="section-title">Portafolio</h3>
                    </header>
                    <div class="row">
                        <div class="col-lg-12">
                            <ul id="portfolio-flters">
                                <li data-filter="*" class="filter-active">Todos</li>
                                <li data-filter=".filter-destacados">Destacados</li>
                                <li data-filter=".filter-web">App Web</li>
                                <li data-filter=".filter-otros">Otros</li>
                            </ul>
                        </div>
                    </div>

                    <div class="row portfolio-container">
                        <div v-for="(proyecto, item) in portafolio.proyectos" :key="item" class="col-lg-4 col-md-6 portfolio-item wow fadeInUp" :class="proyecto.data_filter" :data-wow-delay="estiloCard(item + 1)">
                            <div class="portfolio-wrap">
                                <figure>
                                    <img :src="`img/portfolio/${proyecto.img}`" class="img-fluid" :alt="proyecto.img">
                                    <a :href="`img/portfolio/${proyecto.img}`" data-lightbox="portfolio" :data-title="proyecto.titulo" class="link-preview" title="Ver"><i class="ion ion-eye"></i></a>
                                    <a :href="proyecto.repositorio" target="_blank" class="link-details" title="Ir a repositorio"><i class="ion ion-android-open"></i></a>
                                </figure>

                                <div class="titulo p-2">
                                    <h4><a :href="proyecto.enlace" target="_blank">{{ proyecto.titulo }}</a></h4>
                                </div>

                                <div class="descripcion p-2">
                                    <p><small>{{ proyecto.descripcion }}</small></p>
                                </div>

                                <div class="d-flex justify-content-between align-items-center p-2">
                                    <img v-for="(tecnologia, index) in proyecto.tecnologias" :key="index"
                                        :src="`img/logos/${tecnologia}.png`" width="45" height="45"
                                        :alt="`Logo ${tecnologia}`" title="tecnologia">
                                    <small class="text-muted"><strong>{{ proyecto.anho }}</strong></small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </template>

    <script>
    import { mapState } from 'vuex'

    export default {
        name: 'Portfolio',
        computed: {
            ...mapState(['portafolio'])
        },
        methods: {
            estiloCard(item){
                const tiempo = item % 3
                switch (tiempo) {
                case 1:
                    return '0.0s'
                case 2:
                    return '0.1s'
                case 0:
                    return '0.2s'
                default:
                    return '0.0s'
                }
            }
        }
    }
    </script>

    <style scoped>
        .titulo {
            height: 60px;
            text-align: center;
        }

        .titulo a {
            color: grey;
            font-size: 55%;
            font-weight: bold;
            line-height: 20% !important;
        }

        .titulo a:hover {
            color: rgb(28, 28, 85);
        }

        figure {
            height: 234px !important;
        }

        .descripcion {
            height: 120px !important;
            font-size: 85%;
            text-align: justify;
        }
    </style>
    ```
7. Modificar vista **src\views\Home.vue**:
    ```vue
    <template>
        <div>
            <Header />
            <IntroSection />

            <!-- *** Cuerpo Principal *** -->
            <main id="main">
                <FeaturedServicesSection />
                <PoliticasCalidad />
                <Servicios />
                <CallToAction />
                <Skills />
                <Facts />
                <Portfolio />
                
                <!-- *** Clients Section *** -->
                ≡
            </main>
            ≡		
        </div>
    </template>

    <script>
    import Header from '@/components/Header'
    import IntroSection from '@/components/IntroSection'
    import FeaturedServicesSection from '@/components/FeaturedServicesSection'
    import PoliticasCalidad from '@/components/PoliticasCalidad'
    import Servicios from '@/components/Servicios'
    import CallToAction from '@/components/CallToAction'
    import Skills from '@/components/Skills'
    import Facts from '@/components/Facts'
    import Portfolio from '@/components/Portfolio'

    export default {
        name: 'Home',
        components: {
            Header,
            IntroSection,
            FeaturedServicesSection,
            PoliticasCalidad,
            Servicios,
            CallToAction,
            Skills,
            Facts,
		    Portfolio
        }
    }
    </script>
    ```
6. Subir repositorio:
    + $ git add .
    + $ git commit -m "Diseño del componente Portfolio"
    + $ git push -u origin main


## Diseño del componente Clients
1. Eliminar el contenido de la carpeta **public\img\clients**.
2. Guardar todos los logos de clientes en formato **png** relacionados con la aplicación en **public\img\clients**.
3. Editar la tienda **src\store\index.js**:
    ```js
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            intro: {
                ≡
            },
            destacados: [
                ≡
            ],
            calidad: {
                ≡
            },
            servicios: {
                ≡
            },
            accion: {
                ≡
            },
            skills: {
                ≡
            },
            facts: {
                ≡
            },
            portafolio: { 
                ≡
            },
            clients: {
                entes: [
                    {
                        id: 15,
                        nombre: 'sefar'
                    },
                    {
                        id: 14,
                        nombre: 'pdvsa'
                    },
                    {
                        id: 13,
                        nombre: 'ugma'
                    },
                    {
                        id: 12,
                        nombre: 'digit'
                    },
                    {
                        id: 11,
                        nombre: 'agrotecnica'
                    },
                    {
                        id: 10,
                        nombre: 'costa_consultores'
                    },
                    {
                        id: 9,
                        nombre: 'proynca'
                    },
                    {
                        id: 8,
                        nombre: 'eni'
                    },
                    {
                        id: 7,
                        nombre: 'dacion'
                    },
                    {
                        id: 6,
                        nombre: 'los_arcos'
                    },
                    {
                        id: 5,
                        nombre: 'verbal'
                    },
                    {
                        id: 4,
                        nombre: 'ucv'
                    },
                    {
                        id: 3,
                        nombre: 'ing_ucv'
                    },
                    {
                        id: 2,
                        nombre: 'dioc'
                    },
                    {
                        id: 1,
                        nombre: 'ucv_petroleo'
                    }
                ],
                experiencias: [
                    {
                        id: 17,
                        inicio_mes: 'Ago',
                        inicio_anho: '2019',
                        fin_mes: 'Actual',
                        fin_anho: 'Actual',
                        cargo: 'Líder de Control y Seguimiento y Desarrollador Web',
                        descripcion: 'Realizar seguimiento a los procesos de captación de clientes y desarrollo de aplicaciones web, usando Laravel y Vue.js como principales Framework de desarrollo.',
                        empresa: 'Sefar Universal S.L. Modalidad remoto.',
                        img: '',
                        logos: ['sefar']
                    },
                    {
                        id: 16,
                        inicio_mes: 'May',
                        inicio_anho: '2016',
                        fin_mes: 'Jul',
                        fin_anho: '2021',
                        cargo: 'Analista Mayor de Presupuesto',
                        descripcion: 'Consolidar ejercicios presupuestarios de operaciones, inversiones y compras. Automatización de reportes con VBA, Delphi, Access y MySQL. Cargar en SAP las cifras de los resultados obtenidos.',
                        empresa: 'Petróleos de Venezuela C.A. (PDVSA). Gerencia de Administración y Finanzas PDVSA Comercio y Suministro. La Campiña. Caracas.',
                        img: '',
                        logos: ['pdvsa']
                    },
                    {
                        id: 15,
                        inicio_mes: 'Mar',
                        inicio_anho: '2014',
                        fin_mes: 'May',
                        fin_anho: '2016',
                        cargo: 'Analista de Presupuesto',
                        descripcion: 'Asignación del presupuesto de operaciones e inversiones, optimizando el uso de los recursos asignados, y automatización de reportes con VBA, VB6, SQL Server y Access.',
                        empresa: 'Petróleos de Venezuela C.A. (PDVSA). Gerencia de Planificación Presupuesto y Gestión. Distrito San Tomé. Estado Anzoátegui.',
                        img: '',
                        logos: ['pdvsa']
                    },
                    {
                        id: 14,
                        inicio_mes: 'Mar',
                        inicio_anho: '2008',
                        fin_mes: 'Feb',
                        fin_anho: '2015',
                        cargo: 'Profesor de Programación',
                        descripcion: 'Impartir clases de programación en Visual Basic 6, Visual Basic para Aplicaciones y su conexión con bases de datos.',
                        empresa: 'Universidad Gran Mariscal de Ayacucho (UGMA). El Tigre. Estado Anzoátegui.',
                        img: '',
                        logos: ['ugma']
                    },
                    {
                        id: 13,
                        inicio_mes: 'Ene',
                        inicio_anho: '2010',
                        fin_mes: 'Mar',
                        fin_anho: '2014',
                        cargo: 'Supervisor de Presupuesto',
                        descripcion: 'Verificar el cumplimiento de la correcta aplicación de los cargos al presupuesto de inversión y de gastos. Evaluar, recomendar, alertar acciones y automatización de reportes con VBA y Access.',
                        empresa: 'Petróleos de Venezuela C.A. (PDVSA). Gerencia de Procesos de Superficie. Distrito San Tomé. Estado Anzoátegui.',
                        img: '',
                        logos: ['pdvsa']
                    },
                    {
                        id: 12,
                        inicio_mes: 'Ene',
                        inicio_anho: '2009',
                        fin_mes: 'Ene',
                        fin_anho: '2010',
                        cargo: 'Planificador de proyectos',
                        descripcion: 'Aplicar procedimientos para planificar proyectos de inversiones y realizar el seguimiento físico y financiero en sus diferentes fases, y automatización de reportes con Delphi y VBA.',
                        empresa: 'Petróleos de Venezuela C.A. (PDVSA). Superintendencia de Construcción de Obras Electromecánicas. Distrito San Tomé. Estado Anzoátegui.',
                        img: '',
                        logos: ['pdvsa']
                    },
                    {
                        id: 11,
                        inicio_mes: 'Feb',
                        inicio_anho: '2008',
                        fin_mes: 'Ene',
                        fin_anho: '2009',
                        cargo: 'Planificador de proyectos',
                        descripcion: 'Aplicar procedimientos para planificar proyectos de inversiones y realizar el seguimiento físico y financiero en sus diferentes fases.',
                        empresa: 'Digit Automatización. Superintendencia de Construcción de Obras Electromecánicas. Distrito San Tomé. Estado Anzoátegui.',
                        img: '',
                        logos: ['digit', 'pdvsa']
                    },
                    {
                        id: 10,
                        inicio_mes: 'Jul',
                        inicio_anho: '2007',
                        fin_mes: 'Feb',
                        fin_anho: '2008',
                        cargo: 'Controlador físico de proyectos',
                        descripcion: 'Control y seguimiento a las actividades de los proyectos. Consolidar y analizar los reportes de avance de obras de proyectos.',
                        empresa: 'Agrotécnica Aguilera C.A. Superintendencia de Infraestructura Mediano. Distrito San Tomé. Estado Anzoátegui.',
                        img: '',
                        logos: ['agrotecnica', 'pdvsa']
                    },
                    {
                        id: 9,
                        inicio_mes: 'Sep',
                        inicio_anho: '2006',
                        fin_mes: 'Jul',
                        fin_anho: '2007',
                        cargo: 'Inspector de Construcción',
                        descripcion: 'Diseñar y supervisar la construcción de líneas de flujo y transferencia. Elaborar Memorias Descriptivas asociadas a los proyectos de líneas de flujo.',
                        empresa: 'Costa Consultores 2030 C.A. Departamento de Infraestructura Dacion. Distrito San Tomé. Estado Anzoátegui.',
                        img: '',
                        logos: ['costa_consultores', 'pdvsa', 'dacion']
                    },
                    {
                        id: 8,
                        inicio_mes: 'Abr',
                        inicio_anho: '2006',
                        fin_mes: 'Sep',
                        fin_anho: '2006',
                        cargo: 'Líder de Construcción',
                        descripcion: 'Diseño y simulación de líneas de flujo (Hysys ‐ Pipephase). Elaboración de Memorias Descriptivas para construcción de líneas y Evaluaciones Económicas para los Proyectos de líneas de flujo.',
                        empresa: 'PROYNCA. Procesos y Negocios Integrales C.A. Departamento de Infraestructura Dacion Distrito San Tomé. Estado Anzoátegui.',
                        img: '',
                        logos: ['proynca', 'pdvsa', 'dacion']
                    },
                    {
                        id: 7,
                        inicio_mes: 'Ago',
                        inicio_anho: '2004',
                        fin_mes: 'Abr',
                        fin_anho: '2006',
                        cargo: 'Ingeniero de Procesos',
                        descripcion: 'Seguimiento a los proyectos de Ingeniería. Elaboración de Manuales de Operación de estaciones petroleras. Elaboración de planos de procesos (PFD). Sugerencias de mejoras al proceso de tratamiento de crudo.',
                        empresa: 'PROYNCA. Procesos y Negocios Integrales C.A. Departamento de Ingenieria ENI Dacion. San Tomé. Estado Anzoátegui.',
                        img: '',
                        logos: ['proynca', 'eni', 'dacion']
                    },
                    {
                        id: 6,
                        inicio_mes: 'Ene',
                        inicio_anho: '2004',
                        fin_mes: 'Ago',
                        fin_anho: '2004',
                        cargo: 'Profesor de Matemáticas',
                        descripcion: 'Encargado de dictar clases de matemáticas a cuatro secciones de estudiantes de 8vo grado.',
                        empresa: 'U. E. Colegio Los Arcos. Urb. La Esmeralda. Baruta.',
                        img: '',
                        logos: ['los_arcos']
                    },
                    {
                        id: 5,
                        inicio_mes: 'Ago',
                        inicio_anho: '2002',
                        fin_mes: 'Sep',
                        fin_anho: '2004',
                        cargo: 'Instructor de cursos preuniversitarios',
                        descripcion: 'Encargado de dictar clases de habilidad numérica, física, química y razonamiento mecánico en algunas unidades educativas de Venezuela, como el Colegio “Los Arcos” (Edo. Miranda), Colegio “La Concepción” (Edo. Miranda) y Colegio “Guayamurí” (Margarita).',
                        empresa: 'VERBAL. Corporación Educativa. Chacao.',
                        img: '',
                        logos: ['verbal']
                    },
                    {
                        id: 4,
                        inicio_mes: 'Mar',
                        inicio_anho: '2003',
                        fin_mes: 'Sep',
                        fin_anho: '2003',
                        cargo: 'Supervisor de obras de mantenimiento',
                        descripcion: 'Supervisar y velar que las instalaciones de algunas organizaciones y viviendas se encontrasen en perfecto estado de funcionamiento.',
                        empresa: 'Valle de Aramín S.L.U. Empresa de Construcción y Mantenimiento. Oviedo. España.',
                        img: '',
                        logos: ['generico']
                    },
                    {
                        id: 3,
                        inicio_mes: 'Mar',
                        inicio_anho: '1996',
                        fin_mes: 'Dic',
                        fin_anho: '2002',
                        cargo: 'Preparador de programación',
                        descripcion: 'Asistir a los estudiantes en los laboratorios de microcomputadores, en Programación (C/C++, Pascal y Delphi), AutoCAD, Access, Excel y Word.',
                        empresa: 'Departamento de Investigación de Operaciones y Computación (DIOC). Escuela Básica. Facultad de Ingenieria. Universidad Central de Venezuela. Ciudad Universitaria. Caracas.',
                        img: '',
                        logos: ['ucv', 'ing_ucv', 'dioc']
                    },
                    {
                        id: 2,
                        inicio_mes: 'Mar',
                        inicio_anho: '1995',
                        fin_mes: 'Mar',
                        fin_anho: '1996',
                        cargo: 'Encargado de sala de computadoras',
                        descripcion: 'Encargado de asistir técnicamente a los usuarios de la sala de micros, y procurar el correcto funcionamiento de los equipos mediante el mantenimiento de software y hardware.',
                        empresa: 'Dirección de Petróleo y Sala de Micros. Escuela de Ingeniería de Petróleo. Facultad de Ingenieria. Universidad Central de Venezuela. Ciudad Universitaria. Caracas.',
                        img: '',
                        logos: ['ucv', 'ucv_ing_pet']
                    },
                    {
                        id: 1,
                        inicio_mes: 'Ago',
                        inicio_anho: '1993',
                        fin_mes: 'Sep',
                        fin_anho: '1995',
                        cargo: 'Preparador de matemáticas y asistente en talleres vacacionales',
                        descripcion: 'Asistente de los eventos en los talleres vacacionales para niños y niñas entre 7 y 12 años y encargado de dictar clases de reparación de matemáticas a estudiantes de 7mo a 9no grado de algunas unidades educativas del Estado Vargas.',
                        empresa: 'APROFAM (Asociación Promoción Familia). Institución financiada por PDVSA. Macuto. Estado Vargas.',
                        img: '',
                        logos: ['pdvsa']
                    }
                ]
            }
        },
        mutations: {
        },
        actions: {
        },
        modules: {
        }
    })
    ```
4. Guardar todas las imagenenes relacionada al documento **experiencias** en formato **png** y en **public\img\experiencias** y nombrarla según su número de **id**.
5. Crear componente **src\components\Clients.vue**:
    ```vue
    <template>
        <div>
            <section id="clients" class="wow fadeInUp">
                <div class="container">
                    <header class="section-header">
                        <h3>Experiencia profesional</h3>
                    </header>
                    <div class="owl-carousel clients-carousel">
                        <img class="p-2" v-for="ente in clients.entes" :key="ente.id" :src="`img/clients/${ente.nombre}.png`" :alt="ente.nombre">
                    </div>
                </div>
            </section>

            <section id="experiencia">
                <div class="container">
                    <div class="row about-cols">
                        <div v-for="(experiencia, item) in clients.experiencias" :key="item" class="col-md-4 col-lg-3 wow fadeInUp" :data-wow-delay="estiloCard(item + 1)">
                            <div class="about-col">
                                <div class="img">
                                    <img :src="`img/experiencias/${experiencia.id}.png`" :alt="`Imagen ${experiencia.cargo}`" class="img-fluid">
                                </div>
                                <h2 class="cargo">{{ experiencia.cargo }}</h2>
                                <p class="descripcion p-2">{{ experiencia.descripcion }}</p>
                                <p class="empresa p-2">
                                    {{ experiencia.empresa }}
                                </p>

                                <div class="d-flex justify-content-between align-items-center p-2 lapso">
                                    <small class="text-muted"><strong>{{ `${experiencia.inicio_mes} ${experiencia.inicio_anho}` }}</strong></small>
                                    <img v-for="(logo, i) in experiencia.logos" :key="i"
                                        :src="`img/logos/${logo}.png`" width="20" height="20"
                                        :alt="`Logo ${logo}`" :title="logo">
                                    <small class="text-muted"><strong>{{ experiencia.fin_anho === 'Actual' ? 'Actual' : `${experiencia.fin_mes} ${experiencia.fin_anho}` }}</strong></small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </template>

    <script>
    import { mapState } from 'vuex'

    export default {
        name: 'Clients',
        computed: {
            ...mapState(['clients'])
        },
        methods: {
            estiloCard(item){
                const tiempo = item % 3
                switch (tiempo) {
                case 1:
                    return '0.0s'
                case 2:
                    return '0.1s'
                case 0:
                    return '0.2s'
                default:
                    return '0.0s'
                }
            }
        }
    }
    </script>

    <style scoped>
        #experiencia {
            background-size: cover;
            padding: 60px 0 40px 0;
            position: relative;
        }

        #experiencia::before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(255, 255, 255, 0.92);
            z-index: 9;
        }

        #experiencia .container {
            position: relative;
            z-index: 10;
        }

        #experiencia .about-col {
            background: #fff;
            border-radius: 0 0 4px 4px;
            box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
            margin-bottom: 20px;
        }

        #experiencia .about-col .img {
            position: relative;
        }

        #experiencia .about-col .img img {
            border-radius: 4px 4px 0 0;
        }

        #experiencia .about-col .icon {
            width: 32px;
            height: 32px;
            padding-top: 0px;
            text-align: center;
            position: absolute;
            border-radius: 50%;
            text-align: center;
            border: 2px solid #fff;
            left: 40%;
            bottom: 7px;
            transition: 0.3s;
        }

        #experiencia .about-col h2 {
            color: #000;
            text-align: center;
            font-weight: 700;
            font-size: 20px;
            padding: 0;
            margin: 40px 0 12px 0;
        }

        #experiencia .about-col h2 a {
            color: #000;
        }

        #experiencia .about-col h2 a:hover {
            color: #18d26e;
        }

        #experiencia .about-col p {
            font-size: 14px;
            line-height: 24px;
            color: #333;
            margin-bottom: 0;
            padding: 0 20px 20px 20px;
        }

        .cargo {
            height: 20px !important;
            font-size: 80% !important;
            margin-top: 0.5rem !important;
            line-height: 1.5em !important;
        }

        .descripcion {
            height: 100px !important;
            font-size: 70% !important;
            margin-top: 1.3rem !important;
            line-height: 1.5em !important;
            text-align: justify;
        }

        .empresa {
            height: 65px !important;
            font-size: 55% !important;
            margin-top: 0.5rem !important;
            line-height: 1.5em !important;
            font-weight: bold;
        }

        .lapso {
            height: 30px !important;
            font-size: 70% !important;
        }
    </style>
    ```
6. Modificar vista **src\views\Home.vue**:
    ```vue
    <template>
        <div>
            <Header />
            <IntroSection />

            <!-- *** Cuerpo Principal *** -->
            <main id="main">
                <FeaturedServicesSection />
                <PoliticasCalidad />
                <Servicios />
                <CallToAction />
                <Skills />
                <Facts />
                <Portfolio />
                <Clients />
                
                <!-- *** Testimonials Section *** -->
                ≡
            </main>
            ≡		
        </div>
    </template>

    <script>
    import Header from '@/components/Header'
    import IntroSection from '@/components/IntroSection'
    import FeaturedServicesSection from '@/components/FeaturedServicesSection'
    import PoliticasCalidad from '@/components/PoliticasCalidad'
    import Servicios from '@/components/Servicios'
    import CallToAction from '@/components/CallToAction'
    import Skills from '@/components/Skills'
    import Facts from '@/components/Facts'
    import Portfolio from '@/components/Portfolio'
    import Clients from '@/components/Clients'

    export default {
        name: 'Home',
        components: {
            Header,
            IntroSection,
            FeaturedServicesSection,
            PoliticasCalidad,
            Servicios,
            CallToAction,
            Skills,
            Facts,
		    Portfolio,
            Clients
        }
    }
    </script>
    ```
6. Subir repositorio:
    + $ git add .
    + $ git commit -m "Diseño del componente Clients"
    + $ git push -u origin main


## Diseño del componente Testimonials
1. Editar la tienda **src\store\index.js**:
    ```js
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            intro: {
                ≡
            },
            destacados: [
                ≡
            ],
            calidad: {
                ≡
            },
            servicios: {
                ≡
            },
            accion: {
                ≡
            },
            skills: {
                ≡
            },
            facts: {
                ≡
            },
            portafolio: { 
                ≡
            },
            clients: {
                ≡
            },
            testimonials: [
                {
                    id: 1,
                    testigo: 'Wiston Rodríguez',
                    testimonio: 'Mi experiencia con Pedro ha sido inmejorable. Es muy profesional y absolutamente comprometido con todos los temas que le hemos encargado. De hecho, es la referencia principal para nuestros clientes en materia de desarrollo Web y de aplicaciones.',
                    ocupacion: 'Ingeniero de Procesos',
                    activo: true
                },
                {
                    id: 2,
                    testigo: 'Jorge Kaffure',
                    testimonio: 'Personalmente, pienso que gracias a su estrategia para automatizar toda la información presupuestaria, hemos logrado ahorrar una gran cantidad de horas hombres.',
                    ocupacion: 'Analista de Presupuesto',
                    activo: true
                },
                {
                    id: 3,
                    testigo: 'Leticia Rodríguez',
                    testimonio: 'Lo considero serio, eficiente, creativo y siempre al servicio del cliente ante cualquier duda o consulta, con un trato y una amabilidad que valoro increiblemente. En definitiva es un muy buen profesional.',
                    ocupacion: 'Analista de Genealogía',
                    activo: true
                },
                {
                    id: 4,
                    testigo: 'Jorge Aparicio',
                    testimonio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat fugit nulla quas nemo ipsa sequi vero beatae sapiente aliquam, officia atque ullam cumque, aperiam in dolorem quidem eos saepe esse.',
                    ocupacion: 'Gerente de Comercio y Suministro',
                    activo: false
                },
                {
                    id: 5,
                    testigo: 'Rosa Canelón',
                    testimonio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum harum accusantium quasi aperiam, qui provident odio fugit commodi, cumque voluptates, ex blanditiis? Ipsum minima neque aliquid illum laboriosam voluptatum vero.',
                    ocupacion: 'Profesora de Matemáticas',
                    activo: false
                },
                {
                    id: 6,
                    testigo: 'Carlos Zanella',
                    testimonio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit vero ullam explicabo amet porro earum assumenda voluptatem facilis quis minima unde, eius dolorem voluptatum iure corporis vel maiores accusamus fugiat.',
                    ocupacion: 'Analista de Presupuesto',
                    activo: false
                },
                {
                    id: 7,
                    testigo: 'Marielys Sánchez',
                    testimonio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aspernatur ducimus qui, pariatur placeat ipsam sunt, aut corrupti rem enim fugit veniam dolorum repudiandae eveniet, error omnis quos quis voluptates!',
                    ocupacion: 'Gerente de Administración y Finanzas',
                    activo: false
                },
                {
                    id: 8,
                    testigo: 'Guillermo Bazó',
                    testimonio: 'Todo un ingeniero. Cuenta con muchos recursos adquiridos en la vida (Liceo Militar, Escuela Básica de FFAANN, Escuela de Aviación Militar: Subordinación y disciplina), sobreviviente de la Tragedia de Vargas y un excelente matrimonio. Lo recomiendo con los ojos cerrados. Q.D.L.B.',
                    ocupacion: 'Jubilado de la Electricidad de Caracas',
                    activo: true
                },
                {
                    id: 9,
                    testigo: 'Felix Santaella',
                    testimonio: 'Necesitábamos una aplicación que cubriera las necesidades de gestión de mi empresa para llevar un mejor control interno. El trato y la calidad a lo largo de todo el proceso fue perfecto. Cuesta encontrar profesionales que se adapten tan bien a lo que necesitas!',
                    ocupacion: 'Gerente de Planificación, Presupuesto y Gestión',
                    activo: true
                },
                {
                    id: 10,
                    testigo: 'Penélope Laucho',
                    testimonio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempora, deleniti delectus repellat unde maxime nemo, pariatur hic iste eius placeat corrupti. Fuga sed at esse facere fugit, asperiores pariatur.',
                    ocupacion: 'Superintendente de Presupuesto',
                    activo: false
                },
                {
                    id: 11,
                    testigo: 'Isabel Bazó',
                    testimonio: 'Dejé en sus manos la creación de mi página web, sin duda ha sido un acierto. Su asesoramiento y profesionalidad nos han dotado de un gran valor agregado. Una imagen que es la mejor tarjeta de presentación.',
                    ocupacion: 'Community Manager',
                    activo: true
                },
                {
                    id: 12,
                    testigo: 'Miguel Herrera',
                    testimonio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ea ab. Omnis atque vero ea laudantium, nihil dolore inventore reiciendis dignissimos, maiores amet dolor ab repellendus suscipit perferendis nulla nostrum.',
                    ocupacion: 'Gerente IT Sefar Universal',
                    activo: false
                },
                {
                    id: 13,
                    testigo: 'David Farias',
                    testimonio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt excepturi rerum ipsum accusamus et tempore ab magni asperiores libero vero consequuntur dolor nobis facere itaque ea quidem, sed ipsa quasi.',
                    ocupacion: 'Desarrollador Web',
                    activo: false
                },
                {
                    id: 14,
                    testigo: 'Dickison Pataquero',
                    testimonio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem doloremque numquam sequi ut. Et minima pariatur laudantium sequi eos iusto ipsum qui harum, quia ullam eligendi ad, distinctio consequuntur quaerat?',
                    ocupacion: 'Desarrollador WordPress',
                    activo: false
                },
                {
                    id: 15,
                    testigo: 'Nayibi Primera',
                    testimonio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quo consequatur molestias voluptates officia laborum quis quibusdam aperiam! Quasi excepturi recusandae saepe perferendis eligendi veritatis similique aut praesentium nemo deserunt?',
                    ocupacion: 'Gerente de Operaciones',
                    activo: false
                },
                {
                    id: 16,
                    testigo: 'Abelardo Bazó',
                    testimonio: 'De mi experiencia con Pedro destacaría su rigor profesional, eficiencia y extraordinaria capacidad de adaptarse e identificar lo que el cliente necesita y desea, y que a veces ni siquiera sabe cómo plantear.',
                    ocupacion: 'Párroco de Diócesis de La Guaira',
                    activo: true
                },
                {
                    id: 17,
                    testigo: 'David Rodríguez',
                    testimonio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil cumque minima et voluptatibus dolores mollitia provident repellendus, iure tempora tenetur deleniti neque in cum aliquid quas nisi voluptate, iusto necessitatibus?',
                    ocupacion: 'Bibliotecólogo',
                    activo: false
                },
                {
                    id: 18,
                    testigo: 'Emily Morón',
                    testimonio: 'La creación de nuestra página web ha sido todo un éxito gracias a Pedro, una persona muy responsable y fiel con sus clientes. Nos ha hecho un gran trabajo sin duda.',
                    ocupacion: 'Comunicadora Social',
                    activo: true
                }
            ]
        },
        mutations: {
        },
        actions: {
        },
        modules: {
        }
    })
    ```
2. Guardar todas las imagenenes relacionada a la persona que da testimonio de ti en formato **jpg** y en **public\img\testimonials** y nombrarla según su número de **id**.
3. Crear componente **src\components\Testimonials.vue**:
    ```vue
    <template>
        <div>
            <section id="testimonials" class="section-bg wow fadeInUp">
                <div class="container">
                    <header class="section-header">
                        <h3>Testimoniales</h3>
                    </header>
                    <div class="owl-carousel testimonials-carousel">
                        <div v-for="testimonio in testimonios" :key="testimonio.id">
                            <div class="testimonial-item">
                                <img :src="`img/testimonials/${testimonio.id}.jpg`" class="testimonial-img" :alt="testimonio.testigo">
                                <h3>{{ testimonio.testigo }}</h3>
                                <h4>{{ testimonio.ocupacion }}</h4>
                                <p>
                                    <img src="img/quote-sign-left.png" class="quote-sign-left" alt="">
                                    {{ testimonio.testimonio }}
                                    <img src="img/quote-sign-right.png" class="quote-sign-right" alt="">
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </template>

    <script>
    import { mapState } from 'vuex'

    export default {
        name: 'Testimonials',
        computed: {
            ...mapState(['testimonials']),
            testimonios () {
                return this.testimonials.filter(item => item.activo)
            }
        }
    }
    </script>
    ```
4. Modificar vista **src\views\Home.vue**:
    ```vue
    <template>
        <div>
            <Header />
            <IntroSection />

            <!-- *** Cuerpo Principal *** -->
            <main id="main">
                <FeaturedServicesSection />
                <PoliticasCalidad />
                <Servicios />
                <CallToAction />
                <Skills />
                <Facts />
                <Portfolio />
                <Clients />
                <Testimonials />
                
                <!-- *** Team Section *** -->
                ≡
            </main>
            ≡		
        </div>
    </template>

    <script>
    import Header from '@/components/Header'
    import IntroSection from '@/components/IntroSection'
    import FeaturedServicesSection from '@/components/FeaturedServicesSection'
    import PoliticasCalidad from '@/components/PoliticasCalidad'
    import Servicios from '@/components/Servicios'
    import CallToAction from '@/components/CallToAction'
    import Skills from '@/components/Skills'
    import Facts from '@/components/Facts'
    import Portfolio from '@/components/Portfolio'
    import Clients from '@/components/Clients'
    import Testimonials from '@/components/Testimonials'

    export default {
        name: 'Home',
        components: {
            Header,
            IntroSection,
            FeaturedServicesSection,
            PoliticasCalidad,
            Servicios,
            CallToAction,
            Skills,
            Facts,
		    Portfolio,
            Clients,
            Testimonials
        }
    }
    </script>
    ```
6. Eliminar los siguientes archivos:
    + public\img\testimonial-1.jpg
    + public\img\testimonial-2.jpg
    + public\img\testimonial-3.jpg
    + public\img\testimonial-4.jpg
    + public\img\testimonial-5.jpg
7. Subir repositorio:
    + $ git add .
    + $ git commit -m "Diseño del componente Testimonials"
    + $ git push -u origin main


## Diseño del componente Estudios
1. Editar la tienda **src\store\index.js**:
    ```js
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            intro: {
                ≡
            },
            destacados: [
                ≡
            ],
            calidad: {
                ≡
            },
            servicios: {
                ≡
            },
            accion: {
                ≡
            },
            skills: {
                ≡
            },
            facts: {
                ≡
            },
            portafolio: { 
                ≡
            },
            clients: {
                ≡
            },
            testimonials: [
                ≡
            ],
            formacion: {
                texto: '“Nunca consideres el estudio como una obligación, sino como una oportunidad para penetrar en el bello y maravilloso mundo del saber”. - Albert Einstein.',
                estudios: [
                    {
                        id: 5,
                        ente: 'Escuela de Ingeniería Química.',
                        lugar: 'Universidad Central de Venezuela. Ciudad Universitaria.',
                        logro: 'Título de Ingeniero Químico.',
                        anho: 2002,
                        logo: 'ucv'
                    },
                    {
                        id: 4,
                        ente: 'Escuela de Aviación Militar.',
                        lugar: 'Maracay. Estado Aragua.',
                        logro: 'Servicio Militar Obligatorio.',
                        anho: 1992,
                        logo: 'eam'
                    },
                    {
                        id: 3,
                        ente: 'Escuela Básica de las Fuerzas Armadas Nacionales.',
                        lugar: 'Maracay. Estado Aragua.',
                        logro: 'Culminación del ciclo básico como cadete de las FF.AA.NN.',
                        anho: 1991,
                        logo: 'escubafan'
                    },
                    {
                        id: 2,
                        ente: 'Colegio San Vicente de Paúl.',
                        lugar: 'Maiquetía. Estado Vargas.',
                        logro: 'Titulo de Bachiller en Ciencias.',
                        anho: 1990,
                        logo: 'csvp'
                    },
                    {
                        id: 1,
                        ente: 'Liceo Militar G.N. Cap. (f) Pedro María Ochoa Morales.',
                        lugar: 'Ramo Verde. Estado Miranda.',
                        logro: 'Aprobación del 1ro y 2do año del Ciclo Básico.',
                        anho: 1987,
                        logo: 'gn'
                    }
                ]
            }
        },
        mutations: {
        },
        actions: {
        },
        modules: {
        }
    })
    ```
2. Guardar todas las imagenenes relacionadas con el estudio en formato **png** en **public\img\estudios** y nombrarla según su número de **id**.
3. Crear componente **src\components\Estudios.vue**:
    ```vue
    <template>
        <div>
            <section id="team">
                <div class="container">
                    <div class="section-header wow fadeInUp">
                        <h3>Estudios</h3>
                        <p>{{ formacion.texto }}</p>
                    </div>
                </div>
            </section>

            <section id="estudios">
                <div class="container">
                    <div class="row estudios-cols">
                        <div class="col-md-6 col-lg-4 wow fadeInUp" v-for="(estudio, item) in formacion.estudios" :key="item" :data-wow-delay="estiloCard(item + 1)">
                            <div class="estudios-col">
                                <div class="img">
                                    <img :src="`img/estudios/${estudio.id}.png`" alt="" class="img-fluid">
                                </div>
                                <h2 class="title">{{ estudio.ente }}</h2>
                                <div class="alto">
                                    <p><strong>Lugar:</strong> {{ estudio.lugar }}</p>
                                    <p><strong>Logro:</strong> {{ estudio.logro }}</p>
                                </div>

                                <div class="d-flex justify-content-between align-items-center p-2">
                                    <small class="text-muted"><strong>{{ estudio.anho }}</strong></small>
                                    <img :src="`img/logos/${estudio.logo}.png`" width="30" height="30"
                                        :alt="`Logo ${estudio.logo}`" :title="estudio.logo">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </template>

    <script>
    import { mapState } from 'vuex'

    export default {
        name: 'Estudios',
        computed: {
            ...mapState(['formacion'])
        },
        methods: {
            estiloCard(item){
                const tiempo = item % 3
                switch (tiempo) {
                case 1:
                    return '0.0s'
                case 2:
                    return '0.1s'
                case 0:
                    return '0.2s'
                default:
                    return '0.0s'
                }
            }
        }
    }
    </script>

    <style scoped>
        #estudios {
            background-size: cover;
            padding: 60px 0 40px 0;
            position: relative;
            margin-top: -7rem;
        }

        #estudios::before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(255, 255, 255, 0.92);
            z-index: 9;
        }

        #estudios .container {
            position: relative;
            z-index: 10;
        }

        #estudios .about-col {
            background: #fff;
            border-radius: 0 0 4px 4px;
            box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
            margin-bottom: 20px;
        }

        #estudios .about-col .img {
            position: relative;
        }

        #estudios .about-col .img img {
            border-radius: 4px 4px 0 0;
        }

        #estudios .estudios-col h2 {
            color: #000;
            text-align: center;
            font-weight: 700;
            font-size: 15px;
            padding: 0 5px;
            margin: 10px 0 12px 0;
        }

        #estudios .estudios-col p {
            font-size: 12px;
            line-height: 24px;
            color: #333;
            margin-bottom: 0;
            padding: 0px 10px;
        }

        .alto {
            height: 80px !important;
        }
    </style>
    ```
4. Modificar vista **src\views\Home.vue**:
    ```vue
    <template>
        <div>
            <Header />
            <IntroSection />

            <!-- *** Cuerpo Principal *** -->
            <main id="main">
                <FeaturedServicesSection />
                <PoliticasCalidad />
                <Servicios />
                <CallToAction />
                <Skills />
                <Facts />
                <Portfolio />
                <Clients />
                <Testimonials />
                <Estudios />
                
                <!-- *** Contact Section *** -->
                ≡
            </main>
            ≡		
        </div>
    </template>

    <script>
    import Header from '@/components/Header'
    import IntroSection from '@/components/IntroSection'
    import FeaturedServicesSection from '@/components/FeaturedServicesSection'
    import PoliticasCalidad from '@/components/PoliticasCalidad'
    import Servicios from '@/components/Servicios'
    import CallToAction from '@/components/CallToAction'
    import Skills from '@/components/Skills'
    import Facts from '@/components/Facts'
    import Portfolio from '@/components/Portfolio'
    import Clients from '@/components/Clients'
    import Testimonials from '@/components/Testimonials'
    import Estudios from '@/components/Estudios'

    export default {
        name: 'Home',
        components: {
            Header,
            IntroSection,
            FeaturedServicesSection,
            PoliticasCalidad,
            Servicios,
            CallToAction,
            Skills,
            Facts,
		    Portfolio,
            Clients,
            Testimonials,
            Estudios
        }
    }
    </script>
    ```
6. Eliminar los siguientes archivos:
    + public\img\team-1.jpg
    + public\img\team-2.jpg
    + public\img\team-3.jpg
    + public\img\team-4.jpg
7. Subir repositorio:
    + $ git add .
    + $ git commit -m "Diseño del componente Estudios"
    + $ git push -u origin main


## Diseño del componente Cursos
1. Editar la tienda **src\store\index.js**:
    ```js
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            intro: {
                ≡
            },
            destacados: [
                ≡
            ],
            calidad: {
                ≡
            },
            servicios: {
                ≡
            },
            accion: {
                ≡
            },
            skills: {
                ≡
            },
            facts: {
                ≡
            },
            portafolio: { 
                ≡
            },
            clients: {
                ≡
            },
            testimonials: [
                ≡
            ],
            formacion: {
                ≡
            },
            cursos: [
                { id: 1, name: 'Visual Studio Code: Mejora tu velocidad para codificar', category: 'Herramientas', technology: 'VS Code', url: 'https://www.udemy.com/course/vscode-mejora-tu-velocidad-para-codificar', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 104, culminado: null, certificado: '', url_certificado: '', instructor: 'Fernando Herrera', description: 'Trucos que te harán disfrutar más tu experiencia como desarrollador y trabajar a mayor velocidad en VSCode.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'vsc' ], mostrar: false, repositorio: '', nota: '' },
                { id: 2, name: 'Git desde cero!', category: 'Herramientas', technology: 'Git', url: 'https://www.udemy.com/course/git-desde-cero', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 102, culminado: null, certificado: '', url_certificado: '', instructor: 'Manu Rodríguez', description: 'Aprende todo lo necesario de Git de forma rápida.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'git' ], mostrar: false, repositorio: '', nota: '' },
                { id: 3, name: 'Git + GitHub Desde Cero', category: 'Herramientas', technology: 'GitHub', url: 'https://www.udemy.com/course/aprende-git-github-practicando-con-algo-de-scrum', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 49, culminado: '2021-12-14', certificado: 'UC-a2887ba0-b933-4048-8e90-04581fd7fe77', url_certificado: 'https://www.udemy.com/certificate/UC-a2887ba0-b933-4048-8e90-04581fd7fe77', instructor: 'Jonathan Castro', description: 'Curso Git Desde Cero + Aprende GitHub con la terminal paso a paso con ejercicios.', url_aux: '', calificacion: 'Bueno', actualizado: true, en_ruta: false, logo_platform: 'udemy', logo_technologies: [ 'git', 'github' ], mostrar: true, repositorio: '', nota: '' },
                { id: 4, name: 'GIT y GITHUB desde cero!', category: 'Herramientas', technology: 'GitHub', url: 'https://www.udemy.com/course/introduccion-git-github', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 90, culminado: '2021-12-10', certificado: 'S/C', url_certificado: '', instructor: 'Noelia Silva', description: 'Maneja los repositorios más actuales del mercado.', url_aux: '', calificacion: 'Bueno', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'git', 'github' ], mostrar: false, repositorio: '', nota: '' },
                { id: 5, name: 'Aprende a dominar Git de cero a experto!', category: 'Herramientas', technology: 'Git', url: 'https://www.udemy.com/course/aprende-a-dominar-git-de-cero-a-experto', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 175, culminado: null, certificado: '', url_certificado: '', instructor: 'Maximiliano Burgos', description: 'Domina el mejor software de control de versiones.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'git' ], mostrar: false, repositorio: '', nota: '' },
                { id: 6, name: 'Curso completo de Docker de cero a experto', category: 'Herramientas', technology: 'Docker', url: 'https://www.udemy.com/course/curso-completo-de-docker-de-cero-a-experto', platform: 'Udemy', costo: 9.99, money: 'EUR', comprado: true, priority: 0, minutos: 1020, culminado: '2021-12-30', certificado: 'UC-33aa07f4-52f4-4764-a7e8-c329febeb0bf', url_certificado: 'https://www.udemy.com/certificate/UC-33aa07f4-52f4-4764-a7e8-c329febeb0bf', instructor: 'Joan Amengual', description: '¡Conviértete en un experto en Docker con Compose, ELK, cAdvisor, Prometheus, Grafana, Kubernetes, Swarm y mucho más!', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'docker', 'kubernetes' ], mostrar: true, repositorio: '', nota: '' },
                { id: 7, name: 'Master en Docker y devops de principiante a experto', category: 'Herramientas', technology: 'Docker', url: 'https://www.udemy.com/course/master-en-docker-y-devops-de-principiante-a-experto', platform: 'Udemy', costo: 9.99, money: 'EUR', comprado: false, priority: 0, minutos: 300, culminado: null, certificado: '', url_certificado: '', instructor: 'Cristian Casis', description: 'Conocer, utilizar y aprender Docker desde cero. Despliegue sus servicios de forma rápida y segura utilizando Docker.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'docker' ], mostrar: false, repositorio: '', nota: '' },
                { id: 8, name: 'Markdown Desde Cero', category: 'Herramientas', technology: 'Markdown', url: 'https://ed.team/cursos/markdown', platform: 'EDteam', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 60, culminado: '2021-08-07', certificado: '228409101-23bffb30-c61a-4998-a82d-9a7a8c8ebfe0', url_certificado: 'https://edteam-media.s3.amazonaws.com/certificates/original/f848c8a7-28a8-4c55-af01-0eeb675bf3d2.png', instructor: 'Alvaro Felipe Chávez', description: 'Escribe código HTML limpio sin preocuparte de las etiquetas ni aprender HTML.', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'edteam', logo_technologies: [ 'markdown' ], mostrar: true, repositorio: '', nota: '' },
                { id: 9, name: 'Aprenda Markdown desde cero', category: 'Herramientas', technology: 'Markdown', url: 'https://www.udemy.com/course/aprenda-markdown-desde-cero', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 64, culminado: null, certificado: '', url_certificado: '', instructor: 'Alexander David Rodriguez Ferrer', description: 'Aprenda el lenguaje de etiquetado Markdown que facilitar la construcción de documentos en HTML 5.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'markdown' ], mostrar: false, repositorio: '', nota: '' },
                { id: 10, name: 'VIM desde cero', category: 'Herramientas', technology: 'VIM', url: 'https://ed.team/cursos/vim', platform: 'EDteam', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 49, culminado: null, certificado: '', url_certificado: '', instructor: 'Alexys Lozada', description: 'Aprende los comandos básicos para utilizar el editor de texto más poderoso del mundo.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'edteam', logo_technologies: [ 'vim' ], mostrar: false, repositorio: '', nota: '' },
                { id: 11, name: 'Vim, aumenta tu velocidad de desarrollo', category: 'Herramientas', technology: 'VIM', url: 'https://www.udemy.com/course/vim-aumenta-tu-velocidad-de-desarrollo', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 86, culminado: null, certificado: '', url_certificado: '', instructor: 'Nicolas Schurmann', description: 'Empieza siendo productivo con Vim en linux, windows, Mac y Unix.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'vim' ], mostrar: false, repositorio: '', nota: '' },
                { id: 12, name: 'VIM: Mejora tu velocidad para codificar.', category: 'Herramientas', technology: 'VIM', url: 'https://www.udemy.com/course/chochy_vim', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 51, culminado: null, certificado: '', url_certificado: '', instructor: 'Jorge Salgado Miranda', description: 'Aprende a Trabajar a mayor velocidad en Cualquier IDE con ayuda de VIM y sus comandos.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'vim' ], mostrar: false, repositorio: '', nota: '' },
                { id: 13, name: 'Curso de Blogger - Completo', category: 'Sistema de gestión de contenidos', technology: 'Blogger', url: 'https://www.youtube.com/watch?v=CcLrJQqPDPc', platform: 'YouTube', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 255, culminado: null, certificado: '', url_certificado: '', instructor: 'Yoney Gallardo', description: 'Curso completo de Blogger.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'youtube', logo_technologies: [ 'blogger' ], mostrar: false, repositorio: '', nota: '' },
                { id: 14, name: 'Tienda Online con wordpress y Woocommerce', category: 'Sistema de gestión de contenidos', technology: 'WordPress', url: 'https://www.udemy.com/course/tienda-online-con-wordpressr-y-woocommerce', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 113, culminado: null, certificado: '', url_certificado: '', instructor: 'Roger Gómez', description: 'Tutorial básico para principiantes.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'wordpress', 'woocommerce' ], mostrar: false, repositorio: '', nota: '' },
                { id: 15, name: 'Crea una página web sin programar con wordpressr y Divi', category: 'Sistema de gestión de contenidos', technology: 'WordPress', url: 'https://www.udemy.com/course/crea-una-pagina-web-sin-programar-con-wordpressr-y-divi', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 130, culminado: null, certificado: '', url_certificado: '', instructor: 'Oscar Viedma', description: 'Aprende a diseñar una página web tipo one page totalmente responsive, desde cero con wordpressr + Divi.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'wordpress' ], mostrar: false, repositorio: '', nota: '' },
                { id: 16, name: 'Crea una Web PROFESIONAL con wordpressr y DIVI desde CERO', category: 'Sistema de gestión de contenidos', technology: 'WordPress', url: 'https://www.udemy.com/course/crea-una-web-profesional-con-wordpressr-y-divi-desde-cero', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 1080, culminado: null, certificado: '', url_certificado: '', instructor: 'José Valenzuela', description: 'Crea desde Cero a crear una web 100% Profesional con DIVI : Aprende a crear cualquier tipo de Página Web.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'wordpress' ], mostrar: false, repositorio: '', nota: '' },
                { id: 17, name: 'Curso Magento 2.4 en la nube AWS', category: 'Sistema de gestión de contenidos', technology: 'Magento', url: 'https://www.youtube.com/playlist?list=PLyMFTgxiogL3t7n5xEeK2iDI9LaNIfITK', platform: 'YouTube', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 200, culminado: null, certificado: '', url_certificado: '', instructor: 'Aaron Ballesteros', description: 'Curso completo de Magento.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'youtube', logo_technologies: [ 'magento' ], mostrar: false, repositorio: '', nota: '' },
                { id: 18, name: 'KUBERNETES 2021 - De NOVATO a PRO!', category: 'Herramientas', technology: 'Kubernetes', url: 'https://www.youtube.com/watch?v=DCoBcpOA7W4', platform: 'YouTube', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 93, culminado: null, certificado: '', url_certificado: '', instructor: 'Pelado Nerd', description: 'Conviertete en un profesional en Kubernetes.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'youtube', logo_technologies: [ 'kubernetes' ], mostrar: false, repositorio: '', nota: '' },
                { id: 19, name: 'Curso de Kubernetes', category: 'Herramientas', technology: 'Kubernetes', url: 'https://www.youtube.com/playlist?list=PLrb1e2Mp6N_uJSNsV-7SqLFaBdImJsI5x', platform: 'YouTube', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 280, culminado: null, certificado: '', url_certificado: '', instructor: 'Iñigo Serrano', description: 'Curso completo de Kubernetes.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'youtube', logo_technologies: [ 'kubernetes' ], mostrar: false, repositorio: '', nota: '' },
                { id: 20, name: 'Docker, Desarrollo práctico', category: 'Herramientas', technology: 'Docker', url: 'https://www.udemy.com/course/docker-desarrollo-practico', platform: 'Udemy', costo: 9.99, money: 'EUR', comprado: false, priority: 0, minutos: 570, culminado: null, certificado: '', url_certificado: '', instructor: 'Luis Briceño', description: 'Implementación de Dockerfile, Docker-compose, mysql, wordpressr, Node (express), mongodb y más…', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'docker' ], mostrar: false, repositorio: '', nota: '' },
                { id: 21, name: 'Introducción a Drupal 9', category: 'Sistema de gestión de contenidos', technology: 'Drupal', url: 'https://www.udemy.com/course/introduccion-drupal-9', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 101, culminado: null, certificado: '', url_certificado: '', instructor: 'Vicente Cespedes', description: 'Curso introductorio a Drupal 9 donde aprender lo básico para adentrarse en este maravilloso CMS.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'drupal' ], mostrar: false, repositorio: '', nota: '' },
                { id: 22, name: 'Crea sitios web con Drupal', category: 'Sistema de gestión de contenidos', technology: 'Drupal', url: 'https://www.udemy.com/course/curso-basico-de-drupal', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 118, culminado: null, certificado: '', url_certificado: '', instructor: 'Mejia Fabela', description: 'Un curso que te enseñara a usar Drupal para poder crear tu sitio web. Drupal es un poderoso administrador de contenido.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'drupal' ], mostrar: false, repositorio: '', nota: '' },
                { id: 23, name: 'Desarrolla la Lógica de Programación con FlujoGramas', category: 'Paradigmas', technology: 'Lógica de programación', url: 'https://www.udemy.com/course/desarrolla-la-logica-de-programacion-con-flujogramas', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 120, culminado: null, certificado: '', url_certificado: '', instructor: 'Walter Coto', description: 'Aprende las Bases de la Programación, con Flujogramas. Comienza a Desarrollar tu Pensamiento de Programador desde Cero.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 24, name: 'Algoritmos, desarrollo de la Lógica de Programación', category: 'Paradigmas', technology: 'Lógica de programación', url: 'https://www.udemy.com/course/algoritmos-estructuras-de-datos', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 116, culminado: null, certificado: '', url_certificado: '', instructor: 'Javier Villena', description: 'Desarrolla tu lógica de Programación creando Algoritmos.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 25, name: 'Aprende Lógica de Programación (Básico)', category: 'Paradigmas', technology: 'Lógica de programación', url: 'https://www.udemy.com/course/aprende-logica-de-programacion', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 110, culminado: null, certificado: '', url_certificado: '', instructor: 'Alejandro Pérez Gabriel', description: 'Los fundamentos para un buen programador.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 26, name: 'Aprende Lógica de Programación (Avanzado)', category: 'Paradigmas', technology: 'Lógica de programación', url: 'https://www.udemy.com/course/aprende-logica-de-programacion-avanzado', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 100, culminado: null, certificado: '', url_certificado: '', instructor: 'Alejandro Pérez Gabriel', description: 'Temas intermedios y avanzados de lógica para un buen programador.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 27, name: 'Curso de Fundamentos y Lógica de Programación -Bootcamp 2021', category: 'Paradigmas', technology: 'Lógica de programación', url: 'https://www.udemy.com/course/fundamentos-programacion-curso', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 450, culminado: null, certificado: '', url_certificado: '', instructor: 'Jeovani Martínez', description: 'Aprende las bases y la lógica de la programación con el mejor curso, y prepárate para aprender cualquier lenguaje.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 28, name: 'Lógica Programación: Aprende Programar en Cualquier Lenguaje', category: 'Paradigmas', technology: 'Lógica de programación', url: 'https://www.udemy.com/course/logica-programacion-aprende-programar-en-cualquier-lenguaje', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 160, culminado: null, certificado: '', url_certificado: '', instructor: 'Sayyab Tariq Awan', description: 'Un curso muy básico para aprender a programar en cualquier lenguaje: Java, C++, javascript, python, SQL, HTML, Swift etc.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 29, name: 'Curso POO y Java Básico', category: 'Paradigmas', technology: 'POO', url: 'https://www.udemy.com/course/curso-poo-y-java-basico-1', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 89, culminado: null, certificado: '', url_certificado: '', instructor: 'Flores Aguilar', description: 'Curso de conceptos básicos de POO y Java.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'java' ], mostrar: false, repositorio: '', nota: '' },
                { id: 30, name: 'CURSO de php & MVC: Mi primer SISTEMA [php, MVC, POO, mysql]', category: 'Paradigmas', technology: 'POO', url: 'https://www.udemy.com/course/mi-primer-sistema-php-mvc-mysql', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 111, culminado: null, certificado: '', url_certificado: '', instructor: 'Carlos Alfaro', description: 'CURSO de php, MVC, POO & mysql: Aprende a PROGRAMAR un SISTEMA web [php, MVC, POO, mysql & ajax]', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'php', 'mysql' ], mostrar: false, repositorio: '', nota: '' },
                { id: 31, name: 'Introducción a MVC con Net 5', category: 'Paradigmas', technology: 'MVC', url: 'https://www.udemy.com/course/introduccion-a-mvc-con-net-5', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 79, culminado: null, certificado: '', url_certificado: '', instructor: 'Misael Cazarez', description: 'Creación de CRUD en MVC.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 32, name: 'Aprende a diseñar una API RESTFul correctamente', category: 'Paradigmas', technology: 'API RESTful', url: 'https://www.udemy.com/course/aprende-a-disenar-una-api-restful-correctamente', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 68, culminado: '2021-09-26', certificado: 'S/C', url_certificado: '', instructor: 'Eduardo Patiño', description: 'Fortalece tus bases sobre el diseño antes de programar.', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'apirestful' ], mostrar: false, repositorio: '', nota: '' },
                { id: 33, name: 'API RESTful con laravel: Guía Definitiva', category: 'Paradigmas', technology: 'API RESTful', url: 'https://www.udemy.com/course/api-restful-con-laravel-php-homestead-passport', platform: 'Udemy', costo: 9.99, money: 'EUR', comprado: true, priority: 0, minutos: 900, culminado: null, certificado: '', url_certificado: '', instructor: 'Juan David Meza González', description: 'Crea la API RESTful de un sistema de mercado con laravel y domina características complejas de las API con laravel', url_aux: '', calificacion: 'Excelente', actualizado: false, en_ruta: false, logo_platform: 'udemy', logo_technologies: [ 'apirestful', 'laravel' ], mostrar: false, repositorio: '', nota: '' },
                { id: 34, name: 'Aprende a crear una API RESTful con laravel', category: 'Paradigmas', technology: 'API RESTful', url: 'https://codersfree.com/cursos/aprende-a-crear-una-api-restful-con-laravel', platform: 'Coders Free', costo: 9.99, money: 'USD', comprado: true, priority: 0, minutos: 540, culminado: '2021-09-23', certificado: 'UC-253cc4d8-67d5-4b6c-b6b5-ffea89ea0bf4', url_certificado: 'https://www.udemy.com/certificate/UC-253cc4d8-67d5-4b6c-b6b5-ffea89ea0bf4', instructor: 'Victor Arana Flores', description: 'En este curso aprenderás a crear una API RESTful con el framework laravel.', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'coders_free', logo_technologies: [ 'apirestful' ], mostrar: true, repositorio: '', nota: '' },
                { id: 35, name: 'Guía definitiva para crear APIs con Symfony 5 y API Platform', category: 'Paradigmas', technology: 'API RESTful', url: 'https://www.udemy.com/course/draft/2781094/learn/lecture/23058640?start=0#overview', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 960, culminado: null, certificado: '', url_certificado: '', instructor: 'Juan González', description: 'Creación de una API con Symfony y API Platform. Estructura de servicios, RabbitMQ, Docker y mucho más!', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'apirestful', 'symfony' ], mostrar: false, repositorio: '', nota: '' },
                { id: 36, name: 'Crea APIREST fácilmente con python, php, laravel o nodejs', category: 'Paradigmas', technology: 'API RESTful', url: 'https://www.udemy.com/course/crea-api-rest-facilmente-con-python-php-laravel-y-nodejs', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 240, culminado: null, certificado: '', url_certificado: '', instructor: 'Davis Anderson Bastidas Vicente', description: 'API REST python, php, laravel o nodejs, Consumo con POSTMAN.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'apirestful', 'python', 'php', 'laravel', 'nodejs' ], mostrar: false, repositorio: '', nota: '' },
                { id: 37, name: 'Curso Crea una REST API desde Cero con nodejs y AdonisJS', category: 'Paradigmas', technology: 'API RESTful', url: 'https://www.udemy.com/course/curso-crea-una-rest-api-desde-cero-con-nodejs-y-adonisjs', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 240, culminado: null, certificado: '', url_certificado: '', instructor: 'Marcos Guerrini', description: 'Aprende a utilizar uno de los frameworks más potentes de nodejs.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'apirestful', 'nodejs', 'adonisjs' ], mostrar: false, repositorio: '', nota: '' },
                { id: 38, name: 'Servicios Web API y WCF crea y consume en App Web y Móvil', category: 'Paradigmas', technology: 'API RESTful', url: 'https://www.udemy.com/course/ccrea-servicios-wcf-y-web-api-y-consume-en-app-web-y-movil', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 570, culminado: null, certificado: '', url_certificado: '', instructor: 'Licito Hurol', description: 'Aprende a crear servicios WCF y Web API y a consumirlos desde otro aplicación o desde el navegador.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'apirestful' ], mostrar: false, repositorio: '', nota: '' },
                { id: 39, name: 'Node.js - Creando API con express y mongodb (Incl. Deno)', category: 'Paradigmas', technology: 'API RESTful', url: 'https://www.udemy.com/course/nodejs-guia-desde-cero', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 750, culminado: null, certificado: '', url_certificado: '', instructor: 'Grover Vásquez', description: 'Node.js, API REST, express, mongodb, JWT, Autenticación, PostMan y Despliegue en Producción - Introducción a Deno.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'apirestful', 'nodejs', 'express', 'mongo' ], mostrar: false, repositorio: '', nota: '' },
                { id: 40, name: 'Fundamentos de Programación - Algoritmos y javascript', category: 'Paradigmas', technology: 'Lógica de programación', url: 'https://www.udemy.com/course/fundamentos-de-programacion-algoritmos-y-javascript', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 53, culminado: null, certificado: '', url_certificado: '', instructor: 'Roger Gómez', description: 'Curso muy básico introductorio a la programación', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'javascript' ], mostrar: false, repositorio: '', nota: '' },
                { id: 41, name: 'Programación desde cero', category: 'Paradigmas', technology: 'Lógica de programación', url: 'https://ed.team/cursos/programacion', platform: 'EDteam', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 300, culminado: '2021-08-10', certificado: '228409205-3d369290-b9d0-4131-b346-b316d9939c89', url_certificado: 'https://edteam-media.s3.amazonaws.com/certificates/original/5df5fc3d-148a-46d4-99bb-d8ef62e385d6.png', instructor: 'Alvaro Felipe Chávez', description: 'Programar no se trata de código, se trata de lógica. Este curso te enseña la lógica que te permitirá dominar cualquier lenguaje.', url_aux: '', calificacion: 'Muy bueno', actualizado: true, en_ruta: true, logo_platform: 'edteam', logo_technologies: [ 'javascript', 'python' ], mostrar: false, repositorio: '', nota: '' },
                { id: 42, name: 'Curso de Introducción al Desarrollo Web: HTML y css (1/2)', category: 'Front-end', technology: 'HTML', url: 'https://learndigital.withgoogle.com/activate/course/web-development-I', platform: 'Google Activate', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 2400, culminado: '2020-05-25', certificado: '7DJ 77F R2R', url_certificado: 'https://learndigital.withgoogle.com/activate/validate-certificate-code', instructor: 'Sergio Luján Mora', description: 'Aprende a crear tus propias páginas web profesionales adaptables a distintos dispositivos de la mano de la Universidad de Alicante.', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'google', logo_technologies: [ 'html5' ], mostrar: true, repositorio: '', nota: '' },
                { id: 43, name: 'Curso de Introducción al Desarrollo Web: HTML y css (2/2)', category: 'Front-end', technology: 'css', url: 'https://learndigital.withgoogle.com/activate/course/web-development-II', platform: 'Google Activate', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 2400, culminado: '2020-06-05', certificado: 'QNK V22 H93', url_certificado: 'https://learndigital.withgoogle.com/activate/validate-certificate-code', instructor: 'Sergio Luján Mora', description: 'Aprende a crear tus propias páginas web profesionales adaptables a distintos dispositivos de la mano de la Universidad de Alicante.', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'google', logo_technologies: [ 'css', 'html5' ], mostrar: true, repositorio: '', nota: '' },
                { id: 44, name: 'Curso de css-todo lo que necesitas saber sobre css y css3', category: 'Front-end', technology: 'css', url: 'https://www.udemy.com/course/curso-de-css-introduccion-a-las-hojas-de-estilos-en-cascada', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 510, culminado: null, certificado: '', url_certificado: '', instructor: 'Andrés Sosa Arevalo', description: 'Aprende a agregar estilos a tus plantillas Html desde cero, contiene muchos ejercicios y se agregaran nuevos.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'css' ], mostrar: false, repositorio: '', nota: '' },
                { id: 45, name: 'Curso javascript desde cero', category: 'Front-end', technology: 'javascript', url: 'https://www.youtube.com/playlist?list=PLZ2ovOgdI-kXnDbWdaJK7GA1GvKGNMl6B', platform: 'YouTube', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 300, culminado: null, certificado: '', url_certificado: '', instructor: 'Victor Arana Flores', description: 'Curso completo de javascript.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'youtube', logo_technologies: [ 'javascript' ], mostrar: false, repositorio: '', nota: '' },
                { id: 46, name: 'Universidad javascript 2021 - De Cero a Experto javascript!', category: 'Front-end', technology: 'javascript', url: 'https://www.udemy.com/course/universidad-javascript-angular-react-vue-typescript-html-css-bootstrap', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 2160, culminado: null, certificado: '', url_certificado: '', instructor: 'Ubaldo Acosta', description: '[Actualizado 2021] - Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y más!', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'javascript' ], mostrar: false, repositorio: '', nota: '' },
                { id: 47, name: 'Curso de css3, Flexbox y css Grid Layout | Básico y rápido', category: 'Front-end', technology: 'css', url: 'https://www.udemy.com/course/curso-de-css3-flexbox-y-css-grid-layout-basico', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 57, culminado: null, certificado: '', url_certificado: '', instructor: 'Víctor Robles', description: 'Aprende css 3, css Flexbox y Grid Layout y da tus primeros pasos en la maquetación web. Dale estilos a tus páginas web.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'css' ], mostrar: false, repositorio: '', nota: '' },
                { id: 48, name: 'FLEXBOX (css3) | Aprende FLEXBOX DESDE CERO', category: 'Front-end', technology: 'css', url: 'https://www.udemy.com/course/cursoflexbox', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 57, culminado: null, certificado: '', url_certificado: '', instructor: 'Jordan Alexander', description: 'Aprende y Entiende Flexbox, El módulo flexible más popular de css.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'css' ], mostrar: false, repositorio: '', nota: '' },
                { id: 49, name: 'Crea una página web moderna con HTML css Y javascript', category: 'Front-end', technology: 'Estándares Front-end', url: 'https://www.udemy.com/course/crea-una-pagina-web-moderna-con-html-css-y-javascript', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 79, culminado: null, certificado: '', url_certificado: '', instructor: 'Jordan Alexander', description: 'Aprende a crear una página web con html5 css3 y Javacript, [Adaptable a dispositivos móviles]', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'html5', 'css', 'javascript' ], mostrar: false, repositorio: '', nota: '' },
                { id: 50, name: 'Crea una LANDING PAGE moderna con HTML css Y javascript', category: 'Front-end', technology: 'Estándares Front-end', url: 'https://www.udemy.com/course/crea-una-landing-page-moderna-con-html-css-y-javascript', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 51, culminado: null, certificado: '', url_certificado: '', instructor: 'Jordan Alexander', description: 'Aprende a crear una landing page moderna desde 0 con html5 css3 y JS (javascript) con animaciones hechas en css3.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'html5', 'css', 'javascript' ], mostrar: false, repositorio: '', nota: '' },
                { id: 51, name: 'Crea una página web profesional con HTML css y javascript', category: 'Front-end', technology: 'Estándares Front-end', url: 'https://www.udemy.com/course/crea-una-pagina-web-profesional-con-html-css-y-javascript', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 163, culminado: null, certificado: '', url_certificado: '', instructor: 'Jordan Alexander', description: 'En este curso aprenderás a crear una página web desde 0 con HTML css y javascript además aprenderás a subirla a internet.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'html5', 'css', 'javascript' ], mostrar: false, repositorio: '', nota: '' },
                { id: 52, name: 'Curso de Desarrollo Web con HTML, css y javascript | Básico', category: 'Front-end', technology: 'Estándares Front-end', url: 'https://www.udemy.com/course/curso-de-desarrollo-web-con-html-css-y-javascript', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 55, culminado: null, certificado: '', url_certificado: '', instructor: 'Víctor Robles', description: 'Aprende HTML, css y javascript desde cero y da tus primeros pasos en el desarrollo web. Crea tu primera web paso a paso.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'html5', 'css', 'javascript' ], mostrar: false, repositorio: '', nota: '' },
                { id: 53, name: 'Diseño Web - Aprende creando un sitio web paso a paso', category: 'Front-end', technology: 'Estándares Front-end', url: 'https://www.udemy.com/course/diseno-web-aprende-creando-un-sitio-web', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 55, culminado: null, certificado: '', url_certificado: '', instructor: 'Grover Vásquez', description: 'Aprende a crear un sitio web desde cero con html5, css3 y jQuery, y que pueda ser visto en cualquier dispositivo.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'html5', 'css', 'javascript' ], mostrar: false, repositorio: '', nota: '' },
                { id: 54, name: 'Universidad Desarrollo Web - FrontEnd Web Developer!', category: 'Front-end', technology: 'Estándares Front-end', url: 'https://www.udemy.com/course/universidad-desarrollo-web-moderno-html-css-javascript-html5-css3', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 1830, culminado: null, certificado: '', url_certificado: '', instructor: 'Ubaldo Acosta', description: 'El mejor curso para aprender a crear aplicaciones Web Modernas con HTML, css y javascript. Serás un FrontEnd Developer!', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'html5', 'css', 'javascript' ], mostrar: false, repositorio: '', nota: '' },
                { id: 55, name: 'Aprende TypeScript desde cero', category: 'Front-end', technology: 'TypeScript', url: 'https://www.udemy.com/course/aprende-typescript-desde-cero', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 420, culminado: null, certificado: '', url_certificado: '', instructor: 'JAP Software', description: 'Curso de iniciación a TypeScript.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'typescript' ], mostrar: false, repositorio: '', nota: '' },
                { id: 56, name: 'Aprende Typescript de 0 a 100', category: 'Front-end', technology: 'TypeScript', url: 'https://www.udemy.com/course/typescript-2020', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 210, culminado: null, certificado: '', url_certificado: '', instructor: 'Manuel Muñoz', description: 'Aprende Typescript en poco tiempo y de forma sencilla.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'typescript' ], mostrar: false, repositorio: '', nota: '' },
                { id: 57, name: 'La biblia perdida de bootstrap 4', category: 'Frameworks de css', technology: 'bootstrap', url: 'https://www.udemy.com/course/curso-la-biblia-perdida-de-bootstrap-4', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 568, culminado: null, certificado: '', url_certificado: '', instructor: 'Erick Mines', description: 'Los secretos de bootstrap por fin te serán revelados. Acompáñame a descubrir el verdadero poder que esconde bootstrap 4.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'bootstrap' ], mostrar: false, repositorio: '', nota: '' },
                { id: 58, name: 'Desarrollo Web con HMTL, css y bootstrap 4! Curso desde cero', category: 'Frameworks de css', technology: 'bootstrap', url: 'https://www.udemy.com/course/curso-html5-css3', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 163, culminado: null, certificado: '', url_certificado: '', instructor: 'Ignacio Gutiérrez ', description: 'Curso de HTML, css y bootstrap 4 para principiantes, comienza a crear tus propios diseños web sin conocimientos previos!', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'bootstrap', 'html5', 'css' ], mostrar: false, repositorio: '', nota: '' },
                { id: 59, name: 'materialize css - Tutorial Español', category: 'Frameworks de css', technology: 'materialize', url: 'https://www.youtube.com/playlist?list=PLPl81lqbj-4J2Lbx1_qp7Yzo7wvjYiQ4E', platform: 'YouTube', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 300, culminado: null, certificado: '', url_certificado: '', instructor: 'Ignacio Gutiérrez ', description: 'Curso completo del materialize.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'youtube', logo_technologies: [ 'materialize' ], mostrar: false, repositorio: '', nota: '' },
                { id: 60, name: 'Curso Tailwind desde cero', category: 'Frameworks de css', technology: 'Tailwind', url: 'https://codersfree.com/cursos/curso-tailwind-desde-cero', platform: 'Coders Free', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 180, culminado: null, certificado: '', url_certificado: '', instructor: 'Victor Arana Flores', description: 'En este nuevo curso aprenderemos a como trabajar con el framework Tailwind css dentro de un framework más grande como lo es laravel.', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'coders_free', logo_technologies: [ 'tailwindcss' ], mostrar: false, repositorio: '', nota: '' },
                { id: 61, name: 'Tailwind css - Fundamentos desde 0! ¿Mejor que bootstrap 4?', category: 'Frameworks de css', technology: 'Tailwind', url: 'https://www.udemy.com/course/tailwindcss', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 110, culminado: null, certificado: '', url_certificado: '', instructor: 'Ignacio Gutiérrez ', description: 'Trabaja con Tailwind css de una manera sencilla, desde 0 y paso a paso, curso introductorio para aplicar sus clases css!', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'tailwindcss' ], mostrar: false, repositorio: '', nota: '' },
                { id: 62, name: 'Curso express de TAILWIND css de cero a EXPERTO', category: 'Frameworks de css', technology: 'Tailwind', url: 'https://www.udemy.com/course/curso-express-de-tailwindcss-de-cero-a-experto', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 92, culminado: null, certificado: '', url_certificado: '', instructor: 'Marcos Rivas', description: 'Aprende los conceptos de Tailwindcss creando un sitio web responsivo.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'tailwindcss' ], mostrar: false, repositorio: '', nota: '' },
                { id: 63, name: 'Introducción a Figma', category: 'Herramientas', technology: 'Figma', url: 'https://www.udemy.com/course/figma-diseno-de-prototipos-desde-cero', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 118, culminado: null, certificado: '', url_certificado: '', instructor: 'Javier Cañas', description: 'Conoce y aprende desde cero cómo utilizar Figma y las herramientas para diseñar interfaces con Figma.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'figma' ], mostrar: false, repositorio: '', nota: '' },
                { id: 64, name: 'Curso Bulma css', category: 'Frameworks de css', technology: 'Bulma', url: 'https://www.youtube.com/playlist?list=PLvKwKSrP7HoAbR5bXjwb4h5f2xjVxqdEe', platform: 'YouTube', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 500, culminado: null, certificado: '', url_certificado: '', instructor: 'Designlopers', description: 'Curso completo de Bulma css.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'youtube', logo_technologies: [ 'bulma' ], mostrar: false, repositorio: '', nota: '' },
                { id: 65, name: 'Primeros pasos con Vue.js | Vue en ejercicios', category: 'Frameworks de javascript', technology: 'Vue JS', url: 'https://www.udemy.com/course/draft/2219980/learn/lecture/13667902?start=0#overview', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 294, culminado: null, certificado: '', url_certificado: '', instructor: 'Andrés Cruz Yoris', description: 'En este mini curso te voy a explicar cómo puedes trabajar con el framework javascript Vue.js de la manera más fácil.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'vuejs' ], mostrar: false, repositorio: '', nota: '' },
                { id: 66, name: 'Vue JS (2 y 3) - Crea Aplicaciones Web Modernas con Vue', category: 'Frameworks de javascript', technology: 'Vue JS', url: 'https://www.udemy.com/course/vue-js-2-para-principiantes', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 840, culminado: null, certificado: '', url_certificado: '', instructor: 'Grover Vásquez', description: 'Todo sobre Vue JS 2 y 3, Bindings, Directivas, Vue-CLI, Componentes, Formularios, Vue-Router, Composition API y Vuex.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'vuejs' ], mostrar: false, repositorio: '', nota: '' },
                { id: 67, name: 'Vue 3 Desde Cero', category: 'Frameworks de javascript', technology: 'Vue JS', url: 'https://www.udemy.com/course/vue-3-desde-cero', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 1890, culminado: null, certificado: '', url_certificado: '', instructor: 'Yirsis Serrano', description: 'Aprenderás Vue con la Options API y la nueva Composition API, Integración con PUG, sass y TypeScript, PWA y mucho mas.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'vuejs' ], mostrar: false, repositorio: '', nota: '' },
                { id: 68, name: 'Curso Super Básico de Vue.js', category: 'Frameworks de javascript', technology: 'Vue JS', url: 'https://www.udemy.com/course/curso-basico-de-vue', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 111, culminado: null, certificado: '', url_certificado: '', instructor: 'Cristhian Santa Cruz', description: 'Curso básico de Vue.js Framework de javascript.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'vuejs' ], mostrar: false, repositorio: '', nota: '' },
                { id: 69, name: 'Primeros pasos en Vue 3 Composition API', category: 'Frameworks de javascript', technology: 'Vue JS', url: 'https://www.udemy.com/course/primeros-pasos-en-vue-3-composition-api', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 82, culminado: null, certificado: '', url_certificado: '', instructor: 'Cursos de desarrollo web', description: 'Conoce las bases de la nueva API de Vue 3.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'vuejs' ], mostrar: false, repositorio: '', nota: '' },
                { id: 70, name: 'Vue.js: De cero a experto', category: 'Frameworks de javascript', technology: 'Vue JS', url: 'https://www.udemy.com/course/vuejs-fh', platform: 'Udemy', costo: 9.99, money: 'EUR', comprado: true, priority: 0, minutos: 2580, culminado: null, certificado: '', url_certificado: '', instructor: 'Fernando Herrera', description: 'Vuex, unit test, composition api, options api, autenticación, composables, deployment, file structure, lazy load, y más.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'vuejs' ], mostrar: false, repositorio: '', nota: '' },
                { id: 71, name: 'Aprende Vue 3 desde cero + inertia', category: 'Frameworks de javascript', technology: 'Vue JS', url: 'https://codersfree.com/cursos/aprende-vue-3-desde-cero-mas-inertia', platform: 'Coders Free', costo: 9.99, money: 'USD', comprado: true, priority: 0, minutos: 420, culminado: null, certificado: '', url_certificado: '', instructor: 'Victor Arana Flores', description: 'En este curso aprenderás las bases del desarrollo web con Inertia.', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'coders_free', logo_technologies: [ 'vuejs', 'laravel' ], mostrar: false, repositorio: '', nota: '' },
                { id: 72, name: '60+ Herramientas de desarrollo y diseño web', category: 'Herramientas', technology: 'General', url: 'https://www.udemy.com/course/recursos-web-plugins-y-utilidades', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 489, culminado: null, certificado: '', url_certificado: '', instructor: 'Fernando Herrera', description: 'Una completa colección de recursos que debes tener y conocer, totalmente gratuitos.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 73, name: 'Crea un CRUD con laravel, Sweetalert2, Toastr, vuejs y Axios', category: 'Frameworks de javascript', technology: 'Vue JS', url: 'https://www.udemy.com/course/crea-un-crud-con-laravel-sweetalert2-toastr-vuejs-y-axios', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 150, culminado: '2021-10-27', certificado: 'UC-0e1d1558-902d-46e0-bad9-082faa58cb7b', url_certificado: 'https://www.udemy.com/certificate/UC-0e1d1558-902d-46e0-bad9-082faa58cb7b/', instructor: 'Jhonatan Fernández', description: 'En este curso aprenderás a crear un CRUD con estas tecnologías.', url_aux: '', calificacion: 'Bueno', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'laravel', 'sweetalert2', 'vuejs', 'axios' ], mostrar: false, repositorio: '', nota: '' },
                { id: 74, name: 'Aprende Jquery para implementar tus aplicaciones web', category: 'Frameworks de javascript', technology: 'jQuery', url: 'https://www.udemy.com/course/aprende-jquery-para-implementar-tus-aplicaciones-web', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 178, culminado: null, certificado: '', url_certificado: '', instructor: 'Carlos Blanco Gómez', description: 'Aprenderás todos lo conocimientos necesarios para agregar jquery a tus páginas web y hacerlas más dinámicas.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'jquery' ], mostrar: false, repositorio: '', nota: '' },
                { id: 75, name: 'Vue 3 - Composition API, Vuex, API Rest - Rick And Morty', category: 'Frameworks de javascript', technology: 'Vue JS', url: 'https://www.udemy.com/course/vue-3-composition-api-vuex-api-rest-rick-and-morty', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 35, culminado: '2021-10-16', certificado: 'S/C', url_certificado: '', instructor: 'Carlos Córdova', description: 'Crea un app web de Rick And Morty para tu portafolio utilizando Vue 3 - Vuex.', url_aux: '', calificacion: 'Bueno', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'vuejs' ], mostrar: false, repositorio: '', nota: '' },
                { id: 76, name: 'jQuery y ajax Desde Cero - La Guía Definitiva', category: 'Frameworks de javascript', technology: 'jQuery', url: 'https://www.udemy.com/course/curso-de-jquery', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 159, culminado: null, certificado: '', url_certificado: '', instructor: 'Pablo Farias Navarro', description: 'Crea sitios web y apps de html5 dinámicos, interactivos y con animaciones.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'jquery', 'ajax' ], mostrar: false, repositorio: '', nota: '' },
                { id: 77, name: 'Universidad angular - De Cero a Experto en angular!', category: 'Frameworks de javascript', technology: 'angular', url: 'https://www.udemy.com/course/angular-de-cero-a-experto-angular-2-framework-javascript-html-css', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 3090, culminado: null, certificado: '', url_certificado: '', instructor: 'Ubaldo Acosta', description: 'Domina angular 11 y crea aplicaciones web del mundo real con TypeScript, firebase, Firestore, JWT y más!', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'angular' ], mostrar: false, repositorio: '', nota: '' },
                { id: 78, name: 'Compodoc: Crea documentación en proyectos angular/Ionic/TS', category: 'Frameworks de javascript', technology: 'angular', url: 'https://www.udemy.com/course/compodoc-crea-documentacion-en-angular-ionic', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 184, culminado: null, certificado: '', url_certificado: '', instructor: 'Anartz Mugika Ledo', description: 'Crear documentación de calidad y MUY fácil de mantener con Compodoc para proyectos de angular 2+ / Ionic 2+ / Typescript.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'angular' ], mostrar: false, repositorio: '', nota: '' },
                { id: 79, name: 'CRUD angular - Node - MEAN', category: 'Stack', technology: 'MEAN', url: 'https://www.udemy.com/course/crud-productos-stack-mean', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 118, culminado: null, certificado: '', url_certificado: '', instructor: 'Tomas Ruiz Diaz', description: 'Aprende a desarrollar un CRUD completo con el Stack MEAN (Mongo, express, angular y Node) desde cero.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'mongo', 'express', 'angular', 'nodejs' ], mostrar: false, repositorio: '', nota: '' },
                { id: 80, name: 'App Empleados con angular 11 y firebase', category: 'Frameworks de javascript', technology: 'angular', url: 'https://www.udemy.com/course/app-empleado-angular-firebase', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 119, culminado: null, certificado: '', url_certificado: '', instructor: 'Tomas Ruiz Diaz', description: 'Crearemos un CRUD en angular, utilizaremos como BackEnd firebase, Firestore y deployaremos el proyecto.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'angular', 'firebase' ], mostrar: false, repositorio: '', nota: '' },
                { id: 81, name: 'angular: Convierte cualquier template HTML en una WebAPP', category: 'Frameworks de javascript', technology: 'angular', url: 'https://www.udemy.com/course/html-hacia-angular', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 208, culminado: null, certificado: '', url_certificado: '', instructor: 'Fernando Herrera', description: '¿Quieres aprender a crear un sitio web dinámico con angular, firebase y GitHub Pages? Estas en el lugar correcto.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'angular', 'html5' ], mostrar: false, repositorio: '', nota: '' },
                { id: 82, name: 'CRUD angular + NET Core + Entity Framework Core + mysql', category: 'Frameworks de javascript', technology: 'angular', url: 'https://www.udemy.com/course/crud-angular-9-net-core-entity-framework-core-mysql', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 62, culminado: null, certificado: '', url_certificado: '', instructor: 'Tomas Ruiz Diaz', description: 'Desarrollo frontend con angular 9, backend NET Core 3, Entity Framework Core 3 y mysql!', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'angular', 'net_core' ], mostrar: false, repositorio: '', nota: '' },
                { id: 83, name: 'angular - NET Core - Aplicacion de Preguntas y Respuestas', category: 'Frameworks de javascript', technology: 'angular', url: 'https://www.udemy.com/course/angular-net-core-aplicacion-de-preguntas-y-respuestas', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 900, culminado: null, certificado: '', url_certificado: '', instructor: 'Tomas Ruiz Diaz', description: 'Aprende a desarrollar aplicaciones modernas con angular 10 y .NET Core 3 desde cero!', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'angular', 'mysql' ], mostrar: false, repositorio: '', nota: '' },
                { id: 84, name: 'Fundamentos de angular', category: 'Frameworks de javascript', technology: 'angular', url: 'https://www.udemy.com/course/fundamentos-de-angular-12', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 240, culminado: null, certificado: '', url_certificado: '', instructor: 'Alejandro Toro Ossaba', description: 'Aprende los conceptos necesarios para comenzar a desarrollar aplicaciones con angular.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'angular' ], mostrar: false, repositorio: '', nota: '' },
                { id: 85, name: 'React: De cero a experto ( Hooks y MERN )', category: 'Stack', technology: 'MERN', url: 'https://www.udemy.com/course/react-cero-experto', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 2940, culminado: null, certificado: '', url_certificado: '', instructor: 'Fernando Herrera', description: 'Context API, MERN, Hooks, Firestore, JWT, Testing, Autenticaciones, Despliegues, CRUD, Logs, sass, Multiple Routers…', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'mongo', 'express', 'reactjs', 'nodejs' ], mostrar: false, repositorio: '', nota: '' },
                { id: 86, name: 'Full-Stack CRUD con React JS, ASP.NET Core y SQL Server', category: 'Frameworks de javascript', technology: 'React JS', url: 'https://www.udemy.com/course/full-stack-crud-con-react-js-aspnet-core-y-sql-server', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 49, culminado: null, certificado: '', url_certificado: '', instructor: 'Arturo Borja', description: 'Creando y conectando un CRUD con API Rest utilizando React JS y ASP.NET Core.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'reactjs', 'net_core', 'sqlserver' ], mostrar: false, repositorio: '', nota: '' },
                { id: 87, name: 'Full-Stack CRUD con php, mysql, API Rest, PDO y React JS', category: 'Frameworks de javascript', technology: 'React JS', url: 'https://www.udemy.com/course/full-stack-php-y-react-js', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 49, culminado: null, certificado: '', url_certificado: '', instructor: 'Arturo Borja', description: 'Creando y conectando un CRUD con API Rest utilizando React JS y php.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'php', 'mysql', 'apirestful', 'reactjs' ], mostrar: false, repositorio: '', nota: '' },
                { id: 88, name: 'Aprende React + firebase | 2021 Actualizado', category: 'Frameworks de javascript', technology: 'React JS', url: 'https://www.udemy.com/course/aprende-react-firebase-2021-actualizado', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 390, culminado: null, certificado: '', url_certificado: '', instructor: 'Manuel Muñoz', description: 'javascript + React + firebase todo lo que necesitas saber.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'reactjs', 'firebase' ], mostrar: false, repositorio: '', nota: '' },
                { id: 89, name: 'React Desde Cero', category: 'Frameworks de javascript', technology: 'React JS', url: 'https://www.udemy.com/course/react-desde-cero-pwa', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 2190, culminado: null, certificado: '', url_certificado: '', instructor: 'Yirsis Serrano', description: 'Aprenderás React de la mano con PWA, React Hooks, firebase, React Router, Optimizaciones, Redux, sass y muchos temas mas', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'reactjs' ], mostrar: false, repositorio: '', nota: '' },
                { id: 90, name: 'Introducción al desarrollo web', category: 'Stack', technology: 'LAMP', url: 'http://idesweb.uaedf.ua.es/course', platform: 'iDESWEB', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 6000, culminado: '2020-05-16', certificado: 'S/C', url_certificado: '', instructor: 'Sergio Luján Mora', description: 'Aprende HTML, css, javascript, php... y los principios básicos del diseño, de la usabilidad y de la accesibilidad web.', url_aux: 'https://www.tutellus.com/tecnologia/desarrollo-web/idesweb-817?affref=c6460ed83b8a4164a40f99c4163dc618', calificacion: 'Excelente', actualizado: false, en_ruta: false, logo_platform: 'idesweb', logo_technologies: [ 'html5', 'css', 'javascript', 'mysql', 'php' ], mostrar: true, repositorio: '', nota: '' },
                { id: 91, name: 'Curso de laravel 5 y Vue.js [desde cero] - Español', category: 'Frameworks de back-end', technology: 'laravel', url: 'https://www.youtube.com/playlist?list=PLPl81lqbj-4KHPEGngoy5PSjjxcwnpCdb', platform: 'YouTube', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 265, culminado: '2020-08-20', certificado: 'S/C', url_certificado: '', instructor: 'Ignacio Gutiérrez ', description: 'Si tu idea es trabajar con php de forma segura y realizar aplicaciones web a la velocidad de la luz, te informo que laravel 5 cuenta con estas maravillas.', url_aux: '', calificacion: 'Excelente', actualizado: false, en_ruta: false, logo_platform: 'youtube', logo_technologies: [ 'laravel' ], mostrar: false, repositorio: '', nota: '' },
                { id: 92, name: 'Curso de Vue JS - Tutorial en Español [Desde Cero]', category: 'Frameworks de javascript', technology: 'Vue JS', url: 'https://www.youtube.com/playlist?list=PLPl81lqbj-4J-gfAERGDCdOQtVgRhSvIT', platform: 'YouTube', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 900, culminado: '2020-08-26', certificado: 'S/C', url_certificado: '', instructor: 'Ignacio Gutiérrez ', description: 'Aprende a trabajar con este hermoso framework de javascript que es realmente poderoso.', url_aux: '', calificacion: 'Excelente', actualizado: false, en_ruta: false, logo_platform: 'youtube', logo_technologies: [ 'vuejs' ], mostrar: true, repositorio: '', nota: '' },
                { id: 93, name: 'Curso firebase / Firestore desde cero', category: 'Infraestructura', technology: 'firebase', url: 'https://www.youtube.com/playlist?list=PLPl81lqbj-4JiR1Cio6xEygCZDmZmDUWI', platform: 'YouTube', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 375, culminado: '2020-09-02', certificado: 'S/C', url_certificado: '', instructor: 'Ignacio Gutiérrez ', description: 'Aprende con este curso de firebase y Firestore, donde conocerás como crear un registro de usuarios y almacenarlos en las bases de datos en tiempo real.', url_aux: '', calificacion: 'Excelente', actualizado: false, en_ruta: false, logo_platform: 'youtube', logo_technologies: [ 'firebase' ], mostrar: true, repositorio: '', nota: '' },
                { id: 94, name: 'Introducción a laravel 5 - Primeros pasos con este framework', category: 'Frameworks de back-end', technology: 'laravel', url: 'https://www.udemy.com/course/introduccion-a-laravel-5-primeros-pasos-framework-php', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 60, culminado: '2020-10-09', certificado: 'S/C', url_certificado: '', instructor: 'Víctor Robles', description: 'Aprende las bases de la laravel 5 desde cero, el framework para php más popular de la actualidad. Introducción básica.', url_aux: '', calificacion: 'Bueno', actualizado: false, en_ruta: false, logo_platform: 'udemy', logo_technologies: [ 'laravel' ], mostrar: false, repositorio: '', nota: '' },
                { id: 95, name: 'React JS - Curso de introducción desde cero y primeros pasos', category: 'Frameworks de javascript', technology: 'React JS', url: 'https://www.udemy.com/course/react-js-curso-de-introduccion-desde-cero-y-primeros-pasos', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 60, culminado: '2020-10-10', certificado: 'S/C', url_certificado: '', instructor: 'Víctor Robles', description: 'Aprende los fundamentos básicos de React desde cero y paso a paso con Víctor Robles. Instalación, Componentes, JSX y más.', url_aux: '', calificacion: 'Bueno', actualizado: false, en_ruta: false, logo_platform: 'udemy', logo_technologies: [ 'reactjs' ], mostrar: false, repositorio: '', nota: '' },
                { id: 96, name: 'React - La Guía Completa: Hooks Context Redux MERN +15 Apps', category: 'Frameworks de javascript', technology: 'React JS', url: 'https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones', platform: 'Udemy', costo: 9.99, money: 'EUR', comprado: false, priority: 0, minutos: 3488, culminado: null, certificado: '', url_certificado: '', instructor: 'Juan Pablo De La Torre Valdez', description: 'Incluye React Hooks Gatsby GraphQL Firestore Redux Context MERN Next.js Styled Components Testing Cypress +15 PROYECTOS!', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'mongo', 'express', 'reactjs', 'nodejs' ], mostrar: false, repositorio: '', nota: '' },
                { id: 97, name: 'Curso básico de sass, css3, html5 y jQuery creando un sitio', category: 'Preprocesadores de css', technology: 'sass', url: 'https://www.udemy.com/course/aprende-html5-sass-y-jquery-creando-un-sitio-desde-cero', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 431, culminado: null, certificado: '', url_certificado: '', instructor: 'Academia de Joystick', description: 'Aprende a crear un sitio corporativo desde cero utilizando sass, css3, jQuery y herramientas profesionales de desarrollo.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'sass', 'css', 'html5', 'jquery' ], mostrar: false, repositorio: '', nota: '' },
                { id: 98, name: 'LESS de 0 a 100', category: 'Preprocesadores de css', technology: 'Less', url: 'https://www.youtube.com/playlist?list=PLCTD_CpMeEKT70itw70uVs0vlFbvbCPQN', platform: 'YouTube', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 80, culminado: null, certificado: '', url_certificado: '', instructor: 'Programador Novato', description: 'En este tutorial vamos a prender a instalar Less en nuestros proyectos web.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'youtube', logo_technologies: [ 'less' ], mostrar: false, repositorio: '', nota: '' },
                { id: 99, name: 'javascript Full- Curso desde Principiante hasta Profesional', category: 'Front-end', technology: 'javascript', url: 'https://www.udemy.com/course/javascript-moderno-para-principiantes', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 940, culminado: null, certificado: '', url_certificado: '', instructor: 'Grover Vásquez', description: 'javascript Moderno para principiantes, aprende Fundamentos, POO, ES6+, ajax, WebPack, firebase y Ejemplos de aplicación.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'javascript' ], mostrar: false, repositorio: '', nota: '' },
                { id: 100, name: 'WEBPACK 5 - ¡Curso práctico DESDE CERO! ', category: 'Empaquetador de javascript', technology: 'Webpack', url: 'https://www.youtube.com/watch?v=FMNuTj89RzU', platform: 'YouTube', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 45, culminado: null, certificado: '', url_certificado: '', instructor: 'Midudev', description: 'Aprende a utilizar WEBPACK 5, el empaquetador de aplicaciones web más utilizado del momento. Veremos cómo crear paso a paso una aplicación con React, cómo crear nuestro entorno de desarrollo y optimizarla.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'youtube', logo_technologies: [ 'webpack' ], mostrar: false, repositorio: '', nota: '' },
                { id: 101, name: 'Fundamentos de Marketing Digital', category: 'Soportes', technology: 'Marketing', url: 'https://learndigital.withgoogle.com/activate/course/digital-marketing', platform: 'Google Activate', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 2400, culminado: '2020-05-30', certificado: 'BCU 7HW MSA', url_certificado: 'https://learndigital.withgoogle.com/activate/validate-certificate-code', instructor: 'Google EMEA', description: 'Aprende los conceptos básicos del marketing digital e impulsa tu negocio o tu carrera.', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'google', logo_technologies: [ 'generico' ], mostrar: true, repositorio: '', nota: '' },
                { id: 102, name: 'Curador de datos', category: 'Bases de datos', technology: 'General', url: 'https://capacitateparaelempleo.org/pages.php?r=.tema&tagID=936', platform: 'Capacítate para el empleo', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 1440, culminado: '2020-05-31', certificado: '', url_certificado: 'https://capacitateparaelempleo.org/verifica/neglddar1', instructor: 'Capacítate para el empleo', description: 'Aprende a a administrar, crear, manejar y optimizar una base de datos, mediante un software especializado, para que la información sea útil y se convierta en un activo importante para la toma de decisiones.', url_aux: '', calificacion: 'Bueno', actualizado: true, en_ruta: false, logo_platform: 'cpee', logo_technologies: [ 'mariadb', 'heidisql', 'sql' ], mostrar: true, repositorio: '', nota: '' },
                { id: 103, name: 'Curso de Desarrollo de Apps Móviles', category: 'Soportes', technology: 'Desarrollo móvil', url: 'https://learndigital.withgoogle.com/activate/course/apps', platform: 'Google Activate', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 2400, culminado: '2020-06-01', certificado: 'FDH 3RR UEQ', url_certificado: 'https://learndigital.withgoogle.com/activate/validate-certificate-code', instructor: 'Google EMEA', description: 'Descubre el mundo de la Desarrollo de Apps Móviles de la mano de la UCM (Universidad Complutense de Madrid).', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'google', logo_technologies: [ 'androidstudio', 'xcode', 'html5', 'css', 'javascript', 'apachecordova' ], mostrar: true, repositorio: '', nota: '' },
                { id: 104, name: 'Transformación digital para el empleo', category: 'Soportes', technology: 'General', url: 'https://learndigital.withgoogle.com/activate/course/digital-transformation', platform: 'Google Activate', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 2400, culminado: '2020-06-11', certificado: 'RB5 QF8 D3F', url_certificado: 'https://learndigital.withgoogle.com/activate/validate-certificate-code', instructor: 'Google EMEA', description: 'Descubre todo lo relacionado con la transformación digital de la mano de EOI (Escuela de Organización Industrial).', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'google', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 105, name: 'Programador (orientado a objetos)', category: 'Paradigmas', technology: 'POO', url: 'https://capacitateparaelempleo.org/pages.php?r=.tema&tagID=4244&load=4255&n=0&brandID=capacitate', platform: 'Capacítate para el empleo', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 1920, culminado: '2020-06-17', certificado: '', url_certificado: 'https://capacitateparaelempleo.org/verifica/2zg904spc/', instructor: 'Capacítate para el empleo', description: 'Conocerás los conceptos que definen que es la programación y para que sirve.', url_aux: '', calificacion: 'Bueno', actualizado: true, en_ruta: false, logo_platform: 'cpee', logo_technologies: [ 'generico' ], mostrar: true, repositorio: '', nota: '' },
                { id: 106, name: 'Desarrollador Front-end', category: 'Front-end', technology: 'General', url: 'https://capacitateparaelempleo.org/pages.php?r=.tema&tagID=6726', platform: 'Capacítate para el empleo', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 1920, culminado: '2020-06-22', certificado: '', url_certificado: 'https://capacitateparaelempleo.org/verifica/undrjn3bg/', instructor: 'Capacítate para el empleo', description: 'Utiliza las tecnologías de la información y comunicación para plasmar el contenido de manera que los usuarios lo puedan aprovechar al máximo.', url_aux: '', calificacion: 'Bueno', actualizado: false, en_ruta: false, logo_platform: 'cpee', logo_technologies: [ 'html5', 'css', 'javascript' ], mostrar: true, repositorio: '', nota: '' },
                { id: 107, name: 'Competencias digitales para profesionales', category: 'Soportes', technology: 'General', url: 'https://learndigital.withgoogle.com/activate/course/digital-skills', platform: 'Google Activate', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 2400, culminado: '2020-06-25', certificado: 'LLW 86Q BUZ', url_certificado: 'https://learndigital.withgoogle.com/activate/validate-certificate-code', instructor: 'Álvaro Retorillo Osuna', description: 'Descubre la importancia de las competencias digitales para los profesionales de la mano de la Fundación Santa María la Real.', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'google', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 108, name: 'Estructura de Computadores con Arduino Zero', category: 'Soportes', technology: 'General', url: 'https://www.udemy.com/course/estructura-de-computadores-con-arduino-zero', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 98, culminado: null, certificado: '', url_certificado: '', instructor: 'María José Santofimia Romero', description: 'Explorando la estructura básica de un computador.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 109, name: 'Vue js 3 [Actualizado] ¡De 0 a Experto! + firebase + MEVN', category: 'Frameworks de javascript', technology: 'Vue JS', url: 'https://www.udemy.com/course/curso-vue', platform: 'Udemy', costo: 9.99, money: 'EUR', comprado: true, priority: 0, minutos: 1982, culminado: null, certificado: '', url_certificado: '', instructor: 'Ignacio Gutiérrez ', description: 'Vue.js 2 y Vue.js 3! Aprende desde 0, Composition API, Vuex, Rutas protegidas, Vue CLI, Nuxt.js, Node, express y mongodb.', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'mongo', 'express', 'vuejs', 'nodejs', 'firebase' ], mostrar: false, repositorio: '', nota: '' },
                { id: 110, name: 'Guía completa de GraphQL con angular de 0 a Experto', category: 'Paradigmas', technology: 'GraphQL', url: 'https://www.udemy.com/course/graphql-angular-de-0-a-experto-jwt-socket-mongodb-heroku-anartz-mugika', platform: 'Udemy', costo: 9.99, money: 'EUR', comprado: false, priority: 0, minutos: 640, culminado: null, certificado: '', url_certificado: '', instructor: 'Anartz Mugika Ledo', description: 'APIs en Apollo Server express 2 / 3, Testing, Apollo Client, JWT, Apps en tiempo real, mongodb, Hasura, Deploy.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'graphql', 'angular' ], mostrar: false, repositorio: '', nota: '' },
                { id: 111, name: 'Curso de FlexBox desde 0', category: 'Frameworks de css', technology: 'css', url: 'https://www.udemy.com/course/curso-de-flexbox-desde-0', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 109, culminado: null, certificado: '', url_certificado: '', instructor: 'Erick Mines', description: 'Comprendiendo 10 sencillas "Reglas de ORO" te enseñaremos a trabajar e implementar FLEXBOX en tus proyectos web.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: false, logo_platform: 'udemy', logo_technologies: [ 'css' ], mostrar: false, repositorio: '', nota: '' },
                { id: 112, name: 'laravel y OAuth 2: Login con Facebook, Twitter, Google+, etc', category: 'Frameworks de back-end', technology: 'laravel', url: 'https://www.udemy.com/course/laravel-y-oauth-2-facebook-twitter-google', platform: 'Udemy', costo: 9.99, money: 'EUR', comprado: true, priority: 0, minutos: 407, culminado: '2022-02-25', certificado: 'UC-035a82e5-ca87-43b3-bf11-a2ee4b3b2705', url_certificado: 'https://www.udemy.com/certificate/UC-035a82e5-ca87-43b3-bf11-a2ee4b3b2705', instructor: 'Juan Ramos', description: 'Desarrollemos un monitor de precios! Los usuarios ingresan vía redes sociales, ingresan datos y consultan reportes.', url_aux: '', calificacion: 'Bueno', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'laravel', 'oauth2', 'facebook', 'google', 'twitter', 'excel' ], mostrar: true, repositorio: '', nota: '' },
                { id: 113, name: 'Aprende a publicar cualquier web en Internet (Hosting y VPS)', category: 'Deploy', technology: 'General', url: 'https://www.udemy.com/course/aprende-a-publicar-sitios-web-en-internet-hosting-vps', platform: 'Udemy', costo: 9.99, money: 'EUR', comprado: true, priority: 0, minutos: 349, culminado: '2022-02-09', certificado: 'UC-70a57832-6af5-46bc-a638-b13009c9c869', url_certificado: 'https://www.udemy.com/certificate/UC-70a57832-6af5-46bc-a638-b13009c9c869', instructor: 'Víctor Robles', description: 'Sube tus webs creadas con HTML, css, javascript, php, mysql, angular, Node, Mongo, laravel, Symfony, WP, python y django', url_aux: '', calificacion: 'Bueno', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'devops', 'php', 'mysql', 'mongo', 'laravel', 'angular', 'nodejs' ], mostrar: true, repositorio: 'https://github.com/petrix12/deploy_2022.git', nota: '' },
                { id: 114, name: 'Curso Profesional de JAVA', category: 'Lenguajes de Programación', technology: 'Java', url: 'https://codigofacilito.com/cursos/java-profesional', platform: 'Códigofacilito', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 362, culminado: '2020-06-27', certificado: ' 48a2c72e-ba9e-4f7c-ad76-6631dbacf761', url_certificado: 'https://codigofacilito.com/user_quizzes/94372.pdf', instructor: 'Eduardo Ismael García Pérez', description: 'Curso Profesional de JAVA', url_aux: '', calificacion: 'Bueno', actualizado: false, en_ruta: false, logo_platform: 'codigofacilito', logo_technologies: [ 'java' ], mostrar: false, repositorio: '', nota: '' },
                { id: 115, name: 'Desarrollador Back-end', category: 'Back-end', technology: 'General', url: 'https://capacitateparaelempleo.org/pages.php?r=.tema&tagID=6725', platform: 'Capacítate para el empleo', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 1920, culminado: '2020-06-30', certificado: '', url_certificado: 'https://capacitateparaelempleo.org/verifica/o0skcnx58', instructor: 'Capacítate para el empleo', description: 'Utiliza lenguajes de programación para desarrollar módulos de procesamiento que otorguen a los usuarios contenido dinámico basado en las petriciones de entrada. Almacena información de valor utilizando bases de datos y otorga un alto nivel operacional a sitios como las redes sociales, páginas de compras por internet y a la mayoría de páginas web actuales.', url_aux: '', calificacion: 'Regular', actualizado: false, en_ruta: false, logo_platform: 'cpee', logo_technologies: [ 'generico' ], mostrar: true, repositorio: '', nota: '' },
                { id: 116, name: 'Programación Básica', category: 'Front-end', technology: 'javascript', url: 'https://platzi.com/clases/1050-programacion-basica/5104-que-es-htmlcssjs', platform: 'Platzi', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 2400, culminado: '2020-07-03', certificado: '10dceb04-40a2-4d14-bb70-ac91648472f6', url_certificado: 'https://platzi.com/@pedro-bazo', instructor: 'John Freddy Vega', description: 'Programación básica con javascript.', url_aux: '', calificacion: 'Excelente', actualizado: false, en_ruta: true, logo_platform: 'platzi', logo_technologies: [ 'javascript' ], mostrar: false, repositorio: '', nota: '' },
                { id: 117, name: 'Curso de introducción a la programación', category: 'Paradigmas', technology: 'General', url: 'https://codigofacilito.com/cursos/introduccion', platform: 'Códigofacilito', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 76, culminado: '2020-07-06', certificado: '7694d69c-ace0-4135-a7ad-d7666cb89493', url_certificado: 'https://codigofacilito.com/user_quizzes/95588.pdf', instructor: 'Petriz Celaya', description: 'Aprende los fundamentos y bases de la programación. Descubre cómo es que con instrucciones de código puedes indicarle a una computadora cómo completar una tarea.', url_aux: '', calificacion: 'Bueno', actualizado: true, en_ruta: true, logo_platform: 'codigofacilito', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 118, name: 'Curso de Marca Personal', category: 'Paradigmas', technology: 'General', url: 'https://platzi.com/cursos/marca-personal', platform: 'Platzi', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 720, culminado: '2020-07-06', certificado: '5d15e657-ae42-405c-94de-bbc3ebc7f6e7', url_certificado: 'https://platzi.com/@pedro-bazo', instructor: 'John Freddy Vega', description: 'Construir un portafolio de proyectos y fortalecer tu presencia online te ayudará a resaltar para ampliar tus oportunidades laborales, conseguir un mejor empleo o crear tu propio negocio.', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'platzi', logo_technologies: [ 'facebook', 'instagram', 'twitter', 'google', 'whatsapp' ], mostrar: true, repositorio: '', nota: '' },
                { id: 119, name: 'Cloud Computing', category: 'Cloud Computing', technology: 'General', url: 'https://learndigital.withgoogle.com/activate/course/cloud-computing', platform: 'Google Activate', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 2400, culminado: '2020-07-11', certificado: 'BMC RVW BN7', url_certificado: 'https://learndigital.withgoogle.com/activate/validate-certificate-code', instructor: 'Google EMEA', description: 'Descubre el mundo del Cloud Computing de la mano de EOI (Escuela de Organización Industrial)', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'google', logo_technologies: [ 'aws', 'google', 'azure', 'digitalocean' ], mostrar: true, repositorio: '', nota: '' },
                { id: 120, name: 'Fundamentos del desarrollo web: Full Stack o Front-end', category: 'Stack', technology: 'General', url: 'https://es.linkedin.com/learning/fundamentos-del-desarrollo-web-full-stack-o-front-end/presentacion-del-curso-fundamentos-del-desarrollo-web-full-stack-o-front-end', platform: 'LinkedIn Learning', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 55, culminado: '2020-07-12', certificado: 'AQoG5v-if5GvR4ih5nmi33igT7HQ', url_certificado: 'https://www.linkedin.com/learning/certificates/f615bb94f4833b31f3b997ff6036441bd36e1fd011d70911b25d934c942a1aab?trk=share_certificate', instructor: 'Sergio Brito', description: 'En este curso aprenderás todo lo que implica ser un desarrollador web, desde las herramientas y frameworks de trabajo necesarias hasta todo lo que debes de considerar para hacerte de un buen trabajo. Descubre qué habilidades deberás poseer y mejorar para ser un profesional exitoso en la industria web.', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'linkedin', logo_technologies: [ 'generico' ], mostrar: true, repositorio: '', nota: '' },
                { id: 121, name: 'Aprende Visual Studio Code', category: 'Herramientas', technology: 'VS Code', url: 'https://www.linkedin.com/learning/aprende-visual-studio-code', platform: 'LinkedIn Learning', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 85, culminado: '2020-07-13', certificado: 'AdJbdvjorzaWEPQKsR_ruv28nelk', url_certificado: '', instructor: 'Sergio Brito', description: 'Aprende a utilizar Visual Studio Code.', url_aux: '', calificacion: 'Excelente', actualizado: false, en_ruta: false, logo_platform: 'linkedin', logo_technologies: [ 'vsc' ], mostrar: false, repositorio: '', nota: '' },
                { id: 122, name: 'javascript esencial', category: 'Front-end', technology: 'javascript', url: 'https://www.linkedin.com/learning/javascript-esencial/presentacion-del-curso-javascript-esencial', platform: 'LinkedIn Learning', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 327, culminado: '2020-07-15', certificado: 'AfnYV01thUHoafVxBRr5i7RUkTgk', url_certificado: 'https://www.linkedin.com/learning/certificates/6c6262935ed9c6ab5fcac15726fe8fed685f66a160b2fbd04719f8c8abf41487?trk=share_certificate', instructor: 'Sergio Brito', description: 'Conoce javascript, sus clases y elementos, desde sus conceptos más básicos hasta las herramientas más avanzadas. Este curso esencial de javascript, el lenguaje que rige la web, considera la nueva especificación del lenguaje ES6 y te enseña desde los fundamentos hasta un nivel intermedio, de un lenguaje utilizado en distintas áreas, como web, aplicaciones móviles y aplicaciones escritorio. Esto hace de javascript uno de los lenguajes más estudiados y demandados.', url_aux: '', calificacion: 'Excelente', actualizado: false, en_ruta: false, logo_platform: 'linkedin', logo_technologies: [ 'javascript' ], mostrar: false, repositorio: '', nota: '' },
                { id: 123, name: 'javascript avanzado: Buenas prácticas', category: 'Front-end', technology: 'javascript', url: 'https://www.linkedin.com/learning/javascript-avanzado-buenas-practicas/presentacion-del-curso-javascript-avanzado-buenas-practicas', platform: 'LinkedIn Learning', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 109, culminado: '2020-07-17', certificado: 'AbEiI_V1GjZq7_M4bBkvg0kwMGwc', url_certificado: 'https://www.linkedin.com/learning/certificates/66a8440ec2362e38b6b8e729e5b131c47a0608b0e7f50cce5c591cbd5b1475ff?trk=share_certificate', instructor: 'Sergio Brito', description: 'En este curso conocerás las buenas prácticas más populares y eficaces, que harán que tu trabajo como desarrollador usando javascript mejore y sea más práctico al trabajar en una nueva aplicación web. Estas buenas prácticas se convertirán en el set de acciones que incorporarás en cada proyecto web y que ayudarán a que tu código sea mejor.', url_aux: '', calificacion: 'Excelente', actualizado: false, en_ruta: false, logo_platform: 'linkedin', logo_technologies: [ 'javascript' ], mostrar: false, repositorio: '', nota: '' },
                { id: 124, name: 'javascript avanzado: Expresiones regulares', category: 'Front-end', technology: 'javascript', url: 'https://www.linkedin.com/learning/javascript-avanzado-expresiones-regulares/presentacion-del-curso-javascript-avanzado-expresiones-regulares', platform: 'LinkedIn Learning', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 94, culminado: '2020-07-18', certificado: 'AcULzI6GeFyOA5dRitATMcLFJ2ik', url_certificado: 'https://www.linkedin.com/learning/certificates/d7f64256de10f5ab340fa733d2760aface893e774bad1551394104533bcadc78?trk=share_certificate', instructor: 'Sergio Brito', description: 'Aprende en este curso a usar las expresiones regulares con javascript.', url_aux: '', calificacion: 'Excelente', actualizado: false, en_ruta: false, logo_platform: 'linkedin', logo_technologies: [ 'javascript' ], mostrar: false, repositorio: '', nota: '' },
                { id: 125, name: 'Node.js esencial', category: 'Back-end', technology: 'Node.js', url: 'https://www.linkedin.com/learning/node-js-esencial', platform: 'LinkedIn Learning', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 222, culminado: '2020-07-20', certificado: 'AXBaLkGLNI7CeQhU2t3l4DJDAkcH', url_certificado: '', instructor: 'Carlos Solís', description: 'En este curso, vamos a explorar todo lo que necesitas saber para comenzar a trabajar ya con Node.js. Veremos los pasos básicos de instalación, las reglas básicas de sintaxis y cómo crear aplicaciones completas. Después de este curso, podrás dar los primeros pasos para convertirte en un desarrollador Fullstack.', url_aux: '', calificacion: 'Muy bueno', actualizado: false, en_ruta: false, logo_platform: 'linkedin', logo_technologies: [ 'nodejs' ], mostrar: true, repositorio: '', nota: '' },
                { id: 126, name: 'Node.js práctico: Sitio web', category: 'Back-end', technology: 'Node.js', url: 'https://www.linkedin.com/learning/node-js-practico-sitio-web', platform: 'LinkedIn Learning', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 82, culminado: '2020-07-24', certificado: 'AUlU2edpTPRe9X3Vt9JzJ5eo8z7N', url_certificado: '', instructor: 'Carlos Solís', description: 'En este curso práctico nos enfocaremos en diferentes proyectos web basados en nodejs. Crearemos un sitio completo y utilizaremos funciones avanzadas, así como librerías y servicios adicionales para llevar nuestro producto al siguiente nivel. Finalmente aprenderemos los procesos de publicación en diferentes servicios en la nube para que nuestra aplicación esté disponible para el mundo entero.', url_aux: '', calificacion: 'Muy bueno', actualizado: false, en_ruta: false, logo_platform: 'linkedin', logo_technologies: [ 'nodejs' ], mostrar: false, repositorio: '', nota: '' },
                { id: 127, name: 'Aprende diseño de base de datos relacionales', category: 'Bases de datos', technology: 'General', url: 'https://www.linkedin.com/learning/aprende-diseno-de-base-de-datos-relacionales', platform: 'LinkedIn Learning', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 53, culminado: '2020-07-28', certificado: 'Ae5V_EEcB2xVaK6WTCpW6_QF21d6', url_certificado: '', instructor: 'Noemí León', description: '¿Quieres iniciarte en el mundo de las bases de datos y no sabes por dónde empezar? ¿Tienes un sitio web y quieres agregarle una base de datos, pero no entiendes muchos conceptos? En este curso, partiremos de los conceptos básicos. Veremos qué es una base de datos y cuáles son sus clasificaciones principales, hasta llegar a conceptos precisos del diseño de bases de datos relacionales, de forma que, cuando termines el curso, tendrás una idea clara de cómo funcionan este tipo de bases de datos y si están hechas para ti.', url_aux: '', calificacion: 'Bueno', actualizado: true, en_ruta: true, logo_platform: 'linkedin', logo_technologies: [ 'sql' ], mostrar: false, repositorio: '', nota: '' },
                { id: 128, name: 'SQL esencial', category: 'Bases de datos', technology: 'SQL', url: 'https://www.linkedin.com/learning/sql-esencial/presentacion-del-curso-sql-esencial', platform: 'LinkedIn Learning', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 116, culminado: '2020-08-01', certificado: 'AYtHVD2RpYUMz5PHuFACVjmf1J9_', url_certificado: '', instructor: 'Bernardo Pineda', description: 'En este curso verás cómo crear, actualizar, eliminar y filtrar registros, así como la creación de la estructura de nuestra base de datos (tablas y tipos de datos).', url_aux: '', calificacion: 'Bueno', actualizado: true, en_ruta: false, logo_platform: 'linkedin', logo_technologies: [ 'sql' ], mostrar: false, repositorio: '', nota: '' },
                { id: 129, name: 'Curso de laravel 5.4', category: 'Frameworks de back-end', technology: 'laravel', url: 'https://learn.edutin.com/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDU5MDUzNTgsImV4cCI6MTYwNjUxMDE1OCwiZGF0YSI6eyJpZCI6IjEyMTg1MDciLCJuYW1lIjoiUGVkcm8gQmF6XHUwMGYzIiwiZW1haWwiOiJiYXpvLnBlZHJvQGdtYWlsLmNvbSIsInJvbGUiOiJmcmVlIiwiY2VydGlmaWNhdGlvbl9pZCI6IjI5NTA5ODMifX0.dGPrPVjWVG7579MKfRA9GPRNhYeIvS9bwvvYTO_khvw&config=%7B%22status%22:true,%22curso_id%22:%223765%22,%22certification_id%22:%222950983%22,%22type%22:%222%22,%22clase_id%22:%22409329702%22,%22idu%22:%221218507%22,%22language_id%22:%221%22%7D', platform: 'Edutin Academy', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 310, culminado: '2021-01-09', certificado: '', url_certificado: '', instructor: 'Homero Raúl Vargas Cruz', description: 'Aprende Larevel 5.4', url_aux: '', calificacion: 'Excelente', actualizado: false, en_ruta: false, logo_platform: 'edutin', logo_technologies: [ 'laravel' ], mostrar: false, repositorio: '', nota: '' },
                { id: 130, name: 'Sistema de Historia Clínica en laravel', category: 'Frameworks de back-end', technology: 'laravel', url: 'https://www.youtube.com/playlist?list=PLS3ZgoVufwTmVTRZnxekoeST-C9OzKzKk', platform: 'YouTube', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 806, culminado: '2021-02-08', certificado: '', url_certificado: '', instructor: 'Homero Raúl Vargas Cruz', description: 'Construir una aplicación de historia clínica en laravel ', url_aux: '', calificacion: 'Excelente', actualizado: false, en_ruta: false, logo_platform: 'youtube', logo_technologies: [ 'laravel' ], mostrar: true, repositorio: '', nota: '' },
                { id: 131, name: 'Novedades de laravel 5.5', category: 'Frameworks de back-end', technology: 'laravel', url: 'https://aprendible.com/series/novedades-de-laravel-5-5', platform: 'Aprendible', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 41, culminado: '2021-02-12', certificado: '', url_certificado: '', instructor: 'Jorge García', description: 'En esta serie de videos revisaremos las novedades que vienen en la nueva versión de laravel 5.5 LTS (Long Term Support).', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'aprendible', logo_technologies: [ 'laravel' ], mostrar: false, repositorio: '', nota: '' },
                { id: 132, name: 'Novedades de laravel 5.7', category: 'Frameworks de back-end', technology: 'laravel', url: 'https://aprendible.com/series/novedades-laravel-5-7', platform: 'Aprendible', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 20, culminado: '2021-02-13', certificado: '', url_certificado: '', instructor: 'Jorge García', description: 'En esta serie de videos revisaremos las novedades que vienen en la versión 5.7 de laravel', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'aprendible', logo_technologies: [ 'laravel' ], mostrar: false, repositorio: '', nota: '' },
                { id: 133, name: 'Novedades de laravel 5.8', category: 'Frameworks de back-end', technology: 'laravel', url: 'https://aprendible.com/series/novedades-de-laravel-5-8', platform: 'Aprendible', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 7, culminado: '2021-02-14', certificado: '', url_certificado: '', instructor: 'Jorge García', description: 'En esta serie revisamos las novedades más importantes de la versión 5.8 de laravel.', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'aprendible', logo_technologies: [ 'laravel' ], mostrar: false, repositorio: '', nota: '' },
                { id: 134, name: 'Novedades de laravel 6', category: 'Frameworks de back-end', technology: 'laravel', url: 'https://aprendible.com/series/novedades-de-laravel-6', platform: 'Aprendible', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 25, culminado: '2021-02-17', certificado: '', url_certificado: '', instructor: 'Jorge García', description: 'En esta serie revisamos las principales novedades de la versión 6.0 de laravel', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'aprendible', logo_technologies: [ 'laravel' ], mostrar: false, repositorio: '', nota: '' },
                { id: 135, name: 'Novedades de laravel 7', category: 'Frameworks de back-end', technology: 'laravel', url: 'https://aprendible.com/series/novedades-de-laravel-7', platform: 'Aprendible', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 41, culminado: '2021-02-21', certificado: '', url_certificado: '', instructor: 'Jorge García', description: 'En esta serie de videos vamos a revisar las novedades más importantes de la versión 7 de laravel.', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'aprendible', logo_technologies: [ 'laravel' ], mostrar: false, repositorio: '', nota: '' },
                { id: 136, name: 'laravel 8 ¡desde cero!', category: 'Frameworks de back-end', technology: 'laravel', url: 'https://www.youtube.com/playlist?list=PLrAw40DbN0l34pUNNfzrT4cDOMkV47640', platform: 'YouTube', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 180, culminado: '2021-02-21', certificado: '', url_certificado: '', instructor: 'Informática DP', description: 'Curso de laravel desde cero.', url_aux: '', calificacion: 'Bueno', actualizado: true, en_ruta: true, logo_platform: 'youtube', logo_technologies: [ 'laravel' ], mostrar: false, repositorio: '', nota: '' },
                { id: 137, name: 'Novedades de laravel 8', category: 'Frameworks de back-end', technology: 'laravel', url: 'https://aprendible.com/series/novedades-de-laravel-8', platform: 'Aprendible', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 79, culminado: '2021-02-25', certificado: '', url_certificado: '', instructor: 'Jorge García', description: 'En esta serie de videos vamos a revisar las novedades más importantes de la versión 8 de laravel.', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'aprendible', logo_technologies: [ 'laravel' ], mostrar: false, repositorio: '', nota: '' },
                { id: 138, name: 'Curso laravel 8 desde cero', category: 'Frameworks de back-end', technology: 'laravel', url: 'https://www.cursosdesarrolloweb.es/course/curso-laravel-8-desde-cero', platform: 'Cursosdedesarrolloweb', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 303, culminado: '2021-02-26', certificado: '', url_certificado: '', instructor: 'Cursosdedesarrolloweb', description: 'En este curso te voy a explicar desde cero todo lo que necesitas conocer de laravel 8 en adelante, a partir de esta base, podrás seguir aprendiendo con el resto de cursos de laravel 8 de la plataforma o por tu cuenta, tú decides.', url_aux: '', calificacion: 'Muy bueno', actualizado: true, en_ruta: true, logo_platform: 'cursosdedesarrolloweb', logo_technologies: [ 'laravel' ], mostrar: false, repositorio: '', nota: '' },
                { id: 139, name: 'Cómo subir múltiples archivos en laravel', category: 'Frameworks de back-end', technology: 'laravel', url: 'https://www.udemy.com/course/como-subir-multiples-archivos-en-laravel', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 46, culminado: '2021-03-03', certificado: '', url_certificado: '', instructor: 'Brayan Angarita', description: 'Desarrolla una aplicación sencilla para subir varios archivos de una vez en laravel', url_aux: '', calificacion: 'Bueno', actualizado: false, en_ruta: false, logo_platform: 'udemy', logo_technologies: [ 'laravel' ], mostrar: false, repositorio: '', nota: '' },
                { id: 140, name: 'Cómo integrar la plantilla AdminLTE 3 en tu proyecto de laravel', category: 'Frameworks de back-end', technology: 'laravel', url: 'https://www.youtube.com/playlist?list=PLZ2ovOgdI-kWTCkbH749Ukvq7FMz5ahpP', platform: 'YouTube', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 90, culminado: '2021-03-08', certificado: '', url_certificado: '', instructor: 'Victor Arana Flores', description: 'Cómo integrar la plantilla AdminLTE 3 en tu proyecto de laravel', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'youtube', logo_technologies: [ 'laravel' ], mostrar: false, repositorio: '', nota: '' },
                { id: 141, name: 'Aprende laravel 8 desde cero', category: 'Frameworks de back-end', technology: 'laravel', url: 'https://codersfree.com/cursos/aprende-laravel-8-desde-cero', platform: 'Coders Free', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 1260, culminado: null, certificado: '', url_certificado: '', instructor: 'Victor Arana Flores', description: 'En este curso aprenderás a utilizar el frameworke laravel 8, totalmente desde cero.', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'coders_free', logo_technologies: [ 'laravel' ], mostrar: false, repositorio: '', nota: '' },
                { id: 142, name: 'Desplegar tu proyecto laravel en Digital Ocean', category: 'Deploy', technology: 'laravel', url: 'https://www.youtube.com/playlist?list=PLZ2ovOgdI-kWRdVAJLH0kEHSNKCk8rz_x', platform: 'YouTube', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 90, culminado: '2021-03-19', certificado: '', url_certificado: '', instructor: 'Victor Arana Flores', description: 'En esta nueva serie te enseñaré a cómo administrar tu propio servidor, y subir tus proyectos laravel en él.', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'youtube', logo_technologies: [ 'laravel', 'digitalocean' ], mostrar: true, repositorio: '', nota: '' },
                { id: 143, name: 'Vue.js desde cero', category: 'Frameworks de javascript', technology: 'Vue JS', url: 'https://aprendible.com/series/vuejs-desde-cero', platform: 'Aprendible', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 70, culminado: '2021-04-28', certificado: '', url_certificado: '', instructor: 'Jorge García', description: 'En esta serie aprenderemos a utilizar Vue.js desde cero y cómo integrarlo en tus aplicaciones de laravel.', url_aux: '', calificacion: 'Muy bueno', actualizado: false, en_ruta: false, logo_platform: 'aprendible', logo_technologies: [ 'vuejs' ], mostrar: false, repositorio: '', nota: '' },
                { id: 144, name: 'Servidores', category: 'Deploy', technology: 'General', url: 'https://aprendible.com/series/servidores', platform: 'Aprendible', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 52, culminado: '2021-04-30', certificado: '', url_certificado: '', instructor: 'Jorge García', description: 'Todo lo que necesitas saber para publicar tus aplicaciones hechas en laravel en servidores modernos.', url_aux: '', calificacion: 'Muy bueno', actualizado: true, en_ruta: true, logo_platform: 'aprendible', logo_technologies: [ 'devops', 'heroku', 'digitalocean', 'cpanel', 'laravel' ], mostrar: true, repositorio: '', nota: '' },
                { id: 145, name: 'Relaciones avanzadas de laravel', category: 'Frameworks de back-end', technology: 'laravel', url: 'https://codersfree.com/cursos/relaciones-avanzadas-de-laravel', platform: 'Coders Free', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 180, culminado: '2021-07-29', certificado: '', url_certificado: '', instructor: 'Victor Arana Flores', description: 'En este curso aprenderás a como trabajar con una base de datos en un proyecto real.', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'coders_free', logo_technologies: [ 'laravel' ], mostrar: true, repositorio: '', nota: '' },
                { id: 146, name: 'Programación Orientada a Objetos y principios SOLID', category: 'Paradigmas', technology: 'POO', url: 'https://www.udemy.com/course/programacion-orientada-a-objetos-y-principio-solid', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 51, culminado: '2021-08-27', certificado: '', url_certificado: '', instructor: 'Eduardo Patiño', description: 'Curso conceptual sobre el paradigma de la programación orientada a objetos y SOLID.', url_aux: '', calificacion: 'Bueno', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 147, name: 'Las bases para desarrollar una aplicación full stack MERN', category: 'Stack', technology: 'MERN', url: 'https://www.udemy.com/course/las-bases-para-desarrollar-una-aplicacion-full-stack-mern', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 74, culminado: '2021-11-20', certificado: '', url_certificado: '', instructor: 'Luis Trujillo Sánchez', description: 'Aprende las bases para crear una aplicación web con el stack MERN (mongodb, express, react, nodejs)', url_aux: '', calificacion: 'Bueno', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'mongo', 'express', 'reactjs', 'nodejs' ], mostrar: true, repositorio: '', nota: '' },
                { id: 148, name: 'Introducción a Amazon Web Services (AWS)', category: 'Cloud Computing', technology: 'AWS', url: 'https://www.udemy.com/course/introduccion-a-amazon-web-services-aws', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 390, culminado: '2021-06-11', certificado: 'UC-a0492df5-aae0-415c-8336-63642c830efc', url_certificado: 'https://www.udemy.com/certificate/UC-a0492df5-aae0-415c-8336-63642c830efc', instructor: 'Juan Luque', description: 'Aprende los fundamentos de los servicios de AWS y desarrolla miniproyectos dentro de la plataforma.', url_aux: '', calificacion: 'Regular', actualizado: true, en_ruta: false, logo_platform: 'udemy', logo_technologies: [ 'aws' ], mostrar: false, repositorio: '', nota: '' },
                { id: 149, name: 'Aprende a crear una plataforma de cursos con laravel', category: 'Frameworks de back-end', technology: 'laravel', url: 'https://codersfree.com/cursos/aprende-a-crear-una-plataforma-de-cursos-con-laravel', platform: 'Udemy', costo: 9.99, money: 'EUR', comprado: true, priority: 0, minutos: 1320, culminado: '2021-06-21', certificado: 'UC-808bf328-9ed5-4792-bcd3-755dde0f62f6', url_certificado: 'https://www.udemy.com/certificate/UC-808bf328-9ed5-4792-bcd3-755dde0f62f6', instructor: 'Victor Arana Flores', description: 'En este curso aprenderás a crear una plataforma de cursos, con laravel, Livewire Tailwind y Alpine.', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'laravel', 'livewire', 'tailwindcss', 'alpine' ], mostrar: true, repositorio: '', nota: '' },
                { id: 150, name: 'Desarrollo web : HTML, css, javascript, JQuery, python y django', category: 'Stack', technology: 'python-django', url: 'https://www.udemy.com/course/desarrollo-web-con-python-y-django', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 649, culminado: '2021-07-02', certificado: 'UC-f64e78a2-26a3-4ef5-84e8-0b22058eb52a', url_certificado: 'https://www.udemy.com/certificate/UC-f64e78a2-26a3-4ef5-84e8-0b22058eb52a', instructor: 'Redait Media', description: 'Aprende a construir sitios web con HTML, css, bootstrap, javascript, JQuery, python 3 y django.', url_aux: '', calificacion: 'Bueno', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'html5', 'css', 'javascript', 'jquery', 'python', 'django' ], mostrar: true, repositorio: '', nota: '' },
                { id: 151, name: 'Aprende a instalar laravel 8 en Amazon Web Services', category: 'Deploy', technology: 'AWS', url: 'https://www.udemy.com/course/draft/3793886/learn/lecture/24522234?start=0#overview', platform: 'Udemy', costo: 9.99, money: 'EUR', comprado: true, priority: 0, minutos: 90, culminado: '2021-07-29', certificado: 'UC-a7113805-8cb5-405b-9791-5c134e6d8e3c', url_certificado: 'https://www.udemy.com/certificate/UC-a7113805-8cb5-405b-9791-5c134e6d8e3c', instructor: 'Homero Raúl Vargas Cruz', description: 'Instalación de laravel en Amazon EC2, configuracion de la base de datos, implementar certificado SSL y mucho más.', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: false, logo_platform: 'udemy', logo_technologies: [ 'aws', 'laravel' ], mostrar: false, repositorio: '', nota: '' },
                { id: 152, name: 'La ruta del desarrollador web', category: 'Paradigmas', technology: 'General', url: 'https://app.ed.team/cursos/web', platform: 'EDteam', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 180, culminado: '2021-07-30', certificado: '228409405-1cd51139-1307-460e-abc8-d6890e6b85bc', url_certificado: 'https://app.ed.team/@pedrojesusbazocanelon/curso/web', instructor: 'Alvaro Felipe Chávez', description: 'Aprende todos los roles y rutas que existen para ser un desarrollador web profesional en 2021.', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'edteam', logo_technologies: [ 'generico' ], mostrar: true, repositorio: '', nota: '' },
                { id: 153, name: 'Introducción a API REST', category: 'Paradigmas', technology: 'API RESTful', url: 'https://app.ed.team/cursos/api-rest', platform: 'EDteam', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 60, culminado: '2021-07-30', certificado: '228409382-1a5a5de0-fcf7-4f3f-95f4-531b23188ba3', url_certificado: 'https://app.ed.team/@pedrojesusbazocanelon/curso/api-rest', instructor: 'Alexys Lozada', description: 'Aprende todos los conceptos teóricos que hay en la arquitectura REST.', url_aux: '', calificacion: 'Muy bueno', actualizado: true, en_ruta: true, logo_platform: 'edteam', logo_technologies: [ 'apirestful' ], mostrar: false, repositorio: '', nota: '' },
                { id: 154, name: 'Introducción a Google Cloud Platform', category: 'Cloud Computing', technology: 'Google Cloud Platform', url: 'https://www.udemy.com/course/introduccion-a-google-cloud-platform', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 210, culminado: '2021-08-03', certificado: 'UC-8d986592-d2d2-42bd-971b-61f25426f6a1', url_certificado: 'https://www.udemy.com/certificate/UC-8d986592-d2d2-42bd-971b-61f25426f6a1', instructor: 'Josue Guevara', description: 'Aprende los fundamentos de los servicios de GCP y desarolla miniproyectos dentro de la plataforma de Google', url_aux: '', calificacion: 'Regular', actualizado: true, en_ruta: false, logo_platform: 'udemy', logo_technologies: [ 'google' ], mostrar: false, repositorio: '', nota: '' },
                { id: 155, name: 'Graba y transmite cursos online', category: 'Herramientas', technology: 'OBS Studio', url: 'https://app.ed.team/cursos/curso-online', platform: 'EDteam', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 240, culminado: '2021-08-07', certificado: '228409385-ce9e27be-d058-4ab8-a6ef-3a465eb73ffc', url_certificado: 'https://app.ed.team/@pedrojesusbazocanelon/curso/curso-online', instructor: 'Alvaro Felipe Chávez', description: 'Aprende a crear cursos para YouTube, EDteam, Twitch u otras plataformas de la mano de nuestros expertos.', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'edteam', logo_technologies: [ 'obs' ], mostrar: false, repositorio: '', nota: '' },
                { id: 156, name: '¡Curso Profesional Excel 2021– Para Empresas!', category: 'Herramientas', technology: 'Microsoft Excel', url: 'https://www.udemy.com/course/2021-curso-profesional-excel-para-empresas', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 510, culminado: '2021-08-08', certificado: 'UC-ff4e21c5-f953-4a72-bfe2-7881ef421926', url_certificado: 'https://www.udemy.com/certificate/UC-ff4e21c5-f953-4a72-bfe2-7881ef421926', instructor: 'David Godeau', description: 'Adquiere Conocimientos Indispensables de Excel en el Mundo Empresarial. ¡El Curso Excel Más Actualizado Este 2021!', url_aux: '', calificacion: 'Bueno', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'excel' ], mostrar: false, repositorio: 'https://github.com/petrix12/excel2021', nota: '' },
                { id: 157, name: 'Crea una pasarela de pagos con laravel Cashier y Stripe', category: 'Frameworks de back-end', technology: 'laravel', url: 'https://codersfree.com/cursos/crea-una-pasarela-de-pagos-con-laravel', platform: 'Udemy', costo: 9.99, money: 'EUR', comprado: true, priority: 0, minutos: 300, culminado: '2021-09-23', certificado: 'UC-afccdce2-6ca4-4e43-a222-68a681897c55', url_certificado: 'https://www.udemy.com/certificate/UC-afccdce2-6ca4-4e43-a222-68a681897c55', instructor: 'Victor Arana Flores', description: 'En este curso aprenderás a implementar una pasarela de pagos completa en tu negocio virtual.', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'laravel', 'stripe' ], mostrar: true, repositorio: '', nota: '' },
                { id: 158, name: 'CRUD con php mysql bootstrap jQuery ajax y Docker', category: 'Herramientas', technology: 'Docker', url: 'https://www.udemy.com/course/crud-con-php-mysql-bootstrap-jquery-ajax-y-docker', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 90, culminado: '2021-12-13', certificado: 'UC-266882f9-ff9e-40f2-8218-45945c338c1b', url_certificado: 'https://www.udemy.com/certificate/UC-266882f9-ff9e-40f2-8218-45945c338c1b', instructor: 'Wener Ovalle', description: 'Aprende hacer una aplicación web por medio de un proyecto práctico con tu entorno de desarrollo hecho en Docker.', url_aux: '', calificacion: 'Bueno', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'php', 'mysql', 'bootstrap', 'jquery', 'ajax', 'docker' ], mostrar: false, repositorio: '', nota: '' },
                { id: 159, name: 'Web Personal MERN Full Stack: mongodb, express, React y Node', category: 'Stack', technology: 'MERN', url: 'https://www.udemy.com/course/web-personal-mern-full-stack-mongodb-express-react-node', platform: 'Udemy', costo: 9.99, money: 'EUR', comprado: true, priority: 0, minutos: 2010, culminado: '2021-12-22', certificado: 'UC-c5c360e3-a8c2-4ed7-a285-64e4b7c28a02', url_certificado: 'https://www.udemy.com/certificate/UC-c5c360e3-a8c2-4ed7-a285-64e4b7c28a02', instructor: 'Agustin Navarro Galdón', description: 'Desarrollo Full Stack, creando una web personal con el Stack MERN (mongodb, express, React y Node) la ultima tecnología.', url_aux: '', calificacion: 'Bueno', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'mongo', 'express', 'reactjs', 'nodejs' ], mostrar: true, repositorio: '', nota: '' },
                { id: 160, name: 'Aprende big data: Análisis de datos', category: 'Big Data', technology: 'General', url: 'https://www.linkedin.com/learning/aprende-big-data-analisis-de-datos/que-es-el-big-data-2', platform: 'LinkedIn Learning', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 110, culminado: '2020-09-25', certificado: 'AYRhj01XBJa1w32_eXe-0-dKz09M', url_certificado: 'https://www.linkedin.com/learning/certificates/6d1d9c5613b30cf9052cde2b84cb3a99cf2c2784af8bb49ffc54407b527a3f0b?trk=share_certificate', instructor: 'Ana María Bisbé York', description: 'Aprende big data para la empresa de hoy, desde las bases fundamentales a los roles más específicos de la ciencia de los datos. Conoce a qué nos referimos con big data y por qué es necesario estar al día en esta tecnología para sobrevivir en el ecosistema empresarial. Expande tus conocimientos sobre la presencia del big data en nuestras vidas y en las tecnologías que la rodean, y entiende cómo sacar mayor partido a este futuro reciente en tu propia empresa.', url_aux: '', calificacion: 'Bueno', actualizado: true, en_ruta: true, logo_platform: 'linkedin', logo_technologies: [ 'generico' ], mostrar: true, repositorio: '', nota: '' },
                { id: 161, name: 'Big data: Escucha activa', category: 'Big Data', technology: 'General', url: 'https://www.linkedin.com/learning/big-data-escucha-activa/presentacion-del-curso-big-data-escucha-activa', platform: 'LinkedIn Learning', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 89, culminado: '2020-09-15', certificado: 'AZa4uEbUurHG4V_TUoX9xcrUXr6R', url_certificado: 'https://www.linkedin.com/learning/certificates/51b6604bebb327dd7bc6f86eca2acca16ec0fd62c9e7191db5de3b01e6a86ffb?trk=share_certificate', instructor: 'Míriam Hatibi Zagmal', description: 'Escuchar lo que tus clientes o el mercado opinan de tu producto, servicio o empresa es parte de la estrategia que toda empresa debe tener en pie. Las redes sociales son extremadamente útiles para este fin. Con este curso, entenderás qué es la escucha activa en redes sociales y qué puede ofrecernos. Además, a través de ejemplos prácticos, aprenderás a poner en marcha una estrategia de escucha activa, de principio a fin.', url_aux: '', calificacion: 'Bueno', actualizado: true, en_ruta: true, logo_platform: 'linkedin', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 162, name: 'devops con un café', category: 'Deploy', technology: 'General', url: 'https://www.linkedin.com/learning/devops-con-un-cafe/historia-de-devops', platform: 'LinkedIn Learning', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 10, culminado: '2020-09-08', certificado: '', url_certificado: '', instructor: 'Álvaro González Crespo', description: 'Entiende qué es y cómo funciona devops, un acrónimo inglés de "development" (desarrollo) y "operations" (operaciones). Conoce en solo cuatro vídeos esta metodología de desarrollo de software que se centra en la comunicación, colaboración e integración entre los desarrolladores de software y los profesionales de sistemas de tecnologías de la información.', url_aux: '', calificacion: 'Bueno', actualizado: false, en_ruta: false, logo_platform: 'linkedin', logo_technologies: [ 'devops' ], mostrar: false, repositorio: '', nota: '' },
                { id: 163, name: 'Cómo hackear tu mente y recuperar el control sobre el estrés', category: 'Otros', technology: 'Otros', url: 'https://www.linkedin.com/learning/como-hackear-tu-mente-y-recuperar-el-control-sobre-el-estres/para-aumentar-tu-productividad-tienes-que-hacer-menos-cosas', platform: 'LinkedIn Learning', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 51, culminado: '2020-09-08', certificado: '', url_certificado: '', instructor: 'Izanami Martínez', description: 'Supera el estrés y consigue dejar atrás la sensación de que no tienes tiempo. Aprende qué es, qué le pasa a tu cuerpo cuando se activa o se vuelve crónico, y qué hábitos mentales y nutricionales lo empeoran. Consigue, con este curso, resetear tu mente y recuperar el control de tu día a día con sesiones prácticas de respiración consciente y mindfulness que te devolverán tu claridad mental y tu equilibrio.', url_aux: '', calificacion: 'Bueno', actualizado: false, en_ruta: false, logo_platform: 'linkedin', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 164, name: 'Fundamentos de big data', category: 'Big Data', technology: 'General', url: 'https://www.linkedin.com/learning/fundamentos-de-big-data/presentacion-del-curso-fundamentos-de-big-data', platform: 'LinkedIn Learning', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 95, culminado: '2020-09-06', certificado: 'AToJuOfwEMn2On9Bc2F5T8eS4ud-', url_certificado: 'https://www.linkedin.com/learning/certificates/b2fa1c97404af07ba2e4d15a8acae90ee97c92e06fb8978ba521d3a561263e10?trk=share_certificate', instructor: 'Míriam Hatibi Zagmal', description: 'Hoy en día, es clave entender las bases del Big Data en nuestro mundo y nuestra realidad. Con este curso, te introducirás en el mundo del Big Data o Macro Datos, y sabrás cómo puede afectarte a ti y a tu empresa. Conocerás la evolución y los avances en Big Data de los últimos años y las diferentes aplicaciones que tiene, para obtener las herramientas necesarias que te permitan aplicarlo a tu organización, independientemente de su sector o tamaño. Conseguirás identificar las mejores formas de optimizar el Big Data adecuándolo a tus recursos o entendiendo qué recursos buscar al externo o desarrollar en tu equipo para poderlo implementar.', url_aux: '', calificacion: 'Bueno', actualizado: true, en_ruta: true, logo_platform: 'linkedin', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 165, name: 'Fundamentos de ITIL: Introducción a la gestión de sistemas de información', category: 'IT', technology: 'General', url: 'https://www.linkedin.com/learning/fundamentos-de-itil-introduccion-a-la-gestion-de-sistemas-de-informacion/presentacion-del-curso-fundamentos-de-itil-introduccion-a-la-gestion-de-sistemas-de-informacion', platform: 'LinkedIn Learning', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 84, culminado: '2020-09-03', certificado: 'AW-ExSc3C589ZqRBgJibb5Dvsy9_', url_certificado: 'https://www.linkedin.com/learning/certificates/cf248f02b7ebcb1cf3b7c6aa97792f49ae48a7460c80a1b9a45501bd9f47e6a4?trk=share_certificate', instructor: 'Stéphane Kittler', description: 'La importancia de los sistemas de información en la empresa y el gobierno ya no está en duda. ¿Cómo configurar y cómo administrar un sistema de información de calidad, eficaz en el coste más bajo, a la vez que se cumplen los requerimientos del negocio? ¡ITIL 2011 es la respuesta! Este método es una colección de prácticas de sentido común que pueden adaptarse a cualquier tipo de negocio y sin costo alguno, excepto el tiempo necesario para ponerlo en práctica.', url_aux: '', calificacion: 'Bueno', actualizado: true, en_ruta: false, logo_platform: 'linkedin', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 166, name: 'Fundamentos de la atención al cliente para profesionales IT', category: 'IT', technology: 'General', url: 'https://www.linkedin.com/learning/fundamentos-de-la-atencion-al-cliente-para-profesionales-it/presentacion-del-curso-fundamentos-de-la-atencion-al-cliente-para-profesionales-it', platform: 'LinkedIn Learning', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 73, culminado: '2020-08-31', certificado: ' AflW1bqnkMlJLGcU44m2oka8_VwG', url_certificado: 'https://www.linkedin.com/learning/certificates/7ece58b170fd293c2e72add25e9e8c0117c3a1525407da3b3603c8c6b0398818?trk=share_certificate', instructor: 'Fran Moreno Giménez', description: 'Aprende a construir una relación estable con los clientes de tu negocio de servicios IT. En este curso verás que, en el mundo IT, la atención al cliente y la gestión eficaz de conflictos son parte esencial del negocio. Descubre cómo proporcionar un excepcional servicio al cliente y una buena experiencia que te permita aliviar las frustraciones de manera rápida y profesional, elementos críticos para el éxito a largo plazo de tu empresa de servicios IT.', url_aux: '', calificacion: 'Bueno', actualizado: true, en_ruta: false, logo_platform: 'linkedin', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 167, name: 'SCRUM: Roles', category: 'Metodologías Ágiles', technology: 'SCRUM', url: 'https://www.linkedin.com/learning/scrum-roles', platform: 'LinkedIn Learning', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 101, culminado: '2020-08-25', certificado: '', url_certificado: '', instructor: 'Carlos Solís', description: 'SCRUM es una metodología ágil de gestión de proyectos que se ha convertido prácticamente en el estándar de trabajo de incontables organizaciones y empresas. Es fácil de comprender, y en general no toma mucho tiempo comenzar a aplicarlo en un proyecto. Sin embargo, exige que cada integrante conozca a la perfeccion su rol y el de los demás, para que el proyecto funcione sin fricciones. En este curso, vamos a descubrir las tareas que debe cumplir cada integrante del proyecto y analizaremos cada rol a lo largo del ciclo de vida de un proyecto SCRUM.', url_aux: '', calificacion: 'Muy bueno', actualizado: true, en_ruta: true, logo_platform: 'linkedin', logo_technologies: [ 'generico' ], mostrar: true, repositorio: '', nota: '' },
                { id: 168, name: 'Aprende SCRUM', category: 'Metodologías Ágiles', technology: 'SCRUM', url: 'https://www.linkedin.com/learning/aprende-scrum/presentacion-del-curso-aprende-scrum', platform: 'LinkedIn Learning', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 92, culminado: '2020-08-21', certificado: ' Aa5zDZxQPUZCW-SOb-6dBBPt2Bg5', url_certificado: 'https://www.linkedin.com/learning/certificates/ab2ec26b2e6bc7bdb36eaa9a7f114a4b45c2ca0b6a6fc2124d01b391c660d79b?trk=share_certificate', instructor: 'Carlos Solís', description: 'Descubre SCRUM, la metodología ágil de gestión de proyectos que marca una tendencia en la industria. Desde pequeños startups hasta grandes corporaciones, esta nueva forma de trabajar está revolucionando la forma en que trabajamos en equipo. En este curso aprenderás las bases de la filosofia SCRUM, sus roles, herramientas e implementación. Conocerás los fundamentos principales para comenzar a organizar tus proyectos reduciendo el trabajo innecesario y aumentando sustancialmente la motivación y productividad de tus compañeros de equipo. Aprende qué es y cómo incorporar SCRUM a tus proyectos.', url_aux: 'https://www.linkedin.com/learning/certificates/7c353c20a1a3d6c492bbf7f727f8f8e0130853371c623221cc4440648073f10d?trk=share_certificate', calificacion: 'Muy bueno', actualizado: true, en_ruta: true, logo_platform: 'linkedin', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 169, name: 'Fundamentos esenciales de la programación (2014)', category: 'Paradigmas', technology: 'General', url: 'https://www.linkedin.com/learning/fundamentos-esenciales-de-la-programacion-2014', platform: 'LinkedIn Learning', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 348, culminado: '2020-09-02', certificado: '', url_certificado: '', instructor: 'Simon Allardice', description: 'Aprende a desarrollar aplicaciones informáticas en cualquier lenguaje de programación con este curso en el que te explicamos, de la manera más clara y directa posible, cuáles son los componentes comunes a cualquier lenguaje y cuáles son los pasos que tienes que dar para convertir cualquier idea en tu cabeza en una aplicación informática.', url_aux: '', calificacion: 'Muy bueno', actualizado: true, en_ruta: true, logo_platform: 'linkedin', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 170, name: 'GitHub para programadores (2016)', category: 'Herramientas', technology: 'GitHub', url: 'https://www.linkedin.com/learning/github-para-programadores-2016/presentacion-del-curso-github-para-programadores-2016', platform: 'LinkedIn Learning', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 113, culminado: '2020-08-06', certificado: 'Ac1TWgJQjZz6PgqkMQvyLVE4vSgx', url_certificado: 'https://www.linkedin.com/learning/certificates/d04eb818dcc9e38983896c5e516fe823f49f18af2fe1a1c2237c66bc17ba59c9?trk=share_certificate', instructor: 'Carlos Solís', description: 'Los equipos de desarrollo modernos necesitan que muchas personas trabajen sobre un mismo código sin generar errores o conflictos. Sin embargo, sin las herramientas adecuadas, esta tarea puede ser casi imposible. Afortunadamente tenemos GitHub, un servicio de control de versiones online que te permite almacenar, gestionar y distribuir tu código. En este curso aprenderás los conceptos básicos del control de versiones Git, los servicios que ofrece GitHub, como crear, gestionar y examinar nuestros repositorios online. Descubrirás diversas formas de utilizar el servicio de GitHub y exploraremos las funciones más comunes de este servicio. Al finalizar este curso estarás a punto para trabajar tu código fuente en equipo con seguridad y la tranquilidad de tener siempre un respaldo en la nube.', url_aux: '', calificacion: 'Muy bueno', actualizado: true, en_ruta: true, logo_platform: 'linkedin', logo_technologies: [ 'github' ], mostrar: false, repositorio: '', nota: '' },
                { id: 171, name: 'Gestión de proyectos simplificada', category: 'Metodologías Ágiles', technology: 'General', url: 'https://www.linkedin.com/learning/gestion-de-proyectos-simplificada', platform: 'LinkedIn Learning', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 86, culminado: '2020-08-16', certificado: '', url_certificado: '', instructor: 'Clara Vega', description: 'Con algunas técnicas sencillas sobre la gestión de proyectos podrás optimizar tu trabajo ya que, en el fondo, casi todo lo que haces en el trabajo es un proyecto; desde la tarea más pequeña hasta tu labor más grande. En este curso, aprenderás los doce pasos de la gestión de proyectos, que podrás aplicar sin mucho esfuerzo, y verás cómo usar herramientas tradicionales de gestión de proyectos, como los diagramas de Gantt y los diagramas de red para que gestiones tu carga de trabajo.', url_aux: '', calificacion: 'Bueno', actualizado: false, en_ruta: false, logo_platform: 'linkedin', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 172, name: 'Fundamentos de la gestión del tiempo', category: 'Otros', technology: 'Otros', url: 'https://www.linkedin.com/learning/fundamentos-de-la-gestion-del-tiempo', platform: 'LinkedIn Learning', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 88, culminado: '2020-08-13', certificado: '', url_certificado: '', instructor: 'Francisco Rábano', description: 'Aprende en este curso a organizarte mejor para disponer de más tiempo de calidad en el que desarrollar tus objetivos y expectativas. Descubre trucos, herramientas, métodos y acciones específicas dirigidas a la mejora de tu eficacia y tu bienestar general, con los que serás capar de tomar mejores decisiones. Mantén más control sobre las tareas a las que dedicas tu tiempo, trabaja tu disciplina, perseverancia y responsabilidad individual, y sustituye el modo reactivo de actuar por el modo reflexivo.', url_aux: '', calificacion: 'Bueno', actualizado: false, en_ruta: false, logo_platform: 'linkedin', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 173, name: 'Desarrollo web: Control de calidad automatizado', category: 'Paradigmas', technology: 'General', url: 'https://www.linkedin.com/learning/desarrollo-web-control-de-calidad-automatizado/presentacion-del-curso-desarrollo-web-control-de-calidad-automatizado', platform: 'LinkedIn Learning', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 174, culminado: '2020-08-10', certificado: ' AVDow0mkqvN5MsRmSDUrkqkDK7dj', url_certificado: 'https://www.linkedin.com/learning/certificates/6d1d61ea694a83acf3e28722f75e638b723412d06ab9f6499ce7566b1c0bd3d9?trk=share_certificate', instructor: 'Carlos Solís', description: 'Aprende a usar herramientas automatizadas de control de calidad para que tus desarrollos web sean consecuentes y anticiparte a los posibles problemas del código. Automatiza tus pruebas con PhantomJS, CasperJS y Gulp y aprende en este curso a generar informes que te aseguren que cuando un proyecto web sale a producción cumple todos los requisitos.', url_aux: '', calificacion: 'Muy bueno', actualizado: false, en_ruta: false, logo_platform: 'linkedin', logo_technologies: [ 'generico' ], mostrar: true, repositorio: '', nota: '' },
                { id: 174, name: 'MEAN Stack: Master nodejs y angular', category: 'Frameworks de javascript', technology: 'angular', url: 'https://www.udemy.com/course/master-deno-angular', platform: 'Udemy', costo: 12.99, money: 'EUR', comprado: true, priority: 0, minutos: 990, culminado: null, certificado: '', url_certificado: '', instructor: 'Vaxi Drez', description: 'Crea Aplicaciones con angular nodejs express desde cero a nivel experto MEAN Stack', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'mongo', 'express', 'angular', 'nodejs' ], mostrar: false, repositorio: '', nota: '' },
                { id: 175, name: 'Crea tus aplicaciones con laravel y mongodb', category: 'Frameworks de back-end', technology: 'laravel', url: 'https://www.udemy.com/course/crea-tus-aplicaciones-con-laravel-y-mongodb', platform: 'Udemy', costo: 9.99, money: 'EUR', comprado: true, priority: 0, minutos: 840, culminado: null, certificado: '', url_certificado: '', instructor: 'Andrés Cruz Yoris', description: 'Aprende a desarrollar tus aplicaciones en php con laravel y una base de datos NoSQL con mongodb.', url_aux: '', calificacion: 'Muy bueno', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'laravel', 'mongo' ], mostrar: false, repositorio: '', nota: '' },
                { id: 176, name: 'Crea un Ecommerce con laravel, Livewire, Tailwind y Alpine', category: 'Frameworks de back-end', technology: 'laravel', url: 'https://codersfree.com/cursos/crea-un-ecommerce-con-laravel-livewire-tailwind-y-alpine', platform: 'Udemy', costo: 9.99, money: 'EUR', comprado: true, priority: 0, minutos: 1920, culminado: null, certificado: '', url_certificado: '', instructor: 'Victor Arana Flores', description: 'En este curso aprenderás a desarrollar un ecommerce, con laravel, Livewire, Tailwind y Alpine.', url_aux: '', calificacion: 'Excelente', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'laravel', 'livewire', 'tailwindcss' ], mostrar: false, repositorio: '', nota: '' },
                { id: 177, name: 'javascript: Desde cero con nodejs', category: 'Back-end', technology: 'Node.js', url: 'https://www.udemy.com/course/javascript-desde-cero-con-nodejs', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 733, culminado: null, certificado: '', url_certificado: '', instructor: 'Geovanny Gabriel', description: 'Aprende los fundamentos y crea un proyecto REST API con Node JS.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'javascript', 'nodejs' ], mostrar: false, repositorio: '', nota: '' },
                { id: 178, name: 'Master en python 3.x. Aprende de 0 a EXPERTO con Práctica', category: 'Back-end', technology: 'python', url: 'https://www.udemy.com/course/aprende-el-lenguaje-de-programacion-python3-practicando', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 1530, culminado: null, certificado: '', url_certificado: '', instructor: 'Alvaro Chirou', description: 'Aprende python, donde iniciamos desde 0, sin conocimientos previos hasta desarrollar aplicaciones con mucha practica!', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'python' ], mostrar: false, repositorio: '', nota: '' },
                { id: 179, name: 'Introducción a la Programación en Varios Lenguajes', category: 'Paradigmas', technology: 'Programación', url: 'https://www.udemy.com/course/programacion-todosloslenguajes', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 115, culminado: null, certificado: '', url_certificado: '', instructor: 'Jorge Salgado Miranda', description: 'python, C, C++, C#, Go, Java, javascript, linux, Swift, Dart, Scala, Kotlin, php, SQL.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 180, name: 'python y flask. Desarrollo web y APIS tipo REST con flask', category: 'Frameworks de back-end', technology: 'python-flask', url: 'https://www.udemy.com/course/curso-python-y-flask-desarrollo-web-y-apis-tipo-rest', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 639, culminado: null, certificado: '', url_certificado: '', instructor: 'Redait Media', description: 'Aprende HTML, python y flask para el desarrollo de páginas web y la creación de microservicios de tipo REST con flask.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'python', 'flask' ], mostrar: false, repositorio: '', nota: '' },
                { id: 181, name: 'Universidad python con Frameworks django, flask y mucho más!', category: 'Back-end', technology: 'python', url: 'https://www.udemy.com/course/universidad-python-desde-cero-hasta-experto-django-flask-rest-web', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 3692, culminado: null, certificado: '', url_certificado: '', instructor: 'Ubaldo Acosta', description: '+61 hrs De Cero a Experto en python: PySide, Tkinter, Web con django, flask, Jinja, SQL Alchemy, Postgresql y PyCharm!', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'python', 'django', 'flask' ], mostrar: false, repositorio: '', nota: '' },
                { id: 182, name: 'Crea interfaces gráficas para escritorio con python y PyQT', category: 'Lenguajes de Programación', technology: 'python', url: 'https://www.udemy.com/course/crea-interfaces-graficas-para-escritorio-con-python-y-pyqt', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 919, culminado: null, certificado: '', url_certificado: '', instructor: 'Issel Electronics', description: 'Aprende a crear tus propias aplicaciones con la librería más potente para la creación de interfaces graficas con python.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: false, logo_platform: 'udemy', logo_technologies: [ 'python', 'pyqt' ], mostrar: false, repositorio: '', nota: '' },
                { id: 183, name: 'Escuela de python 2021: Aprende python 3.9+ de cero a Master', category: 'Back-end', technology: 'python', url: 'https://www.udemy.com/course/curso-python-desde-cero', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 1260, culminado: null, certificado: '', url_certificado: '', instructor: 'Alex Roel Code', description: 'Curso de python 2021 : Aprende python con flask, django, Web Scraping, Data Science y mysql,HTML, css, bootstrap', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'python' ], mostrar: false, repositorio: '', nota: 'Este curso lo tiene María Valentina.' },
                { id: 184, name: 'Iniciación gerencial en el manejo de recursos en actividades socio – culturales', category: 'Otros', technology: 'Otros', url: '', platform: 'Centro de Orientación y Especialización Profesional', costo: 0, money: 'VEB', comprado: true, priority: 0, minutos: 480, culminado: '1994-02-19', certificado: '', url_certificado: '', instructor: 'María Mercedes Combes', description: 'Curso generencial. Centro de Orientación y Especialización Profesional. Mercedes Combes.', url_aux: '', calificacion: 'Excelente', actualizado: false, en_ruta: false, logo_platform: 'generico', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 185, name: 'Introducción a la Programación en Fortran 95', category: 'Lenguajes de Programación', technology: 'Fortran', url: '', platform: 'Universidad Central de Venezuela', costo: 0, money: 'VEB', comprado: true, priority: 0, minutos: 128, culminado: '2002-02-01', certificado: '', url_certificado: '', instructor: 'Facultad de Ingeniería UCV', description: 'Curso de programación en Fortran 95. U.C.V., Facultad de Ingeniería. Instituto Tecnológico. Cursos de Extensión Profesional.', url_aux: '', calificacion: 'Muy bueno', actualizado: false, en_ruta: false, logo_platform: 'ucv', logo_technologies: [ 'fortran' ], mostrar: false, repositorio: '', nota: '' },
                { id: 186, name: 'Defensive Driving Certificate', category: 'Otros', technology: 'Otros', url: '', platform: 'ENI', costo: 0, money: 'VEB', comprado: true, priority: 0, minutos: 480, culminado: '2004-09-06', certificado: '', url_certificado: '', instructor: 'Luis Rosillo', description: 'ENI Dacion B.V. San Tomé. Estado Anzoátegui. Curso de manejo defensivo y comentado.', url_aux: '', calificacion: 'Excelente', actualizado: false, en_ruta: false, logo_platform: 'eni', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 187, name: 'Deshidratación de Gas', category: 'Otros', technology: 'Otros', url: '', platform: 'Proynca', costo: 0, money: 'VEB', comprado: true, priority: 0, minutos: 1440, culminado: '2005-09-23', certificado: '', url_certificado: '', instructor: 'Rigoberto Brito', description: 'PROYNCA (Procesos y Negocios Integrales). San Tomé. Estado Anzoátegui. Dictado por el Ing. Rigoberto Brito.', url_aux: '', calificacion: 'Muy bueno', actualizado: false, en_ruta: false, logo_platform: 'proynca', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 188, name: 'Tratamiento de Aguas Efluentes', category: 'Otros', technology: 'Otros', url: '', platform: 'Proynca', costo: 0, money: 'VEB', comprado: true, priority: 0, minutos: 1440, culminado: '2005-10-14', certificado: '', url_certificado: '', instructor: 'Schacklanye Barradas', description: 'PROYNCA (Procesos y Negocios Integrales). San Tomé. Estado Anzoátegui. Dictado por la Ing. Schacklanye Barradas y la Ing. Emerita Machado.', url_aux: '', calificacion: 'Muy bueno', actualizado: false, en_ruta: false, logo_platform: 'proynca', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 189, name: 'Introducción a Medición de Variables de Proceso', category: 'Otros', technology: 'Otros', url: '', platform: 'ENI', costo: 0, money: 'VEB', comprado: true, priority: 0, minutos: 480, culminado: '2005-11-11', certificado: '', url_certificado: '', instructor: 'José David De Sousa', description: 'ENI Dacion B.V. San Tomé. Estado Anzoátegui. Curso de Medición de Variables, dictado por el Ing. José David De Sousa.', url_aux: '', calificacion: 'Excelente', actualizado: false, en_ruta: false, logo_platform: 'eni', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 190, name: 'Deshidratación de Crudo', category: 'Otros', technology: 'Otros', url: '', platform: 'Proynca', costo: 0, money: 'VEB', comprado: true, priority: 0, minutos: 1440, culminado: '2005-11-25', certificado: '', url_certificado: '', instructor: 'Mercedes de Velázquez', description: 'PROYNCA (Procesos y Negocios Integrales). San Tomé. Estado Anzoátegui. Dictado por la Ing. Mercedes de Velázquez.', url_aux: '', calificacion: 'Muy bueno', actualizado: false, en_ruta: false, logo_platform: 'proynca', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 191, name: 'Seguridad en la Conducción de Vehículos', category: 'Otros', technology: 'Otros', url: '', platform: 'PDVSA', costo: 0, money: 'VEB', comprado: true, priority: 0, minutos: 960, culminado: '2006-08-16', certificado: '', url_certificado: '', instructor: 'Harold Pérez Fernández', description: 'PDVSA. San Tomé. Estado Anzoátegui. Curso de Manejo Defensivo (Flota Liviana), dictado por la Ing. Harold Pérez Fernández.', url_aux: '', calificacion: 'Excelente', actualizado: false, en_ruta: false, logo_platform: 'pdvsa', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 192, name: 'Ortografía y Redacción de Informes', category: 'Otros', technology: 'Otros', url: '', platform: 'PDVSA', costo: 0, money: 'VEB', comprado: true, priority: 0, minutos: 960, culminado: '2007-02-16', certificado: '', url_certificado: '', instructor: 'PDVSA', description: 'Curso sobre ortografía y redacción de informes, orientado a profesionales de la industria petrolera. PDVSA. San Tomé. Estado Anzoátegui.', url_aux: '', calificacion: 'Excelente', actualizado: false, en_ruta: false, logo_platform: 'pdvsa', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 193, name: 'Redacción de informes', category: 'Otros', technology: 'Otros', url: '', platform: 'PDVSA', costo: 0, money: 'VEB', comprado: true, priority: 0, minutos: 960, culminado: '2007-03-14', certificado: '', url_certificado: '', instructor: 'PDVSA', description: 'Curso sobre ortografía, orientado a profesionales de la industria petrolera. PDVSA. San Tomé. Estado Anzoátegui.', url_aux: '', calificacion: 'Excelente', actualizado: false, en_ruta: false, logo_platform: 'pdvsa', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 194, name: 'La seguridad, la higiene y el ambiente en la industria (módulo C)', category: 'Otros', technology: 'Otros', url: '', platform: 'PDVSA', costo: 0, money: 'VEB', comprado: true, priority: 0, minutos: 2400, culminado: '2007-06-29', certificado: '', url_certificado: '', instructor: 'PDVSA', description: 'Curso sobre la seguridad, la higiene y el ambiente en la industria petrolera. PDVSA. San Tomé. Estado Anzoátegui.', url_aux: '', calificacion: 'Muy bueno', actualizado: false, en_ruta: false, logo_platform: 'pdvsa', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 195, name: 'Formulación de proyectos socio comunitarios', category: 'Otros', technology: 'Otros', url: '', platform: 'Mauritia, Consultores C.A.', costo: 0, money: 'VEB', comprado: true, priority: 0, minutos: 1200, culminado: '2007-09-20', certificado: '', url_certificado: '', instructor: 'Mauritia, Consultores C.A.', description: 'Mauritia, Consultores C.A. San Tomé. Estado Anzoátegui.', url_aux: '', calificacion: 'Bueno', actualizado: false, en_ruta: false, logo_platform: 'mauritia', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 196, name: 'Motivación para la calidad del trabajo', category: 'Otros', technology: 'Otros', url: '', platform: 'Gerencia Activa', costo: 0, money: 'VEB', comprado: true, priority: 0, minutos: 960, culminado: '2007-10-11', certificado: '', url_certificado: '', instructor: 'Gerencia Activa', description: 'Gerencia Activa. San Tomé. Estado Anzoátegui.', url_aux: '', calificacion: 'Bueno', actualizado: false, en_ruta: false, logo_platform: 'gerencia_activa', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 197, name: 'Corresponsabilidad en la toma de decisiones y solución de problemas', category: 'Otros', technology: 'Otros', url: '', platform: 'PDVSA', costo: 0, money: 'VEB', comprado: true, priority: 0, minutos: 960, culminado: '2007-12-12', certificado: '', url_certificado: '', instructor: 'PDVSA', description: 'PDVSA. San Tomé. Estado Anzoátegui.', url_aux: '', calificacion: 'Bueno', actualizado: false, en_ruta: false, logo_platform: 'pdvsa', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 198, name: 'Microsoft Project', category: 'Otros', technology: 'Otros', url: '', platform: 'PDVSA', costo: 0, money: 'VEF', comprado: true, priority: 0, minutos: 1440, culminado: '2009-09-10', certificado: '', url_certificado: '', instructor: 'PDVSA', description: 'Curso completo sobre Microsoft Proyect. PDVSA. San Tomé. Estado Anzoátegui.', url_aux: '', calificacion: 'Excelente', actualizado: false, en_ruta: false, logo_platform: 'pdvsa', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 199, name: 'Potenciando mi rol de colaborador', category: 'Otros', technology: 'Otros', url: '', platform: 'Grupo Inested', costo: 0, money: 'VEF', comprado: true, priority: 0, minutos: 1440, culminado: '2016-10-05', certificado: '', url_certificado: '', instructor: 'Grupo Inested', description: 'Grupo Inested. PDVSA La Tahona.', url_aux: '', calificacion: 'Excelente', actualizado: false, en_ruta: false, logo_platform: 'inested', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 200, name: 'Tecnología Petrolera', category: 'Otros', technology: 'Otros', url: '', platform: 'Seaport Agencies S.A.', costo: 0, money: 'VEF', comprado: true, priority: 0, minutos: 960, culminado: '2017-02-09', certificado: '', url_certificado: '', instructor: 'Seaport Agencies S.A.', description: 'Seaport Agencies S.A. Chacao. Torre La Primera.', url_aux: '', calificacion: 'Bueno', actualizado: false, en_ruta: false, logo_platform: 'seaport', logo_technologies: [ 'generico' ], mostrar: false, repositorio: '', nota: '' },
                { id: 201, name: 'Curso php 8 y mysql 8 desde cero', category: 'Back-end', technology: 'php', url: 'https://www.youtube.com/playlist?list=PLZ2ovOgdI-kUSqWuyoGJMZL6xldXw6hIg', platform: 'YouTube', costo: 0, money: 'USD', comprado: true, priority: 0, minutos: 705, culminado: null, certificado: '', url_certificado: '', instructor: 'Victor Arana Flores', description: 'Curso completo sobre php 8 y mysql 8 desde cero.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'youtube', logo_technologies: [ 'php', 'mysql' ], mostrar: false, repositorio: '', nota: '' },
                { id: 202, name: 'Universidad Visual Basic. net y sqlserver: De 0 a Experto', category: 'Frameworks de back-end', technology: '.NET', url: 'https://www.udemy.com/course/migrar-a-c-en-poco-tiempo', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 1733, culminado: null, certificado: '', url_certificado: '', instructor: 'Academia Apps', description: 'Curso Completo.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'vb', 'net', 'sqlserver' ], mostrar: false, repositorio: '', nota: '' },
                { id: 203, name: 'Curso de C# .NET desde cero hasta lo mas avanzado full stack', category: 'Frameworks de back-end', technology: '.NET', url: 'https://www.udemy.com/course/curso-de-c-sharp-net-core-desde-cero', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 1405, culminado: null, certificado: '', url_certificado: '', instructor: 'Alex Joel Pagoada Suazo', description: 'Curso de C# .NET desde cero para el desarrollo de diversas aplicaciones multiplataforma.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'csharp', 'net' ], mostrar: false, repositorio: '', nota: '' },
                { id: 204, name: 'Curso de C# y Net Core desde cero a nivel avanzado', category: 'Frameworks de back-end', technology: '.NET', url: 'https://www.udemy.com/course/curso-net', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 551, culminado: null, certificado: '', url_certificado: '', instructor: 'Vaxi Drez', description: 'Aprende C# | Programacion Orientada a Objetos| Net Core con Visual Studio 2022.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'csharp', 'net' ], mostrar: false, repositorio: '', nota: '' },
                { id: 205, name: 'CRUD con C# .NET 2021, 4 Capas, mysql, Win Form', category: 'Frameworks de back-end', technology: '.NET', url: 'https://www.udemy.com/course/crud-con-c-net-2021-4-capas-mysql-win-form', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 95, culminado: null, certificado: '', url_certificado: '', instructor: 'Joel Barrios (Bachi)', description: 'Aprende todo lo necesario para crear tus propios CRUD con C# .NET Gratis.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'csharp', 'net', 'mysql' ], mostrar: false, repositorio: '', nota: '' },
                { id: 206, name: 'CRUD con Visual Basic .NET 2021, 4 Capas, mysql, Win Form', category: 'Frameworks de back-end', technology: '.NET', url: 'https://www.udemy.com/course/crud-con-visual-basic-net-2021-4-capas', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 83, culminado: null, certificado: '', url_certificado: '', instructor: 'Joel Barrios (Bachi)', description: 'Aprende todo lo necesario para crear tus propios CRUD con Visual Basic .NET Gratis.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'vb', 'net', 'mysql' ], mostrar: false, repositorio: '', nota: '' },
                { id: 207, name: 'Desarrollo Web en ASP.NET CORE 5 (2021)', category: 'Frameworks de back-end', technology: '.NET', url: 'https://www.udemy.com/course/desarrollo-web-en-aspnet-core-5-2021', platform: 'Udemy', costo: 0, money: 'EUR', comprado: true, priority: 0, minutos: 93, culminado: null, certificado: '', url_certificado: '', instructor: 'Carlos Piedra', description: 'Sistema de Control de Ingresos y Gastos - Full-Stack Web con .Net 5.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'net_core', 'sqlserver' ], mostrar: false, repositorio: '', nota: '' },
                { id: 208, name: 'Curso de Programación Orientada a Objetos con Ruby desde 0', category: 'Back-end', technology: 'Ruby', url: 'https://www.udemy.com/course/ruby-poo', platform: 'Udemy', costo: 9.99, money: 'EUR', comprado: false, priority: 0, minutos: 482, culminado: null, certificado: '', url_certificado: '', instructor: 'Pedro Vargas', description: 'Domina el Lenguaje de Programación Ruby! Curso Práctico de Ruby desde las bases de la programación hasta POO.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'udemy', logo_technologies: [ 'ruby' ], mostrar: false, repositorio: '', nota: '' },
                { id: 209, name: 'Curso profesional de Ruby on Rails', category: 'Frameworks de back-end', technology: 'Rails', url: 'https://codigofacilito.com/cursos/rails-profesional', platform: 'Códigofacilito', costo: 20, money: 'EUR', comprado: true, priority: 0, minutos: 652, culminado: null, certificado: '', url_certificado: '', instructor: 'Uriel Hernández', description: 'Aprende a fondo y desde 0 Ruby on Rails. Es uno de los frameworks backend más importantes en la historia de la web, hoy Shopify, GitHub, Airbnb y otras empresas siguen usando Rails.', url_aux: '', calificacion: '*En evaluación*', actualizado: true, en_ruta: true, logo_platform: 'codigofacilito', logo_technologies: [ 'ruby', 'rails' ], mostrar: false, repositorio: '', nota: '' }
            ]
        },
        mutations: {
        },
        actions: {
        },
        modules: {
        }
    })
    ```
2. Guardar todas las imagenenes relacionadas con los cursos en formato **png** en **public\img\cursos** y nombrarla según su número de **id**.
3. Guardar todos los certificados relacionados con los cursos en formato **png** en **public\img\certificados** y nombrarla según su número de **id**.
4. Crear componente **src\components\Cursos.vue**:
    ```vue
    <template>
        <div>
            <section id="course"  class="section-bg" >
                <div class="container">
                    <header class="section-header">
                        <h3 class="section-title">Cursos</h3>
                    </header>
                    <div class="row">
                        <div class="col-lg-12">
                            <ul id="course-flters">
                                <li :class="tipoCurso == 'todos' ? 'filter-active' : ''" @click="tipoCurso = 'todos'">Todos</li>
                                <li :class="tipoCurso == 'destacados' ? 'filter-active' : ''" @click="tipoCurso = 'destacados'">Destacados</li>
                            </ul>
                        </div>
                    </div>

                    <div class="row course-container">
                        <div v-for="(curso, item) in cursosCulminados" :key="item" class="col-lg-4 col-md-6 course-item wow fadeInUp" :data-wow-delay="estiloCard(item + 1)">
                            <div class="course-wrap">
                                <figure>
                                    <img :src="`img/cursos/${curso.id}.png`" class="img-fluid" :alt="curso.nombre">
                                    <a :href="`img/cursos/${curso.id}.png`" data-lightbox="course" :data-title="curso.name" class="link-preview" title="Ver"><i class="ion ion-eye"></i></a>
                                    <a :href="curso.repositorio" target="_blank" class="link-details" title="Ir a repositorio"><i class="ion ion-android-open"></i></a>
                                </figure>

                                <div class="titulo px-2">
                                    <h4 :title="curso.name">
                                        <img :src="`img/logos/${curso.logo_platform}.png`" alt="" width="20" height="20">
                                        <a :href="curso.url" target="_blank" class="mx-2">{{ truncate(curso.name, 35) }}</a>
                                    </h4>
                                </div>

                                <div class="descripcion px-2">
                                    <p :title="curso.description">
                                        <strong>Descripción:</strong> {{ truncate(curso.description, 140) }} <br>
                                        <strong>Autor:</strong> {{ curso.instructor }} <br>
                                        <strong>Finalizado:</strong> {{ curso.culminado }} <br>
                                        <strong>Duración:</strong> {{ (curso.minutos / 60).toFixed(2) }} horas
                                    </p>
                                </div>

                                <div class="d-flex justify-content-between align-items-center p-2">
                                    <img v-for="(tecnologia, index) in curso.logo_technologies" :key="index"
                                        :src="`img/logos/${tecnologia}.png`" width="45" height="45"
                                        :alt="`Logo ${tecnologia}`" :title="tecnologia">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </template>

    <script>
    import { mapState } from 'vuex'

    export default {
        name: 'Cursos',
        data() {
            return {
                tipoCurso: 'destacados'
            }
        },
        computed: {
            ...mapState(['cursos']),
            cursosCulminados() {
                if(this.tipoCurso == 'destacados'){
                    return this.cursos.filter(item => item.culminado && item.mostrar).sort(this.ordenarPorCulminado)
                }
                return this.cursos.filter(item => item.culminado).sort(this.ordenarPorCulminado)
            }
        },
        methods: {
            estiloCard(item){
                const tiempo = item % 3
                switch (tiempo) {
                case 1:
                    return '0.0s'
                case 2:
                    return '0.1s'
                case 0:
                    return '0.2s'
                default:
                    return '0.0s'
                }
            },
            truncate(input, largo) { 
                if (input.length > largo) { 
                    return input.substring(0, largo) + '...'
                } 
                return input
            },
            ordenarPorCulminado(x, y){
                return x.culminado < y.culminado ? 1: -1
            }
        }
    }
    </script>

    <style scoped>
        #course {
            padding: 60px 0;
        }

        #course #course-flters {
            padding: 0;
            margin: 5px 0 35px 0;
            list-style: none;
            text-align: center;
        }

        #course #course-flters li {
            cursor: pointer;
            margin: 15px 15px 15px 0;
            display: inline-block;
            padding: 10px 20px;
            font-size: 12px;
            line-height: 20px;
            color: #666666;
            border-radius: 4px;
            text-transform: uppercase;
            background: #fff;
            margin-bottom: 5px;
            transition: all 0.3s ease-in-out;
        }

        #course #course-flters li:hover, #course #course-flters li.filter-active {
            background: #18d26e;
            color: #fff;
        }

        #course #course-flters li:last-child {
            margin-right: 0;
        }

        #course .course-wrap {
            box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
            transition: 0.3s;
        }

        #course .course-wrap:hover {
            box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.16);
        }

        #course .course-item {
            position: relative;
            height: 500px;
            overflow: hidden;
        }

        #course .course-item figure {
            background: #000;
            overflow: hidden;
            height: 200px;
            position: relative;
            border-radius: 4px 4px 0 0;
            margin: 0;
        }

        figure img {   
            width: 450px;
            height: 200px;
        }

        #course .course-item figure:hover img {
            opacity: 0.4;
            transition: 0.3s;
        }

        #course .course-item figure .link-preview, #course .course-item figure .link-details {
            position: absolute;
            display: inline-block;
            visibility: hidden;
            line-height: 1;
            text-align: center;
            width: 36px;
            height: 36px;
            background: #fff;
            border-radius: 50%;
            transition: 0.2s;
        }

        #course .course-item figure .link-preview i, #course .course-item figure .link-details i {
            padding-top: 6px;
            font-size: 22px;
            color: #333;
        }

        #course .course-item figure .link-preview:hover, #course .course-item figure .link-details:hover {
            background: #18d26e;
        }

        #course .course-item figure .link-preview:hover i, #course .course-item figure .link-details:hover i {
            color: #fff;
        }

        #course .course-item figure .link-preview {
            left: calc(50% - 38px);
            top: calc(50% - 18px);
        }

        #course .course-item figure .link-details {
            right: calc(50% - 38px);
            top: calc(50% - 18px);
        }

        #course .course-item figure:hover .link-preview {
            visibility: visible;
            left: calc(50% - 44px);
        }

        #course .course-item figure:hover .link-details {
            visibility: visible;
            right: calc(50% - 44px);
        }

        #course .course-item .course-info {
            background: #fff;
            text-align: center;
            padding: 30px;
            height: 90px;
            border-radius: 0 0 3px 3px;
        }

        #course .course-item .course-info h4 {
            font-size: 18px;
            line-height: 1px;
            font-weight: 700;
            margin-bottom: 18px;
            padding-bottom: 0;
        }

        #course .course-item .course-info h4 a {
            color: #333;
        }

        #course .course-item .course-info h4 a:hover {
            color: #18d26e;
        }

        #course .course-item .course-info p {
            padding: 0;
            margin: 0;
            color: #b8b8b8;
            font-weight: 500;
            font-size: 14px;
            text-transform: uppercase;
        }

        .cargo {
            height: 20px !important;
            font-size: 80% !important;
            margin-top: 0.5rem !important;
            line-height: 1.5em !important;
        }

        .descripcion {
            height: 100px !important;
            font-size: 70% !important;
            margin-top: 1.3rem !important;
            line-height: 1.5em !important;
            text-align: justify;
        }

        .empresa {
            height: 65px !important;
            font-size: 55% !important;
            margin-top: 0.5rem !important;
            line-height: 1.5em !important;
            font-weight: bold;
        }

        .lapso {
            height: 30px !important;
            font-size: 70% !important;
        }

        .titulo {
            height: 20px;
            text-align: center;
        }

        .titulo a {
            color: grey;
            font-size: 55%;
            font-weight: bold;
            line-height: 20% !important;
        }

        .titulo a:hover {
            color: rgb(28, 28, 85);
        }

        .descripcion {
            height: 115px !important;
            text-align: justify;
        }

        .descripcion p {
            font-size: 95%;
        }
    </style>
    ```
5. Modificar vista **src\views\Home.vue**:
    ```vue
    <template>
        <div>
            <Header />
            <IntroSection />

            <!-- *** Cuerpo Principal *** -->
            <main id="main">
                <FeaturedServicesSection />
                <PoliticasCalidad />
                <Servicios />
                <CallToAction />
                <Skills />
                <Facts />
                <Portfolio />
                <Clients />
                <Testimonials />
                <Estudios />
                <Cursos />
                
                <!-- *** Contact Section *** -->
                ≡
            </main>
            ≡		
        </div>
    </template>

    <script>
    import Header from '@/components/Header'
    import IntroSection from '@/components/IntroSection'
    import FeaturedServicesSection from '@/components/FeaturedServicesSection'
    import PoliticasCalidad from '@/components/PoliticasCalidad'
    import Servicios from '@/components/Servicios'
    import CallToAction from '@/components/CallToAction'
    import Skills from '@/components/Skills'
    import Facts from '@/components/Facts'
    import Portfolio from '@/components/Portfolio'
    import Clients from '@/components/Clients'
    import Testimonials from '@/components/Testimonials'
    import Estudios from '@/components/Estudios'
    import Cursos from '@/components/Cursos'

    export default {
        name: 'Home',
        components: {
            Header,
            IntroSection,
            FeaturedServicesSection,
            PoliticasCalidad,
            Servicios,
            CallToAction,
            Skills,
            Facts,
		    Portfolio,
            Clients,
            Testimonials,
            Estudios,
            Cursos
        }
    }
    </script>
    ```
6. Subir repositorio:
    + $ git add .
    + $ git commit -m "Diseño del componente Cursos"
    + $ git push -u origin main


## Diseño del componente Contact
+ https://www.hoclabs.com/2018/03/17/emailjs-envio-de-correos-desde-javascript
1. Editar la tienda **src\store\index.js**:
    ```js
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            intro: {
                ≡
            },
            destacados: [
                ≡
            ],
            calidad: {
                ≡
            },
            servicios: {
                ≡
            },
            accion: {
                ≡
            },
            skills: {
                ≡
            },
            facts: {
                ≡
            },
            portafolio: {
                ≡
            },
            clients: {
                ≡
            },
            testimonials: {
            },
            formacion: {
                ≡
            },
            cursos: {
                ≡
            },
            contact: {
                texto: 'Quien no vive para servir, no sirve para vivir. - Frase atribuida al célebre escritor indio Rabindranath Tagore',
                direccion: 'C4XW+29V, Caracas 1080, Distrito Capital. Res. Vista al Lago',
                movil: '+58 416 483.20.49',
                href_movil: '+584164832049',
                mail: 'bazo.pedro@gmail.com'
            }
        },
        mutations: {
        },
        actions: {
        },
        modules: {
        }
    })
    ```
2. Modificar vista **src\views\Home.vue**:
    ```vue
    <template>
        <div>
            <Header />
            <IntroSection />

            <!-- *** Cuerpo Principal *** -->
            <main id="main">
                <FeaturedServicesSection />
                <PoliticasCalidad />
                <Servicios />
                <CallToAction />
                <Skills />
                <Facts />
                <Contact />
            </main>
            ≡		
        </div>
    </template>

    <script>
    import Header from '@/components/Header'
    import IntroSection from '@/components/IntroSection'
    import FeaturedServicesSection from '@/components/FeaturedServicesSection'
    import PoliticasCalidad from '@/components/PoliticasCalidad'
    import Servicios from '@/components/Servicios'
    import CallToAction from '@/components/CallToAction'
    import Skills from '@/components/Skills'
    import Facts from '@/components/Facts'
    import Contact from '@/components/Contact'

    export default {
        name: 'Home',
        components: {
            Header,
            IntroSection,
            FeaturedServicesSection,
            PoliticasCalidad,
            Servicios,
            CallToAction,
            Skills,
            Facts,
            Contact
        }
    }
    </script>
    ```
3. Solicitar un servicio en [EmailJS](https://dashboard.emailjs.com/sign-up) y configurar el envío de correos:
    + Acceder al Dashboard de EmailJS.
    + Añadir nuevo servicio (**Add New Service**).
    + Seleccionar **Gmail**.
    + Presionar en **Connect Account**.
    + Seleccionar cuenta de correo gmail y otorgarle todos los permisos.
    + Presionar en **Create Service**.
4. Crear una plantilla de correo en [EmailJS](https://dashboard.emailjs.com/sign-up):
    + Seleccionar **Email Templates** y presionar en **Create New Template**.
    + Configurar plantilla y presionar en **Save**.
5. Obtener en [EmailJS](https://dashboard.emailjs.com/sign-up):
    + Service ID
    + Template ID
    + User ID
6. Instalar EmailJS:
    + $ npm install emailjs-com --save
    + $ npm install @emailjs/browser --save
7. Crear componente **src\components\Contact.vue**:
    ```vue
    <template>
        <div>
            <section id="contact" class="section-bg wow fadeInUp">
                <div class="container">
                    <div class="section-header">
                        <h3>Contáctame</h3>
                        <p>{{ contact.texto }}</p>
                    </div>
                    <div class="row contact-info">
                        <div class="col-md-4">
                            <div class="contact-address">
                                <i class="ion-ios-location-outline"></i>
                                <h3>Dirección</h3>
                                <address>{{ contact.direccion }}</address>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="contact-phone">
                                <i class="ion-ios-telephone-outline"></i>
                                <h3>Número de teléfono</h3>
                                <p><a :href="`tel:${href_movil}`">{{ contact.movil }}</a></p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="contact-email">
                                <i class="ion-ios-email-outline"></i>
                                <h3>Email</h3>
                                <p><a href="mailto:bazo.pedro@gmail.com">{{ contact.mail }}</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="form">
                        <div id="sendmessage">Your message has been sent. Thank you!</div>
                        <div id="errormessage"></div>
                        <form class="contactForm" @submit.prevent="sendEmail">
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <input type="text" name="name" class="form-control" id="name" placeholder="Escribe tu nombre" v-model.trim="from_name" required />
                                    <div class="validation"></div>
                                </div>
                                <div class="form-group col-md-6">
                                    <input type="email" class="form-control" name="email" id="email" placeholder="Escribe tu correo electrónico" v-model="from_email" required />
                                    <div class="validation"></div>
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" name="subject" id="subject" placeholder="Asunto" v-model.trim="subject" required />
                                <div class="validation"></div>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" name="message" rows="5" placeholder="Mensaje" v-model.trim="message" required></textarea>
                                <div class="validation"></div>
                            </div>
                            <div class="text-center"><button type="submit">Enviar mensaje</button></div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    </template>

    <script>
    import { mapState } from 'vuex'
    import emailjs from 'emailjs-com'

    export default {
        name: 'Contact',
        data(){
            return {
                from_name: '',
                from_email: '',
                message: '',
                subject: '',
                service_id: 'service_w96f7mr',
                template_id: 'template_o0augpw',
                user_id: '*************'
            }
        },
        methods: {
            limpiarFormulario() {
                this.from_name = '';
                this.from_email = '';
                this.message = '';
                this.subject = '';
            },
            async sendEmail(e) {
                try { 
                    await emailjs.sendForm(this.service_id, this.template_id, e.target, this.user_id, { 
                        name: this.from_name, 
                        email: this.from_email,
                        message: this.message,
                        subject: this.subject
                    })
                    this.limpiarFormulario()
                    alert('¡Su mensaje se ha enviado exitosamente!')
                } catch(e) { 
                    console.log({error}) 
                }
            }
        },
        computed: {
            ...mapState(['contact'])
        },
    }
    </script>
    ```
8. Subir repositorio:
    + $ git add .
    + $ git commit -m "Diseño del componente Contact"
    + $ git push -u origin main


## Diseño del componente Footer
1. Editar la tienda **src\store\index.js**:
    ```js
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            intro: {
                ≡
            },
            destacados: [
                ≡
            ],
            calidad: {
                ≡
            },
            servicios: {
                ≡
            },
            accion: {
                ≡
            },
            skills: {
                ≡
            },
            facts: {
                ≡
            },
            portafolio: { 
                ≡
            },
            clients: {
                ≡
            },
            testimonials: [
                ≡
            ],
            formacion: {
                ≡
            },
            cursos: [
                ≡				
            ],
            contact: {
                ≡
            },
            sociales: [
                {
                    id: 1,
                    name: 'github',
                    enlace: 'https://github.com/petrix12',
                    icon: 'fa fa-github' /* <i class="fab fa-github"></i> */
                },
                {
                    id: 2,
                    name: 'facebook',
                    enlace: 'https://www.facebook.com/solplusplus',
                    icon: 'fa fa-facebook'
                },
                {
                    id: 3,
                    name: 'twitter',
                    enlace: 'https://twitter.com/petrix12',
                    icon: 'fa fa-twitter'
                },
                {
                    id: 4,
                    name: 'youtube',
                    enlace: 'https://www.youtube.com/channel/UCgI3CMta_Vc4GHZwbzG3e-Q',
                    icon: 'fa fa-youtube'
                },
                {
                    id: 5,
                    name: 'linkedin',
                    enlace: 'https://www.linkedin.com/in/pedro-bazo',
                    icon: 'fa fa-linkedin'
                },
                {
                    id: 6,
                    name: 'instagram',
                    enlace: 'https://www.instagram.com/bazopedro',
                    icon: 'fa fa-instagram'
                }
            ],
            footer: {
                texto: '¡Hola! Soy el Ing. Pedro Bazó, desarrollador de aplicaciones web, principalmente en los stacks MEVN, MERN, MEAN y Laravel - Vue.js. También soy programador en VBA para automatizar documentos Offices.',
                empresa: 'Soluciones++',
                proposito: 'Me considero una persona que consigue lo que se propone, estoy convencido que los logros son los resultados de las decisiones que se toman y de las metas que nos establecemos. Estoy consciente de mis limitaciones, no lo sé todo, ni lo domino todo, pero procuro siempre hallar una solución eficiente a los problemas.',
                actividad: 'Desarrollo de Aplicaciones Web'
            }
        },
        mutations: {
        },
        actions: {
        },
        modules: {
        }
    })
    ```
2. Modificar vista **src\views\Home.vue**:
    ```vue
    <template>
        <div>
            <Header />
            <IntroSection />
            <main id="main">
                <FeaturedServicesSection />
                <PoliticasCalidad />
                <Servicios />
                <CallToAction />
                <Skills />
                <Facts />
                <Portfolio />
                <Clients />
                <Testimonials />
                <Estudios />
                <Cursos />
                <Contact />
            </main>
            <Footer />
        </div>
    </template>

    <script>
    import Header from '@/components/Header'
    import IntroSection from '@/components/IntroSection'
    import FeaturedServicesSection from '@/components/FeaturedServicesSection'
    import PoliticasCalidad from '@/components/PoliticasCalidad'
    import Servicios from '@/components/Servicios'
    import CallToAction from '@/components/CallToAction'
    import Skills from '@/components/Skills'
    import Facts from '@/components/Facts'
    import Portfolio from '@/components/Portfolio'
    import Clients from '@/components/Clients'
    import Testimonials from '@/components/Testimonials'
    import Estudios from '@/components/Estudios'
    import Cursos from '@/components/Cursos'
    import Contact from '@/components/Contact'
    import Footer from '@/components/Footer'

    export default {
        name: 'Home',
        components: {
            Header,
            IntroSection,
            FeaturedServicesSection,
            PoliticasCalidad,
            Servicios,
            CallToAction,
            Skills,
            Facts,
            Portfolio,
            Clients,
            Testimonials,
            Estudios,
            Cursos,
            Contact,
            Footer
        }
    }
    </script>
    ```
3. Crear componente **src\components\Footer.vue**:
    ```vue
    <template>
        <div>
            <footer id="footer">
                <div class="footer-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 footer-info">
                                <h3><img src="img/logo-completo-sm.png" alt="Logo de la aplicación" title="" height="30" /></h3>
                                <p>{{ footer.texto }}</p>
                            </div>
                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Enlaces de utilidad</h4>
                                <ul>
                                    <li><i class="ion-ios-arrow-right"></i> <a href="#intro">Inicio</a></li>
                                    <li><i class="ion-ios-arrow-right"></i> <a href="#portfolio">Portafolio</a></li>
                                    <li><i class="ion-ios-arrow-right"></i> <a href="#services">Servicios</a></li>
                                    <li><i class="ion-ios-arrow-right"></i> <a href="#clients">Experiencia</a></li>
                                    <li><i class="ion-ios-arrow-right"></i> <a href="#team">Estudios</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-6 footer-contact">
                                <h4>Contáctame</h4>
                                <p>
                                    {{ contact.direccion }} <br>
                                    <strong>Teléfono:</strong> {{ contact.movil }}<br>
                                    <strong>Email:</strong> {{ contact.mail }}<br>
                                </p>

                                <div class="social-links">
                                    <a :href="social.enlace" target="_blank" class="twitter" v-for="social in sociales" :key="social.id">
                                        <i :class="social.icon"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 footer-newsletter">
                                <h4>Propósito</h4>
                                <p>{{ footer.proposito }}</p>
                                <a href="cvpedrobazo.pdf" target="_blank" class="form-control text-center boton_cv">Ver mi CV</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="copyright">
                        &copy; Copyright <strong>{{ footer.empresa }}</strong>. All Rights Reserved
                    </div>
                    <div class="credits">
                        Una muy buena opción para el <a href="#portfolio">{{ footer.actividad }}</a>
                    </div>
                </div>
            </footer>
            <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
        </div>
    </template>

    <script>
    import { mapState } from 'vuex'

    export default {
        name: 'Footer',
        computed: {
            ...mapState(['contact', 'sociales', 'footer'])
        },
    }
    </script>

    <style scoped>
        .boton_cv{
            color: white;
            background: #18d26e;
        }
        .boton_cv:hover{
            color: #18d26e;
            background: white;
        }
    </style>
    ```
4. Subir repositorio:
    + $ git add .
    + $ git commit -m "Diseño del componente Footer"
    + $ git push -u origin main


## Enlazar logo a la url de la aplicación
1. Editar **public\index.html**:
    ```html
    <!DOCTYPE html>
    <html lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <link rel="icon" href="<%= BASE_URL %>favicon.ico">
        <!-- <title><%= htmlWebpackPlugin.options.title %></title> -->
        <title>Soluciones++ | CV Ing. Pedro Bazó | Desarrollador Web</title>

        <!-- Favicons -->
        <link href="favicon.png" rel="icon">
        <link href="img/apple-touch-icon.png" rel="apple-touch-icon">

        <!-- Required meta tags -->
        <meta name="description" content="Desarrollador web online. Crea un curriculum vitae (CV) online. Crea una página web para tu negocio"/>
        <meta name="keywords" content="desarrallo web, curriculum vitae, cv online, página web negocio, aplicaciones web, herramientas y soluciones office"/>
        <meta name="author" content="Ing. Pedro Jesús Bazó Canelón" />
        <meta name="robots" content="index"/>

        <!-- Icono web -->
        <meta property="fb:app_id" content="APPID">
        <meta data-react-helmet="true" property="og:url" content="/"/>
        <meta data-react-helmet="true" property="og:type" content="website"/>
        <meta data-react-helmet="true" property="og:title" content="Soluciones++ | Ing. Pedro Bazó | Desarrollo de Aplicaciones Web."/>
        <meta data-react-helmet="true" property="og:description" content="Automatice sus informes y documentos office."/>
        <meta data-react-helmet="true" property="og:image" content="https://1.bp.blogspot.com/-A_Mzi1F6U78/YQs9RU_ArUI/AAAAAAAAmsE/9pm5WqoLEA82JKv5-EIwEC70mPIgtHefQCLcBGAsYHQ/s459/MPSmall.jpg" />
        <meta data-react-helmet="true" property="twitter:title" content="Soluciones++ | Ing. Pedro Bazó | Desarrollo de Aplicaciones Web." />
        <meta data-react-helmet="true" property="twitter:description" content="Automatice sus informes y documentos office." />
        <meta data-react-helmet="true" property="twitter:image:src" content="https://1.bp.blogspot.com/-A_Mzi1F6U78/YQs9RU_ArUI/AAAAAAAAmsE/9pm5WqoLEA82JKv5-EIwEC70mPIgtHefQCLcBGAsYHQ/s459/MPSmall.jpg" />
        <meta data-react-helmet="true" property="twitter:image" content="https://1.bp.blogspot.com/-A_Mzi1F6U78/YQs9RU_ArUI/AAAAAAAAmsE/9pm5WqoLEA82JKv5-EIwEC70mPIgtHefQCLcBGAsYHQ/s459/MPSmall.jpg" />
        <meta data-react-helmet="true" property="twitter:card" content="summary" />
        <meta data-react-helmet="true" name="robots" content="noindex, nofollow" />

        <!-- Google Fonts -->
        ≡
    </head>
    <body>
        ≡
    </body>
    </html>
    ```
2. Subir repositorio:
    + $ git add .
    + $ git commit -m "Enlazar logo a la url de la aplicación"
    + $ git push -u origin main


## Adaptar template administrativo al proyecto
+ Página de template administrativos: https://themewagon.com/theme-category/admin-dashboard
1. Descargar el template de la URL: **https://themewagon.com/themes/corona-free-responsive-bootstrap-4-admin-dashboard-template** y ubicarlo en **00soportes\Template original\Template administrativo**.
2. Copiar el contenido de **00soportes\Template original\Template administrativo\corona-free-dark-bootstrap-admin-template-1.0.0\template\assets** en **public\assets** y en **src\assets\admin**.
3. Modifcar tienda **src\store\index.js**:
    ```js
    ≡
    export default createStore({
        state: {
            datos: {
                nombre1: 'Pedro',
                nombre2: 'Jesús',
                apellido1: 'Bazó',
                apellido2: 'Canelón',
                empresa: 'Soluciones++',
                frase: 'En donde un clic (-) importa!!!'
            },
            ≡
            footer: {
                texto: '¡Hola! Soy el Ing. Pedro Bazó, desarrollador de aplicaciones web, principalmente en los stacks MEVN, MERN, MEAN y Laravel - Vue.js. También soy programador en VBA para automatizar documentos Offices.',
                empresa: 'Soluciones++',
                proposito: 'Me considero una persona que consigue lo que se propone, estoy convencido que los logros son los resultados de las decisiones que se toman y de las metas que nos establecemos. Estoy consciente de mis limitaciones, no lo sé todo, ni lo domino todo, pero procuro siempre hallar una solución eficiente a los problemas.',
                actividad: 'Desarrollo de Aplicaciones Web'
            }
        },
        ≡
    }
    ≡
    ```
4. Modificar **package.json** para agregar las dependencias requeridas por el template:
    ```json
    {
        ≡
        "dependencies": {
            ≡
            "@mdi/font": "^3.7.95",
            "bootstrap": "^4.4.1",
            "bootstrap-maxlength": "^1.6.0",
            "chart.js": "^2.8.0",
            "codemirror": "^5.48.0",
            "flag-icon-css": "^3.3.0",
            "jquery": "3.4.1",
            "jvectormap": "^2.0.4",
            "moment": "^2.24.0",
            "owl.carousel": "^2.3.4",
            "perfect-scrollbar": "^1.5.0",
            "popper.js": "^1.16.1",
            "progressbar.js": "^1.0.1",
            "pwstabs": "^1.4.0",
            "select2": "^4.0.7",
            "select2-bootstrap-theme": "0.1.0-beta.10",
            "twbs-pagination": "^1.4.1",
            "typeahead.js": "^0.11.1"
        },
        ≡
    }
    ```
6. Ejecutar:
    + $ npm install
6. Crear vista **src\views\Admin.vue**:
    ```vue
    <template>
        <div class="container-scroller">
            <nav class="sidebar sidebar-offcanvas" id="sidebar">
                <div class="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
                    <router-link to="/" class="sidebar-brand brand-logo">
                        <img src="/img/logo-completo-sm.png" alt="logo" class="logo" />
                    </router-link>
                    <router-link to="/" class="sidebar-brand brand-logo-mini">
                        <img src="/img/apple-touch-icon.png" alt="logo" class="logo" />
                    </router-link>
                </div>
                <ul class="nav">
                    <li class="nav-item profile">
                        <div class="profile-desc">
                            <div class="profile-pic">
                                <div class="count-indicator">
                                    <img class="img-xs rounded-circle " src="img/autor.jpg" alt="Autor">
                                    <span class="count bg-success"></span>
                                </div>
                                <div class="profile-name">
                                    <h5 class="mb-0 font-weight-normal">{{ datos.nombre1 }} {{ datos.apellido1 }}</h5>
                                    <span>Administrador</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item nav-category">
                        <span class="nav-link">Personalizar</span>
                    </li>
                    <!-- datos - contact - footer -->
                    <li class="nav-item menu-items">
                        <a class="nav-link" href="#">
                            <span class="menu-icon">
                                <i class="mdi mdi-account-check"></i>
                            </span>
                            <span class="menu-title">Datos generales</span>
                        </a>
                    </li>
                    <!-- intro -->
                    <li class="nav-item menu-items">
                        <a class="nav-link" href="#">
                            <span class="menu-icon">
                                <i class="mdi mdi-account-card-details"></i>
                            </span>
                            <span class="menu-title">Datos introductorios</span>
                        </a>
                    </li>
                    <!-- destacados - servicios -->
                    <li class="nav-item menu-items">
                        <a class="nav-link" href="#">
                            <span class="menu-icon">
                                <i class="mdi mdi-playlist-play"></i>
                            </span>
                            <span class="menu-title">Servicios</span>
                        </a>
                    </li>
                    <!-- calidad -->
                    <li class="nav-item menu-items">
                        <a class="nav-link" href="#">
                            <span class="menu-icon">
                                <i class="mdi mdi-table-large"></i>
                            </span>
                            <span class="menu-title">Política de calidad</span>
                        </a>
                    </li>
                    <!-- accion -->
                    <li class="nav-item menu-items">
                        <a class="nav-link" href="#">
                            <span class="menu-icon">
                                <i class="mdi mdi-chart-bar"></i>
                            </span>
                            <span class="menu-title">Call To Action</span>
                        </a>
                    </li>
                    <!-- skills -->
                    <li class="nav-item menu-items">
                        <a class="nav-link" href="#">
                            <span class="menu-icon">
                                <i class="mdi mdi-application"></i>
                            </span>
                            <span class="menu-title">Principales Stacks</span>
                        </a>
                    </li>
                    <!-- facts - cursos -->
                    <li class="nav-item menu-items">
                        <a class="nav-link" href="#">
                            <span class="menu-icon">
                                <i class="mdi mdi-security"></i>
                            </span>
                            <span class="menu-title">Cursos</span>
                            <i class="menu-arrow"></i>
                        </a>
                    </li>
                    <!-- portafolio -->
                    <li class="nav-item menu-items">
                        <a class="nav-link" href="#">
                            <span class="menu-icon">
                                <i class="mdi mdi-file-document-box"></i>
                            </span>
                            <span class="menu-title">Portafolio</span>
                        </a>
                    </li>
                    <!-- clients -->
                    <li class="nav-item menu-items">
                        <a class="nav-link" href="#">
                            <span class="menu-icon">
                                <i class="mdi mdi-altimeter"></i>
                            </span>
                            <span class="menu-title">Logo de empresas</span>
                        </a>
                    </li>
                    <!-- testimonials -->
                    <li class="nav-item menu-items">
                        <a class="nav-link" href="#">
                            <span class="menu-icon">
                                <i class="mdi mdi-account-multiple-plus"></i>
                            </span>
                            <span class="menu-title">Testimoniales</span>
                        </a>
                    </li>
                    <!-- formacion -->
                    <li class="nav-item menu-items">
                        <a class="nav-link" href="#">
                            <span class="menu-icon">
                                <i class="mdi mdi-book-open-page-variant"></i>
                            </span>
                            <span class="menu-title">Estudios</span>
                        </a>
                    </li>
                    <!-- sociales -->
                    <li class="nav-item menu-items">
                        <a class="nav-link" href="#">
                            <span class="menu-icon">
                                <i class="mdi mdi-emoticon-cool"></i>
                            </span>
                            <span class="menu-title">Redes sociales</span>
                        </a>
                    </li>
                    <!-- imagenes -->
                    <li class="nav-item menu-items">
                        <a class="nav-link" href="#">
                            <span class="menu-icon">
                                <i class="mdi mdi-file-image"></i>
                            </span>
                            <span class="menu-title">Imagenes</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="container-fluid page-body-wrapper">
                <nav class="navbar p-0 fixed-top d-flex flex-row">
                    <div class="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
                        <router-link to="/" class="navbar-brand brand-logo-mini">
                            <img src="/img/apple-touch-icon.png" alt="logo" class="logo" />
                        </router-link>
                    </div>
                    <div class="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
                        <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                            <span class="mdi mdi-menu"></span>
                        </button>
                        <ul class="navbar-nav navbar-nav-right">
                            <li class="nav-item dropdown">
                                <a class="nav-link" id="profileDropdown" href="#" data-toggle="dropdown">
                                    <div class="navbar-profile">
                                        <img class="img-xs rounded-circle" src="img/autor.jpg" alt="autor">
                                        <p class="mb-0 d-none d-sm-block navbar-profile-name">
                                            {{ datos.nombre1 }} {{ datos.apellido1 }}
                                        </p>
                                        <i class="mdi mdi-menu-down d-none d-sm-block"></i>
                                    </div>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="profileDropdown">
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item preview-item">
                                        <div class="preview-thumbnail">
                                            <div class="preview-icon bg-dark rounded-circle">
                                                <i class="mdi mdi-logout text-danger"></i>
                                            </div>
                                        </div>
                                        <div class="preview-item-content">
                                            <p class="preview-subject mb-1">Salir</p>
                                        </div>
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                            <span class="mdi mdi-format-line-spacing"></span>
                        </button>
                    </div>
                </nav>
                <div class="main-panel">
                    <div class="content-wrapper">
                        <div class="row">
                            <div class="col-12 grid-margin stretch-card">
                                <div class="card corona-gradient-card">
                                    <div class="card-body py-0 px-0 px-sm-3">
                                        <div class="row align-items-center">
                                            <div class="col-4 col-sm-3 col-xl-2">
                                                <img src="img/desarrollo-web.png" class="gradient-corona-img img-fluid" alt="imagen de desarrollo web">
                                            </div>
                                            <div class="col-5 col-sm-7 col-xl-8 p-0">
                                                <h4 class="mb-1 mb-sm-0">{{ datos.empresa }}</h4>
                                                <p class="mb-0 font-weight-normal d-none d-sm-block">{{ datos.frase }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-12 grid-margin">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">Order Status</h4>
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            <div class="form-check form-check-muted m-0">
                                                                <label class="form-check-label">
                                                                    <input type="checkbox" class="form-check-input">
                                                                </label>
                                                            </div>
                                                        </th>
                                                        <th> Client Name </th>
                                                        <th> Order No </th>
                                                        <th> Product Cost </th>
                                                        <th> Project </th>
                                                        <th> Payment Mode </th>
                                                        <th> Start Date </th>
                                                        <th> Payment Status </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div class="form-check form-check-muted m-0">
                                                                <label class="form-check-label">
                                                                <input type="checkbox" class="form-check-input">
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <img src="img/autor.jpg" alt="image" />
                                                            <span class="pl-2">Henry Klein</span>
                                                        </td>
                                                        <td> 02312 </td>
                                                        <td> $14,500 </td>
                                                        <td> Dashboard </td>
                                                        <td> Credit card </td>
                                                        <td> 04 Dec 2019 </td>
                                                        <td>
                                                            <div class="badge badge-outline-success">Approved</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="form-check form-check-muted m-0">
                                                                <label class="form-check-label">
                                                                <input type="checkbox" class="form-check-input">
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <img src="img/autor.jpg" alt="image" />
                                                            <span class="pl-2">Estella Bryan</span>
                                                        </td>
                                                        <td> 02312 </td>
                                                        <td> $14,500 </td>
                                                        <td> Website </td>
                                                        <td> Cash on delivered </td>
                                                        <td> 04 Dec 2019 </td>
                                                        <td>
                                                            <div class="badge badge-outline-warning">Pending</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="form-check form-check-muted m-0">
                                                                <label class="form-check-label">
                                                                <input type="checkbox" class="form-check-input">
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <img src="img/autor.jpg" alt="image" />
                                                            <span class="pl-2">Lucy Abbott</span>
                                                        </td>
                                                        <td> 02312 </td>
                                                        <td> $14,500 </td>
                                                        <td> App design </td>
                                                        <td> Credit card </td>
                                                        <td> 04 Dec 2019 </td>
                                                        <td>
                                                            <div class="badge badge-outline-danger">Rejected</div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer class="footer">
                        <div class="d-sm-flex justify-content-center justify-content-sm-between">
                            <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">
                                &copy; Copyright <strong>{{ footer.empresa }}</strong>. All Rights Reserved
                            </span>
                            <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                                Una muy buena opción para el <router-link to="/">{{ footer.actividad }}</router-link>
                            </span>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    </template>

    <script>
    import { mapState } from 'vuex'
    /* import '@/assets/admin/vendors/js/vendor.bundle.base.js' */
    import '@/assets/admin/vendors/chart.js/Chart.min.js'
    import '@/assets/admin/vendors/jvectormap/jquery-jvectormap.min.js'
    import '@/assets/admin/vendors/jvectormap/jquery-jvectormap-world-mill-en.js'
    import '@/assets/admin/vendors/progressbar.js/progressbar.min.js'
    import '@/assets/admin/vendors/owl-carousel-2/owl.carousel.min.js'
    import '@/assets/admin/js/off-canvas.js'
    import '@/assets/admin/js/hoverable-collapse.js'
    import '@/assets/admin/js/misc.js'
    import '@/assets/admin/js/settings.js'
    import '@/assets/admin/js/todolist.js'
    /* import '@/assets/admin/js/dashboard.js' */

    export default {
        name: 'Admin',
        computed: {
            ...mapState(['datos', 'footer'])
        }
    }
    </script>

    <style scoped>
        @import '../assets/admin/vendors/mdi/css/materialdesignicons.min.css';
        @import '../assets/admin/vendors/css/vendor.bundle.base.css';
        @import '../assets/admin/vendors/jvectormap/jquery-jvectormap.css';
        @import '../assets/admin/vendors/flag-icon-css/css/flag-icon.min.css';
        @import '../assets/admin/vendors/owl-carousel-2/owl.carousel.min.css';
        @import '../assets/admin/vendors/owl-carousel-2/owl.theme.default.min.css';
        @import '../assets/admin/css/style.css';

        .logo {
            height: 100%;
            width: 100%;
            object-fit: contain;
        }
    </style>
    ```
    + **Nota**: vista basa en **00soportes\Template original\Template administrativo\corona-free-dark-bootstrap-admin-template-1.0.0\template\index.html**.
6. Modificar archivo de rutas **src\router\index.js**:
    ```js
    ≡
    const routes = [
        {
            path: '/admin',
            name: 'Admin',
            component: () => import('../views/Admin.vue')
        }
    ]
    ≡
    ```
7. Colocar una imagen alusiva al desarrollo web en **public\img\desarrollo-web.png**.
8. Eliminar los siguientes archivos:
    + src\assets\admin\images\favicon.png
    + src\assets\admin\images\logo-mini.svg
    + src\assets\admin\images\logo.svg
9. Eliminar las siguientes carpetas:
    + public\assets
    + src\assets\admin\images\carousel
    + src\assets\admin\images\dashboard
    + src\assets\admin\images\faces
    + src\assets\admin\images\faces-clipart
    + src\assets\admin\images\lightbox
    + src\assets\admin\images\samples
    + src\assets\admin\images\screenshots
10. Subir repositorio:
    + $ git add .
    + $ git commit -m "Adaptar template administrativo al proyecto"
    + $ git push -u origin main




## Crear base de datos en Firebase
1. Ir a la [consola de Firebase](https://console.firebase.google.com).
2. Crear un nuevo proyecto y nombrarlo **cvpetrix2022**.
3. Seleccionar **Realtime Database** y presionar en **Crear una base de datos**.
4. Seleccionar **Iniciar en modo de prueba** y **Habilitar**.
5. Obtener la api para consumir la base de datos: **https://cvpetrix2022-default-rtdb.firebaseio.com**.




## mmmmm
1. Crear vista **src\views\Datos.vue**:
    ```vue
    ```
2. Modificar archivo de rutas **src\router\index.js**:
    ```js
    ```
4. Modificar tienda **src\store\index.js**:
    ```js
    ```
5. Crear componente **src\components\Datos\Destacados.vue**:
    ```vue
    ```
6. mmmm





## Diseño del panel administrativo




4. Reprogramar la tienda **src\store\index.js**:
    ```vue
    ```
5. mmm



    ≡
    ```vue
    ```


    ```js
    ≡
    ≡
    ```



## Sección 9: CRUD + LocalStorage



### 97. Editar items (parte 2 - formulario edición)
1. Modificar vista **07formulario_crud\src\views\Editar.vue**:
    ```vue
    <template>
        Editar {{ $route.params.id }} - {{ tarea }}
        <form @submit.prevent="updateTarea(tarea)">
            <Input :tarea="tarea" />
        </form>
    </template>

    <script>
    import { mapState, mapActions } from 'vuex'
    import Input from '../components/Input'

    export default {
        components: {
            Input
        },
        computed: {
            ...mapState(['tarea'])
        },
        methods: {
            ...mapActions(['setTarea', 'updateTarea'])
        },
        created(){
            this.setTarea(this.$route.params.id)
        }
    }
    </script>
    ```
2. Modificar tienda **07formulario_crud\src\store\index.js**:
    ```js
    import { createStore } from 'vuex'
    import router from '../router'

    export default createStore({
        ≡
        mutations: {
            ≡
            tarea(state, payload) {
                if(!state.tareas.find(tarea => tarea.id === payload)){
                    router.push('/')
                    return
                }
                state.tarea = state.tareas.find(tarea => tarea.id === payload)
            },
            update(state, payload) {
                state.tarea =state.tareas.map(tarea => tarea.id === payload.id ? payload : tarea)
                router.push('/')
            }
        },
        actions: {
            ≡
            updateTarea({ commit}, tarea) {
                commit('update', tarea)
            },
        },
        modules: {
        }
    })
    ```

### 98. Respaldar información en LocalStorage
1. Modificar tienda **07formulario_crud\src\store\index.js**:
    ```js
    ≡
    export default createStore({
        ≡
        mutations: {
            cargar(state, payload) {
                state.tareas = payload
            },
            set(state, payload){
                state.tareas.push(payload)
                localStorage.setItem('tareas', JSON.stringify(state.tareas))
            },
            eliminar(state, payload){
                state.tareas = state.tareas.filter(tarea => tarea.id !== payload)
                localStorage.setItem('tareas', JSON.stringify(state.tareas))
            },
            tarea(state, payload) {
                if(!state.tareas.find(tarea => tarea.id === payload)){
                    router.push('/')
                    return
                }
                state.tarea = state.tareas.find(tarea => tarea.id === payload)
            },
            update(state, payload) {
                state.tarea =state.tareas.map(tarea => tarea.id === payload.id ? payload : tarea)
                localStorage.setItem('tareas', JSON.stringify(state.tareas))
                router.push('/')
            }
        },
        actions: {
            cargarLocalStorage({ commit }){
                if(localStorage.getItem('tareas')){
                    const tareas = JSON.parse(localStorage.getItem('tareas'))
                    commit('cargar', tareas)
                    return
                }
                localStorage.setItem('tareas', JSON.stringify([]))
            },
            ≡
        },
        ≡
    })
    ```
2. Modificar componente principal **07formulario_crud\src\App.vue**:
    ```vue
    <template>
        <Navbar />
        <div class="container">
            <router-view/>
        </div>
    </template>

    <script>
    import Navbar from './components/Navbar'
    import { mapActions } from 'vuex'
    export default {
        components: {
            Navbar
        },
        methods: {
            ...mapActions(['cargarLocalStorage'])
        },
        created(){
            this.cargarLocalStorage()
        }
    }
    </script>
    ```

### 99. Archivos Terminados de esta sección
+ Código fuente de esta sección: 00recursos\Formulario+CRUD.zip

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "CRUD + LocalStorage"
+ $ git push -u origin main


## Sección 10: API Rest Firebase
### 100. API REST Firebase - Introducción
+ https://bluuweb.github.io/vue-udemy
+ **Contenido**: sobre Firebase como Backend.

### 101. Firebase - Primeros pasos
1. Clonar el proyecto anterior **07formulario_crud** excluyendo la carpeta **07formulario_crud\node_modules** y llamándolo **08api_firebase**.
2. Instalar todas las dependencias del nuevo proyecto **08api_firebase** y ejecutar:
    + $ cd 08api_firebase
    + $ npm i
    + $ npm run serve
3. Ir a [firebase](https://firebase.google.com)
    + Ingresar y agregar proyecto.
    + Nombre: **api-firebase**.
    + Dashabilitar Google Analytics.
    + Ir a Realtime Database, crear una base de datos y comenzar en modo de prueba.
    + Obtener ruta raiz para consumir API's:
        + https://api-firebase-56408-default-rtdb.firebaseio.com

### 102. PUT o POST: Agregar tareas a nuestra base de datos
1. Modificar tienda **08api_firebase\src\store\index.js**:
    ```js
    import { createStore } from 'vuex'
    import router from '../router'

    export default createStore({
        state: {
            tareas: [],
            tarea: {
                id: '',
                nombre: '',
                categorias: [],
                estado: '',
                numero: 0
            }
        },
        mutations: {
            cargar(state, payload) {
                state.tareas = payload
            },
            set(state, payload){
                state.tareas.push(payload)
            },
            eliminar(state, payload){
                state.tareas = state.tareas.filter(tarea => tarea.id !== payload)
            },
            tarea(state, payload) {
                if(!state.tareas.find(tarea => tarea.id === payload)){
                    router.push('/')
                    return
                }
                state.tarea = state.tareas.find(tarea => tarea.id === payload)
            },
            update(state, payload) {
                state.tarea =state.tareas.map(tarea => tarea.id === payload.id ? payload : tarea)
                router.push('/')
            }
        },
        actions: {
            cargarLocalStorage({ commit }){
            },
            async setTareas({ commit }, tarea) {
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(tarea)
                    })
                    const dataDB = await res.json()
                    console.log(dataDB)
                } catch (error) {
                    console.log(error)
                }
                commit('set', tarea)
            },
            deleteTareas({ commit }, id) {
                commit('eliminar', id)
            },
            setTarea({ commit }, id) {
                commit('tarea', id)
            },
            updateTarea({ commit}, tarea) {
                commit('update', tarea)
            },
        },
        modules: {
        }
    })
    ```

### 103. DevTools failed to load sourcemap
+ **Contenido**: sobre como quitar el mensaje de advertencia de DevTools en la consola del navegador.

### 104. GET: Leer base de datos
1. Modificar tienda **08api_firebase\src\store\index.js**:
    ```js
    ≡
    export default createStore({
        ≡
        mutations: {
            ≡
        },
        actions: {
            async cargarLocalStorage({ commit }){
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas.json`)
                    const dataDB = await res.json()
                    
                    const tareas = []
                    for (let id in dataDB){
                        tareas.push(dataDB[id])
                    }
                    commit('cargar', tareas)
                } catch (error) {
                    console.log(error)
                }
            },
            ≡
        },
        ≡
    })
    ```

### 105. PATCH: Editar tarea de base de datos
1. Modificar tienda **08api_firebase\src\store\index.js**:
    ```js
    ≡
    async updateTarea({ commit}, tarea) {
        try {
            const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`, {
                method: 'PUT',
                body: JSON.stringify(tarea)
            })
            const dataDB = await res.json()
            commit('update', tarea)
        } catch (error) {
            console.log(error)
        }
    },
    ≡
    ```

### 106. DELETE: Eliminar tarea de base de datos
+ https://firebase.google.com/docs/database/rest/save-data
1. Modificar tienda **08api_firebase\src\store\index.js**:
    ```js
    ≡
    async deleteTareas({ commit }, id) {
        try {
            await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${id}.json`, {
                method: 'DELETE'
            })
            commit('eliminar', id)
        } catch (error) {
            console.log(error)
        }
    },
    ≡
    ```

### 107. Archivos Terminados de esta sección
+ Código fuente: 00recursos\API+Firebase.zip

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "API Rest Firebase"
+ $ git push -u origin main


## Sección 11: API Auth Firebase - Rutas protegidas
### 108. Introducción API AUTH FIREBASE
+ https://bluuweb.github.io/vue-udemy/08-01-auth
+ **Contenido**: sobre autenticación con Firebase.

### 109. Importante - Recomendación
+ **Contenido**: recomendación para esta sección.

### 110. Reglas de seguridad Firebase
1. Clonar el proyecto anterior **08api_firebase** excluyendo la carpeta **08api_firebase\node_modules** y llamándolo **09api_auth_firebase**.
2. Instalar todas las dependencias del nuevo proyecto **09api_auth_firebase** y ejecutar:
    + $ cd 09api_auth_firebase
    + $ npm i
2. Ir a [firebase](https://firebase.google.com):
    + Ingresar al proyecto **api-firebase**.
    + Ir a **Realtime Database > Reglas** y configurar las reglas:
        ```json
        {
        "rules": {
            "tareas": {
                ".read": "auth != null",
                ".write": "auth != null"
            }
        }
        }
        ```
    + Presionar el botón **Publicar**.
3. Ejecutar proyecto:
    + $ npm run serve 

### 111. Formulario Registro con Validaciones en Vue.js
1. Modificar archivo de rutas **09api_auth_firebase\src\router\index.js**:
    ```js
    ≡
    const routes = [
        ≡
        {
            path: '/registro',
            name: 'Registro',
            component: () => import('../views/Registro.vue')
        }
    ]
    ≡
    ```
2. Crear vista **09api_auth_firebase\src\views\Registro.vue**:
    ```vue
    <template>
        <h1 class="my-5">Registro de usuarios</h1>
        <form>
            <input type="email" placeholder="email" class="form-control my-2" v-model.trim="email">
            <input type="password" placeholder="password" class="form-control my-2" v-model.trim="pass1">
            <input type="password" placeholder="password" class="form-control my-2" v-model.trim="pass2">
            <button type="submit" class="btn btn-primary" :disabled="bloquear">Registrar</button>
        </form>
    </template>

    <script>
    export default {
        data() {
            return {
                email: '',
                pass1: '',
                pass2: ''
            }
        },
        computed: {
            bloquear(){
                if(!this.email.includes('@')){
                    return true
                }
                if(this.pass1.length > 5 && this.pass1 === this.pass2){
                    return false
                }
                return true
            }
        }
    }
    </script>
    ```

### 112. Registrar usuario en Firebase
+ https://firebase.google.com/docs/reference/rest/auth
1. Modificar tienda **09api_auth_firebase\src\store\index.js**:
    ```js
    ≡
	actions: {
		async registrarUsuario({ commit }, user) {
			try {
				// [API_KEY] = AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0
				const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0' , {
					method: 'POST',
					body: JSON.stringify({
						email: user.email,
						password: user.password,
						returnSecureToken: true
					})
				})
				const userDB = await res.json()
				console.log(userDB)
			} catch (error) {
				console.log(error)
			}
		},
        ≡
    }
    ≡
    ```
    + **Nota 1**: ir a la documentación de [firebase](https://firebase.google.com/docs/reference/rest/auth) para obtener la estructura del endpoint para la autenticación:
        + https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_KEY]
    + **Nota 2**: para obtener **API_KEY**:
        + Ir a [firebase](https://console.firebase.google.com)
        + Ir al proyecto **api-firebase**.
        + Ir a confguración del proyecto.
        + Ubicar **Clave de API de la web** (AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0).
        + En el panel izquierdo ir a **Authentication**.
        + Presionar en **Comenzar**.
        + En **Agrega tu primer método de acceso y comienza a utilizar Firebase Auth** presionar en **Correo electrónico/contraseña**.
        + Habilitar **Correo electrónico/contraseña** y presionar **Guardar**.
2. Modificar vista **09api_auth_firebase\src\views\Registro.vue**:
    ```vue
    <template>
        <h1 class="my-5">Registro de usuarios</h1>
        <form @submit.prevent="procesarFormulario">
            <input type="email" placeholder="email" class="form-control my-2" v-model.trim="email">
            <input type="password" placeholder="password" class="form-control my-2" v-model.trim="pass1">
            <input type="password" placeholder="password" class="form-control my-2" v-model.trim="pass2">
            <button type="submit" class="btn btn-primary" :disabled="bloquear">Registrar</button>
        </form>
    </template>

    <script>
    import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                email: '',
                pass1: '',
                pass2: ''
            }
        },
        computed: {
            bloquear(){
                if(!this.email.includes('@')){
                    return true
                }
                if(this.pass1.length > 5 && this.pass1 === this.pass2){
                    return false
                }
                return true
            }
        },
        methods: {
            ...mapActions(['registrarUsuario']),
            procesarFormulario() {
                this.registrarUsuario({ email: this.email, password: this.pass1 })

                // Limpiar formulario
                this.email = ''
                this.pass1 = ''
                this.pass2 = ''
            }
        }
    }
    </script>
    ```

### 113. ¿No ves la API KEY?
+ **Nota**: en caso de **No hay clave de API web para este proyecto**, seguir los siguientes pasos:
    + Ir al panel **Tus apps** y presionar en **</>**.
    + Registrar app:
        + Sobrenombre de la app: api-firebase
    + Presionar en **Registrar app**.
    + Aparecerá un código similar a este:
        ```js
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "firebase/app";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0",
            authDomain: "api-firebase-56408.firebaseapp.com",
            databaseURL: "https://api-firebase-56408-default-rtdb.firebaseio.com",
            projectId: "api-firebase-56408",
            storageBucket: "api-firebase-56408.appspot.com",
            messagingSenderId: "652091577563",
            appId: "1:652091577563:web:7183b8e2883b7c8a3da8fe"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        ```
    + Obtener del código anterior **apiKey: "AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0"**.
    + Presionar en **Ir a la consola**.
    + En el panel izquierdo ir a **Authentication**.
    + Presionar en **Comenzar**.
    + En **Agrega tu primer método de acceso y comienza a utilizar Firebase Auth** presionar en **Correo electrónico/contraseña**.
    + Habilitar **Correo electrónico/contraseña** y presionar **Guardar**.

### 114. Corrección error video anterior + commit de usuario
1. Modificar tienda **09api_auth_firebase\src\store\index.js**:
    ```js
    ≡
    async registrarUsuario({ commit }, user) {
        try {
            // [API_KEY] = AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0
            const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0' , {
                method: 'POST',
                body: JSON.stringify({
                    email: user.email,
                    password: user.password,
                    returnSecureToken: true
                })
            })
            const userDB = await res.json()
            console.log(userDB)
            if(userDB.error) {
                console.log(userDB.error)
                return
            }
            commit('setUser', userDB)
			router.push('/')
        } catch (error) {
            console.log(error)
        }
        ≡
    },
    ≡
    ```

### 115. Ingreso de usuario (Login)
+ https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password
1. Agregar ruta **ingreso en **09api_auth_firebase\src\router\index.js**:
    ```js
    ≡
    const routes = [
        ≡
        {
            path: '/ingreso',
            name: 'Ingreso',
            component: () => import('../views/Ingreso.vue')
        }
    ]
    ≡
    ```
2. Crear la vista **09api_auth_firebase\src\views\Ingreso.vue**:
    ```vue
    <template>
        <h1 class="my-5">Ingreso de usuarios</h1>
        <form @submit.prevent="procesarFormulario">
            <input type="email" placeholder="email" class="form-control my-2" v-model.trim="email">
            <input type="password" placeholder="password" class="form-control my-2" v-model.trim="pass1">
            <button type="submit" class="btn btn-primary" :disabled="bloquear">Ingresar</button>
        </form>
    </template>

    <script>
    import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                email: '',
                pass1: ''
            }
        },
        computed: {
            bloquear(){
                if(!this.email.includes('@')){
                    return true
                }
                if(this.pass1.length > 5){
                    return false
                }
                return true
            }
        },
        methods: {
            ...mapActions(['ingresoUsuario']),
            procesarFormulario() {
                this.ingresoUsuario({ email: this.email, password: this.pass1 })

                // Limpiar formulario
                this.email = ''
                this.pass1 = ''
            }
        }
    }
    </script>
    ```
3. Modificar tienda **09api_auth_firebase\src\store\index.js**:
    ```js
    ≡
	actions: {
		async ingresoUsuario({ commit }, user) {
			try {
				// [API_KEY] = AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0
				const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0' , {
					method: 'POST',
					body: JSON.stringify({
						email: user.email,
						password: user.password,
						returnSecureToken: true
					})
				})
				const userDB = await res.json()
				console.log(userDB)
				if(userDB.error) {
					console.log(userDB.error)
					return
				}
				commit('setUser', userDB)
				router.push('/')
			} catch (error) {
				console.log(error)
			}
		},
        ≡
    }
    ≡
    ```

### 116. Reglas de seguridad Firebase
+ https://firebase.google.com/docs/database/rest/auth#authenticate_with_an_id_token
1. Modificar tienda **09api_auth_firebase\src\store\index.js**:
    ```js
    ≡
    export default createStore({
        ≡
        actions: {
            async ingresoUsuario({ commit }, user) {
                try {
                    // [API_KEY] = AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0
                    const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0' , {
                        method: 'POST',
                        body: JSON.stringify({
                            email: user.email,
                            password: user.password,
                            returnSecureToken: true
                        })
                    })
                    const userDB = await res.json()
                    console.log('INGRESO: ', userDB)
                    if(userDB.error) {
                        console.log(userDB.error)
                        return
                    }
                    commit('setUser', userDB)
                    router.push('/')
                } catch (error) {
                    console.log(error)
                }
            },
            async registrarUsuario({ commit }, user) {
                try {
                    // [API_KEY] = AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0
                    const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0' , {
                        method: 'POST',
                        body: JSON.stringify({
                            email: user.email,
                            password: user.password,
                            returnSecureToken: true
                        })
                    })
                    const userDB = await res.json()
                    console.log('REGISTRO: ', userDB)
                    if(userDB.error) {
                        console.log(userDB.error)
                        return
                    }
                    commit('setUser', userDB)
                    router.push('/')
                } catch (error) {
                    console.log(error)
                }
            },
            async cargarLocalStorage({ commit, state }){
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}.json?auth=${state.user.idToken}`)
                    const dataDB = await res.json()
                    
                    const tareas = []
                    console.log('Table:', dataDB)
                    for (let id in dataDB){
                        tareas.push(dataDB[id])
                    }
                    commit('cargar', tareas)
                } catch (error) {
                    console.log(error)
                }
            },
            async setTareas({ commit, state }, tarea) {
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(tarea)
                    })
                    const dataDB = await res.json()
                    console.log(dataDB)
                } catch (error) {
                    console.log(error)
                }
                commit('set', tarea)
            },
            async deleteTareas({ commit, state }, id) {
                try {
                    await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${id}.json?auth=${state.user.idToken}`, {
                        method: 'DELETE'
                    })
                    commit('eliminar', id)
                } catch (error) {
                    console.log(error)
                }
            },
            setTarea({ commit }, id) {
                commit('tarea', id)
            },
            async updateTarea({ commit, state }, tarea) {
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
                        method: 'PUT',
                        body: JSON.stringify(tarea)
                    })
                    const dataDB = await res.json()
                    commit('update', tarea)
                } catch (error) {
                    console.log(error)
                }
            },
        },
        ≡
    })
    ```
2. Modificar vista **09api_auth_firebase\src\views\Home.vue**:
    ```vue
    <template>
        <form @submit.prevent="procesarFormulario">
            <Input :tarea="tarea" />
        </form>
        <hr>
        <ListaTareas />
    </template>

    <script>
    ≡
    export default {
        ≡
        methods: {
            ...mapActions(['setTareas', 'cargarLocalStorage']),
            ≡
        },
        created(){
            this.cargarLocalStorage()
        }
    }
    </script>
    ```
3. Cambiar reglas para la lista de tareas:
    + Ir a [firebase](https://console.firebase.google.com)
    + Ir al proyecto **api-firebase**.
    + Ir a **Realtime Database** en igresar a **Reglas**.
    + Modificar Reglas:
        ```json
        {
            "rules": {
                "tareas": {
                    "$uid": {
                        ".write": "$uid === auth.uid",
                        ".read": "$uid === auth.uid"
                    }
                }
            }
        }
        ```
        + **Nota 1**: presionar en **Publicar** para guardar los cambios.
        + **Nota 2**: en el objeto **user** el **localId** equivale al **uid**.

### 117. Getters: Ocultar enlaces navbar
1. Modificar tienda **09api_auth_firebase\src\store\index.js**:
    ```js
    ≡
	getters: {
		usuarioAutenticado(state) {
			return !!state.user		// Si user existe retornará true
		}
	},
	modules: {
	}
    ≡
    ```
2. Modificar componente **09api_auth_firebase\src\components\Navbar.vue**:
    ```vue
    <template>
        {{ usuarioAutenticado }}
        <div class="navbar navbar-dark bg-dark">
            <router-link to="/" class="navbar-brand">
                Formulario
            </router-link>
            <div class="d-flex">
                <router-link to="/" class="btn btn-dark" v-if="usuarioAutenticado">
                    Tareas
                </router-link>
                <router-link to="/ingreso" class="btn btn-dark" v-if="!usuarioAutenticado">
                    Ingresar
                </router-link>
                <router-link to="/registro" class="btn btn-dark" v-if="!usuarioAutenticado">
                    Registrarse
                </router-link>
                <button v-if="usuarioAutenticado" class="btn btn-dark">Cerrar Sesión</button>
            </div>
        </div>
    </template>
    ≡
    ```

### 118. Cerrar sesión
1. Modificar tienda **09api_auth_firebase\src\store\index.js**:
    ```js
    ≡
	actions: {
		cerrarSesion({ commit }) {
			commit('setUser', null)
			router.push('/ingreso')
		},
        ≡
    }
    ```
2. Modificar componente **09api_auth_firebase\src\components\Navbar.vue**:
    ```vue
    <template>
        <div class="navbar navbar-dark bg-dark">
            ≡
            <div class="d-flex">
                ≡
                <button v-if="usuarioAutenticado" class="btn btn-dark" @click="cerrarSesion">
                    Cerrar Sesión
                </button>
            </div>
        </div>
    </template>

    <script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        ≡
        methods: {
            ...mapActions(['cerrarSesion'])
        }
    }
    </script>
    ```

### 119. Router: Rutas protegidas
1. Modificar archivo de rutas **09api_auth_firebase\src\router\index.js**:
    ```js
    import { createRouter, createWebHistory } from 'vue-router'
    import Home from '../views/Home.vue'
    import store from '../store'

    const routes = [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {rutaProtegida: true}
        },
        {
            path: '/editar/:id',
            name: 'Editar',
            component: () => import('../views/Editar.vue'),
            meta: {rutaProtegida: true}
        },
        {
            path: '/registro',
            name: 'Registro',
            component: () => import('../views/Registro.vue')
        },
        {
            path: '/ingreso',
            name: 'Ingreso',
            component: () => import('../views/Ingreso.vue')
        }
    ]

    const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes
    })

    router.beforeEach((to, from, next) => {
        console.log(to.meta.rutaProtegida)
        if(to.meta.rutaProtegida) {
            if(store.getters.usuarioAutenticado) {
                next()
            } else {
                next('/ingreso')
            }
        } else {
            next()
        }
    })

    export default router
    ```
2. Eliminar vista **09api_auth_firebase\src\views\About.vue**.

### 120. Guardar Token en LocalStorage
1. Modificar tienda **09api_auth_firebase\src\store\index.js**:
    ```js
    import { createStore } from 'vuex'
    import router from '../router'

    export default createStore({
        state: {
            tareas: [],
            tarea: {
                id: '',
                nombre: '',
                categorias: [],
                estado: '',
                numero: 0
            },
            user: null
        },
        mutations: {
            setUser(state, payload) {
                state.user = payload
            },
            cargar(state, payload) {
                state.tareas = payload
            },
            set(state, payload){
                state.tareas.push(payload)
            },
            eliminar(state, payload){
                state.tareas = state.tareas.filter(tarea => tarea.id !== payload)
            },
            tarea(state, payload) {
                if(!state.tareas.find(tarea => tarea.id === payload)){
                    router.push('/')
                    return
                }
                state.tarea = state.tareas.find(tarea => tarea.id === payload)
            },
            update(state, payload) {
                state.tarea =state.tareas.map(tarea => tarea.id === payload.id ? payload : tarea)
                router.push('/')
            }
        },
        actions: {
            cerrarSesion({ commit }) {
                commit('setUser', null)
                router.push('/ingreso')
                localStorage.removeItem('usuario')
            },
            async ingresoUsuario({ commit }, user) {
                try {
                    // [API_KEY] = AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0
                    const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0' , {
                        method: 'POST',
                        body: JSON.stringify({
                            email: user.email,
                            password: user.password,
                            returnSecureToken: true
                        })
                    })
                    const userDB = await res.json()
                    console.log('INGRESO: ', userDB)
                    if(userDB.error) {
                        console.log(userDB.error)
                        return
                    }
                    commit('setUser', userDB)
                    router.push('/')
                    localStorage.setItem('usuario', JSON.stringify(userDB))
                } catch (error) {
                    console.log(error)
                }
            },
            async registrarUsuario({ commit }, user) {
                try {
                    // [API_KEY] = AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0
                    const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0' , {
                        method: 'POST',
                        body: JSON.stringify({
                            email: user.email,
                            password: user.password,
                            returnSecureToken: true
                        })
                    })
                    const userDB = await res.json()
                    console.log('REGISTRO: ', userDB)
                    if(userDB.error) {
                        console.log(userDB.error)
                        return
                    }
                    commit('setUser', userDB)
                    router.push('/')
                    localStorage.setItem('usuario', JSON.stringify(userDB))
                } catch (error) {
                    console.log(error)
                }
            },
            async cargarLocalStorage({ commit, state }){
                if(localStorage.getItem('usuario')){
                    commit('setUser', JSON.parse(localStorage.getItem('usuario')))
                } else {
                    return commit('setUser', null)
                }
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}.json?auth=${state.user.idToken}`)
                    const dataDB = await res.json()
                    
                    const tareas = []
                    console.log('Table:', dataDB)
                    for (let id in dataDB){
                        tareas.push(dataDB[id])
                    }
                    commit('cargar', tareas)
                } catch (error) {
                    console.log(error)
                }
            },
            async setTareas({ commit, state }, tarea) {
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(tarea)
                    })
                    const dataDB = await res.json()
                    console.log(dataDB)
                } catch (error) {
                    console.log(error)
                }
                commit('set', tarea)
            },
            async deleteTareas({ commit, state }, id) {
                try {
                    await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${id}.json?auth=${state.user.idToken}`, {
                        method: 'DELETE'
                    })
                    commit('eliminar', id)
                } catch (error) {
                    console.log(error)
                }
            },
            setTarea({ commit }, id) {
                commit('tarea', id)
            },
            async updateTarea({ commit, state }, tarea) {
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
                        method: 'PUT',
                        body: JSON.stringify(tarea)
                    })
                    const dataDB = await res.json()
                    commit('update', tarea)
                } catch (error) {
                    console.log(error)
                }
            },
        },
        getters: {
            usuarioAutenticado(state) {
                return !!state.user		// Si user existe retornará true
            }
        },
        modules: {
        }
    })
    ```

### 121. Hosting Firebase
1. Compilar el proyecto **09api_auth_firebase** para hacer deploy en Google Firebase:
    + $ cd 09api_auth_firebase
    + $ npm run build
2. Instalar las herramientas de Firebase en la PC:
    + $ npm install -g firebase-tools
3. Hacer deploy:
    + Ir a [firebase](https://console.firebase.google.com)
    + Ir al proyecto **api-firebase**.
    + Ir a **Hosting** y presionar en **Comenzar**.
    + Presionar en **Siguiente**.
    + En consola de la pc ubicados en la raíz del proyecto:
        + $ firebase login
        + $ firebase init
            + ? Are you ready to proceed? (Y/n): y
            + Seleccionar:
                + ( ) Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
            + Seleccionar: > Use an existing project
            + Seleccionar: > api-firebase-56408 (api-firebase)
            + ? What do you want to use as your public directory? (public): dist
            + ? Configure as a single-page app (rewrite all urls to /index.html)? (y/N): y
            + ? Set up automatic builds and deploys with GitHub? (y/N): n
            + ? File dist/index.html already exists. Overwrite? (y/N): n
    + Presionar en **Siguiente**.
    + En consola de la pc ubicados en la raíz del proyecto:
        + $ firebase deploy
            + URL de la aplicación: https://api-firebase-56408.web.app

### 122. Hosting Netlify
1. Ir a la página de **Netlify** y subir la carpeta **dist**:
    + Nombre del sitio: https://firebase-api-hspp.netlify.app
2. En Google Firebase:
    + Ir a [firebase](https://console.firebase.google.com)
    + Ir al proyecto **api-firebase**.
    + Ir a **Authentication** y luego a **Sign-in method**.
    + En **Dominios autorizado** presionar en **Agregar un dominio** y agregar: https://firebase-api-hspp.netlify.app

### 123. Refresh 404 Hosting Netlify
+ **Nota**: si al hacer refresh en su sitio web desplegado en Netlify con el modo History de vue, tira un 404, seguir los siguientes pasos:
    + Crear archivo **09api_auth_firebase\public\_redirects**:
        ```
        /* /index.html  200
        ```
    + Compilar nuevamente:
        + $ cd 09api_auth_firebase
        + $ npm run build
    + Subir nuevamente el proyecto a Netlify.

### 124. Mensajes error Firebase
1. Modificar tienda **09api_auth_firebase\src\store\index.js**:
    ```js
    import { createStore } from 'vuex'
    import router from '../router'

    export default createStore({
        state: {
            tareas: [],
            tarea: {
                id: '',
                nombre: '',
                categorias: [],
                estado: '',
                numero: 0
            },
            user: null,
            error: {
                tipo: null,
                mensaje: null
            },
        },
        mutations: {
            setError(state, payload) {
                if(payload === null) {
                    return state.error = { tipo: null, mensaje: null}
                }
                if(payload === "EMAIL_NOT_FOUND") {
                    return state.error = { tipo: 'email', mensaje: 'Email no registrado'}
                }
                if(payload === "INVALID_PASSWORD") {
                    return state.error = { tipo: 'password', mensaje: 'Contraseña incorrecta'}
                }
                if(payload === "EMAIL_EXISTS") {
                    return state.error = { tipo: 'email', mensaje: 'El email ya existe'}
                }
                if(payload === "INVALID_EMAIL") {
                    return state.error = { tipo: 'email', mensaje: 'Email no válido'}
                }
            },
            setUser(state, payload) {
                state.user = payload
            },
            cargar(state, payload) {
                state.tareas = payload
            },
            set(state, payload){
                state.tareas.push(payload)
            },
            eliminar(state, payload){
                state.tareas = state.tareas.filter(tarea => tarea.id !== payload)
            },
            tarea(state, payload) {
                if(!state.tareas.find(tarea => tarea.id === payload)){
                    router.push('/')
                    return
                }
                state.tarea = state.tareas.find(tarea => tarea.id === payload)
            },
            update(state, payload) {
                state.tarea =state.tareas.map(tarea => tarea.id === payload.id ? payload : tarea)
                router.push('/')
            }
        },
        actions: {
            cerrarSesion({ commit }) {
                commit('setUser', null)
                router.push('/ingreso')
                localStorage.removeItem('usuario')
            },
            async ingresoUsuario({ commit }, user) {
                try {
                    // [API_KEY] = AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0
                    const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0' , {
                        method: 'POST',
                        body: JSON.stringify({
                            email: user.email,
                            password: user.password,
                            returnSecureToken: true
                        })
                    })
                    const userDB = await res.json()
                    if(userDB.error) {
                        console.log(userDB.error)
                        return commit('setError', userDB.error.message)
                    }
                    commit('setUser', userDB)
                    commit('setError', null)
                    router.push('/')
                    localStorage.setItem('usuario', JSON.stringify(userDB))
                } catch (error) {
                    console.log(error)
                }
            },
            async registrarUsuario({ commit }, user) {
                try {
                    // [API_KEY] = AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0
                    const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0' , {
                        method: 'POST',
                        body: JSON.stringify({
                            email: user.email,
                            password: user.password,
                            returnSecureToken: true
                        })
                    })
                    const userDB = await res.json()
                    if(userDB.error) {
                        console.log(userDB.error)
                        return commit('setError', userDB.error.message)
                    }
                    commit('setUser', userDB)
                    commit('setError', null)
                    router.push('/')
                    localStorage.setItem('usuario', JSON.stringify(userDB))
                } catch (error) {
                    console.log(error)
                }
            },
            async cargarLocalStorage({ commit, state }){
                if(localStorage.getItem('usuario')){
                    commit('setUser', JSON.parse(localStorage.getItem('usuario')))
                } else {
                    return commit('setUser', null)
                }
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}.json?auth=${state.user.idToken}`)
                    const dataDB = await res.json()
                    
                    const tareas = []
                    console.log('Table:', dataDB)
                    for (let id in dataDB){
                        tareas.push(dataDB[id])
                    }
                    commit('cargar', tareas)
                } catch (error) {
                    console.log(error)
                }
            },
            async setTareas({ commit, state }, tarea) {
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(tarea)
                    })
                    const dataDB = await res.json()
                    console.log(dataDB)
                } catch (error) {
                    console.log(error)
                }
                commit('set', tarea)
            },
            async deleteTareas({ commit, state }, id) {
                try {
                    await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${id}.json?auth=${state.user.idToken}`, {
                        method: 'DELETE'
                    })
                    commit('eliminar', id)
                } catch (error) {
                    console.log(error)
                }
            },
            setTarea({ commit }, id) {
                commit('tarea', id)
            },
            async updateTarea({ commit, state }, tarea) {
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
                        method: 'PUT',
                        body: JSON.stringify(tarea)
                    })
                    const dataDB = await res.json()
                    commit('update', tarea)
                } catch (error) {
                    console.log(error)
                }
            },
        },
        getters: {
            usuarioAutenticado(state) {
                return !!state.user		// Si user existe retornará true
            }
        },
        modules: {
        }
    })
    ```
2. Modificar componente **09api_auth_firebase\src\views\Ingreso.vue**:
    ```vue
    <template>
        <h1 class="my-5">Ingreso de usuarios</h1>
        <div class="alert alert-danger" v-if="error.tipo !== null">
            {{ error.mensaje }}
        </div>
        <form @submit.prevent="procesarFormulario">
            <input 
                type="email" 
                placeholder="email" 
                class="form-control my-2" 
                v-model.trim="email"
                :class="[error.tipo === 'email' ? 'is-invalid' : '']"
            >
            <input 
                type="password" 
                placeholder="password" 
                class="form-control my-2" 
                v-model.trim="pass1"
                :class="[error.tipo === 'password' ? 'is-invalid' : '']"
            >
            <button type="submit" class="btn btn-primary" :disabled="bloquear">Ingresar</button>
        </form>
    </template>

    <script>
    import { mapActions, mapState } from 'vuex'

    export default {
        data() {
            return {
                email: '',
                pass1: ''
            }
        },
        computed: {
            bloquear(){
                if(!this.email.includes('@')){
                    return true
                }
                if(this.pass1.length > 5){
                    return false
                }
                return true
            },
            ...mapState(['error'])
        },
        methods: {
            ...mapActions(['ingresoUsuario']),
            async procesarFormulario() {
                await this.ingresoUsuario({ email: this.email, password: this.pass1 })
                if(this.error.tipo !== null){
                    return
                }

                // Limpiar formulario
                this.email = ''
                this.pass1 = ''
            }
        }
    }
    </script>
    ```
3. Modificar componente **09api_auth_firebase\src\views\Registro.vue**:
    ```vue
    <template>
        <h1 class="my-5">Registro de usuarios</h1>
        <div class="alert alert-danger" v-if="error.tipo !== null">
            {{ error.mensaje }}
        </div>
        <form @submit.prevent="procesarFormulario">
            <input 
                type="email" 
                placeholder="email" 
                class="form-control my-2" 
                v-model.trim="email"
                :class="[error.tipo === 'email' ? 'is-invalid' : '']"
            >
            <input type="password" placeholder="password" class="form-control my-2" v-model.trim="pass1">
            <input type="password" placeholder="password" class="form-control my-2" v-model.trim="pass2">
            <button type="submit" class="btn btn-primary" :disabled="bloquear">Registrar</button>
        </form>
    </template>

    <script>
    import { mapActions, mapState } from 'vuex'

    export default {
        data() {
            return {
                email: '',
                pass1: '',
                pass2: ''
            }
        },
        computed: {
            bloquear(){
                if(!this.email.includes('@')){
                    return true
                }
                if(this.pass1.length > 5 && this.pass1 === this.pass2){
                    return false
                }
                return true
            },
            ...mapState(['error'])
        },
        methods: {
            ...mapActions(['registrarUsuario']),
            async procesarFormulario() {
                await this.registrarUsuario({ email: this.email, password: this.pass1 })
                if(this.error.tipo !== null){
                    return
                }

                // Limpiar formulario
                this.email = ''
                this.pass1 = ''
                this.pass2 = ''
            }
        }
    }
    </script>
    ```

### 125. Archivos Terminados de esta sección
+ Código fuente: 00recursos\API+AUTH+Firebase.zip

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "API Auth Firebase - Rutas protegidas"
+ $ git push -u origin main


## Resolver problema con las rutas en producción en Netlify
1. Crear archivo **public\_redirects** en **public**:
    ```
    /* /index.html  200
    ```
2. Compilar nuevamente:
    + $ npm run build


## Deploy en GitHub Pages
1. Primera vez:
    1. Crear una nueva rama **gh-pages**:
       + $ git checkout -b gh-pages
    2. Editar archivo **.gitignore** y eliminar línea **/dist**.
    3. Crear archivo **vue.config.js** en el directorio raíz del proyecto.
        ```js
        module.exports = {
            publicPath: '/cvpetrix2022',
        }
        ```
    4. Compilar el proyecto:
        + $ npm run build
    5. Subir directorio **dist** al GitHub:
        + $ git add dist
        + $ git commit -m "gh-pages commit"
        + $ git subtree push --prefix dist origin gh-pages
        + **Nota**: GitHub publicará la página automáticamente en:
           + https://petrix12.github.io/cvpetrix2022
    6. Regresar a la rama **main**:
        + $ git checkout main
2. Demás veces:
    1. Fusionar rama **gh-pages** con **main**:
        + $ git checkout gh-pages
        + $ git merge main
    2. Compilar el proyecto:
        + $ npm run build
    3. Subir directorio **dist** al GitHub:
        + $ git add dist
        + $ git commit -m "gh-pages commit"
        + $ git subtree push --prefix dist origin gh-pages
        + **Nota**: GitHub publicará la página automáticamente en:
           + https://petrix12.github.io/cvpetrix2022
    4. Regresar a la rama **main**:
        + $ git checkout main
3. Subir repositorio:
    + $ git add .
    + $ git commit -m "Deploy en GitHub Pages"
    + $ git push -u origin main





module.exports = {
    publicPath: '/cvpetrix2022',
}

**vue.config.js**
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/cvpetrix2022/" : "/",
};

**deploy.sh**
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:petrix12/cvpetrix2022.git master:gh-pages

cd -



******


Ejecutar: chmod +x deploy.sh 
./deploy.sh


https://petrix12.github.io/cvpetrix2022/



***
+ $ git add .
+ $ git commit -m "Prueba GitHub Pages"
+ $ git push -u origin main
+ $ chmod +x deploy.sh
+ $ ./deploy.sh