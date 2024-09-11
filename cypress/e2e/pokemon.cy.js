describe('Покупка аватара', function () {                                
    it('e2e тест на покупку нового аватара для тренера', function () {   
         cy.visit('https://pokemonbattle.ru/'); // Переходим на сайт https://pokemonbattle.ru/
         cy.get('input[type="email"]').type('USER_LOGIN'); // Вводим логин
         cy.get('input[type="password"]').type('USER_PASSWORD'); // Вводим пароль
         cy.get('button[type="submit"]').click(); // Нажимаем кнопку Войти
         cy.wait(2000) // Ожидание 2 секунды
         cy.get('.header__container > .header__id').click({force: true}); // Нажимаем на аву тренера
         cy.get('[href="/shop"]').click(); // Нажимаем на кнопку смены аватара
         cy.get('.available > button').first().click({force: true}); // Нажимаем кнопку Купить у первого доступного аватара
         cy.get('.credit').type('4620869113632996'); // Вводим номер карты
         cy.get('.k_input_ccv').type('125'); // Вводим CVV карты
         cy.get('.k_input_date').type('1225'); // Вводим срок действия карты
         cy.get('.k_input_name').type('NAME'); // Вводим имя владельца действия карты
         cy.get('.pay-btn').click(); // Нажимаем кнопку Оплатить
         cy.get('#cardnumber').type('56456'); // Вводим код подтверждения СМС
         cy.get('.payment__submit-button').click(); // Нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible'); // Проверяем наличие и видимость сообщения о успешной покупке
         });
 });
