import chalk from 'chalk';
import fs from 'fs';

function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];

    let temp;
    while((temp = regex.exec(texto)) != null){
        arrayResultados.push({[temp[1]]:[temp[2]]})
    }
    return (arrayResultados);
}

function trataErro(erro){
    throw new Error(chalk.bgRed(erro.code, "ARQUIVO NÃO ENCONTRADO"));
}

async function pegaArquivo(caminhoDoArquivo){
    try{
        const texto = await fs.promises.readFile(caminhoDoArquivo, 'utf-8')
        console.log(extraiLinks(texto));
    }catch(erro){
        trataErro(erro);
    }
}

pegaArquivo('./arquivos/texto.md')
