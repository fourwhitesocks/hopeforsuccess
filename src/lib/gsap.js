
//not sure if below is needed or not but it got rid of the error of gsap not being defind...?
const gsap = gsap.to

export function moveDown() {

    gsap.to('.text' , {y: 50, duration: 2})

}
    


/*  

export function moveDown() {

    const tl = gsap.timeline();
		const duration = 1;

 tl.from('.box', {
        duration,
        opacity: 0
    })
    .from('.box', {
        duration,
        xPercent: 100,
        rotation: -90,
        yPercent: 100,
        ease: 'bounce.out',
    }, `-=${duration * 0.75}`)
}  

*/


