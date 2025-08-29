/**
 * Servidor Local para Pizzaria do Amor usando Node.js
 * Execute este arquivo para criar um servidor local
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Configurações do servidor
const PORT = 8000;
const DIRECTORY = process.cwd();

// Mapeamento de tipos MIME
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

// Função para obter o tipo MIME
function getMimeType(filePath) {
    const extname = path.extname(filePath).toLowerCase();
    return mimeTypes[extname] || 'application/octet-stream';
}

// Função para servir arquivos estáticos
function serveFile(filePath, res) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(`
                <html>
                <head><title>Arquivo não encontrado</title></head>
                <body>
                    <h1>❌ Arquivo não encontrado</h1>
                    <p>O arquivo <strong>${filePath}</strong> não foi encontrado.</p>
                    <p><a href="/">← Voltar ao início</a></p>
                </body>
                </html>
            `);
            return;
        }

        const mimeType = getMimeType(filePath);
        res.writeHead(200, { 'Content-Type': mimeType });
        res.end(data);
    });
}

// Função para listar arquivos HTML
function listHtmlFiles(res) {
    fs.readdir(DIRECTORY, (err, files) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end('Erro ao ler diretório');
            return;
        }

        const htmlFiles = files.filter(file => file.endsWith('.html'));
        
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
            <!DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>🍕 Pizzaria do Amor - Servidor Local</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; background: #f0f0f0; }
                    .container { max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
                    .file-list { list-style: none; padding: 0; }
                    .file-list li { padding: 10px; margin: 5px 0; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #667eea; }
                    .file-list a { text-decoration: none; color: #667eea; font-weight: bold; }
                    .file-list a:hover { color: #764ba2; }
                    .header { text-align: center; color: #667eea; margin-bottom: 30px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>🍕 PIZZARIA DO AMOR</h1>
                        <p>Servidor Local - Porta ${PORT}</p>
                    </div>
                    
                    <h2>📁 Arquivos HTML Disponíveis:</h2>
                    <ul class="file-list">
                        ${htmlFiles.map(file => `
                            <li>
                                <a href="/${file}">📄 ${file}</a>
                            </li>
                        `).join('')}
                    </ul>
                    
                    <h2>🚀 Como usar:</h2>
                    <ol>
                        <li>Clique em um dos arquivos acima para abrir</li>
                        <li>Para parar o servidor, feche esta janela ou pressione Ctrl+C</li>
                        <li>O servidor está rodando em: <strong>http://localhost:${PORT}</strong></li>
                    </ol>
                </div>
            </body>
            </html>
        `);
    });
}

// Cria o servidor HTTP
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    let pathname = parsedUrl.pathname;
    
    // Remove a barra inicial
    if (pathname === '/') {
        listHtmlFiles(res);
        return;
    }
    
    // Remove a barra inicial para obter o caminho do arquivo
    pathname = pathname.substring(1);
    
    // Constrói o caminho completo do arquivo
    const filePath = path.join(DIRECTORY, pathname);
    
    // Verifica se o arquivo existe
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(`
                <html>
                <head><title>Arquivo não encontrado</title></head>
                <body>
                    <h1>❌ Arquivo não encontrado</h1>
                    <p>O arquivo <strong>${pathname}</strong> não foi encontrado.</p>
                    <p><a href="/">← Voltar ao início</a></p>
                </body>
                </html>
            `);
            return;
        }
        
        serveFile(filePath, res);
    });
});

// Inicia o servidor
server.listen(PORT, () => {
    console.log('=' * 60);
    console.log('🍕 SERVIDOR LOCAL - PIZZARIA DO AMOR 🍕');
    console.log('=' * 60);
    console.log(`📁 Diretório: ${DIRECTORY}`);
    console.log(`🌐 Servidor rodando em: http://localhost:${PORT}`);
    console.log(`🔗 Link direto: http://127.0.0.1:${PORT}`);
    console.log('=' * 60);
    console.log('📋 Arquivos disponíveis:');
    
    // Lista os arquivos HTML disponíveis
    fs.readdir(DIRECTORY, (err, files) => {
        if (!err) {
            const htmlFiles = files.filter(file => file.endsWith('.html'));
            htmlFiles.forEach(file => console.log(`   📄 ${file}`));
        }
        console.log('=' * 60);
        console.log('🚀 Abra http://localhost:${PORT} no seu navegador');
        console.log('💡 Para parar o servidor, pressione Ctrl+C');
        console.log('=' * 60);
    });
});

// Tratamento de erros
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log(`❌ Erro: Porta ${PORT} já está em uso!`);
        console.log('💡 Tente fechar outros programas ou usar uma porta diferente');
        console.log('🔧 Solução: Mude a variável PORT no código para 8001, 8002, etc.');
    } else {
        console.log(`❌ Erro ao iniciar servidor: ${err.message}`);
    }
});
