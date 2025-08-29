@echo off
chcp 65001 >nul
title Pizzaria do Amor - Servidor Node.js

echo.
echo ============================================================
echo 🍕 PIZZARIA DO AMOR - SERVIDOR NODE.JS 🍕
echo ============================================================
echo.
echo 🚀 Iniciando servidor local...
echo.

REM Verifica se Node.js está instalado
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js não encontrado!
    echo.
    echo 💡 Soluções:
    echo    1. Instale Node.js de https://nodejs.org
    echo    2. Ou use o arquivo 'iniciar-servidor.bat' (Python)
    echo.
    pause
    exit /b 1
)

echo ✅ Node.js encontrado!
echo 🌐 Iniciando servidor na porta 8000...
echo.
echo 💡 Para parar o servidor, feche esta janela ou pressione Ctrl+C
echo.

REM Inicia o servidor Node.js
node servidor-node.js

echo.
echo 🛑 Servidor parado.
pause
