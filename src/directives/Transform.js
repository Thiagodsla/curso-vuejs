import Vue from 'vue'
//el referencia ao elemento do dom a qual a diretiva foi associada

// Vue.directive('meu-transform', {
export default {

     bind(el, binding, vnode){
     
      let current = 0;

      el.addEventListener('click', function () {
        
        let incremento = binding.value || 0;
          
        let efeito;

        if(!binding.arg || binding.arg== 'rotate') {

          if(binding.modifiers.reverse) {
            current-=incremento;
          } else {
            current+=incremento;
          }
          efeito = `rotate(${current}deg)`;

        } else if(binding.arg =='scale'){

          efeito = `scale(${incremento})`
        }

        el.style.transform = efeito
        
        if (binding.modifiers.animate) el.style.transition = "transform 0.5s";
        
      })
      }
}//)