function search() {
    let filter = document.getElementById('find').value.toUpperCase();
    let sections = document.querySelectorAll('.newrestaurantes section');
  
    sections.forEach((section) => {
      let name = section.querySelector('h1').textContent.toUpperCase();
      let location = section.querySelector('p:nth-of-type(1)').textContent.toUpperCase();
      let description = section.querySelector('p:nth-of-type(2)').textContent.toUpperCase();
  
      if (name.includes(filter) || location.includes(filter) || description.includes(filter)) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  }

  // Obtener una referencia al botón
  const btnAgregarRestaurante = document.getElementById('btnAgregarRestaurante');

// Agregar un evento de clic al botón
btnAgregarRestaurante.addEventListener('click', function() {
  // Obtener los valores de los campos de entrada
  const nombre = document.getElementById('nombre').value;
  const descripcion = document.getElementById('descripción').value;
  const direccion = document.getElementById('direccion').value;

  // Realizar la lógica para agregar el restaurante
  // Por ejemplo, puedes mostrar un mensaje emergente y borrar los campos de entrada
  alert('Restaurante agregado');

  // Borrar los valores de los campos de entrada
  document.getElementById('nombre').value = '';
  document.getElementById('descripción').value = '';
  document.getElementById('direccion').value = '';
});
