function formatarData(dtPost) {
    /* A DATA ESTÁ SENDO ENVIADA COM VALORES IRREGULARES */

    // Separar por partes da data original
    var dia = dtPost.substring(8, 10);
    var mes = dtPost.substring(5, 7);
    var ano = dtPost.substring(0, 4);
    var hora = dtPost.substring(11, 13) - 3; // COLOCAR "- 3", POR CAUSA DO FUSO HORÁRIO QUE NÃO PEGA A HORA do fuso horário do Brasil
    var minuto = dtPost.substring(14, 16);
    var segundo = dtPost.substring(17, 19);

    // Formatando a data no formato desejado
    var dataFormatada = dia + '/' + mes + '/' + ano + ' - ' + hora + ':' + minuto + ':' + segundo;

    return dataFormatada;
  }