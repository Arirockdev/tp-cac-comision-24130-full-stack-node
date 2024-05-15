window.addEventListener('load', () => {
  const form = document.querySelector('#form-js')
  const nombre = document.getElementById('names')
  const apellido = document.getElementById('lastname')
  const telefono = document.getElementById('phone')
  const documento = document.getElementById('dni')
  const comensales = document.getElementById('subjets')
  const fecha = document.getElementById('date')
  const hora = document.getElementById('time')
  const sucursal = document.getElementById('location')
  var vacio = document.getElementById("campo-vacio");
  var errorNombre = document.getElementById("mayuscula-nombre");
  var errorApellido = document.getElementById("mayuscula-apellido");
  var regex = /[A-Z]/;

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    validacion()
  })
  

  const validacion = () => {
    
    var aviso="";
    if (nombre.value.length === 0 || apellido.value.length === 0 || telefono.value.length === 0 || documento.value.length === 0 || comensales.value.length === 0 || fecha.value.length === 0 || hora.value.length === 0 || sucursal.value.length === 0) {
      vacio.style.display = "block";
      return false;
    } else {
      vacio.style.display = "none";
    }

    if (!regex.test(nombre.value)) {
      errorNombre.style.display = "block";
      return false;
    } else {
      errorNombre.style.display = "none";
    }

    if (!regex.test(apellido.value)) {
      errorApellido.style.display = "block";
      return false;
    } else {
      errorApellido.style.display = "none";
    }


    if (isNaN(telefono.value) || isNaN(documento.value) || isNaN(comensales.value)) {
      alert('El número de identificación y la cantidad de comensales deben ser números.');
      return false;
    }
    return true
  }
});

const dropArea = document.querySelector('.sub-archivo');
const btnDrop = document.getElementById('btn-drop');
const dragText = dropArea.querySelector('h3');
const inputArea = dropArea.querySelector('input');
let files;

btnDrop.addEventListener('click', (e) => {
  e.preventDefault();
  inputArea.click();
})

inputArea.addEventListener('change', (e) => {
  files = this.files;
  dropArea.classList.add('active');
  showFiles(files)
  dropArea.classList.remove('active');
})

dropArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropArea.classList.add('active');
  dragText.textContent = 'Suelta para subir el archivo';
})

dropArea.addEventListener('dragleave', (e) => {
  e.preventDefault();
  dropArea.classList.remove('active');
  dragText.textContent = 'Arrastra el comprobante de la reserva'

})

dropArea.addEventListener('drop', (e) => {
  e.preventDefault();
  files = e.dataTransfer.files;
  showFiles(files)
  dropArea.classList.remove('active');
  dragText.textContent = 'Arrastra el comprobante de la reserva'
})

function showFiles(files) {
  if(files.length === undefined){
    processFiles(files)
  }else{
      for(const file of files){
        processFiles(file)
      }
  }
}

function processFiles(file){
  const docType = file.type;
  const validExtensions = ['application/pdf', 'image/webp', 'image/jpeg', 'image/jpg', 'image/png', 'text/plain'];
  if(validExtensions.includes(docType)){
    const fileReader = new FileReader();
    const id = `fiel-${Math.random().toString(32).substring(7)}`;

    fileReader.addEventListener('load', (e) => {
      const fileUrl = fileReader.result;
      const image = `
        <div id="${id}" class="file-container">
          <img src="${fileUrl}" alt="${file.name}" width="50px">
          <div class="status">
            <span>${file.name} </span>
            <span class="status-text">
              Cargando.....
            </span>
          </div>
        </div>
      `;
      dropArea.innerHTML = image; 
    })
    fileReader.readAsDataURL(file);
    upLoadFile(file, id)

  }else {
    alert('Este formato de archivo no es valido')
  }
}

async function upLoadFile(file){

  const formData = new FormData();
  formData.append("file", file);



}