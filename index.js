// Js intersections observer-section 
const sections=document.querySelectorAll("section[id]") ;
const links=document.querySelectorAll(".nav-link") ;

const observer = new IntersectionObserver((entries)=>{
    entries.forEach( entry => {
        if (entry.isIntersecting) {
            //ajouter "active-section" à la section visible
            sections.forEach( section => {
                section.classList.remove("visible" ) ;
                if ( section.id === entry.target.id ) {
                    section.classList.add("visible" ) ;
                }
            })
            
            // récuperer l'item du nav dont la section est affiché :
            links.forEach ( link => {
                link.classList.remove("active-item") ;
                if( link.getAttribute("href") === '#' + entry.target.id){
                    link.classList.add("active-item") ;
                }
            }) ;
        }
    } ) ;
},
{
    threshold: 0.5
}) ;
sections.forEach( section => observer.observe(section)) ;

// Navbar Skills switching 
const skillsLinks = document.querySelectorAll('.skills-link' ) ; 
const Lists = document.querySelectorAll('.nav-item') ; 
const blocks = document.querySelectorAll('.skills-panel') ; 

skillsLinks.forEach ( link => {
    link.addEventListener( 'click' , (e) => {
        e.preventDefault () ;

        skillsLinks.forEach ( lien => lien.classList.remove('active')) ; 
        link.classList.add('active') ; 
        const target = link.dataset.target ; 

        Lists.forEach ( list => list.classList.remove("active")) ; 
        link.parentElement.classList.add("active") ;

        blocks.forEach ( block => {
            block.classList.remove("active") ;
        }) ;

        const activeBlock = document.querySelector ('.'+target) ; 
        if (activeBlock) {
            activeBlock.classList.add('active') ;
        }
    }); 
}) ; 

  const steps = document.querySelectorAll('.process-card');

  const observe = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.remove('show') ;
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.3
  });

  steps.forEach(step => observe.observe(step));
