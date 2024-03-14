const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

let tl = gsap.timeline({
   scrollTrigger:{
    trigger: "#two",
    start: "33% 95%", 
    end : "50% 50%",
    scrub: true,
    // markers: true
   }
})

tl.to("#fanta", {
    top: "150%",
    left: "21%"
}, "fan")

tl.to("#lemon-cut", {
    top: "155%",
    left: "20%"
},"fan")

tl.to("#orange", {
    top: "170%",
    left: "80%"
},"fan")

tl.to("#leaf-one", {
    top: "120%",
    left: "10%",
    rotate: "50deg"
},"fan")

tl.to("#leaf-two", {
    top: "175%",
    left: "0%"
},"fan")

tl.to("#leaf-three", {
    top: "110%",
    left: "60%"
},"fan")

let tl2 = gsap.timeline({
    scrollTrigger:{
     trigger: "#three",
     start: "68% 95%", 
     end : "82% 50%",
     scrub: true
    }
})

tl2.to("#fanta",{
    top: "245%",
    left: "50%",
    scale: 0.9
}, "sec")

tl2.to("#lemon-cut",{
    top: "205%",
    left: "40%"
}, "sec")

tl2.to("#leaf-two",{
    top: "272%",
    left: "-2%"
}, "sec")
tl2.to("#leaf-three",{
    top: "205%",
    left: "90%"
}, "sec")

let tl3 = gsap.timeline({
    scrollTrigger:{
     trigger: "#three",
     start: "75% 85%", 
     end : "82% 82%",
     scrub: true,
    //  markers: true
    }
})


tl3.fromTo(".card-lemon1", {
  left: "-250%"
}, {
    left: "0"
},"thi")

tl3.fromTo(".sprite", {
  left: "-260%"
}, {
    left: "-15%"
},"thi")

tl3.fromTo(".card-lemon3", {
  left: "250%"
}, {
    left: "0"
},"thi")

tl3.fromTo(".pepsi", {
  left: "260%",
  scale: 1
}, {
    left: "-25%",
    scale: 1.2
},"thi")