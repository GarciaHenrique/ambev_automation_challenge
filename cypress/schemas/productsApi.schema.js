const ProductSchema = {
    type: "object",
    required: [
        "_id",
        "nome",
        "preco",
        "descricao",
        "quantidade"
    ],
    properties: {
        _id: {
            type: "string"
        },
        nome: {
            type: "string"
        },
        preco: {
            type: "number"
        },
        descricao: {
            type: "string"
        },
        quantidade: {
            type: "number"
        }
    }
};

export default ProductSchema;