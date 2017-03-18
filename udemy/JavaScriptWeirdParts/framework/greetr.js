// IIFE to shield the code from the outside
// receives window and jquery objects
(function(window, jquery) {
    'use strict';

    // this line makes so callers to this framework don't have to
    // use the keyword new
    var Greetr = function(firstname, lastname, language){
        return new Greetr.init(firstname, lastname, language);
    }

    // this variable in only available within this lexical environment,
    // protecting it from the outside
    var supportedLanguages = ['en', 'pt', 'es'];

    // creates variables that might be exposed and callable by name
    // eg: greetings['en']
    var greetings = {
        en: 'Hello, ',
        pt: 'Olá, ',
        es: 'Hola, '
    };
    var formalGreetings = {
        en: 'Greetings, ',
        pt: 'Saudações, ',
        es: 'Saludos, '
    };
    var logMessage = {
        en: 'logged in',
        pt: 'seção iniciada',
        es: 'inicio secion'
    };

    // enables the creation of functions and variables within the prototype
    // which will be referenced by all instances of G$, saving memory
    Greetr.prototype = {
        fullname: function(){
            return this.firstname + ' ' + this.lastname;
        },
        validate: function(){
            if(supportedLanguages.indexOf(this.language) === -1){
                throw "Invalid language";
            }
        },
        informalGreet: function(){
            return greetings[this.language] + ' ' + this.firstname + '!';
        },
        formalGreet: function(){
            return formalGreetings[this.language] + ' ' + this.fullname() + '.';
        },
        greet: function(formal){
            var msg;
            if(formal){
                msg = this.formalGreet();
            } else {
                msg = this.informalGreet();
            }
            if(console){
                console.log(msg);
            }
            return this;
        },
        log: function(){
            if(console){
                console.log(logMessage[this.language] + ': ' + this.fullname());
            }
            return this;
        },
        setLang: function(lang){
            this.language = lang || this.language;
            this.validate();
            return this;
        },
        HTMLGreeting: function(selector, formal){
            if(!jquery){
                throw 'jQuery not loaded';
            }else if(!selector){
                throw 'Missing jQuery selector';
            }
            var msg;
            if(formal){
                msg = this.formalGreet();
            } else {
                msg = this.informalGreet();
            }
            jquery(selector).html(msg);
            return this;
        }
    };

    Greetr.init = function(firstname, lastname, language){
        // makes it clear for functions within this framework to call
        // this object
        var self = this;
        // sets up default values for the parameters
        self.firstname = firstname || 'Default';
        self.lastname = lastname || 'Default';
        self.language = language || 'en';
    }

    // sets up the prototype of the object returned by Greetr
    // to be the same object as above
    Greetr.init.prototype = Greetr.prototype;
    // exposes the variable G$ on the window/global namespace
    window.G$ = Greetr;

}(window, jQuery));
