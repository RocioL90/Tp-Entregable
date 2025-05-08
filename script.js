HEAD
const url = 'https://api.restful-api.dev/objects';
window.onload = function () {
    $('#popUp').hide(); // Oculta el popup al cargar la página
    getObjects(); // Llama a la función para obtener y mostrar los objetos
}
// Cargar todos los objetos
function loadObjects() {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'json';
        request.onload = function () {
            if (request.status == 200) {
                resolve(request.response); // Resuelve la promesa con la respuesta
            } else {
                reject(Error(request.statusText)); // Rechaza la promesa en caso de error

        const url = 'https://api.restful-api.dev/objects';

        window.onload = function () {
            $('#popUp').hide()
            getObjects()
        }

        //PROMESAS//

        function loadObjects() {
            return new Promise(function(resolve, reject) {
                const request = new XMLHttpRequest();
                request.open('GET', url)
                request.responseType = 'json'
                request.onload = function () {
                    if (request.status == 200) {
                        resolve(request.response)
                    } else {
                        reject(Error(request.statusText))
                    }
                }
                request.onerror = function () {
                    reject(Error('Error: unexpected network error.'))
                }
                request.send()
            })
        }

        function addObject() {
            return new Promise(function (resolve, reject) {
                var request = new XMLHttpRequest()
                request.open('POST', url)
                request.setRequestHeader('Content-Type', 'application/json')
                var data = JSON.stringify({
                    'color': document.getElementById('color').value,
                    'price': document.getElementById('price').value
                })
                var object = JSON.stringify({
                    'name': document.getElementById('name').value,
                    'data': data
                })
                request.onload = function () {
                    if (request.status == 200) {
                        resolve(request.response)
                    } else {
                        reject(Error(request.statusText))
                    }
                }
                request.onerror = function () {
                    reject(Error('Error: unexpected network error.'))
                }
                request.send(object)
            })
        }

        function removeObject(id) {
            return new Promise(function (resolve, reject) {
                var request = new XMLHttpRequest()
                request.open('DELETE', url + `/${id}`)
                request.onload = function () {
                    if (request.status == 200) {
                        resolve(request.response)
                    } else {
                        reject(Error(request.statusText))
                    }
                }
                request.onerror = function () {
                    reject(Error('Error: unexpected network error.'))
                }
                request.send()
            })
        }

        function modifyObject() {
            return new Promise(function (resolve, reject) {
                var request = new XMLHttpRequest()
                request.open('PUT', url + `/${document.getElementsByName('id2')[0].value}`)
                request.setRequestHeader('Content-Type', 'application/json')
                var data = JSON.stringify({
                    'color': document.getElementsByName('color2')[0].value,
                    'price': document.getElementsByName('price2')[0].value
                })
                var object = JSON.stringify({
                    'name': document.getElementsByName('name2')[0].value,
                    'data': data
                })
                request.onload = function () {
                    if (request.status == 200) {
                        resolve(request.response)
                    } else {
                        reject(Error(request.statusText))
                    }
                }
                request.onerror = function () {
                    reject(Error('Error: unexpected network error.'))
                }
                request.send(object)
            })
        }

        //FUNCIONES QUE CONSUMEN LAS PROMESAS//

        function getObjects() {
            loadObjects().then(response => {
                var tbody = document.querySelector('tbody')
                tbody.innerHTML = ''
                response.forEach(object => {
                    if (object.data !== null && Object.hasOwn(object.data, 'color') && Object.hasOwn(object.data, 'price')) {
                        insertTr(object, false)
                    }
                })
            }).catch(reason => {
                console.error(reason)
            })
        }

        function saveObject() {
            if (document.getElementById('name').value.trim() !== '' &&
                document.getElementById('color').value.trim() !== '' &&
                document.getElementById('price').value.trim() !== '') {
                addObject().then((response) => {
                    var object = JSON.parse(response)
                    var data = JSON.parse(object.data)
                    object.data = data
                    insertTr(object, true)
                }).catch(reason => {
                    console.error(reason)
                })
            }
        };
        request.onerror = function () {
            reject(Error('Error: unexpected network error.')); // Rechaza la promesa en caso de error de red
        };
        request.send(); // Envía la solicitud
    });
}
// Agregar un nuevo objeto
function addObject() {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('POST', url);
        request.setRequestHeader('Content-Type', 'application/json');
        var data = JSON.stringify({
            'color': document.getElementById('color').value,
            'price': document.getElementById('price').value
        });
        var object = JSON.stringify({
            'name': document.getElementById('name').value,
            'data': data
        });
        request.onload = function () {
            if (request.status == 200) {
                resolve(request.response); // Resuelve la promesa con la respuesta
            } else {
                reject(Error(request.statusText)); // Rechaza la promesa en caso de error
            }
        };
        request.onerror = function () {
            reject(Error('Error: unexpected network error.')); // Rechaza la promesa en caso de error de red
        };
        request.send(object); // Envía el objeto como JSON
    });
}
// Eliminar un objeto
function removeObject(id) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('DELETE', url + `/${id}`);
        request.onload = function () {
            if (request.status == 200) {
                resolve(request.response); // Resuelve la promesa con la respuesta
            } else {
                reject(Error(request.statusText)); // Rechaza la promesa en caso de error
            }
HEAD
        };
        request.onerror = function () {
            reject(Error('Error: unexpected network error.')); // Rechaza la promesa en caso de error de red
        };
        request.send(); // Envía la solicitud
    });
}
// Modificar un objeto existente
function modifyObject() {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('PUT', url + `/${document.getElementsByName('id2')[0].value}`);
        request.setRequestHeader('Content-Type', 'application/json');
        var data = JSON.stringify({
            'color': document.getElementsByName('color2')[0].value,
            'price': document.getElementsByName('price2')[0].value
        });
        var object = JSON.stringify({
            'name': document.getElementsByName('name2')[0].value,
            'data': data
        });
        request.onload = function () {
            if (request.status == 200) {
                resolve(request.response); // Resuelve la promesa con la respuesta
            } else {
                reject(Error(request.statusText)); // Rechaza la promesa en caso de error
            }
        };
        request.onerror = function () {
            reject(Error('Error: unexpected network error.')); // Rechaza la promesa en caso de error de red
        };
        request.send(object); // Envía el objeto como JSON
    });
}
// Obtener y mostrar objetos
function getObjects() {
    loadObjects().then(response => {
        var tbody = document.querySelector('tbody');
        tbody.innerHTML = ''; // Limpia el contenido anterior
        response.forEach(object => {
            if (object.data !== null) {
                insertTr(object, true); // Inserta cada objeto en la tabla
            }
        });
    }).catch(reason => {
        console.error(reason); // Maneja errores
    });
}
// Guardar un nuevo objeto
function saveObject() {
    if (document.getElementById('name').value.trim() !== '' &&
        document.getElementById('color').value.trim() !== '' &&
        document.getElementById('price').value.trim() !== '') {
        
        addObject().then((response) => {
            console.log('Object added:', response); // Muestra en consola la respuesta
            getObjects(); // Vuelve a cargar los objetos para mostrar el nuevo
            document.getElementById('name').value = ''; // Limpia el campo de nombre
            document.getElementById('color').value = ''; // Limpia el campo de color
            document.getElementById('price').value = ''; // Limpia el campo de precio
        }).catch((error) => {
            console.error('Error adding object:', error); // Maneja errores
        });
    } else {
        alert('Please fill in all fields.'); // Alerta si hay campos vacíos
    }
}

            clearInputs()
        }

        function viewObject(object) {
            var data = JSON.parse(object.data)
            document.getElementsByName('id2')[0].value = object.id
            document.getElementsByName('name2')[0].value = object.name
            document.getElementsByName('color2')[0].value = data.color
            document.getElementsByName('price2')[0].value = data.price
            $('#popUp').dialog({
                closeText: ''
            }).css('font-size', '15px')
        }

        function clearInputs() {
            document.getElementById('name').value = ''
            document.getElementById('color').value = ''
            document.getElementById('price').value = ''
            document.getElementById('name').focus()
        }
    

