
const originalColor = "green";  // Original text color

        gsap.to("#nav", {
            backgroundImage: "linear-gradient(to right, green, white)",
            duration: 0.5,
            height: "90px",
            scrollTrigger: {
                trigger: "#nav",
                scroller: "body",
                start: 'top-10%',
                scrub: 1,
                onEnter: () => {
                    document.querySelector("#eco").style.color = "white";
                },
                onLeaveBack: () => {
                    document.querySelector("#eco").style.color = originalColor;
                }
            }
        });

        gsap.from("#card-container #line1", {
            x: -100, 
            opacity: 0,
            duration: 7,
            scrollTrigger: {
                trigger: "#card-container",
                scroller: 'body',
                start: "top 85%",
                end: "top 50%", 
                scrub: 12
            }
        });
        gsap.from("#card-container #line2", {
            x: -50, 
            opacity: 0,
            duration: 5,
            scrollTrigger: {
                trigger: "#card-container",
                scroller: 'body',
                start: "top 85%",
                end: "top 55%", 
                scrub: 15
            }
        });

        gsap.from("#content",{
            opacity:0,
            // x:-400,
            duration:1,
            delay:0.5,
            // stagger:10,
        })

        const menuIcon = document.querySelector('#menu-icon');
        const menuBtns = document.querySelectorAll(".btn")
        const dropdownMenu = document.querySelector('#dropdown');

        menuIcon.addEventListener('click', function() {
            dropdownMenu.classList.toggle('show');
        });

        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', function() {
                const url = card.getAttribute('data-url');
                window.location.href = url;
            });
        });
        
  
  