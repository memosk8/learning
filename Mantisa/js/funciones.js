function parlando (nombre, mensaje, isUpperCase)
{
  let _mensaje = 'El usuario ${nombre} hablo: ${mensaje}'

  if (isUpperCase){
    _mensaje = _mensaje.toUpperCase()
  }
  return _mensaje
}

  console.log(parlando('manuel','un texto'))
  const anaMensaje = parlando('ana', 'ya te digo', true)
  const ismaelMensaje = parlando('ismael','Eso es cierto')

  console.log(anaMensaje)
  console.log(ismaelMensaje)
