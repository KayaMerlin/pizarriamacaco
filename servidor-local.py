#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Servidor Local Simples para Pizzaria do Amor
"""

import http.server
import socketserver
import os
from pathlib import Path

# Configurações
PORT = 8001

def main():
    """Servidor HTTP simples e confiável"""
    os.chdir(os.path.dirname(__file__))  # Muda para o diretório do script

    print("🍕 SERVIDOR LOCAL - PIZZARIA DO AMOR 🍕")
    print("=" * 50)
    print(f"📁 Diretório: {os.getcwd()}")
    print(f"🌐 Servidor: http://localhost:{PORT}")
    print(f"🔗 IP direto: http://127.0.0.1:{PORT}")
    print("=" * 50)

    # Lista arquivos HTML
    html_files = list(Path('.').glob('*.html'))
    if html_files:
        print("📋 Arquivos HTML:")
        for arquivo in html_files:
            print(f"   📄 {arquivo.name}")
    else:
        print("❌ Nenhum arquivo HTML encontrado!")

    print("=" * 50)
    print("💡 Para parar: Ctrl+C")
    print("=" * 50)

    # Cria e inicia o servidor
    Handler = http.server.SimpleHTTPRequestHandler

    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n🛑 Servidor parado")
    except OSError as e:
        print(f"\n❌ Erro: {e}")
        print(f"💡 Tente mudar a porta no código (linha 11)")

if __name__ == "__main__":
    main()
