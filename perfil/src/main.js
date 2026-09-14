import fotoPerfil from './assets/naruto-profile-photo.jpg'


const perfil = {
  nome: 'Naruto Uzumaki',
  cargo: 'Hokage de Konoha',
  bio: 'Então eu vou quebrar essa maldição. Se existe algo como a paz, eu vou encontrá-la! Eu não vou desistir!'
}

const { nome, cargo, bio } = perfil

document.querySelector('.card-perfil__foto').src = fotoPerfil
document.querySelector('.card-perfil__nome').textContent = nome
document.querySelector('.card-perfil__cargo').textContent = cargo
document.querySelector('.card-perfil__bio').textContent = bio
document.title = `${nome} — ${cargo}`

let seguidores = 0

const botaoSeguir = document.querySelector('.card-perfil__follow')
const contador = document.querySelector('.card-perfil__contador')

botaoSeguir.addEventListener('click', () => {
  seguidores += 1
  const texto = seguidores === 1 ? '1 seguidor' : `${seguidores} seguidores`
  contador.textContent = texto
})

const botaoUnfollow = document.querySelector('.card-perfil__unfollow')
botaoUnfollow.addEventListener('click', () => {
  if (seguidores > 0) seguidores -= 1;
  const texto = seguidores === 1 ? '1 Seguidor' : `${seguidores} seguidores`;
  contador.textContent = texto
})