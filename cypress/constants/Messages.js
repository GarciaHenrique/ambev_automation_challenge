const Messages = Object.freeze({

    LOGIN: {
        INVALID_LOGIN: "Email e/ou senha inválidos",
        REQUIRED_EMAIL: "Email é obrigatório",
        REQUIRED_PASSWORD: "Password é obrigatório"
    },

    REGISTER: {
        SUCCESS: "Cadastro realizado com sucesso",
        REQUIRED_NAME: "Nome é obrigatório",
        REQUIRED_EMAIL: "Email é obrigatório",
        REQUIRED_PASSWORD: "Password é obrigatório",
        DUPLICATED_EMAIL: "Este email já está sendo usado"
    }

});

export default Messages;