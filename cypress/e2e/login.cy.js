describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверили цвет кнопки восстан. пароль

         cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); //Нажали Войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверили, что после авториз. появился текст
         cy.get('#messageHeader').should('be.visible'); // Текст об успешной авторизации виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден пользователю
     })
     it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверили цвет кнопки восстан. пароль

        cy.get('#forgotEmailButton').click(); //Нажали на кнопку забыли пароль
        cy.get('#mailForgot').type('germandolnikov.ru'); //Ввели почту для восстановления пароля
        cy.get('#restoreEmailButton').click(); // Нажали на кнопку отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверили на совпадение текст
        cy.get('#messageHeader').should('be.visible'); // Текст об успешной отправке пароля виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден пользователю
    })  
     it('Верный логин и НЕверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверили цвет кнопки восстан. пароль

        cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
        cy.get('#pass').type('iLoveqastudio7'); // Ввели неверный пароль
        cy.get('#loginButton').click(); //Нажали Войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверили, что после авториз. появился текст
        cy.get('#messageHeader').should('be.visible'); // Текст о неуспешной авторизации виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден пользователю
    })
    it('НЕверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверили цвет кнопки восстан. пароль

        cy.get('#mail').type('german@dolnikov2.ru'); //Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); //Нажали Войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверили, что после авториз. появился текст
        cy.get('#messageHeader').should('be.visible'); // Текст о неуспешной авторизации виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден пользователю
    })
    it('Проверка на наличие символа @ в логине', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверили цвет кнопки восстан. пароль

        cy.get('#mail').type('germandolnikov.ru'); //Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); //Нажали Войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверили, что после авториз. появился текст
        cy.get('#messageHeader').should('be.visible'); // Текст о проблеме валидации виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден пользователю
    })  
    it('Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверили цвет кнопки восстан. пароль

        cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввели логин, используя строчные буквы
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); //Нажали Войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверили, что после авториз. появился текст
        cy.get('#messageHeader').should('be.visible'); // Текст об успешной авторизации виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден пользователю
    })
 })