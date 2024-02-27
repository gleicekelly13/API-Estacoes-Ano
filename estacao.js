function retornaEstacao(mes) {

    let estacaoAno;

    switch(mes) {
        case '1':
        case '2':
        case '3':
            estacaoAno = 'Verão';
            break;
        
        case '4':
        case '5':
        case '6':
            estacaoAno = 'Outono';
            break;
        
        case '7':
        case '8':
        case '9':
            estacaoAno = 'Inverno';
            break;
    
        case '10':
        case '11':
        case '12':
            estacaoAno = 'Primavera';
            break;

        default:
            estacaoAno = 'Estação Inexistente';
            break;
    }

    return estacaoAno;
}

exports.retornaEstacao = retornaEstacao;
