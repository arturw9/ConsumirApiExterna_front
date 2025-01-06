document.addEventListener("DOMContentLoaded", () => {
    function getUrlParams() {
        const params = new URLSearchParams(window.location.search);
        return {
            id: params.get('id'),
            title: params.get('title'),
            first: params.get('first'),
            last: params.get('last'),
            gender: params.get('gender'),
            birthdayDate: params.get('birthdayDate'),
            birthdayAge: params.get('birthdayAge'),
            email: params.get('email'),
            phone: params.get('phone'),
            cell: params.get('cell'),
            nat: params.get('nat'),    
            streetNumber: params.get('streetNumber'),
            streetName: params.get('streetName'),
            city: params.get('city'),
            state: params.get('state'),
            country: params.get('country'),
            postcode: params.get('postcode'),
            latitude: params.get('latitude'),
            longitude: params.get('longitude'),
            offset: params.get('offset'),
            description: params.get('description'),
            uuid: params.get('uuid'),
            username: params.get('username'),
            password: params.get('password'),
            salt: params.get('salt'),
            md5: params.get('md5'),
            sha1: params.get('sha1'),
            sha256: params.get('sha256'),
            registeredDate: params.get('registeredDate'),
            registeredAge: params.get('registeredAge'),
            pictureLarge: params.get('pictureLarge'),
            pictureMedium: params.get('pictureMedium'),
            pictureThumbnail: params.get('pictureThumbnail'),
            idName: params.get('idName'),
            idValue: params.get('idValue')
        };
    }

    function formatDateToInput(date) {
        if (!date) return '';
        const dateObj = new Date(date);
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0'); 
        const day = String(dateObj.getDate()).padStart(2, '0'); 
        return `${year}-${month}-${day}`;
    }


    function fillFormData(params) {
        document.getElementById('id').value = params.id || '';
        document.getElementById('title').value = params.title || '';
        document.getElementById('first').value = params.first || '';
        document.getElementById('last').value = params.last || '';
        document.getElementById('gender').value = params.gender || '';
        document.getElementById('birthdayDate').value = formatDateToInput(params.birthdayDate) || '';
        document.getElementById('birthdayAge').value = params.birthdayAge || '';
        document.getElementById('email').value = params.email || '';
        document.getElementById('phone').value = params.phone || '';
        document.getElementById('cell').value = params.cell || '';
        document.getElementById('nat').value = params.nat || '';
        document.getElementById('streetNumber').value = params.streetNumber || '';
        document.getElementById('streetName').value = params.streetName || '';
        document.getElementById('city').value = params.city || '';
        document.getElementById('state').value = params.state || '';
        document.getElementById('country').value = params.country || '';
        document.getElementById('postcode').value = params.postcode || '';
        document.getElementById('latitude').value = params.latitude || '';
        document.getElementById('longitude').value = params.longitude || '';
        document.getElementById('offset').value = params.offset || '';
        document.getElementById('description').value = params.description || '';
        document.getElementById('uuid').value = params.uuid || '';
        document.getElementById('username').value = params.username || '';
        document.getElementById('password').value = params.password || '';
        document.getElementById('salt').value = params.salt || '';
        document.getElementById('md5').value = params.md5 || '';
        document.getElementById('sha1').value = params.sha1 || '';
        document.getElementById('sha256').value = params.sha256 || '';
        document.getElementById('registeredDate').value = params.registeredDate || '';
        document.getElementById('registeredAge').value = params.registeredAge || '';
        document.getElementById('pictureLarge').value = params.pictureLarge || '';
        document.getElementById('pictureMedium').value = params.pictureMedium || '';
        document.getElementById('pictureThumbnail').value = params.pictureThumbnail || '';
        document.getElementById('idName').value = params.idName || '';
        document.getElementById('idValue').value = params.idValue || '';
    }

    async function sendData(event) {
        event.preventDefault(); 
        const idUsuario = document.getElementById('id').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const cell = document.getElementById('cell').value;
        const nat = document.getElementById('nat').value;
        const title = document.getElementById('title').value;
        const first = document.getElementById('first').value;
        const last = document.getElementById('last').value;
        const gender = document.getElementById('gender').value;
        const birthdayDate = document.getElementById('birthdayDate').value;
        const birthdayAge = document.getElementById('birthdayAge').value;
        const streetNumber = document.getElementById('streetNumber').value;
        const streetName = document.getElementById('streetName').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const country = document.getElementById('country').value;
        const postcode = document.getElementById('postcode').value;
        const latitude = document.getElementById('latitude').value;
        const longitude = document.getElementById('longitude').value;
        const offset = document.getElementById('offset').value;
        const description = document.getElementById('description').value;
        const uuid = document.getElementById('uuid').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const salt = document.getElementById('salt').value;
        const md5 = document.getElementById('md5').value;
        const sha1 = document.getElementById('sha1').value;
        const sha256 = document.getElementById('sha256').value;
        const registeredDate = document.getElementById('registeredDate').value;
        const registeredAge = document.getElementById('registeredAge').value;
        const pictureLarge = document.getElementById('pictureLarge').value;
        const pictureMedium = document.getElementById('pictureMedium').value;
        const pictureThumbnail = document.getElementById('pictureThumbnail').value;
        const idName = document.getElementById('idName').value;
        const idValue = document.getElementById('idValue').value;

        const usuarioData = {
            IdUsuario: idUsuario,
            Gender: gender,
            Name: {
                Title: title,
                First: first,
                Last: last
            },
            DateOfBirth: {
                Date: birthdayDate,
                Age: birthdayAge
            },
            Location: {
                Street: {
                    Number: streetNumber,
                    Name: streetName
                },
                City: city,
                State: state,
                Country: country,
                Postcode: postcode,
                Coordinates: {
                    Latitude: latitude,
                    Longitude: longitude,
                },
                Timezone: {
                    Description: description,    
                    Offset: offset
                }
                
            },
            Email: email,
            Phone: phone,
            Cell: cell,
            nat: nat,
            Id: {
                Name: idName,
                Value: idValue
            },
            Picture: {
                Large: pictureLarge,
                Medium: pictureMedium,
                Thumbnail: pictureThumbnail
            },
            Login: {
                UUID: uuid,
                Username: username,
                Password: password,
                Salt: salt,
                Md5: md5,
                Sha1: sha1,
                Sha256: sha256,
            },
           
           
            Registered: {
                Date: registeredDate,
                Age: registeredAge
            },
            
           
        };

        try {
            const response = await fetch(`https://localhost:7115/Usuarios/Editar?idUsuario=${idUsuario}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuarioData)
            });

            const responseData = await response.json();
            console.log('Data sent successfully:', responseData);

            window.history.back();
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const params = getUrlParams();
    fillFormData(params);

    const form = document.getElementById('edit-form');
    form.addEventListener('submit', sendData);
});
