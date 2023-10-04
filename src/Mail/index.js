
export const sendMail = (lastname, firstName, mail, phone, subject, message) => {
    window.Email.send({
        SecureToken : "7ab9d418-9e49-4f54-8f17-cd69eb4f0b6b",
        To : "contact.aldesign97@gmail.com",
        From : 'contact.awc.design@gmail.com',
        Subject : subject,
        Body : `Bonjour Al Desing,<br/> 
                Tu as reçu un mail de ${firstName} ${lastname}.<br/> 
                Son adresse mail est ${mail} et son numero ${phone}.<br/>
                Voici le message qu'il(elle) t'as adresser:<br/>
                ${message}`
    }).then(
      message => alert(message)
    );
}