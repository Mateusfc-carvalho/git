export default function lazyLoading() {
  document.addEventListener('DOMContentLoaded', () => {
    const elementos = document.querySelectorAll('.fade-in');
    const observador = new IntersectionObserver((entradas) =>{
      entradas.forEach((entrada) => {
        if(entrada.isIntersecting) {
          entrada.target.classList.add('visible');
        }
      });
    })
    elementos.forEach((element) => {
      observador.observe(element);
    })
  })

}

























  // document.addEventListener('DOMContentLoaded', () => {
  //   const elements = document.querySelectorAll('.fade-in');

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if(entry.isIntersecting) {
  //         entry.target.classList.add('visible')
  //       }
  //     });
  //   });
  //   elements.forEach(element => {
  //       observer.observe(element);
  //   });
  // })
