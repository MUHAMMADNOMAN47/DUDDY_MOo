const blocks=document.querySelectorAll('.block');

const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.style.opacity=1;
      e.target.style.transform='translateY(0)';
    }
  })
},{threshold:.2});

blocks.forEach(b=>{
  b.style.opacity=0;
  b.style.transform='translateY(40px)';
  b.style.transition='0.9s ease';
  obs.observe(b);
});
