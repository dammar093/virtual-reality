let sliderItems = document.getElementsByClassName('slider-item')
let sliderDots = document.getElementsByClassName('dot')
console.log(sliderDots);
let index =0;
sliderItems[index].classList.add('show-item')
// sliderDots[0].classList.add('active-dot ')

function next(){
  if(index < sliderItems.length-1){
    sliderItems[index].classList.remove('show-item')
    index ++
    sliderItems[index].classList.add('show-item')
  }
  else{
    sliderItems[index].classList.remove('show-item')
    index = 0
    sliderItems[index].classList.add('show-item')
  }
  document.getElementById('dots').innerHTML=""
  activeDot()
}

function prev(){
  if(index == 0){
    sliderItems[index].classList.remove('show-item')
    index = sliderItems.length-1
    sliderItems[index].classList.add('show-item')
  }
  else{
    sliderItems[index].classList.remove('show-item')
    index --
    sliderItems[index].classList.add('show-item')
  }
  document.getElementById('dots').innerHTML=""
  activeDot()
}

function showActive(i){
  console.log('click');
  sliderItems[index].classList.remove('show-item')
  index = i
  sliderItems[index].classList.add('show-item')
  document.getElementById('dots').innerHTML=""
  activeDot()
}

function activeDot(){
  for(let i = 0; i < sliderItems.length; i++){
    document.getElementById('dots').innerHTML += ` <div class="${i === index ? 'active-dot' : 'dot'}"  onclick="showActive(${i})">
        </div>`
  }
}
activeDot()