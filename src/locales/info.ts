const obs_low = "ATENTE-SE! - Os índices ligeiramente abaixo de 18.5 não são saudáveis segundo a OMS (Organização Mundial da Saúde), entretanto, você pode apresentar um biotipo ligeiramente fora do índice e ser saudável. Fique atento!"
const obs_very_low = "ATENTE-SE! Você está muito abaixo do peso recomendável. É importante verificar se não há alguma patologia por trás do peso baixo, principalmente se o emagrecimento aconteceu de maneira repentina. Deficiências nutricionais, distúrbios alimentares, como anorexia, consumo excessivo de álcool e drogas, além do tabagismo, podem estar associados ao baixo peso. Tal condição pode provocar sintomas fisiológicas perceptíveis, como unhas fracas e quebradiças, irritabilidade, dores de cabeça, dor nas articulações, falta de concentração, entre outros sinais. Procure um médico e cuide-se!"
const info = {

    "magrezagrave" : {
        "diagnostic" : "Magreza grave",
        "description": "A magreza grave (IMC abaixo de 16) é uma condição que pode ser causada por desnutrição severa. Procure um médico! Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.",
        "risk": "Risco Alto",
        "obs": obs_very_low
    },

    "magrezamoderada" : {
        "diagnostic" : "Magreza moderada",
        "description": "Condições hormonais, como o hipertireoidismo, podem afetar o peso de uma pessoa, além de parasitas ou simplesmente uma dieta com poucas calorias diárias. Nesse sentido, você pode consultar um médico para ter certeza de que não tem nada de errado.",
        "risk": "Risco moderado",
        "obs": obs_low
    },

    "magrezaleve" : {
        "diagnostic" : "Magreza leve",
        "description": "Pode ter algumas consequências, mas no geral não é preocupante. Logo, um IMC acima de 17 não fica muito longe do saudável.",
        "risk": "Risco baixo",
        "obs": obs_low
    },

    "saudavel" : {
        "diagnostic" : "Saudável 👋",
        "description": "Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.",
        "risk": "Risco Muito baixo",
        "obs": ""
    },


    "sobrepeso" : {
        "diagnostic" : "Sobrepeso",
        "description": "O sobrepeso pode causar alguns problemas de circulação no corpo, além de fadiga. Mas assim como a magreza leve, se o IMC estiver pouco acima de 25, não é preocupante. Ou seja, uma dieta com um pouco menos de calorias ou um pouco mais de exercícios na rotina pode resolver a situação, mas de qualquer forma é mportante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.",
        "risk": "Risco aumentado",
        "obs": ""
    }, 

    "obeso1" : {
        "diagnostic" : "Obesidade grau 1",
        "description": "Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.",
        "risk": "Risco moderado",
        "obs": ""
    },

    "obeso2" : {
        "diagnostic" : "Obesidade grau 2",
        "description": "Estar com obesidade grau II é ter riscos elevados de diabetes, hipertensão, além de infarto e outras doenças. Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde. Procure um médico para lidar com a situação!",
        "risk": "Risco grave",
        "obs": ""
    },

    "obeso3" : {
        "diagnostic" : "Obesidade grau 3",
        "description": "Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.",
        "risk": "Risco muito grave",
        "obs": ""
    }
}

export default info