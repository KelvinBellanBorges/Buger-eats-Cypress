var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '51987654321',
            address: {
                postalcode: '93800036',
                street: 'Rua Padre Reus',
                number: '451',
                details: 'Floricultura',
                district: 'Centro',
                city_state: 'Sapiranga/RS'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
            return data
    }
}