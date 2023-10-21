const zoomimg = document.querySelectorAll('.zoomable')

zoomimg.forEach(img => {
  img.addEventListener('mouseover', () => {
    img.classList.add('zoomnaimagem')
  })

  img.addEventListener('mouseout', () => {
    img.classList.remove('zoomnaimagem')
  })

  img.addEventListener('mousemove', e => {
    if(img.classList.contains('zoomnaimagem')){
      const rect = img.getBoundingClientRect() //está obtendo as coordenadas e dimensões do retângulo delimitador da imagem.
      //O método getBoundingClientRect() retorna um objeto DOMRect que contém informações sobre as dimensões e a posição de um elemento na janela de visualização (viewport).
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      //Essas linhas calculam as coordenadas relativas da posição do mouse dentro da imagem. Isso é feito subtraindo a posição do mouse (e.clientX e e.clientY) da posição do retângulo delimitador da imagem (rect.left e rect.top) e dividindo pelo tamanho da imagem (rect.width e rect.height).

      img.style.transformOrigin = `${x * 100}% ${y * 100}%` //Isso fará com que o zoom siga o cursor do mouse dentro da imagem.
    }
  })
})