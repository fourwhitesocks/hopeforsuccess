
//not sure if below is needed or not but it got rid of the error of gsap not being defind...?
const gsap = gsap.to

export function moveDown() {

    gsap.to('.text' , {y: 50, duration: 2})

}
    



